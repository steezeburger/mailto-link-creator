(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),o=(a(17),a(6)),u=a(21),i=Object(u.a)((function(e){var t=e.body,a=e.cc,n=e.subject,l=e.to;return"mailto:".concat(l,"?cc=").concat(a,"&subject=").concat(n,"&body=").concat(t)}),encodeURIComponent),s=a(20),m=Object(s.a)("https://tinyurl.com/create.php?source=indexpage&url=");a(18);var b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),b=s[0],d=s[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),E=p[0],v=p[1],f=Object(n.useState)(""),y=Object(o.a)(f,2),j=y[0],g=y[1],k=Object(u.a)(m,window.open),O={body:a,cc:b,subject:E,to:j},w=i(O);return l.a.createElement("div",{className:"App"},l.a.createElement("p",null,"`mailto:` link creator"),l.a.createElement("p",null,'use this tool to create links that can be opened in an email client, with fields such as "to", "cc", "subject", and "body" already filled out.'),l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("ul",{className:"flex-outer"},l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"to"},"to"),l.a.createElement("input",{type:"text",id:"to",value:O.to,onChange:function(e){return g(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"cc"},"cc"),l.a.createElement("input",{type:"text",id:"cc",value:O.cc,onChange:function(e){return d(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"subject"},"subject"),l.a.createElement("input",{type:"text",id:"subject",value:O.subject,onChange:function(e){return v(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"body"},"body"),l.a.createElement("textarea",{className:"body",type:"text",id:"body",value:O.body,onChange:function(e){return c(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"results"},"results"),l.a.createElement("div",{className:"results"},l.a.createElement("textarea",{id:"results",readOnly:!0,value:w}),l.a.createElement("p",null,"note: this is the unshortened link. shortening the link makes it easiser to share."))),l.a.createElement("li",null,l.a.createElement("button",{id:"shorten-link",type:"submit",onClick:function(e){return e.preventDefault&&k(w)}},"generate shortened link via TinyUrl"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.3475da01.chunk.js.map