(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[189],{3087:function(e,a,t){"use strict";t.r(a);var l=t(18),c=t(131),n=t(206),r=t(201),m=t(1543),s=t(233),i=t(234),p=t(1538),o=t(794),u=t(737),E=t(245),h=t(1537),f=t(52),d=t(1565),x=t(247),N=t(49),b=t.n(N),v=t(2),w=t(0),j=t.n(w),O=Object(h.a)({title:{color:s.a[800]},url:{color:i.a[800]}});a.default=function(){var e=O(),a=Object(f.a)(),t=Object(w.useState)([]),s=Object(l.a)(t,2),i=s[0],h=s[1];return Object(w.useEffect)((function(){b.a.get("/api/search").then((function(e){h(e.data)}))}),[]),j.a.createElement(r.a,{header:j.a.createElement("div",{className:"flex flex-1 items-center p-16 sm:p-24 max-w-md"},j.a.createElement(d.a,{theme:a},j.a.createElement(E.a,{className:"flex items-center h-44 w-full px-16",elevation:1},j.a.createElement(u.a,{placeholder:"Search...",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"}}),j.a.createElement(p.a,{color:"action"},"search")))),content:j.a.createElement("div",{className:"p-16 pt-0 sm:p-24 sm:pt-0 max-w-md"},j.a.createElement(c.a,{delay:200},j.a.createElement(x.a,{color:"textSecondary",className:"text-13 mx-16 my-24"},i.length," results")),j.a.createElement(n.a,{enter:{animation:"transition.slideUpBigIn"}},i.map((function(a){return j.a.createElement(E.a,{className:"p-16 mb-16",elevation:1,key:a.id},j.a.createElement(x.a,{className:Object(v.default)(e.title,"text-18 cursor-pointer")},a.title),j.a.createElement(x.a,{className:Object(v.default)(e.url)},a.url),j.a.createElement(x.a,{className:"text-13"},a.excerpt))}))),j.a.createElement("div",{className:"flex justify-center mt-48"},j.a.createElement(E.a,{elevation:1},j.a.createElement(o.a,null,j.a.createElement(p.a,{className:"text-20"},"ltr"===a.direction?"chevron_left":"chevron_right")),j.a.createElement(m.a,{className:"min-w-48 h-48 p-0 px-16"},"1"),j.a.createElement(m.a,{className:"min-w-48 h-48 p-0 px-16"},"2"),j.a.createElement(m.a,{className:"min-w-48 h-48 p-0 px-16"},"3"),j.a.createElement(m.a,{className:"min-w-48 h-48 p-0 px-16"},"4"),j.a.createElement(m.a,{className:"min-w-48 h-48 p-0 px-16"},"5"),j.a.createElement(o.a,null,j.a.createElement(p.a,{className:"text-20"},"ltr"===a.direction?"chevron_right":"chevron_left")))))})}}}]);