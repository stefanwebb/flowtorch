# Copyright (c) FlowTorch Development Team. All Rights Reserved
# SPDX-License-Identifier: MIT
import weakref
from typing import Optional, Sequence, Tuple, Union, cast

import torch
import torch.distributions
from torch.distributions import constraints

import flowtorch
import flowtorch.distributions


class Bijector(object):
    _inv: Optional[Union[weakref.ReferenceType, "Bijector"]]
    _context_size: int
    event_dim: int = 0

    # Metadata about (the default) bijector
    domain: constraints.Constraint = constraints.real
    codomain: constraints.Constraint = constraints.real
    identity_initialization = True
    autoregressive = False

    def __init__(self, param_fn: "flowtorch.Params", context_size: int = 0) -> None:
        super().__init__()
        self.param_fn = param_fn
        self._inv = None
        self._context_size = context_size

    def __call__(
        self, base_dist: torch.distributions.Distribution
    ) -> Tuple[
        flowtorch.distributions.TransformedDistribution, "flowtorch.ParamsModule"
    ]:
        """
        Returns the distribution formed by passing dist through the bijection
        """
        # If the input is a distribution then return transformed distribution
        if isinstance(base_dist, torch.distributions.Distribution):
            # Create transformed distribution
            # TODO: Check that if bijector is autoregressive then parameters are as
            # well Possibly do this in simplex.Bijector.__init__ and call from
            # simple.bijectors.*.__init__
            input_shape = base_dist.batch_shape + base_dist.event_shape
            params = self.param_fn(
                input_shape, self.param_shapes(base_dist), self._context_size
            )  # <= this is where hypernets etc. are instantiated
            new_dist = flowtorch.distributions.TransformedDistribution(
                base_dist, self, params
            )
            return new_dist, params

        # TODO: Handle other types of inputs such as tensors
        else:
            raise TypeError(f"Bijector called with invalid type: {type(base_dist)}")

    def forward(
        self,
        x: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        assert context.shape == (self._context_size,)
        return self._forward(x, params, context)

    def _forward(
        self,
        x: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        """
        Abstract method to compute forward transformation.
        """
        raise NotImplementedError

    def inverse(
        self,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        assert context.shape == (self._context_size,)
        return self._inverse(y, params, context)

    def _inverse(
        self,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        """
        Abstract method to compute inverse transformation.
        """
        raise NotImplementedError

    def log_abs_det_jacobian(
        self,
        x: torch.Tensor,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        """
        Computes the log det jacobian `log |dy/dx|` given input and output.
        By default, assumes a volume preserving bijection.
        """
        return self._log_abs_det_jacobian(x, y, params, context)

    def _log_abs_det_jacobian(
        self,
        x: torch.Tensor,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        """
        Computes the log det jacobian `log |dy/dx|` given input and output.
        By default, assumes a volume preserving bijection.
        """

        # TODO: Sum out self.event_dim right-most dimensions
        # self.event_dim may be > 0 for derived classes!
        return torch.zeros_like(x)

    def param_shapes(
        self, dist: torch.distributions.Distribution
    ) -> Sequence[torch.Size]:
        """
        Given a base distribution, calculate the parameters for the transformation
        of that distribution under this bijector. By default, no parameters are
        set.
        """
        return (torch.Size([]),)

    def inv(self) -> "Bijector":
        if self._inv is not None:
            # TODO: remove casting without failing mypy
            inv = cast(_InverseBijector, cast(weakref.ReferenceType, self._inv)())
        else:
            inv = _InverseBijector(self)
            self._inv = weakref.ref(inv)
        return inv

    def __repr__(self) -> str:
        return self.__class__.__name__ + "()"


class _InverseBijector(Bijector):
    _inv: Bijector
    """
    Inverts a single :class:`Bijector`.
    This class is private; please instead use the ``Bijector.inv`` property.
    """

    def __init__(self, bijector: Bijector):
        super(_InverseBijector, self).__init__(param_fn=bijector.param_fn)
        self._inv = bijector
        self.param_fn = bijector.param_fn
        self.domain = bijector.codomain
        self.codomain = bijector.domain
        self.event_dim = bijector.event_dim
        self._context_size = bijector._context_size

    @property
    def inv(self):
        return self._inv

    def __eq__(self, other):
        if not isinstance(other, _InverseBijector):
            return False
        assert self._inv is not None
        return self._inv == other._inv

    def _forward(
        self,
        x: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        return self._inv.inverse(x, params, context)

    def _inverse(
        self,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        return self._inv.forward(y, params, context)

    def _log_abs_det_jacobian(
        self,
        x: torch.Tensor,
        y: torch.Tensor,
        params: Optional["flowtorch.ParamsModule"],
        context: torch.Tensor,
    ) -> torch.Tensor:
        return -self._inv.log_abs_det_jacobian(y, x, params, context)

    def param_shapes(
        self, dist: torch.distributions.Distribution
    ) -> Sequence[torch.Size]:
        return self._inv.param_shapes(dist)
