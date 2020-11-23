(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[87],{1582:function(e,t,a){"use strict";var n=a(0),l=n.createContext();t.a=l},1594:function(e,t,a){"use strict";var n=a(0),l=n.createContext();t.a=l},1650:function(e,t,a){"use strict";var n=a(4),l=a(1),r=a(0),c=(a(3),a(2)),o=a(9),s=a(10),i=a(18),m=a(1594),d=a(1582),u=r.forwardRef((function(e,t){var a,o,i=e.align,u=void 0===i?"inherit":i,p=e.classes,f=e.className,x=e.component,E=e.padding,w=e.scope,b=e.size,g=e.sortDirection,v=e.variant,N=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),h=r.useContext(m.a),y=r.useContext(d.a),j=y&&"head"===y.variant;x?(o=x,a=j?"columnheader":"cell"):o=j?"th":"td";var O=w;!O&&j&&(O="col");var k=E||(h&&h.padding?h.padding:"default"),C=b||(h&&h.size?h.size:"medium"),S=v||y&&y.variant,R=null;return g&&(R="asc"===g?"ascending":"descending"),r.createElement(o,Object(l.a)({ref:t,className:Object(c.default)(p.root,p[S],f,"inherit"!==u&&p["align".concat(Object(s.a)(u))],"default"!==k&&p["padding".concat(Object(s.a)(k))],"medium"!==C&&p["size".concat(Object(s.a)(C))],"head"===S&&h&&h.stickyHeader&&p.stickyHeader),"aria-sort":R,role:a,scope:O},N))}));t.a=Object(o.a)((function(e){return{root:Object(l.a)(Object(l.a)({},e.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(i.i)(Object(i.d)(e.palette.divider,1),.88):Object(i.a)(Object(i.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1661:function(e,t,a){"use strict";var n=a(4),l=a(1),r=a(0),c=(a(3),a(2)),o=a(9),s=a(1594),i=r.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.component,m=void 0===i?"table":i,d=e.padding,u=void 0===d?"default":d,p=e.size,f=void 0===p?"medium":p,x=e.stickyHeader,E=void 0!==x&&x,w=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),b=r.useMemo((function(){return{padding:u,size:f,stickyHeader:E}}),[u,f,E]);return r.createElement(s.a.Provider,{value:b},r.createElement(m,Object(l.a)({role:"table"===m?null:"table",ref:t,className:Object(c.default)(a.root,o,E&&a.stickyHeader)},w)))}));t.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)(Object(l.a)({},e.typography.body2),{},{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(i)},1662:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(0),c=(a(3),a(2)),o=a(9),s=a(1582),i={variant:"head"},m=r.forwardRef((function(e,t){var a=e.classes,o=e.className,m=e.component,d=void 0===m?"thead":m,u=Object(l.a)(e,["classes","className","component"]);return r.createElement(s.a.Provider,{value:i},r.createElement(d,Object(n.a)({className:Object(c.default)(a.root,o),ref:t,role:"thead"===d?null:"rowgroup"},u)))}));t.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1663:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(0),c=(a(3),a(2)),o=a(9),s=a(1582),i=a(18),m=r.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.component,m=void 0===i?"tr":i,d=e.hover,u=void 0!==d&&d,p=e.selected,f=void 0!==p&&p,x=Object(l.a)(e,["classes","className","component","hover","selected"]),E=r.useContext(s.a);return r.createElement(m,Object(n.a)({ref:t,className:Object(c.default)(a.root,o,E&&{head:a.head,footer:a.footer}[E.variant],u&&a.hover,f&&a.selected),role:"tr"===m?null:"row"},x))}));t.a=Object(o.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(i.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(m)},1664:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(0),c=(a(3),a(2)),o=a(9),s=a(1582),i={variant:"body"},m=r.forwardRef((function(e,t){var a=e.classes,o=e.className,m=e.component,d=void 0===m?"tbody":m,u=Object(l.a)(e,["classes","className","component"]);return r.createElement(s.a.Provider,{value:i},r.createElement(d,Object(n.a)({className:Object(c.default)(a.root,o),ref:t,role:"tbody"===d?null:"rowgroup"},u)))}));t.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},3113:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(206),r=a(200),c=a(1548),o=a(1536),s=a(794),i=a(527),m=a(1538),d=a(1535),u=a(1569),p=a(1570),f=a(247),x=a(297),E=a(2),w=a(8),b=a(0),g=a.n(b),v=a(5),N=a(56),h=a.n(N),y="[PROJECT DASHBOARD APP] GET WIDGETS";var j="[PROJECT DASHBOARD APP] GET PROJECTS";var O=a(73),k=a(11),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(k.a)(t.payload);default:return e}},S=a(6),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(S.a)({},t.payload);default:return e}},B=Object(O.d)({widgets:R,projects:C}),T=a(245),H=a(799);var A=g.a.memo((function(e){var t=Object(b.useState)(e.widget.currentRange),a=Object(n.a)(t,2),l=a[0],r=a[1];return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement(H.a,{className:"px-12",native:!0,value:l,onChange:function(e){r(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.widget.ranges).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return g.a.createElement("option",{key:a,value:a},l)}))),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"text-center pt-12 pb-28"},g.a.createElement(f.a,{className:"text-72 leading-none text-blue"},e.widget.data.count[l]),g.a.createElement(f.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),g.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},g.a.createElement(f.a,{className:"text-15 flex w-full",color:"textSecondary"},g.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",g.a.createElement("b",{className:"px-8"},e.widget.data.extra.count[l]))))})),P=a(1661),M=a(1664),D=a(1650),U=a(1662),z=a(1663);var L=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},e.widget.title)),g.a.createElement("div",{className:"table-responsive"},g.a.createElement(P.a,{className:"w-full min-w-full"},g.a.createElement(U.a,null,g.a.createElement(z.a,null,e.widget.table.columns.map((function(e){return g.a.createElement(D.a,{key:e.id,className:"whitespace-no-wrap"},e.title)})))),g.a.createElement(M.a,null,e.widget.table.rows.map((function(e){return g.a.createElement(z.a,{key:e.id},e.cells.map((function(e){switch(e.id){case"budget_type":return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row"},g.a.createElement(f.a,{className:Object(E.default)(e.classes,"inline text-11 font-500 px-8 py-4 rounded-4")},e.value));case"spent_perc":return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row"},g.a.createElement(f.a,{className:Object(E.default)(e.classes,"flex items-center")},e.value,g.a.createElement(o.a,{className:"text-14 mx-4"},e.icon)));default:return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row"},g.a.createElement(f.a,{className:e.classes},e.value))}})))}))))))})),_=a(1574);var I=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},e.widget.title),g.a.createElement(f.a,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},"".concat(e.widget.table.rows.length," Members"))),g.a.createElement("div",{className:"table-responsive"},g.a.createElement(P.a,{className:"w-full min-w-full",size:"small"},g.a.createElement(U.a,null,g.a.createElement(z.a,null,e.widget.table.columns.map((function(e){switch(e.id){case"avatar":return g.a.createElement(D.a,{key:e.id,className:"whitespace-no-wrap p-8 px-16"},e.title);default:return g.a.createElement(D.a,{key:e.id,className:"whitespace-no-wrap"},e.title)}})))),g.a.createElement(M.a,null,e.widget.table.rows.map((function(e){return g.a.createElement(z.a,{key:e.id},e.cells.map((function(e){switch(e.id){case"avatar":return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row",className:"px-16"},g.a.createElement(_.a,{src:e.value}));case"name":return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row",className:"truncate font-600"},e.value);default:return g.a.createElement(D.a,{key:e.id,component:"th",scope:"row",className:"truncate"},e.value)}})))}))))))}));var J=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement(f.a,{className:"text-16 px-12"},e.widget.title),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"text-center pt-12 pb-28"},g.a.createElement(f.a,{className:"text-72 leading-none text-red"},e.widget.data.count),g.a.createElement(f.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),g.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},g.a.createElement(f.a,{className:"text-15 flex w-full",color:"textSecondary"},g.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",g.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))}));var W=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement(f.a,{className:"text-16 px-12"},e.widget.title),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"text-center pt-12 pb-28"},g.a.createElement(f.a,{className:"text-72 leading-none text-orange"},e.widget.data.count),g.a.createElement(f.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),g.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},g.a.createElement(f.a,{className:"text-15 flex w-full",color:"textSecondary"},g.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",g.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))}));var $=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement(f.a,{className:"text-16 px-12"},e.widget.title),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"text-center pt-12 pb-28"},g.a.createElement(f.a,{className:"text-72 leading-none text-green"},e.widget.data.count),g.a.createElement(f.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),g.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},g.a.createElement(f.a,{className:"text-15 flex w-full",color:"textSecondary"},g.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",g.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))})),G=a(1541),Y=a(52),q=a(165);var F=g.a.memo((function(e){var t=Object(b.useState)("TW"),a=Object(n.a)(t,2),l=a[0],r=a[1],c=Object(Y.a)(),o=w.a.merge({},e.widget);return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 py-16 border-b-1"},g.a.createElement(f.a,{className:"text-16"},o.title),g.a.createElement("div",{className:"items-center"},Object.entries(o.ranges).map((function(e){var t=Object(n.a)(e,2),a=t[0],c=t[1];return g.a.createElement(G.a,{key:a,className:"normal-case shadow-none px-16",onClick:function(){r(a)},color:l===a?"secondary":"default",variant:l===a?"contained":"text"},c)})))),g.a.createElement("div",{className:"flex flex-row flex-wrap"},g.a.createElement("div",{className:"w-full md:w-1/2 p-8 min-h-420 h-420"},g.a.createElement(q.a,{data:{labels:o.mainChart[l].labels,datasets:o.mainChart[l].datasets.map((function(e,t){var a=c.palette[0===t?"primary":"secondary"];return Object(S.a)(Object(S.a)({},e),{},{borderColor:a.main,backgroundColor:a.main,pointBackgroundColor:a.dark,pointHoverBackgroundColor:a.main,pointBorderColor:a.contrastText,pointHoverBorderColor:a.contrastText})}))},options:o.mainChart.options})),g.a.createElement("div",{className:"flex w-full md:w-1/2 flex-wrap p-8"},Object.entries(o.supporting).map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return g.a.createElement("div",{key:a,className:"w-full sm:w-1/2 p-12"},g.a.createElement(f.a,{className:"text-15 whitespace-no-wrap",color:"textSecondary"},r.label),g.a.createElement(f.a,{className:"text-32"},r.count[l]),g.a.createElement("div",{className:"h-64 w-full"},g.a.createElement(q.f,{data:{labels:r.chart[l].labels,datasets:r.chart[l].datasets.map((function(e,t){var a=c.palette.secondary;return Object(S.a)(Object(S.a)({},e),{},{borderColor:a.main,backgroundColor:a.main,pointBackgroundColor:a.dark,pointHoverBackgroundColor:a.main,pointBorderColor:a.contrastText,pointHoverBorderColor:a.contrastText})}))},options:r.chart.options})))})))))}));var K=g.a.memo((function(e){var t=Object(b.useState)(e.widget.currentRange),a=Object(n.a)(t,2),l=a[0],r=a[1],c=w.a.merge({},e.widget);return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},c.title),g.a.createElement(H.a,{native:!0,value:l,onChange:function(e){r(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(c.ranges).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return g.a.createElement("option",{key:a,value:a},l)})))),g.a.createElement("div",{className:"h-400 w-full p-32"},g.a.createElement(q.d,{data:{labels:c.mainChart.labels,datasets:c.mainChart.datasets[l]},options:c.mainChart.options})),g.a.createElement("div",{className:"flex items-center p-8 border-t-1"},g.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16 border-r-1"},g.a.createElement(f.a,{className:"text-32 leading-none"},c.footerLeft.count[l]),g.a.createElement(f.a,{className:"text-15",color:"textSecondary"},c.footerLeft.title)),g.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16"},g.a.createElement(f.a,{className:"text-32 leading-none"},c.footerRight.count[l]),g.a.createElement(f.a,{className:"text-15",color:"textSecondary"},c.footerRight.title))))})),Q=a(1497),V=a(1498),X=a(1565),Z=a(1544);var ee=g.a.memo((function(e){var t=Object(b.useState)(e.widget.currentRange),a=Object(n.a)(t,2),l=a[0],r=a[1];return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},e.widget.title),g.a.createElement(H.a,{native:!0,value:l,onChange:function(e){r(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.widget.ranges).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return g.a.createElement("option",{key:a,value:a},l)})))),g.a.createElement(Q.a,null,e.widget.schedule[l].map((function(e){return g.a.createElement(V.a,{key:e.id},g.a.createElement(Z.a,{primary:e.title,secondary:e.time}),g.a.createElement(X.a,null,g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))))}))))}));var te=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},e.widget.title)),g.a.createElement("div",{className:"h-400 w-full p-32"},g.a.createElement(q.d,{data:{labels:e.widget.mainChart.labels,datasets:e.widget.mainChart.datasets},options:e.widget.mainChart.options})))})),ae=a(1563);var ne=g.a.memo((function(e){var t=Object(b.useState)(e.widget.currentRange),a=Object(n.a)(t,2),l=a[0],r=a[1],c=w.a.merge({},e.widget),o=Object(Y.a)();return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},g.a.createElement(f.a,{className:"text-16"},c.title),g.a.createElement(H.a,{native:!0,value:l,onChange:function(e){r(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(c.ranges).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return g.a.createElement("option",{key:a,value:a},l)})))),["weeklySpent","totalSpent","remaining"].map((function(e){return g.a.createElement("div",{className:"flex flex-wrap items-center w-full p-8",key:e},g.a.createElement("div",{className:"flex flex-col w-full sm:w-1/2 p-8"},g.a.createElement(f.a,{className:"text-14",color:"textSecondary"},c[e].title),g.a.createElement("div",{className:"flex items-center"},g.a.createElement(f.a,{className:"text-32",color:"textSecondary"},"$"),g.a.createElement(f.a,{className:"text-32 mx-4"},c[e].count[l]))),g.a.createElement("div",{className:"flex w-full sm:w-1/2 p-8"},g.a.createElement("div",{className:"h-48 w-full"},g.a.createElement(q.f,{data:{labels:c[e].chart[l].labels,datasets:c[e].chart[l].datasets.map((function(e,t){var a=o.palette.secondary;return Object(S.a)(Object(S.a)({},e),{},{borderColor:a.main,backgroundColor:a.main,pointBackgroundColor:a.dark,pointHoverBackgroundColor:a.main,pointBorderColor:a.contrastText,pointHoverBorderColor:a.contrastText})}))},options:c[e].chart.options}))))})),g.a.createElement(ae.a,null),g.a.createElement("div",{className:"flex flex-col w-full px-16 py-24"},g.a.createElement(f.a,{className:"text-14",color:"textSecondary"},c.totalBudget.title),g.a.createElement("div",{className:"flex items-center"},g.a.createElement(f.a,{className:"text-32",color:"textSecondary"},"$"),g.a.createElement(f.a,{className:"text-32 mx-4"},c.totalBudget.count))))})),le=a(148),re=a.n(le);var ce=g.a.memo((function(){var e=Object(b.useState)(re()()),t=Object(n.a)(e,2),a=t[0],l=t[1],r=Object(b.useRef)();function c(){l(re()())}return Object(b.useEffect)((function(){return r.current=setInterval(c,1e3),function(){clearInterval(r.current)}})),g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement(f.a,{className:"text-16 px-12"},a.format("dddd, HH:mm:ss")),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"text-center px-24 py-32"},g.a.createElement(f.a,{className:"text-24 leading-tight",color:"textSecondary"},a.format("MMMM")),g.a.createElement(f.a,{className:"text-72 leading-tight",color:"textSecondary"},a.format("D")),g.a.createElement(f.a,{className:"text-24 leading-tight",color:"textSecondary"},a.format("Y"))))}));var oe=g.a.memo((function(e){return g.a.createElement(T.a,{className:"w-full rounded-8 shadow-none border-1"},g.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},g.a.createElement("div",{className:"flex items-center px-12"},g.a.createElement(o.a,{color:"action"},"location_on"),g.a.createElement(f.a,{className:"text-16 mx-8"},e.widget.locations[e.widget.currentLocation].name)),g.a.createElement(s.a,{"aria-label":"more"},g.a.createElement(o.a,null,"more_vert"))),g.a.createElement("div",{className:"flex items-center justify-center p-16 pb-32"},g.a.createElement(o.a,{className:"meteocons text-40 ltr:mr-8 rtl:ml-8",color:"action"},e.widget.locations[e.widget.currentLocation].icon),g.a.createElement(f.a,{className:"text-44 mx-8",color:"textSecondary"},e.widget.locations[e.widget.currentLocation].temp[e.widget.tempUnit]),g.a.createElement(f.a,{className:"text-48 font-300",color:"textSecondary"},"\xb0"),g.a.createElement(f.a,{className:"text-44 font-300",color:"textSecondary"},"C")),g.a.createElement(ae.a,null),g.a.createElement("div",{className:"flex justify-between items-center p-16"},g.a.createElement("div",{className:"flex items-center"},g.a.createElement(o.a,{className:"meteocons text-14",color:"action"},"windy"),g.a.createElement(f.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].windSpeed[e.widget.speedUnit]),g.a.createElement(f.a,{color:"textSecondary"},e.widget.speedUnit)),g.a.createElement("div",{className:"flex items-center"},g.a.createElement(o.a,{className:"meteocons text-14",color:"action"},"compass"),g.a.createElement(f.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].windDirection)),g.a.createElement("div",{className:"flex items-center"},g.a.createElement(o.a,{className:"meteocons text-14",color:"action"},"rainy"),g.a.createElement(f.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].rainProbability))),g.a.createElement(ae.a,null),g.a.createElement("div",{className:"w-full py-16"},e.widget.locations[e.widget.currentLocation].next3Days.map((function(t){return g.a.createElement("div",{className:"flex items-center justify-between w-full py-16 px-24",key:t.name},g.a.createElement(f.a,{className:"text-15"},t.name),g.a.createElement("div",{className:"flex items-center"},g.a.createElement(o.a,{className:"meteocons text-24 ltr:mr-16 rtl:ml-16",color:"action"},t.icon),g.a.createElement(f.a,{className:"text-20"},t.temp[e.widget.tempUnit]),g.a.createElement(f.a,{className:"text-20",color:"textSecondary"},"\xb0"),g.a.createElement(f.a,{className:"text-20",color:"textSecondary"},e.widget.tempUnit)))}))))})),se=Object(d.a)((function(e){return{content:{"& canvas":{maxHeight:"100%"}},selectedProject:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 0 0 0"},projectMenuButton:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"0 8px 0 0",marginLeft:1}}}));t.default=Object(x.a)("projectDashboardApp",B)((function(e){var t=Object(v.c)(),a=Object(v.d)((function(e){return e.projectDashboardApp.widgets})),d=Object(v.d)((function(e){return e.projectDashboardApp.projects})),x=se(e),N=Object(b.useRef)(null),O=Object(b.useState)(0),k=Object(n.a)(O,2),C=k[0],S=k[1],R=Object(b.useState)({id:1,menuEl:null}),B=Object(n.a)(R,2),T=B[0],H=B[1];return Object(b.useEffect)((function(){t(function(){var e=h.a.get("/api/project-dashboard-app/widgets");return function(t){return e.then((function(e){return t({type:y,payload:e.data})}))}}()),t(function(){var e=h.a.get("/api/project-dashboard-app/projects");return function(t){return e.then((function(e){return t({type:j,payload:e.data})}))}}())}),[t]),a&&d?g.a.createElement(r.a,{classes:{header:"min-h-160 h-160",toolbar:"min-h-48 h-48",rightSidebar:"w-288",content:x.content},header:g.a.createElement("div",{className:"flex flex-col justify-between flex-1 px-24 pt-24"},g.a.createElement("div",{className:"flex justify-between items-start"},g.a.createElement(f.a,{className:"py-0 sm:py-24",variant:"h4"},"Welcome back, John!"),g.a.createElement(c.a,{lgUp:!0},g.a.createElement(s.a,{onClick:function(e){return N.current.toggleRightSidebar()},"aria-label":"open left sidebar"},g.a.createElement(o.a,null,"menu")))),g.a.createElement("div",{className:"flex items-end"},g.a.createElement("div",{className:"flex items-center"},g.a.createElement("div",{className:Object(E.default)(x.selectedProject,"flex items-center h-40 px-16 text-16")},w.a.find(d,["id",T.id]).name),g.a.createElement(s.a,{className:Object(E.default)(x.projectMenuButton,"h-40 w-40 p-0"),"aria-owns":T.menuEl?"project-menu":void 0,"aria-haspopup":"true",onClick:function(e){H({id:T.id,menuEl:e.currentTarget})}},g.a.createElement(o.a,null,"more_horiz")),g.a.createElement(i.a,{id:"project-menu",anchorEl:T.menuEl,open:Boolean(T.menuEl),onClose:function(){H({id:T.id,menuEl:null})}},d&&d.map((function(e){return g.a.createElement(m.a,{key:e.id,onClick:function(t){var a;a=e.id,H({id:a,menuEl:null})}},e.name)})))))),contentToolbar:g.a.createElement(p.a,{value:C,onChange:function(e,t){S(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"off",className:"w-full border-b-1 px-24"},g.a.createElement(u.a,{className:"text-14 font-600 normal-case",label:"Home"}),g.a.createElement(u.a,{className:"text-14 font-600 normal-case",label:"Budget Summary"}),g.a.createElement(u.a,{className:"text-14 font-600 normal-case",label:"Team Members"})),content:g.a.createElement("div",{className:"p-12"},0===C&&g.a.createElement(l.a,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},g.a.createElement(A,{widget:a.widget1})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},g.a.createElement(J,{widget:a.widget2})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},g.a.createElement(W,{widget:a.widget3})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},g.a.createElement($,{widget:a.widget4})),g.a.createElement("div",{className:"widget flex w-full p-12"},g.a.createElement(F,{widget:a.widget5})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},g.a.createElement(K,{widget:a.widget6})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},g.a.createElement(ee,{widget:a.widget7}))),1===C&&g.a.createElement(l.a,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},g.a.createElement(te,{widget:a.widget8})),g.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},g.a.createElement(ne,{widget:a.widget9})),g.a.createElement("div",{className:"widget flex w-full p-12"},g.a.createElement(L,{widget:a.widget10}))),2===C&&g.a.createElement(l.a,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},g.a.createElement("div",{className:"widget flex w-full p-12"},g.a.createElement(I,{widget:a.widget11})))),rightSidebarContent:g.a.createElement(l.a,{className:"w-full",enter:{animation:"transition.slideUpBigIn"}},g.a.createElement("div",{className:"widget w-full p-12"},g.a.createElement(ce,null)),g.a.createElement("div",{className:"widget w-full p-12"},g.a.createElement(oe,{widget:a.weatherWidget}))),ref:N}):null}))}}]);