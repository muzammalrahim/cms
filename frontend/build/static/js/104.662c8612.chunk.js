(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[104],{1643:function(e,a,t){"use strict";var n=t(0),r=n.createContext({});a.a=r},1798:function(e,a,t){"use strict";var n=t(1),r=t(524),o=t(68),i=t(4),s=t(0),l=(t(148),t(3),t(2)),c=t(1561),d=t(245),u=t(9),p=t(1643),m=t(167),f=s.forwardRef((function(e,a){var t=e.children,u=e.classes,f=e.className,b=e.defaultExpanded,x=void 0!==b&&b,h=e.disabled,g=void 0!==h&&h,v=e.expanded,E=e.onChange,j=e.square,O=void 0!==j&&j,y=e.TransitionComponent,N=void 0===y?c.a:y,R=e.TransitionProps,k=Object(i.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),C=Object(m.a)({controlled:v,default:x,name:"ExpansionPanel",state:"expanded"}),w=Object(o.a)(C,2),B=w[0],S=w[1],I=s.useCallback((function(e){S(!B),E&&E(e,!B)}),[B,E,S]),P=s.Children.toArray(t),$=Object(r.a)(P),q=$[0],T=$.slice(1),M=s.useMemo((function(){return{expanded:B,disabled:g,toggle:I}}),[B,g,I]);return s.createElement(d.a,Object(n.a)({className:Object(l.default)(u.root,f,B&&u.expanded,g&&u.disabled,!O&&u.rounded),ref:a,square:O},k),s.createElement(p.a.Provider,{value:M},q),s.createElement(N,Object(n.a)({in:B,timeout:"auto"},R),s.createElement("div",{"aria-labelledby":q.props.id,id:q.props["aria-controls"],role:"region"},T)))}));a.a=Object(u.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(f)},1799:function(e,a,t){"use strict";var n=t(1),r=t(4),o=t(0),i=(t(3),t(2)),s=t(248),l=t(794),c=t(9),d=t(1643),u=o.forwardRef((function(e,a){var t=e.children,c=e.classes,u=e.className,p=e.expandIcon,m=e.IconButtonProps,f=e.onBlur,b=e.onClick,x=e.onFocusVisible,h=Object(r.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),g=o.useState(!1),v=g[0],E=g[1],j=o.useContext(d.a),O=j.disabled,y=void 0!==O&&O,N=j.expanded,R=j.toggle;return o.createElement(s.a,Object(n.a)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":N,className:Object(i.default)(c.root,u,y&&c.disabled,N&&c.expanded,v&&c.focused),onFocusVisible:function(e){E(!0),x&&x(e)},onBlur:function(e){E(!1),f&&f(e)},onClick:function(e){R&&R(e),b&&b(e)},ref:a},h),o.createElement("div",{className:Object(i.default)(c.content,N&&c.expanded)},t),p&&o.createElement(l.a,Object(n.a)({className:Object(i.default)(c.expandIcon,N&&c.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},m),p))}));a.a=Object(c.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(u)},1800:function(e,a,t){"use strict";var n=t(1),r=t(4),o=t(0),i=(t(3),t(2)),s=t(9),l=o.forwardRef((function(e,a){var t=e.classes,s=e.className,l=Object(r.a)(e,["classes","className"]);return o.createElement("div",Object(n.a)({className:Object(i.default)(t.root,s),ref:a},l))}));a.a=Object(s.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(l)},3078:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(131),o=t(206),i=t(26),s=t(1798),l=t(1800),c=t(1799),d=t(1538),u=t(737),p=t(245),m=t(1537),f=t(247),b=t(49),x=t.n(b),h=t(2),g=t(0),v=t.n(g),E=Object(m.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText},panel:{margin:0,borderWidth:"1px 1px 0 1px",borderStyle:"solid",borderColor:e.palette.divider,"&:first-child":{borderRadius:"16px 16px 0 0"},"&:last-child":{borderRadius:"0 0 16px 16px",borderWidth:"0 1px 1px 1px"},"&$expanded":{margin:"auto"}},expanded:{}}}));a.default=function(){var e=E(),a=Object(g.useState)([]),t=Object(n.a)(a,2),m=t[0],b=t[1],j=Object(g.useState)([]),O=Object(n.a)(j,2),y=O[0],N=O[1],R=Object(g.useState)(null),k=Object(n.a)(R,2),C=k[0],w=k[1],B=Object(g.useState)(""),S=Object(n.a)(B,2),I=S[0],P=S[1];return Object(g.useEffect)((function(){x.a.get("/api/faq").then((function(e){b(e.data)}))}),[]),Object(g.useEffect)((function(){var e,a;N((e=m,0===(a=I).length?e:i.a.filterArrayByString(e,a)))}),[m,I]),v.a.createElement("div",{className:"w-full flex flex-col flex-auto"},v.a.createElement("div",{className:Object(h.default)(e.header,"flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},v.a.createElement(r.a,{animation:"transition.slideUpIn",duration:400,delay:100},v.a.createElement(f.a,{color:"inherit",className:"text-36 sm:text-56 font-light"},"We're here to help")),v.a.createElement(r.a,{duration:400,delay:600},v.a.createElement(f.a,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-8 sm:mt-16 mx-auto max-w-512"},"Frequently asked questions")),v.a.createElement(p.a,{className:"flex items-center h-56 w-full max-w-md mt-16 sm:mt-32",elevation:1},v.a.createElement(d.a,{color:"action",className:"mx-16"},"search"),v.a.createElement(u.a,{placeholder:"Search in faqs...",className:"",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"},value:I,onChange:function(e){P(e.target.value)}}))),v.a.createElement("div",{className:"flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32"},0===y.length&&v.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},v.a.createElement(f.a,{color:"textSecondary",variant:"h5"},"There are no faqs!")),v.a.createElement(o.a,{enter:{animation:"transition.slideUpBigIn"}},Object(g.useMemo)((function(){return y.map((function(a){return v.a.createElement(s.a,{classes:{root:e.panel,expanded:e.expanded},key:a.id,expanded:C===a.id,onChange:(t=a.id,function(e,a){w(!!a&&t)}),elevation:0},v.a.createElement(c.a,{expandIcon:v.a.createElement(d.a,null,"expand_more")},v.a.createElement("div",{className:"flex items-center"},v.a.createElement(d.a,{color:"action"},"help_outline"),v.a.createElement(f.a,{className:"px-8"},a.question))),v.a.createElement(l.a,null,v.a.createElement(f.a,{className:""},a.answer)));var t}))}),[y,e,C]))))}}}]);