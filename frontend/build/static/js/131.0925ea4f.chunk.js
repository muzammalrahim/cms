(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[131],{1616:function(e,t,a){"use strict";var n=a(4),i=a(1),o=a(0),r=(a(3),a(2)),l=a(9),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=o.forwardRef((function(e,t){var a=e.alignContent,l=void 0===a?"stretch":a,c=e.alignItems,s=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,g=e.container,f=void 0!==g&&g,b=e.direction,x=void 0===b?"row":b,v=e.item,h=void 0!==v&&v,y=e.justify,E=void 0===y?"flex-start":y,j=e.lg,w=void 0!==j&&j,O=e.md,C=void 0!==O&&O,S=e.sm,R=void 0!==S&&S,z=e.spacing,N=void 0===z?0:z,W=e.wrap,k=void 0===W?"wrap":W,B=e.xl,I=void 0!==B&&B,T=e.xs,M=void 0!==T&&T,L=e.zeroMinWidth,G=void 0!==L&&L,V=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(r.default)(d.root,u,f&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],h&&d.item,G&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==k&&d["wrap-xs-".concat(String(k))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==l&&d["align-content-xs-".concat(String(l))],"flex-start"!==E&&d["justify-xs-".concat(String(E))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==R&&d["grid-sm-".concat(String(R))],!1!==C&&d["grid-md-".concat(String(C))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==I&&d["grid-xl-".concat(String(I))]);return o.createElement(m,Object(i.a)({className:D,ref:t},V))})),p=Object(l.a)((function(e){return Object(i.a)(Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};s.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(i.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=p},1728:function(e,t,a){"use strict";var n=a(1),i=a(4),o=a(0),r=(a(147),a(3),a(2)),l=a(10),c=a(17),s=a(9);a(1541).a.styles;var d=o.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.color,u=void 0===d?"default":d,p=e.component,m=void 0===p?"div":p,g=e.disabled,f=void 0!==g&&g,b=e.disableElevation,x=void 0!==b&&b,v=e.disableFocusRipple,h=void 0!==v&&v,y=e.disableRipple,E=void 0!==y&&y,j=e.fullWidth,w=void 0!==j&&j,O=e.orientation,C=void 0===O?"horizontal":O,S=e.size,R=void 0===S?"medium":S,z=e.variant,N=void 0===z?"outlined":z,W=Object(i.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),k=Object(r.default)(c.grouped,c["grouped".concat(Object(l.a)(C))],c["grouped".concat(Object(l.a)(N))],c["grouped".concat(Object(l.a)(N)).concat(Object(l.a)(C))],c["grouped".concat(Object(l.a)(N)).concat("default"!==u?Object(l.a)(u):"")],f&&c.disabled);return o.createElement(m,Object(n.a)({role:"group",className:Object(r.default)(c.root,s,w&&c.fullWidth,x&&c.disableElevation,"contained"===N&&c.contained,"vertical"===C&&c.vertical),ref:t},W),o.Children.map(a,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:Object(r.default)(k,e.props.className),color:e.props.color||u,disabled:e.props.disabled||f,disableElevation:e.props.disableElevation||x,disableFocusRipple:h,disableRipple:E,fullWidth:w,size:e.props.size||R,variant:e.props.variant||N}):null})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(c.d)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(c.d)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(d)},3129:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(1566),i=a(1728),o=a(1541),r=a(0),l=a.n(r),c=a(11),s=a(18),d=a(1535),u=a(1616),p=a(1495),m=a(1496),g=a(1543),f=a(244),b=Object(d.a)((function(e){return{root:{margin:"auto"},paper:{width:200,height:230,overflow:"auto"},button:{margin:e.spacing(.5,0)}}}));function x(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function v(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function h(){var e=b(),t=l.a.useState([]),a=Object(s.a)(t,2),n=a[0],i=a[1],r=l.a.useState([0,1,2,3]),d=Object(s.a)(r,2),h=d[0],y=d[1],E=l.a.useState([4,5,6,7]),j=Object(s.a)(E,2),w=j[0],O=j[1],C=v(n,h),S=v(n,w),R=function(e){return function(){var t=n.indexOf(e),a=Object(c.a)(n);-1===t?a.push(e):a.splice(t,1),i(a)}},z=function(t){return l.a.createElement(f.a,{className:e.paper},l.a.createElement(p.a,{dense:!0,component:"div",role:"list"},t.map((function(e){var t="transfer-list-item-".concat(e,"-label");return l.a.createElement(m.a,{key:e,role:"listitem",button:!0,onClick:R(e)},l.a.createElement(g.a,{id:t,primary:"List item ".concat(e+1)}))})),l.a.createElement(m.a,null)))};return l.a.createElement(u.a,{container:!0,spacing:2,justify:"center",alignItems:"center",className:e.root},l.a.createElement(u.a,{item:!0},z(h),l.a.createElement(o.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){O(w.concat(h)),y([])},disabled:0===h.length,"aria-label":"move all right"},"\u226b")),l.a.createElement(u.a,{item:!0},l.a.createElement(u.a,{container:!0,direction:"column",alignItems:"center"},l.a.createElement(o.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){O(w.concat(C)),y(x(h,C)),i(x(n,C))},disabled:0===C.length,"aria-label":"move selected right"},">"),l.a.createElement(o.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){y(h.concat(S)),O(x(w,S)),i(x(n,S))},disabled:0===S.length,"aria-label":"move selected left"},"<"))),l.a.createElement(u.a,{item:!0},z(w),l.a.createElement(o.a,{variant:"outlined",size:"small",className:e.button,onClick:function(){y(h.concat(w)),O([])},disabled:0===w.length,"aria-label":"move all left"},"\u226a")))}function y(){return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Add group"),l.a.createElement(n.a,null,l.a.createElement("form",null,l.a.createElement("h3",null,"Name:"),l.a.createElement("input",{type:"text",name:"name"}),l.a.createElement("h6",null,"PERMISSIONS:"),l.a.createElement("div",{display:"inline"},l.a.createElement(h,null))," ",l.a.createElement("hr",null),l.a.createElement(i.a,{variant:"text",color:"",align:"right","aria-label":"text primary button group"},l.a.createElement(o.a,null,"Save and add another"),l.a.createElement(o.a,null,"Save and continue editing"),l.a.createElement(o.a,null,"Save")))))}}}]);