(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[101],{1585:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(39),r=a(36),o=a(1537),c=a(2),i=a(0),l=a.n(i),d=a(1565),s=a(6);var u=function(e){var t=Object(s.d)((function(e){return e.fuse.settings.mainThemeDark}));return l.a.createElement("div",{className:e.classes.header},e.header&&l.a.createElement(d.a,{theme:t},e.header))},m=a(18),p=a(1531),f=a(1550);var b=function(e){var t=Object(s.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return l.a.createElement(l.a.Fragment,null,e.header&&l.a.createElement(d.a,{theme:t},l.a.createElement("div",{className:Object(c.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&l.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var h=l.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),n=Object(m.a)(a,2),r=n[0],o=n[1],d=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:s}}));var s=function(){o(!r)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{lgUp:"permanent"===e.variant},l.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return s()},classes:{root:Object(c.default)(d.sidebarWrapper,e.variant),paper:Object(c.default)(d.sidebar,e.variant,"left"===e.position?d.leftSidebar:d.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:d.backdrop}},style:{position:"absolute"}},l.a.createElement(b,e))),"permanent"===e.variant&&l.a.createElement(f.a,{mdDown:!0},l.a.createElement(p.a,{variant:"permanent",className:Object(c.default)(d.sidebarWrapper,e.variant),open:r,classes:{paper:Object(c.default)(d.sidebar,e.variant,"left"===e.position?d.leftSidebar:d.rightSidebar)}},l.a.createElement(b,e))))})),g=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),E=l.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),n=Object(i.useRef)(null),o=Object(i.useRef)(null),d=g(e),s=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return l.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),l.a.createElement("div",{className:Object(c.default)(d.root,e.innerScroll&&d.innerScroll),ref:o},l.a.createElement("div",{className:d.topBg}),l.a.createElement("div",{className:"flex container w-full"},m&&l.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:d,ref:a,rootRef:o}),l.a.createElement("div",{className:Object(c.default)(d.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},l.a.createElement(u,{header:e.header,classes:d}),l.a.createElement("div",{className:Object(c.default)(d.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&l.a.createElement("div",{className:d.toolbar},e.contentToolbar),e.content&&l.a.createElement(r.a,{className:d.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&l.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:d,ref:n,rootRef:o})))}));E.defaultProps={};var v=l.a.memo(E)},1597:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"l",(function(){return i})),a.d(t,"p",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"k",(function(){return p})),a.d(t,"n",(function(){return f})),a.d(t,"m",(function(){return b})),a.d(t,"b",(function(){return h})),a.d(t,"g",(function(){return g})),a.d(t,"j",(function(){return E})),a.d(t,"o",(function(){return v})),a.d(t,"a",(function(){return x})),a.d(t,"e",(function(){return O})),a.d(t,"i",(function(){return S}));var n=a(49),r=a.n(n),o="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function i(){var e=r.a.get("/api/e-commerce-app/products");return function(t){return e.then((function(e){return t({type:o,payload:e.data})}))}}function l(e){return{type:c,searchText:e.target.value}}var d=a(26),s=a(50),u="[E-COMMERCE APP] GET PRODUCT",m="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var t=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return t.then((function(t){return e({type:u,payload:t.data})}))}}function f(e){var t=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return t.then((function(t){return e(Object(s.G)({message:"Product Saved"})),e({type:m,payload:t.data})}))}}function b(){var e={id:d.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:u,payload:e}}var h="[E-COMMERCE APP] GET ORDERS",g="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function E(){var e=r.a.get("/api/e-commerce-app/orders");return function(t){return e.then((function(e){return t({type:h,payload:e.data})}))}}function v(e){return{type:g,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",O="[E-COMMERCE APP] SAVE ORDER";function S(e){var t=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return t.then((function(t){return e({type:x,payload:t.data})}))}}},1702:function(e,t,a){"use strict";var n=a(73),r=a(5),o=a(1597),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:case o.e:return Object(r.a)({},t.payload);default:return e}},i={data:[],searchText:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.b:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case o.g:return Object(r.a)(Object(r.a)({},e),{},{searchText:t.searchText});default:return e}},d={data:null},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.c:case o.f:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});default:return e}},u={data:[],searchText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.d:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case o.h:return Object(r.a)(Object(r.a)({},e),{},{searchText:t.searchText});default:return e}},p=Object(n.d)({products:m,product:s,orders:l,order:c});t.a=p},1797:function(e,t,a){"use strict";var n=a(8),r=a(2),o=a(0),c=a.n(o),i=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];t.a=function(e){return c.a.createElement("div",{className:Object(r.default)("inline text-12 p-4 rounded truncate",n.a.find(i,{name:e.name}).color)},e.name)}},3129:function(e,t,a){"use strict";a.r(t);var n=a(1585),r=a(298),o=a(0),c=a.n(o),i=a(1702),l=a(131),d=a(1538),s=a(737),u=a(245),m=a(1565),p=a(247),f=a(6),b=a(1597);var h=function(e){var t=Object(f.c)(),a=Object(f.d)((function(e){return e.eCommerceApp.orders.searchText})),n=Object(f.d)((function(e){return e.fuse.settings.mainTheme}));return c.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(l.a,{animation:"transition.expandIn",delay:300},c.a.createElement(d.a,{className:"text-32"},"shopping_basket")),c.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(p.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Orders"))),c.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},c.a.createElement(m.a,{theme:n},c.a.createElement(l.a,{animation:"transition.slideDownIn",delay:300},c.a.createElement(u.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},c.a.createElement(d.a,{color:"action"},"search"),c.a.createElement(s.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(b.o(e))}}))))))},g=a(18),E=a(36),v=a(26),x=a(8),O=a(1549),S=a(1639),w=a(1642),y=a(1636),j=a(1742),C=a(1641),k=a(54),P=a(1797),R=a(794),T=a(1566),N=a(1545),A=a(531),D=a(1540),M=a(1496),H=a(1537),I=a(1640),B=a(1953),W=a(1544),V=a(2),U=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}],z=Object(H.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var G=function(e){var t=z(e),a=Object(o.useState)(null),n=Object(g.a)(a,2),r=n[0],i=n[1];function l(){i(null)}return c.a.createElement(I.a,null,c.a.createElement(C.a,{className:"h-64"},c.a.createElement(y.a,{padding:"none",className:"relative w-64 text-center"},c.a.createElement(O.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&c.a.createElement("div",{className:Object(V.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",t.actionsButtonWrapper)},c.a.createElement(R.a,{"aria-owns":r?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},c.a.createElement(d.a,null,"more_horiz")),c.a.createElement(A.a,{id:"selectedOrdersMenu",anchorEl:r,open:Boolean(r),onClose:l},c.a.createElement(M.a,null,c.a.createElement(D.a,{onClick:function(){l()}},c.a.createElement(T.a,{className:"min-w-40"},c.a.createElement(d.a,null,"delete")),c.a.createElement(N.a,{primary:"Remove"})))))),U.map((function(t){return c.a.createElement(y.a,{key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&c.a.createElement(W.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},c.a.createElement(B.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)})},t.label)));var a}),this)))};var q=Object(k.j)((function(e){var t=Object(f.c)(),a=Object(f.d)((function(e){return e.eCommerceApp.orders.data})),n=Object(f.d)((function(e){return e.eCommerceApp.orders.searchText})),r=Object(o.useState)([]),i=Object(g.a)(r,2),l=i[0],d=i[1],s=Object(o.useState)(a),u=Object(g.a)(s,2),m=u[0],p=u[1],h=Object(o.useState)(0),k=Object(g.a)(h,2),R=k[0],T=k[1],N=Object(o.useState)(10),A=Object(g.a)(N,2),D=A[0],M=A[1],H=Object(o.useState)({direction:"asc",id:null}),I=Object(g.a)(H,2),B=I[0],W=I[1];return Object(o.useEffect)((function(){t(b.j())}),[t]),Object(o.useEffect)((function(){0!==n.length?(p(v.a.filterArrayByString(a,n)),T(0)):p(a)}),[a,n]),c.a.createElement("div",{className:"w-full flex flex-col"},c.a.createElement(E.a,{className:"flex-grow overflow-x-auto"},c.a.createElement(S.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},c.a.createElement(G,{numSelected:l.length,order:B,onSelectAllClick:function(e){e.target.checked?d(m.map((function(e){return e.id}))):d([])},onRequestSort:function(e,t){var a=t,n="desc";B.id===t&&"desc"===B.direction&&(n="asc"),W({direction:n,id:a})},rowCount:m.length}),c.a.createElement(w.a,null,x.a.orderBy(m,[function(e){switch(B.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[B.id]}}],[B.direction]).slice(R*D,R*D+D).map((function(t){var a=-1!==l.indexOf(t.id);return c.a.createElement(C.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a,onClick:function(a){return n=t,void e.history.push("/apps/e-commerce/orders/".concat(n.id));var n}},c.a.createElement(y.a,{className:"w-64 text-center",padding:"none"},c.a.createElement(O.a,{checked:a,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=l.indexOf(t),n=[];-1===a?n=n.concat(l,t):0===a?n=n.concat(l.slice(1)):a===l.length-1?n=n.concat(l.slice(0,-1)):a>0&&(n=n.concat(l.slice(0,a),l.slice(a+1))),d(n)}(0,t.id)}})),c.a.createElement(y.a,{component:"th",scope:"row"},t.id),c.a.createElement(y.a,{component:"th",scope:"row"},t.reference),c.a.createElement(y.a,{className:"truncate",component:"th",scope:"row"},"".concat(t.customer.firstName," ").concat(t.customer.lastName)),c.a.createElement(y.a,{component:"th",scope:"row",align:"right"},c.a.createElement("span",null,"$"),t.total),c.a.createElement(y.a,{component:"th",scope:"row"},t.payment.method),c.a.createElement(y.a,{component:"th",scope:"row"},c.a.createElement(P.a,{name:t.status[0].name})),c.a.createElement(y.a,{component:"th",scope:"row"},t.date))}))))),c.a.createElement(j.a,{className:"overflow-hidden",component:"div",count:m.length,rowsPerPage:D,page:R,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){T(t)},onChangeRowsPerPage:function(e){M(e.target.value)}}))}));t.default=Object(r.a)("eCommerceApp",i.a)((function(){return c.a.createElement(n.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:c.a.createElement(h,null),content:c.a.createElement(q,null),innerScroll:!0})}))}}]);