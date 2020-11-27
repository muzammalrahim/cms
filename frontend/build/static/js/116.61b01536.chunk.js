(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[116],{1703:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return f})),a.d(t,"e",(function(){return d})),a.d(t,"g",(function(){return p})),a.d(t,"i",(function(){return E}));var n=a(49),c=a.n(n),r="[ACADEMY APP] GET COURSES",l="[ACADEMY APP] GET CATEGORIES";function o(){var e=c.a.get("/api/academy-app/courses");return function(t){return e.then((function(e){return t({type:r,payload:e.data})}))}}function s(){var e=c.a.get("/api/academy-app/categories");return function(t){return e.then((function(e){return t({type:l,payload:e.data})}))}}var i=a(5),u=a(50),m="[ACADEMY APP] GET COURSE",f="[ACADEMY APP] SAVE COURSE",d="[ACADEMY APP] UPDATE COURSE";function p(e){var t=c.a.get("/api/academy-app/course",{params:e});return function(e){return t.then((function(t){return e({type:m,payload:t.data})}))}}function E(e){return function(t,a){var n=a().academyApp.course.id;c.a.post("/api/academy-app/course/update",Object(i.a)({id:n},e)).then((function(e){return t(Object(u.G)({message:"Course Updated"})),t({type:d,payload:e.data})}))}}},1751:function(e,t,a){"use strict";var n=a(1),c=a(4),r=a(0),l=(a(3),a(2)),o=a(9),s=r.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,s=e.classes,i=e.className,u=Object(c.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(l.default)(s.root,i,!o&&s.spacing),ref:t},u))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},1855:function(e,t,a){"use strict";var n=a(73),c=a(5),r=a(1703),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:case r.d:return Object(c.a)({},t.payload);case r.e:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}},o={data:null,categories:[]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(c.a)(Object(c.a)({},e),{},{data:t.payload});case r.a:return Object(c.a)(Object(c.a)({},e),{},{categories:t.payload});default:return e}},i=Object(n.d)({courses:s,course:l});t.a=i},2969:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(131),r=a(206),l=a(8),o=a(1543),s=a(1568),i=a(1751),u=a(1569),m=a(1563),f=a(795),d=a(1538),p=a(798),E=a(1539),y=a(1540),h=a(1505),x=a(799),b=a(1537),g=a(52),v=a(1546),O=a(247),j=a(298),N=a(2),w=a(0),A=a.n(w),C=a(6),S=a(28),P=a(1703),k=a(1855),T=Object(b.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"}}}));t.default=Object(j.a)("academyApp",k.a)((function(e){var t=Object(C.c)(),a=Object(C.d)((function(e){return e.academyApp.courses.data})),b=Object(C.d)((function(e){return e.academyApp.courses.categories})),j=T(e),k=Object(g.a)(),M=Object(w.useState)(null),U=Object(n.a)(M,2),D=U[0],I=U[1],R=Object(w.useState)(""),L=Object(n.a)(R,2),Y=L[0],G=L[1],J=Object(w.useState)("all"),W=Object(n.a)(J,2),z=W[0],B=W[1];return Object(w.useEffect)((function(){t(P.f()),t(P.h())}),[t]),Object(w.useEffect)((function(){a&&I(0===Y.length&&"all"===z?a:l.a.filter(a,(function(e){return("all"===z||e.category===z)&&e.title.toLowerCase().includes(Y.toLowerCase())})))}),[a,Y,z]),A.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},A.a.createElement("div",{className:Object(N.default)(j.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},A.a.createElement(c.a,{animation:"transition.slideUpIn",duration:400,delay:100},A.a.createElement(O.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"WELCOME TO ACADEMY")),A.a.createElement(c.a,{duration:400,delay:600},A.a.createElement(O.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},A.a.createElement("span",{className:"opacity-75"},"Our courses will step you through the process of building a small application, or adding a new feature to an existing application."))),A.a.createElement(d.a,{className:j.headerIcon}," school ")),A.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},A.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24"},A.a.createElement(v.a,{label:"Search for a course",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:Y,inputProps:{"aria-label":"Search"},onChange:function(e){G(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),A.a.createElement(f.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},A.a.createElement(p.a,{htmlFor:"category-label-placeholder"}," Category "),A.a.createElement(x.a,{value:z,onChange:function(e){B(e.target.value)},input:A.a.createElement(h.a,{labelWidth:9*"category".length,name:"category",id:"category-label-placeholder"})},A.a.createElement(y.a,{value:"all"},A.a.createElement("em",null," All ")),b.map((function(e){return A.a.createElement(y.a,{value:e.value,key:e.id},e.label)}))))),Object(w.useMemo)((function(){return D&&(D.length>0?A.a.createElement(r.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-24"},D.map((function(e){var t=b.find((function(t){return t.value===e.category}));return A.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e.id},A.a.createElement(s.a,{elevation:1,className:"flex flex-col h-256"},A.a.createElement("div",{className:"flex flex-shrink-0 items-center justify-between px-24 h-64",style:{background:t.color,color:k.palette.getContrastText(t.color)}},A.a.createElement(O.a,{className:"font-medium truncate",color:"inherit"},t.label),A.a.createElement("div",{className:"flex items-center justify-center opacity-75"},A.a.createElement(d.a,{className:"text-20 mx-8",color:"inherit"},"access_time"),A.a.createElement("div",{className:"text-16 whitespace-no-wrap"},e.length,"min"))),A.a.createElement(u.a,{className:"flex flex-col flex-auto items-center justify-center"},A.a.createElement(O.a,{className:"text-center text-16 font-400"},e.title),A.a.createElement(O.a,{className:"text-center text-13 font-600 mt-4",color:"textSecondary"},e.updated)),A.a.createElement(m.a,null),A.a.createElement(i.a,{className:"justify-center"},A.a.createElement(o.a,{to:"/apps/academy/courses/".concat(e.id,"/").concat(e.slug),component:S.a,className:"justify-start px-32",color:"secondary"},function(e){switch(e.activeStep){case e.totalSteps:return"COMPLETED";case 0:return"START";default:return"CONTINUE"}}(e))),A.a.createElement(E.a,{className:"w-full",variant:"determinate",value:100*e.activeStep/e.totalSteps,color:"secondary"})))}))):A.a.createElement("div",{className:"flex flex-1 items-center justify-center"},A.a.createElement(O.a,{color:"textSecondary",className:"text-24 my-24"},"No courses found!")))}),[b,D,k.palette])))}))}}]);