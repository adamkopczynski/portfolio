(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/react.692adb35.png"},function(e,a,t){e.exports=t.p+"static/media/pc.5423a7fd.jpg"},function(e,a,t){e.exports=t.p+"static/media/poli.4eb774f9.jpg"},function(e,a,t){e.exports=t.p+"static/media/chat.2d48c720.jpg"},function(e,a,t){e.exports=t.p+"static/media/yt.641c47aa.jpg"},function(e,a,t){e.exports=t.p+"static/media/me.26289345.jpg"},function(e,a,t){e.exports=t.p+"static/media/code.5a1a70f3.svg"},function(e,a,t){e.exports=t.p+"static/media/managment.ad3f2a77.svg"},function(e,a,t){e.exports=t.p+"static/media/agile.71ddbac6.svg"},,,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/Adam Kopczynski - CV.2351a191.pdf"},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),o=t.n(l),i=t(4),r=t(5),s=t(17),m=t(6),d=t(18),u=(t(24),t(16)),p=function(){var e=Object(n.useState)(window.scrollY>50),a=Object(u.a)(e,2),t=a[0],l=a[1];document.addEventListener("scroll",(function(){return l(window.scrollY>50)})),document.addEventListener("resize",(function(){var e=document.querySelector(".page-header");window.innerWidth>768&&(e.style.display="flex")}));var o=document.querySelectorAll(".menu-item");o.forEach((function(e){return function(e){e.addEventListener("click",(function(a){a.preventDefault();var t=e.href.split("#")[1],n=document.getElementById(t);requestAnimationFrame((function(e){var a=e||(new Date).getTime(),t=a,c=window.pageYOffset,l=n.getBoundingClientRect().top;i(t,a,800,l-100,c)}))}))}(e)}));var i=function e(a,t,n,c,l){var o=t-a,i=o/n;i=Math.min(i,1);var r,s=(r=i)*r*r;window.scroll(0,l+c*s),o<n&&requestAnimationFrame((function(t){var o=t||(new Date).getTime();e(a,o,n,c,l)}))};return c.a.createElement("header",{className:"page-header ".concat(t?"scrolled":"")},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-sm-10 col-md-4 nav-row"},c.a.createElement("a",{className:"logo",href:"https:\\adamkopczynski.github.io",title:"Adam Kopczynski - Junior React Developer"},"Adam Kopczynski"),c.a.createElement("button",{className:"toggle-menu-btn",onClick:function(){var e=document.querySelector(".page-header"),a=document.querySelector(".toggle-menu-btn > i.fas"),t=document.querySelector(".menu.nav"),n=!a.classList.contains("fa-times");t.style.display=n?"flex":"none",e.classList.toggle("open"),a.classList.toggle("fa-bars"),a.classList.toggle("fa-times")}},c.a.createElement("i",{className:"fas fa-bars"}))),c.a.createElement("div",{className:"col-md-8 col-sm-12"},c.a.createElement("nav",{className:"page-nav "},c.a.createElement("ul",{className:"menu nav justify-content-end"},c.a.createElement("li",null,c.a.createElement("a",{href:"#home",className:"menu-item"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"#about",className:"menu-item"},"About me")),c.a.createElement("li",null,c.a.createElement("a",{href:"#portfolio",className:"menu-item"},"Portfolio")),c.a.createElement("li",null,c.a.createElement("a",{href:"#skills",className:"menu-item"},"Skills")),c.a.createElement("li",null,c.a.createElement("a",{href:"#contact",className:"menu-item"},"Contact")))))))},E=function(){return c.a.createElement("div",{className:"divider"})},g=(t(25),E),f=t(1),h=function(e){var a=e.to,t=e.children,n=(e.color,e.border,e.className),l=Object(f.a)(e,["to","children","color","border","className"]);return c.a.createElement("a",Object.assign({href:a,role:"button",className:"custom-btn ".concat(n||"")},l),c.a.createElement("span",null,t))},v=(t(26),h),N=function(){return c.a.createElement("div",{className:"skewed-bg ",id:"home"},c.a.createElement("div",{className:"skewed-content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"top-section"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-6 col-sm-12"},c.a.createElement("h1",{className:"top-section__title"},"Javascript developer"),c.a.createElement(g,null),c.a.createElement("p",null,"I am ",c.a.createElement("strong",null,"Javascript/React developer"),", fascinated with new technologies."),c.a.createElement(v,{to:"#about",className:"show-more",color:"white"},"Show more")))))))},k=t(7),b=t.n(k),y=function(e){var a=e.image,t=(e.imgSize,e.mainTechnology),n=e.technologies,l=e.description,o=e.demo,i=e.github,r=e.name,s=(Object(f.a)(e,["image","imgSize","mainTechnology","technologies","description","demo","github","name"]),{react:b.a,"react-native":"https://cdn6.aptoide.com/imgs/c/8/f/c8f548826728f7ed9e4eaf3f7bbf5fd6_icon.png?w=240",node:"https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"});return c.a.createElement("div",{className:"item card"},t&&c.a.createElement("div",{className:"technology"},c.a.createElement("img",{src:s[t],alt:"Main project technology."})),a&&c.a.createElement("img",{src:a,alt:"Project ui.",className:"project-image"}),c.a.createElement("div",{className:"card-content"},c.a.createElement("h3",{className:"card-title"},r),c.a.createElement("div",{className:"project-description"},l),c.a.createElement("div",{className:"btn-group"},o&&c.a.createElement(v,{target:"_blank",to:o},"Demo"),i&&c.a.createElement(v,{target:"_blank",to:i},"Code")),c.a.createElement("div",{className:"technologies"},n.map((function(e){return c.a.createElement("span",null,e)})))))};y.defaultProps={image:"",name:"project"};var w=y,j=t(8),z=t.n(j),x=t(9),S=t.n(x),_=t(10),A=t.n(_),C=t(11),P=t.n(C),O=[{name:"Poli~Events",description:"Project for Lodz University of technolgy's community.",image:S.a,mainTechnology:"react",demo:null,github:null,technologies:["react","scss","firebase"]},{name:"Pan Cytat",description:"Project for Pan Cytat.",image:z.a,mainTechnology:"react-native",demo:"https://expo.io/@akopczynski/pan-cytat",github:"https://github.com/adamkopczynski/pancytat",technologies:["react-native","expo","native-base"]},{name:"Youtube music",description:"Fetch data from yt api and allow to listen music in bg.",image:P.a,mainTechnology:"react",demo:"https://github.com/adamkopczynski/react-sound",github:"https://github.com/adamkopczynski/react-sound",technologies:["react","yt-api","redux"]},{name:"Chat App",description:"Chat app in NodeJS.",image:A.a,mainTechnology:"node",demo:"https://chat-app-ak.herokuapp.com/",github:"https://github.com/adamkopczynski/node-chat-app",technologies:["react","node","websockets"]}],I=function(){return c.a.createElement("section",{className:"section portfolio",id:"portfolio"},c.a.createElement("h3",{className:"mb-50 section-title"},"Portfolio"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3"},c.a.createElement(g,null))),c.a.createElement("div",{className:"portfolio-grid mb-2"},c.a.createElement("div",{className:"row justify-content-center"},O.map((function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},c.a.createElement(w,e))})))))},J=(t(27),I),T=(t(28),t(12)),q=t.n(T),D=function(){return c.a.createElement("section",{className:"section about",id:"about"},c.a.createElement("h3",{className:"mb-50 section-title"},"About me"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3"},c.a.createElement(g,null))),c.a.createElement("div",{className:"section-content"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-5 col-sm-12"},c.a.createElement("div",{className:"info-card"},c.a.createElement("img",{src:q.a,alt:"Adam Kopczynski"}),c.a.createElement("div",{className:"card-content"},c.a.createElement("h2",null,"Adam Kopczy\u0144ski"),c.a.createElement("h3",null,"Javascript Developer"),c.a.createElement("p",null,"I am an enthusiast of new technologies, loved with React and NodeJS. I try to improve my skills every day. I often participate in conferences, hackathons and workshops."),c.a.createElement(v,{target:"_blank",href:"https://www.linkedin.com/in/adamkopczynski/"},"Download CV")))))))},L=(t(29),D),R=t(13),K=t.n(R),B=t(14),M=t.n(B),W=t(15),Y=t.n(W),F=function(){return c.a.createElement("section",{className:"section skills",id:"skills"},c.a.createElement("h3",{className:"mb-50 section-title"},"Skills"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3"},c.a.createElement(g,null))),c.a.createElement("div",{className:"skills-content"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-4"},c.a.createElement("div",{className:"skill-card-item"},c.a.createElement("div",{className:"skill-card-header"},c.a.createElement("img",{src:M.a}),c.a.createElement("h3",null,"Project Managment")),c.a.createElement("div",{className:"skill-card-content"},"I've participated in Project Management workshops at SkillUp Conference. I have basic knowledge about planning and delegating tasks, calculating risk and communicating in a team."))),c.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-4"},c.a.createElement("div",{className:"skill-card-item active"},c.a.createElement("div",{className:"skill-card-header"},c.a.createElement("img",{src:K.a}),c.a.createElement("h3",null,"Coding")),c.a.createElement("div",{className:"skill-card-content"},c.a.createElement("h4",null,"Technologies:"),c.a.createElement("ul",null,c.a.createElement("li",null,"React, React Native"),c.a.createElement("li",null,"Redux"),c.a.createElement("li",null,"Javascript"),c.a.createElement("li",null,"Elixir/Phoenix"),c.a.createElement("li",null,"MongoDB, Postgres"))))),c.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-4"},c.a.createElement("div",{className:"skill-card-item"},c.a.createElement("div",{className:"skill-card-header"},c.a.createElement("img",{src:Y.a}),c.a.createElement("h3",null,"Agile/Scrum")),c.a.createElement("div",{className:"skill-card-content"},"I've taken part in Scrum workshops on my university organised by Accenture company. We've learned about this framework in practice by doing tasks in sprints, organising \"daily\", planning and developing."))))))},U=(t(30),F),V=function(){return c.a.createElement("footer",{className:"page-footer"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-md-3",id:"contact"},c.a.createElement("h2",null,"Adam Kopczy\u0144ski"),c.a.createElement("p",{className:"cyan"},"akadamkopczynski@gmail.com"),c.a.createElement("p",null,"tel. 669624179")),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("div",{className:"social-media"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.facebook.com/adam.kopczynski.3",target:"_blank",rel:"noopener noreferrer",className:"social-media__item"},c.a.createElement("i",{className:"fab fa-facebook-square"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/adamkopczynski",target:"_blank",rel:"noopener noreferrer",className:"social-media__item"},c.a.createElement("i",{className:"fab fa-github"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/adamkopczynski/",rel:"noopener noreferrer",target:"_blank",className:"social-media__item"},c.a.createElement("i",{className:"fab fa-linkedin"}))))))))},H=(t(31),V),$=(t(32),t(33),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(N,null),c.a.createElement(L,null),c.a.createElement(J,null),c.a.createElement(U,null),c.a.createElement(H,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[19,1,2]]]);
//# sourceMappingURL=main.01dcc4e4.chunk.js.map