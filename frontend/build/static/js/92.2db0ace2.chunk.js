(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[92],{1581:function(e,a,t){"use strict";var l=t(0),n=l.createContext();a.a=n},1592:function(e,a,t){"use strict";var l=t(0),n=l.createContext();a.a=n},1635:function(e,a,t){"use strict";var l=t(4),n=t(1),r=t(0),c=(t(3),t(2)),i=t(9),o=t(10),s=t(17),m=t(1592),d=t(1581),u=r.forwardRef((function(e,a){var t,i,s=e.align,u=void 0===s?"inherit":s,p=e.classes,f=e.className,E=e.component,g=e.padding,b=e.scope,v=e.size,h=e.sortDirection,x=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=r.useContext(m.a),O=r.useContext(d.a),j=O&&"head"===O.variant;E?(i=E,t=j?"columnheader":"cell"):i=j?"th":"td";var w=b;!w&&j&&(w="col");var S=g||(N&&N.padding?N.padding:"default"),k=v||(N&&N.size?N.size:"medium"),T=x||O&&O.variant,C=null;return h&&(C="asc"===h?"ascending":"descending"),r.createElement(i,Object(n.a)({ref:a,className:Object(c.default)(p.root,p[T],f,"inherit"!==u&&p["align".concat(Object(o.a)(u))],"default"!==S&&p["padding".concat(Object(o.a)(S))],"medium"!==k&&p["size".concat(Object(o.a)(k))],"head"===T&&N&&N.stickyHeader&&p.stickyHeader),"aria-sort":C,role:t,scope:w},y))}));a.a=Object(i.a)((function(e){return{root:Object(n.a)(Object(n.a)({},e.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1638:function(e,a,t){"use strict";var l=t(4),n=t(1),r=t(0),c=(t(3),t(2)),i=t(9),o=t(1592),s=r.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,m=void 0===s?"table":s,d=e.padding,u=void 0===d?"default":d,p=e.size,f=void 0===p?"medium":p,E=e.stickyHeader,g=void 0!==E&&E,b=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=r.useMemo((function(){return{padding:u,size:f,stickyHeader:g}}),[u,f,g]);return r.createElement(o.a.Provider,{value:v},r.createElement(m,Object(n.a)({role:"table"===m?null:"table",ref:a,className:Object(c.default)(t.root,i,g&&t.stickyHeader)},b)))}));a.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)(Object(n.a)({},e.typography.body2),{},{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1639:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(3),t(2)),i=t(9),o=t(1581),s={variant:"head"},m=r.forwardRef((function(e,a){var t=e.classes,i=e.className,m=e.component,d=void 0===m?"thead":m,u=Object(n.a)(e,["classes","className","component"]);return r.createElement(o.a.Provider,{value:s},r.createElement(d,Object(l.a)({className:Object(c.default)(t.root,i),ref:a,role:"thead"===d?null:"rowgroup"},u)))}));a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1640:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(3),t(2)),i=t(9),o=t(1581),s=t(17),m=r.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,m=void 0===s?"tr":s,d=e.hover,u=void 0!==d&&d,p=e.selected,f=void 0!==p&&p,E=Object(n.a)(e,["classes","className","component","hover","selected"]),g=r.useContext(o.a);return r.createElement(m,Object(l.a)({ref:a,className:Object(c.default)(t.root,i,g&&{head:t.head,footer:t.footer}[g.variant],u&&t.hover,f&&t.selected),role:"tr"===m?null:"row"},E))}));a.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(m)},1641:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(3),t(2)),i=t(9),o=t(1581),s={variant:"body"},m=r.forwardRef((function(e,a){var t=e.classes,i=e.className,m=e.component,d=void 0===m?"tbody":m,u=Object(n.a)(e,["classes","className","component"]);return r.createElement(o.a.Provider,{value:s},r.createElement(d,Object(l.a)({className:Object(c.default)(t.root,i),ref:a,role:"tbody"===d?null:"rowgroup"},u)))}));a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},3078:function(e,a,t){"use strict";t.r(a);var l=t(18),n=t(130),r=t(1566),c=t(1567),i=t(1535),o=t(204),s=t(1638),m=t(1641),d=t(1635),u=t(1639),p=t(1640),f=t(246),E=t(56),g=t.n(E),b=t(2),v=t(0),h=t.n(v),x=Object(i.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(o.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)")},divider:{backgroundColor:e.palette.divider}}}));a.default=function(){var e=x(),a=Object(v.useState)(null),t=Object(l.a)(a,2),i=t[0],o=t[1],E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return Object(v.useEffect)((function(){g.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then((function(e){o(e.data)}))}),[]),h.a.createElement("div",{className:Object(b.default)(e.root,"flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0")},i&&h.a.createElement(n.a,{animation:{translateY:[0,"100%"]},duration:600},h.a.createElement(r.a,{className:"mx-auto w-xl print:w-full print:shadow-none"},h.a.createElement(c.a,{className:"p-88 print:p-0"},h.a.createElement("div",{className:"flex flex-row justify-between items-start"},h.a.createElement("div",{className:"flex flex-col"},h.a.createElement("div",{className:"flex items-center mb-80 print:mb-0"},h.a.createElement("img",{className:"w-160 print:w-60",src:"static/images/logos/fuse.svg",alt:"logo"}),h.a.createElement("div",{className:Object(b.default)(e.divider,"mx-48 w-px h-128 print:mx-16")}),h.a.createElement("div",{className:"max-w-160"},h.a.createElement(f.a,{color:"textSecondary"},i.from.title),i.from.address&&h.a.createElement(f.a,{color:"textSecondary"},i.from.address),i.from.phone&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Phone:"),i.from.phone),i.from.email&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Email:"),i.from.email),i.from.website&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Web:"),i.from.website))),h.a.createElement("div",{className:"flex items-center"},h.a.createElement("div",{className:"flex justify-end items-center w-160 print:w-60"},h.a.createElement(f.a,{variant:"h5",className:"font-light print:text-16",color:"textSecondary"},"CLIENT")),h.a.createElement("div",{className:Object(b.default)(e.divider,"mx-48 w-px h-128 print:mx-16")}),h.a.createElement("div",{className:"max-w-160"},h.a.createElement(f.a,{color:"textSecondary"},i.client.title),i.client.address&&h.a.createElement(f.a,{color:"textSecondary"},i.client.address),i.client.phone&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Phone:"),i.client.phone),i.client.email&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Email:"),i.client.email),i.client.website&&h.a.createElement(f.a,{color:"textSecondary"},h.a.createElement("span",null,"Web:"),i.client.website)))),h.a.createElement("table",null,h.a.createElement("tbody",null,h.a.createElement("tr",null,h.a.createElement("td",{className:"pb-32"},h.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},"INVOICE")),h.a.createElement("td",{className:"pb-32 px-16"},h.a.createElement(f.a,{className:"font-light",variant:"h4"},i.number))),h.a.createElement("tr",null,h.a.createElement("td",{className:"text-right"},h.a.createElement(f.a,{color:"textSecondary"},"INVOICE DATE")),h.a.createElement("td",{className:"px-16"},h.a.createElement(f.a,null,i.date))),h.a.createElement("tr",null,h.a.createElement("td",{className:"text-right"},h.a.createElement(f.a,{color:"textSecondary"},"DUE DATE")),h.a.createElement("td",{className:"px-16"},h.a.createElement(f.a,null,i.dueDate))),h.a.createElement("tr",null,h.a.createElement("td",{className:"text-right"},h.a.createElement(f.a,{color:"textSecondary"},"TOTAL DUE")),h.a.createElement("td",{className:"px-16"},h.a.createElement(f.a,null,E.format(i.total))))))),h.a.createElement("div",{className:"mt-96 print:mt-0"},h.a.createElement(s.a,{className:"simple"},h.a.createElement(u.a,null,h.a.createElement(p.a,null,h.a.createElement(d.a,null,"SERVICE"),h.a.createElement(d.a,null,"UNIT"),h.a.createElement(d.a,{align:"right"},"UNIT PRICE"),h.a.createElement(d.a,{align:"right"},"QUANTITY"),h.a.createElement(d.a,{align:"right"},"TOTAL"))),h.a.createElement(m.a,null,i.services.map((function(e){return h.a.createElement(p.a,{key:e.id},h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"mb-8",variant:"subtitle1"},e.title),h.a.createElement(f.a,{variant:"caption",color:"textSecondary"},e.detail)),h.a.createElement(d.a,null,e.unit),h.a.createElement(d.a,{align:"right"},E.format(e.unitPrice)),h.a.createElement(d.a,{align:"right"},e.quantity),h.a.createElement(d.a,{align:"right"},E.format(e.total)))})))),h.a.createElement(s.a,{className:"simple"},h.a.createElement(m.a,null,h.a.createElement(p.a,null,h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),h.a.createElement(d.a,{align:"right"},h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},E.format(i.subtotal)))),h.a.createElement(p.a,null,h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),h.a.createElement(d.a,{align:"right"},h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},E.format(i.tax)))),h.a.createElement(p.a,null,h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),h.a.createElement(d.a,{align:"right"},h.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},E.format(i.discount)))),h.a.createElement(p.a,null,h.a.createElement(d.a,null,h.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),h.a.createElement(d.a,{align:"right"},h.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},E.format(i.total))))))),h.a.createElement("div",{className:"mt-96 print:mt-0 print:px-16"},h.a.createElement(f.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),h.a.createElement("div",{className:"flex"},h.a.createElement("div",{className:"flex-shrink-0"},h.a.createElement("img",{className:"w-32",src:"static/images/logos/fuse.svg",alt:"logo"})),h.a.createElement(f.a,{className:"font-medium mb-64 px-24",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.")))))))}}}]);