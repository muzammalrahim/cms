(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[86],{1698:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"h",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return m})),a.d(t,"g",(function(){return f})),a.d(t,"i",(function(){return v}));var n=a(56),r=a.n(n),l="[ACADEMY APP] GET COURSES",c="[ACADEMY APP] GET CATEGORIES";function o(){var e=r.a.get("/api/academy-app/courses");return function(t){return e.then((function(e){return t({type:l,payload:e.data})}))}}function i(){var e=r.a.get("/api/academy-app/categories");return function(t){return e.then((function(e){return t({type:c,payload:e.data})}))}}var d=a(6),s=a(49),p="[ACADEMY APP] GET COURSE",u="[ACADEMY APP] SAVE COURSE",m="[ACADEMY APP] UPDATE COURSE";function f(e){var t=r.a.get("/api/academy-app/course",{params:e});return function(e){return t.then((function(t){return e({type:p,payload:t.data})}))}}function v(e){return function(t,a){var n=a().academyApp.course.id;r.a.post("/api/academy-app/course/update",Object(d.a)({id:n},e)).then((function(e){return t(Object(s.G)({message:"Course Updated"})),t({type:m,payload:e.data})}))}}},1849:function(e,t,a){"use strict";var n=a(73),r=a(6),l=a(1698),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:case l.d:return Object(r.a)({},t.payload);case l.e:return Object(r.a)(Object(r.a)({},e),t.payload);default:return e}},o={data:null,categories:[]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case l.a:return Object(r.a)(Object(r.a)({},e),{},{categories:t.payload});default:return e}},d=Object(n.d)({courses:i,course:c});t.a=d},1864:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),c=(a(3),a(2)),o=a(9),i=a(245),d=a(1865),s=l.createElement(d.a,null),p=l.forwardRef((function(e,t){var a=e.activeStep,o=void 0===a?0:a,d=e.alternativeLabel,p=void 0!==d&&d,u=e.children,m=e.classes,f=e.className,v=e.connector,b=void 0===v?s:v,h=e.nonLinear,E=void 0!==h&&h,y=e.orientation,x=void 0===y?"horizontal":y,g=Object(r.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),O=l.isValidElement(b)?l.cloneElement(b,{orientation:x}):null,j=l.Children.toArray(u),L=j.map((function(e,t){var a={alternativeLabel:p,connector:b,last:t+1===j.length,orientation:x},r={index:t,active:!1,completed:!1,disabled:!1};return o===t?r.active=!0:!E&&o>t?r.completed=!0:!E&&o<t&&(r.disabled=!0),[!p&&O&&0!==t&&l.cloneElement(O,Object(n.a)({key:t},r)),l.cloneElement(e,Object(n.a)(Object(n.a)(Object(n.a)({},a),r),e.props))]}));return l.createElement(i.a,Object(n.a)({square:!0,elevation:0,className:Object(c.default)(m.root,m[x],f,p&&m.alternativeLabel),ref:t},g),L)}));t.a=Object(o.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(p)},1865:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),c=(a(3),a(2)),o=a(9),i=l.forwardRef((function(e,t){var a=e.active,o=e.alternativeLabel,i=void 0!==o&&o,d=e.classes,s=e.className,p=e.completed,u=e.disabled,m=(e.index,e.orientation),f=void 0===m?"horizontal":m,v=Object(r.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(n.a)({className:Object(c.default)(d.root,d[f],s,i&&d.alternativeLabel,a&&d.active,p&&d.completed,u&&d.disabled),ref:t},v),l.createElement("span",{className:Object(c.default)(d.line,{horizontal:d.lineHorizontal,vertical:d.lineVertical}[f])}))}));t.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(i)},1866:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),c=(a(147),a(3),a(2)),o=a(9),i=l.forwardRef((function(e,t){var a=e.active,o=void 0!==a&&a,i=e.alternativeLabel,d=e.children,s=e.classes,p=e.className,u=e.completed,m=void 0!==u&&u,f=e.connector,v=e.disabled,b=void 0!==v&&v,h=e.expanded,E=void 0!==h&&h,y=e.index,x=e.last,g=e.orientation,O=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]);return l.createElement("div",Object(n.a)({className:Object(c.default)(s.root,s[g],p,i&&s.alternativeLabel,m&&s.completed),ref:t},O),f&&i&&0!==y&&l.cloneElement(f,{orientation:g,alternativeLabel:i,index:y,active:o,completed:m,disabled:b}),l.Children.map(d,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(n.a)({active:o,alternativeLabel:i,completed:m,disabled:b,expanded:E,last:x,icon:y+1,orientation:g},e.props)):null})))}));t.a=Object(o.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(i)},1867:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),c=(a(3),a(2)),o=a(9),i=a(247),d=a(1947),s=l.forwardRef((function(e,t){var a=e.active,o=void 0!==a&&a,s=e.alternativeLabel,p=void 0!==s&&s,u=e.children,m=e.classes,f=e.className,v=e.completed,b=void 0!==v&&v,h=e.disabled,E=void 0!==h&&h,y=e.error,x=void 0!==y&&y,g=(e.expanded,e.icon),O=(e.last,e.optional),j=e.orientation,L=void 0===j?"horizontal":j,S=e.StepIconComponent,N=e.StepIconProps,C=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),w=S;return g&&!w&&(w=d.a),l.createElement("span",Object(n.a)({className:Object(c.default)(m.root,m[L],f,E&&m.disabled,p&&m.alternativeLabel,x&&m.error),ref:t},C),g||w?l.createElement("span",{className:Object(c.default)(m.iconContainer,p&&m.alternativeLabel)},l.createElement(w,Object(n.a)({completed:b,active:o,error:x,icon:g},N))):null,l.createElement("span",{className:m.labelContainer},l.createElement(i.a,{variant:"body2",component:"span",className:Object(c.default)(m.label,p&&m.alternativeLabel,b&&m.completed,o&&m.active,x&&m.error),display:"block"},u),O))}));s.muiName="StepLabel",t.a=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(s)},1947:function(e,t,a){"use strict";var n=a(0),r=(a(3),a(2)),l=a(67),c=Object(l.a)(n.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),o=Object(l.a)(n.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),i=a(9),d=a(507),s=n.createElement("circle",{cx:"12",cy:"12",r:"12"}),p=n.forwardRef((function(e,t){var a=e.completed,l=void 0!==a&&a,i=e.icon,p=e.active,u=void 0!==p&&p,m=e.error,f=void 0!==m&&m,v=e.classes;if("number"===typeof i||"string"===typeof i){var b=Object(r.default)(v.root,u&&v.active,f&&v.error,l&&v.completed);return f?n.createElement(o,{className:b,ref:t}):l?n.createElement(c,{className:b,ref:t}):n.createElement(d.a,{className:b,ref:t},s,n.createElement("text",{className:v.text,x:"12",y:"16",textAnchor:"middle"},i))}return i}));t.a=Object(i.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(p)},2966:function(e,t,a){"use strict";a.r(t);var n=a(200),r=a(36),l=a(234),c=a(1558),o=a(1548),i=a(1536),d=a(794),s=a(245),p=a(1866),u=a(1867),m=a(1864),f=a(1535),v=a(52),b=a(247),h=a(297),E=a(0),y=a.n(E),x=a(5),g=a(53),O=a(29),j=a(163),L=a(1743),S=a.n(L),N=a(1698),C=a(1849),w=Object(f.a)((function(e){return{stepLabel:{cursor:"pointer!important"},successFab:{background:"".concat(l.a[500],"!important"),color:"white!important"}}}));t.default=Object(h.a)("academyApp",C.a)((function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.academyApp.course})),l=Object(v.a)(),f=Object(g.i)(),h=w(e),L=Object(E.useRef)(null);function C(e){t(N.i({activeStep:e+1}))}Object(j.b)((function(){t(N.g(f))}),[t,f]),Object(E.useEffect)((function(){a&&0===a.activeStep&&t(N.i({activeStep:1}))}),[t,a]);var A=a&&0!==a.activeStep?a.activeStep:1;return y.a.createElement(n.a,{classes:{content:"flex flex-col flex-auto overflow-hidden",header:"h-72 min-h-72"},header:y.a.createElement("div",{className:"flex flex-1 items-center px-16 lg:px-24"},y.a.createElement(o.a,{lgUp:!0},y.a.createElement(d.a,{onClick:function(e){return L.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},y.a.createElement(i.a,null,"menu"))),y.a.createElement(d.a,{to:"/apps/academy/courses",component:O.a},y.a.createElement(i.a,null,"ltr"===l.direction?"arrow_back":"arrow_forward")),a&&y.a.createElement(b.a,{className:"flex-1 text-20 mx-16"},a.title)),content:a&&y.a.createElement("div",{className:"flex flex-1 relative overflow-hidden"},y.a.createElement(r.a,{className:"w-full overflow-auto"},y.a.createElement(S.a,{className:"overflow-hidden",index:A-1,enableMouseEvents:!0,onChangeIndex:C},a.steps.map((function(e,t){return y.a.createElement("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",key:e.id},y.a.createElement(s.a,{className:"w-full max-w-lg rounded-8 p-16 md:p-24",elevation:1},y.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content},dir:l.direction})))})))),y.a.createElement("div",{className:"flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32"},y.a.createElement("div",{className:"flex justify-between w-full max-w-xl px-8"},y.a.createElement("div",null,1!==A&&y.a.createElement(c.a,{className:"",color:"secondary",onClick:function(){t(N.i({activeStep:a.activeStep-1}))}},y.a.createElement(i.a,null,"ltr"===l.direction?"chevron_left":"chevron_right"))),y.a.createElement("div",null,A<a.steps.length?y.a.createElement(c.a,{className:"",color:"secondary",onClick:function(){t(N.i({activeStep:a.activeStep+1}))}},y.a.createElement(i.a,null,"ltr"===l.direction?"chevron_right":"chevron_left")):y.a.createElement(c.a,{className:h.successFab,to:"/apps/academy/courses",component:O.a},y.a.createElement(i.a,null,"check")))))),leftSidebarContent:a&&y.a.createElement(m.a,{classes:{root:"bg-transparent"},activeStep:A-1,orientation:"vertical"},a.steps.map((function(e,t){return y.a.createElement(p.a,{key:e.id,onClick:function(){return C(t)}},y.a.createElement(u.a,{classes:{root:h.stepLabel}},e.title))}))),innerScroll:!0,ref:L})}))}}]);