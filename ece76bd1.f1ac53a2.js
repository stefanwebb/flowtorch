(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,a,t){"use strict";t.r(a),function(e){var n=t(0),r=t.n(n),i=(t(119),t(127)),l=(t(120),t(21)),s=(t(122),t(105),t(22)),o=t(166),c=t(163),m=t(164);(void 0!==e?e:window).Prism=s.a,t(160),a.default=function(){const e=Object(l.default)(),{siteConfig:a={}}=e;return r.a.createElement(i.a,{title:`${a.title}`,description:"FlowTorch is a library for representing complex or high-dimensional probability distributions."},r.a.createElement(m.a,null),r.a.createElement("main",null,r.a.createElement(c.a,null),r.a.createElement(o.a,null)))}}.call(this,t(24))},163:function(e,a,t){"use strict";var n=t(3),r=t(0),i=t.n(r),l=t(119),s=t(165),o=t(110),c=t.n(o);const m=[{icon:i.a.createElement(s.d,{size:24}),title:i.a.createElement(i.a.Fragment,null,"Simple but powerful"),description:i.a.createElement(i.a.Fragment,null,"Design, train, and sample from complex probability distributions using only a few lines of code. Yet FlowTorch is feature rich with a wide selection of state-of-the-art methods and abstractions like conditionality and caching.")},{icon:i.a.createElement(s.b,{size:24}),title:i.a.createElement(i.a.Fragment,null,"Community focused"),description:i.a.createElement(i.a.Fragment,null,"We help you be a successful user or contributor through detailed user, developer, and API guides. Educational tutorials and research benchmarks are planned for the future. We welcome your feedback!")},{icon:i.a.createElement(s.a,{size:24}),title:i.a.createElement(i.a.Fragment,null,"Modular and extendable"),description:i.a.createElement(i.a.Fragment,null,"Combine multiple bijections to form complex normalizing flows, and mix-and-match conditioning networks with bijections. FlowTorch has a well-defined interface for bijections and conditioning networks so you easily create your own!")},{icon:i.a.createElement(s.c,{size:24}),title:i.a.createElement(i.a.Fragment,null,"Production ready"),description:i.a.createElement(i.a.Fragment,null,"Tried and proven code with rigorous unit testing, continuous integration, and other best practices. And it is easy to add standard unit tests to components you write yourself!")}];function d({icon:e,title:a,description:t}){return i.a.createElement("div",{className:Object(l.a)("col col--6",c.a.feature)},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:c.a.header},e&&i.a.createElement("div",{className:c.a.icon},e),i.a.createElement("h2",{className:c.a.title},a)),i.a.createElement("p",null,t)))}a.a=function(){return i.a.createElement(i.a.Fragment,null,m&&m.length&&i.a.createElement("section",{id:"features",className:c.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--12"},i.a.createElement("div",{className:"row"},m.map(((e,a)=>i.a.createElement(d,Object(n.a)({key:a},e))))))))))}},164:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(119),l=t(120),s=t(122),o=t(21),c=t(111),m=t.n(c);a.a=function(){const e=Object(o.default)(),{siteConfig:a={}}=e;return r.a.createElement("header",{id:"hero",className:Object(i.a)("hero",m.a.banner)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"hero__subtitle"},r.a.createElement("img",{className:"hero__img",src:"img/logo.svg"}),"Easily ",r.a.createElement("span",{className:"hero__primary"},"learn")," and ",r.a.createElement("span",{className:"hero__primary"},"sample")," complex ",r.a.createElement("span",{className:"hero__secondary"},"probability distributions")," with PyTorch")),r.a.createElement("div",{className:"hero__buttons row"},r.a.createElement("div",{className:m.a.buttons},r.a.createElement(l.a,{className:Object(i.a)("button button--primary button--lg",m.a.getStarted),to:Object(s.a)("users")},"Get Started")),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(l.a,{className:Object(i.a)("button button--warning button--lg",m.a.getStarted),to:Object(s.a)("dev")},"Contribute"),r.a.createElement("iframe",{className:"hero__github_button",src:"https://ghbtns.com/github-btn.html?user=stefanwebb&repo=flowtorch&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})))))}},166:function(e,a,t){"use strict";var n=t(3),r=t(0),i=t.n(r),l=t(129),s=t(21),o=t(125),c=t(106),m=t.n(c);var d=function(e){const{siteConfig:{themeConfig:{prism:a={}}}}=Object(s.default)(),[t,c]=Object(r.useState)(!1);Object(r.useEffect)((()=>{c(!0)}),[]);const{isDarkTheme:d}=Object(o.a)(),u=a.theme,g=a.darkTheme||u,h=d?g:u,{language:b="python",code:p}=e;return i.a.createElement(l.a,Object(n.a)({},l.b,{code:p,language:b,key:t,theme:h}),(({className:e,style:a,tokens:t,getLineProps:n,getTokenProps:r})=>i.a.createElement("pre",{className:`${e} ${m.a.code}`,style:a},t.map(((e,a)=>i.a.createElement("div",n({line:e,key:a}),e.map(((e,a)=>i.a.createElement("span",r({token:e,key:a}))))))))))},u=t(161),g=t(162),h=t(1),b=t(108),p=t.n(b);function f(e){const{category:a,title:t,subtitle:n,offset:r}=e;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:`col col--${12-r} col--offset-${r}`},i.a.createElement("div",{className:p.a.headline},a&&i.a.createElement("span",{className:p.a.category},a),t&&i.a.createElement("h2",{className:p.a.title},t),n&&i.a.createElement("h3",{className:p.a.subtitle},n))))}f.propTypes={category:h.PropTypes.string,title:h.PropTypes.string,subtitle:h.PropTypes.string,offset:h.PropTypes.number},f.defaultProps={offset:0};var E=f;var v=[{label:"Bivariate Normal",code:"import torch\nimport torch.distributions as dist\nimport flowtorch\nimport flowtorch.bijectors as bijectors\n\n# Lazily instantiated flow plus base and target distributions\nflow = bijectors.AffineAutoregressive()\nbase_dist = dist.Normal(torch.zeros(2), torch.ones(2))\ntarget_dist = dist.Normal(torch.zeros(2)+5, torch.ones(2)*0.5)\n\n# Instantiate transformed distribution and parameters\nnew_dist, params = flow(base_dist)\n\n# Training loop\nopt = torch.optim.Adam(params.parameters(), lr=5e-2)\nfor idx in range(501):\n    opt.zero_grad()\n\n    # Minimize KL(p || q)\n    y = target_dist.sample((1000,))\n    loss = -new_dist.log_prob(y).mean()\n\n    if idx % 100 == 0:\n        print('epoch', idx, 'loss', loss)\n        \n    loss.backward()\n    opt.step()"}],w=t(109),y=t.n(w);a.a=function(){return i.a.createElement(i.a.Fragment,null,v&&v.length&&i.a.createElement("section",{id:"examples",className:y.a.examples},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6"},i.a.createElement(E,{category:"Examples"}),i.a.createElement(u.a,{defaultValue:v[0].label,values:v.map(((e,a)=>({label:e.label,value:e.label}))),className:y.a.tabs},v.map(((e,a)=>i.a.createElement(g.a,{key:a,value:e.label},i.a.createElement(d,Object(n.a)({key:a},e))))))),i.a.createElement("div",{className:"col col--6"},i.a.createElement("div",{className:y.a.example_container},i.a.createElement("svg",{className:y.a.animation_svg,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{className:y.a.animation},i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-0.svg"}),i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-1.svg"}),i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-2.svg"}),i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-3.svg"}),i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-4.svg"}),i.a.createElement("image",{height:"30rem",height:"30rem",href:"img/bivariate-normal-frame-5.svg"})))))))))}}}]);