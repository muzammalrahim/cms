(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[188],{3086:function(e,a,t){"use strict";t.r(a);var c=t(18),l=t(131),n=t(206),r=t(201),m=t(1543),s=t(233),i=t(234),o=t(1538),p=t(794),f=t(737),E=t(245),h=t(1537),u=t(52),d=t(1565),x=t(247),N=t(49),b=t.n(N),v=t(2),w=t(0),j=t.n(w),O=Object(h.a)({title:{color:s.a[800]},url:{color:i.a[800]}});a.default=function(){var e=O(),a=Object(u.a)(),t=Object(w.useState)([]),s=Object(c.a)(t,2),i=s[0],h=s[1];return Object(w.useEffect)((function(){b.a.get("/api/search").then((function(e){h(e.data)}))}),[]),j.a.createElement(r.a,{header:j.a.createElement("div",{className:"flex flex-1 items-center p-16 sm:p-24 max-w-md"},j.a.createElement(d.a,{theme:a},j.a.createElement(E.a,{className:"flex items-center h-44 w-full px-16",elevation:1},j.a.createElement(f.a,{placeholder:"Search...",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"}}),j.a.createElement(o.a,{color:"action"},"search")))),content:j.a.createElement("div",{className:"p-16 pt-0 sm:p-24 sm:pt-0 max-w-md"},j.a.createElement(l.a,{delay:200},j.a.createElement(x.a,{color:"textSecondary",className:"text-13 mt-12 mb-24"},i.length," results")),j.a.createElement(n.a,{enter:{animation:"transition.slideUpBigIn"}},i.map((function(a){return j.a.createElement("div",{className:"mb-28",key:a.id},j.a.createElement(x.a,{className:Object(v.default)(e.title,"text-18 cursor-pointer")},a.title),j.a.createElement(x.a,{className:Object(v.default)(e.url)},a.url),j.a.createElement(x.a,{className:"text-13"},a.excerpt))}))),j.a.createElement("div",{className:"flex justify-center mt-32"},j.a.createElement("div",{className:"flex item-center"},j.a.createElement(p.a,{className:"w-32"},j.a.createElement(o.a,{className:"text-20"},"ltr"===a.direction?"chevron_left":"chevron_right")),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"1"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"2"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"3"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"4"),j.a.createElement(m.a,{className:"font-normal min-w-32 h-48 p-0 px-8"},"5"),j.a.createElement(p.a,{className:"w-32"},j.a.createElement(o.a,{className:"text-20"},"ltr"===a.direction?"chevron_right":"chevron_left")))))})}}}]);