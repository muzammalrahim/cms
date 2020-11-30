(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[147],{3124:function(e,a,t){"use strict";t.r(a);var l=t(131),r=t(247),n=t(298),s=t(0),c=t.n(s),m=t(6),o=t(49),i=t.n(o),d="[ANALYTICS DASHBOARD APP] GET WIDGETS";var p=t(73),u=t(5),f={data:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)({},a.payload)});default:return e}},x=Object(p.d)({widgets:E}),v=t(18),w=t(8),b=t(1543),N=t(1537),g=t(52),y=t(1565),h=t(166),j=Object(N.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)")}}}));var O=c.a.memo((function(e){var a=Object(m.d)((function(e){return e.fuse.settings.mainThemeDark})),t=j(e),n=Object(g.a)(),o=Object(s.useState)("2017"),i=Object(v.a)(o,2),d=i[0],p=i[1],f=w.a.merge({},e.data);return c.a.createElement(y.a,{theme:a},c.a.createElement("div",{className:t.root},c.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},c.a.createElement(l.a,{delay:100},c.a.createElement("div",{className:"flex-col"},c.a.createElement(r.a,{className:"h2",color:"textPrimary"},"Visitors"),c.a.createElement(r.a,{className:"h5",color:"textSecondary"},"Unique visitors by month"))),c.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(f.datasets).map((function(e){return c.a.createElement(b.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return p(e)},disabled:e===d},e)})))),c.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},c.a.createElement(h.f,{data:{labels:f.labels,datasets:f.datasets[d].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:n.palette.secondary.main,backgroundColor:n.palette.secondary.main,pointBackgroundColor:n.palette.secondary.dark,pointHoverBackgroundColor:n.palette.secondary.main,pointBorderColor:n.palette.secondary.contrastText,pointHoverBorderColor:n.palette.secondary.contrastText})}))},options:f.options}))))})),k=t(1568),C=t(1538);var T=c.a.memo((function(e){var a=Object(g.a)();return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Conversion"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},e.data.conversion.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},e.data.conversion.ofTarget>0&&c.a.createElement(C.a,{className:"text-green"},"trending_up"),e.data.conversion.ofTarget<0&&c.a.createElement(C.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},e.data.conversion.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-no-wrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(h.a,{data:{labels:e.data.labels,datasets:e.data.datasets.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:a.palette.secondary.main,backgroundColor:a.palette.secondary.main})}))},options:e.data.options})))}));var S=c.a.memo((function(e){var a=Object(g.a)();return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Impressions"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},e.data.impressions.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},e.data.impressions.ofTarget>0&&c.a.createElement(C.a,{className:"text-green"},"trending_up"),e.data.impressions.ofTarget<0&&c.a.createElement(C.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},e.data.impressions.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-no-wrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(h.f,{data:{labels:e.data.labels,datasets:e.data.datasets.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:a.palette.secondary.main})}))},options:e.data.options})))}));var _=c.a.memo((function(e){var a=Object(g.a)();return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Visits"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},e.data.visits.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},e.data.visits.ofTarget>0&&c.a.createElement(C.a,{className:"text-green"},"trending_up"),e.data.visits.ofTarget<0&&c.a.createElement(C.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},e.data.visits.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-no-wrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(h.a,{data:{labels:e.data.labels,datasets:e.data.datasets.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:a.palette.error.main,backgroundColor:a.palette.error.main})}))},options:e.data.options})))}));var A=c.a.memo((function(e){var a=Object(g.a)(),t=Object(s.useState)("today"),l=Object(v.a)(t,2),n=l[0],m=l[1],o=w.a.merge({},e.data);return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"relative p-24 flex flex-row items-center justify-between"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(r.a,{className:"h3 sm:h2"},"Visitors & Page views")),c.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(o.datasets).map((function(e){return c.a.createElement(b.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return m(e)},disabled:e===n},e)})))),c.a.createElement(r.a,{className:"relative h-200 sm:h-320 sm:pb-16"},c.a.createElement(h.f,{data:{labels:o.labels,datasets:o.datasets[n].map((function(e,t){var l=a.palette[0===t?"primary":"secondary"];return Object(u.a)(Object(u.a)({},e),{},{borderColor:l.main,backgroundColor:l.main,pointBackgroundColor:l.dark,pointHoverBackgroundColor:l.main,pointBorderColor:l.contrastText,pointHoverBorderColor:l.contrastText})}))},options:o.options})))})),B=t(1544),D=t(1796),H=t.n(D);function I(e){return c.a.createElement(B.a,{title:e.text,placement:"top"},c.a.createElement(C.a,{className:"text-red"},"place"))}var W=function(e){return c.a.createElement(k.a,{className:"w-full h-512 rounded-8 shadow-none border-1"},c.a.createElement(H.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:1,defaultCenter:[17.308688,7.03125],options:{styles:e.data.styles}},e.data.markers.map((function(e){return c.a.createElement(I,{key:e.label,text:e.label,lat:e.lat,lng:e.lng})}))))},P=t(1563),J=t(795),V=t(1540),z=t(799);var G=c.a.memo((function(e){var a=Object(g.a)(),t=Object(s.useState)("Today"),l=Object(v.a)(t,2),n=l[0],m=l[1],o=w.a.merge({},e.data);return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"p-16"},c.a.createElement(r.a,{className:"h1 font-300"},"Sessions by device")),c.a.createElement("div",{className:"h-224 relative"},c.a.createElement(h.d,{data:{labels:o.labels,datasets:o.datasets[n].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:a.palette.divider,backgroundColor:[a.palette.primary.dark,a.palette.primary.main,a.palette.primary.light],hoverBackgroundColor:[a.palette.secondary.dark,a.palette.secondary.main,a.palette.secondary.light]})}))},options:o.options})),c.a.createElement("div",{className:"p-16 flex flex-row items-center justify-center"},o.labels.map((function(e,a){return c.a.createElement("div",{key:e,className:"px-16 flex flex-col items-center"},c.a.createElement(r.a,{className:"h4",color:"textSecondary"},e),c.a.createElement(r.a,{className:"h2 font-300 py-8"},o.datasets[n][0].data[a],"%"),c.a.createElement("div",{className:"flex flex-row items-center justify-center"},o.datasets[n][0].change[a]<0&&c.a.createElement(C.a,{className:"text-18 text-red"},"arrow_downward"),o.datasets[n][0].change[a]>0&&c.a.createElement(C.a,{className:"text-18 text-green"},"arrow_upward"),c.a.createElement("div",{className:"h5 px-4"},o.datasets[n][0].change[a],"%")))}))),c.a.createElement(P.a,{className:"mx-16"}),c.a.createElement("div",{className:"p-16 flex flex-row items-center justify-between"},c.a.createElement("div",null,c.a.createElement(J.a,{className:""},c.a.createElement(z.a,{value:n,onChange:function(e){return m(e.target.value)}},Object.keys(o.datasets).map((function(e){return c.a.createElement(V.a,{key:e,value:e},e)}))))),c.a.createElement(b.a,{size:"small"},"OVERVIEW")))})),U=t(1564),L=t(794),M=t(1571),R=t(1572);var K=c.a.memo((function(e){var a=Object(g.a)(),t=Object(s.useState)(0),l=Object(v.a)(t,2),n=l[0],m=l[1];return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement(U.a,{position:"static"},c.a.createElement("div",{className:"p-16 px-4 flex flex-row items-center justify-between"},c.a.createElement("div",{className:"px-12"},c.a.createElement(r.a,{className:"h1 font-300",color:"inherit"},"Sales"),c.a.createElement(r.a,{className:"h5",color:"inherit"},"Lifetime sum of your sales")),c.a.createElement("div",null,c.a.createElement(L.a,{"aria-label":"more",color:"inherit"},c.a.createElement(C.a,null,"more_vert")))),c.a.createElement("div",{className:"p-16 pt-8 flex flex-row justify-between items-end"},c.a.createElement(r.a,{className:"text-48 font-300 leading-none",color:"inherit"},e.data.today),c.a.createElement("div",{className:"flex flex-row items-center"},e.data.change.value>0&&c.a.createElement(C.a,{className:"text-green"},"trending_up"),e.data.change.value<0&&c.a.createElement(C.a,{className:"text-red"},"trending_down"),c.a.createElement("div",{className:"mx-8"},e.data.change.value,"(",e.data.change.percentage,"%)"))),c.a.createElement(R.a,{value:n,onChange:function(e,a){return m(a)},variant:"fullWidth"},c.a.createElement(M.a,{label:"1Day",className:"min-w-0"}),c.a.createElement(M.a,{label:"1Week",className:"min-w-0"}),c.a.createElement(M.a,{label:"1Month",className:"min-w-0"}))),c.a.createElement(h.f,{data:{labels:e.data.labels,datasets:e.data.datasets[n].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{borderColor:a.palette.secondary.main})}))},options:e.data.options}))}));var Y=c.a.memo((function(e){return c.a.createElement(k.a,{className:"w-full rounded-8 shadow-none border-1"},c.a.createElement("div",{className:"p-16 px-4 flex flex-row items-center justify-between"},c.a.createElement(r.a,{className:"h1 px-12"},"Top campaigns"),c.a.createElement("div",null,c.a.createElement(L.a,{"aria-label":"more"},c.a.createElement(C.a,null,"more_vert")))),c.a.createElement("table",{className:"simple clickable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{"aria-label":"title"}),c.a.createElement("th",{className:"text-right"},"Clicks"),c.a.createElement("th",{className:"text-right"},"Conv"))),c.a.createElement("tbody",null,e.data.rows.map((function(e){return c.a.createElement("tr",{key:e.title},c.a.createElement("td",null,e.title),c.a.createElement("td",{className:"text-right"},e.clicks),c.a.createElement("td",{className:"text-right"},e.conversion))})))),c.a.createElement(P.a,{className:"card-divider w-full"}),c.a.createElement("div",{className:"p-8 pt-16 flex flex-row items-center"},c.a.createElement(b.a,null,"GO TO CAMPAIGNS")))}));a.default=Object(n.a)("analyticsDashboardApp",x)((function(){var e=Object(m.c)(),a=Object(m.d)((function(e){return e.analyticsDashboardApp.widgets.data}));return Object(s.useEffect)((function(){e(function(){var e=i.a.get("/api/analytics-dashboard-app/widgets");return function(a){return e.then((function(e){return a({type:d,payload:e.data})}))}}())}),[e]),a?c.a.createElement("div",{className:"w-full"},c.a.createElement(O,{data:a.widget1}),c.a.createElement(l.a,{animation:"transition.slideUpIn",delay:200},c.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},c.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"p-16 pb-8 text-18 font-300"},"How are your active users trending over time?")),c.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},c.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},c.a.createElement(T,{data:a.widget2})),c.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},c.a.createElement(S,{data:a.widget3})),c.a.createElement("div",{className:"widget w-full sm:w-1/3 p-16"},c.a.createElement(_,{data:a.widget4}))),c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"How many pages your users visit?")),c.a.createElement("div",{className:"widget w-full p-16 pb-32"},c.a.createElement(A,{data:a.widget5})),c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"Where are your users?")),c.a.createElement("div",{className:"widget w-full p-16 pb-32"},c.a.createElement(W,{data:a.widget6}))),c.a.createElement("div",{className:"flex flex-wrap w-full md:w-320 pt-16"},c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"What are your top devices?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(G,{data:a.widget7}))),c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement("div",{className:"px-16 pb-8 text-18 font-300"},"How are your sales?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(K,{data:a.widget8}))),c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300 lg:pt-0"},"What are your top campaigns?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(Y,{data:a.widget9}))))))):null}))}}]);