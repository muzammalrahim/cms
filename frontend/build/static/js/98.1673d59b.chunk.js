(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[98],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(39),n=a(36),l=a(1535),c=a(2),o=a(0),i=a.n(o),m=a(1563),s=a(6);var d=function(e){var t=Object(s.d)((function(e){return e.fuse.settings.mainThemeDark}));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(m.a,{theme:t},e.header))},u=a(18),p=a(1529),E=a(1548);var f=function(e){var t=Object(s.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(m.a,{theme:t},i.a.createElement("div",{className:Object(c.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(n.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var h=i.a.forwardRef((function(e,t){var a=Object(o.useState)(!1),r=Object(u.a)(a,2),n=r[0],l=r[1],m=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:s}}));var s=function(){l(!n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{lgUp:"permanent"===e.variant},i.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return s()},classes:{root:Object(c.default)(m.sidebarWrapper,e.variant),paper:Object(c.default)(m.sidebar,e.variant,"left"===e.position?m.leftSidebar:m.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:m.backdrop}},style:{position:"absolute"}},i.a.createElement(f,e))),"permanent"===e.variant&&i.a.createElement(E.a,{mdDown:!0},i.a.createElement(p.a,{variant:"permanent",className:Object(c.default)(m.sidebarWrapper,e.variant),open:n,classes:{paper:Object(c.default)(m.sidebar,e.variant,"left"===e.position?m.leftSidebar:m.rightSidebar)}},i.a.createElement(f,e))))})),b=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),g=i.a.forwardRef((function(e,t){var a=Object(o.useRef)(null),r=Object(o.useRef)(null),l=Object(o.useRef)(null),m=b(e),s=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(c.default)(m.root,e.innerScroll&&m.innerScroll),ref:l},i.a.createElement("div",{className:m.topBg}),i.a.createElement("div",{className:"flex container w-full"},u&&i.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:m,ref:a,rootRef:l}),i.a.createElement("div",{className:Object(c.default)(m.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(d,{header:e.header,classes:m}),i.a.createElement("div",{className:Object(c.default)(m.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:m.toolbar},e.contentToolbar),e.content&&i.a.createElement(n.a,{className:m.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&i.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:m,ref:r,rootRef:l})))}));g.defaultProps={};var v=i.a.memo(g)},1597:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"h",(function(){return c})),a.d(t,"l",(function(){return o})),a.d(t,"p",(function(){return i})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"k",(function(){return p})),a.d(t,"n",(function(){return E})),a.d(t,"m",(function(){return f})),a.d(t,"b",(function(){return h})),a.d(t,"g",(function(){return b})),a.d(t,"j",(function(){return g})),a.d(t,"o",(function(){return v})),a.d(t,"a",(function(){return x})),a.d(t,"e",(function(){return N})),a.d(t,"i",(function(){return y}));var r=a(56),n=a.n(r),l="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function o(){var e=n.a.get("/api/e-commerce-app/products");return function(t){return e.then((function(e){return t({type:l,payload:e.data})}))}}function i(e){return{type:c,searchText:e.target.value}}var m=a(26),s=a(49),d="[E-COMMERCE APP] GET PRODUCT",u="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var t=n.a.get("/api/e-commerce-app/product",{params:e});return function(e){return t.then((function(t){return e({type:d,payload:t.data})}))}}function E(e){var t=n.a.post("/api/e-commerce-app/product/save",e);return function(e){return t.then((function(t){return e(Object(s.G)({message:"Product Saved"})),e({type:u,payload:t.data})}))}}function f(){var e={id:m.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:d,payload:e}}var h="[E-COMMERCE APP] GET ORDERS",b="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function g(){var e=n.a.get("/api/e-commerce-app/orders");return function(t){return e.then((function(e){return t({type:h,payload:e.data})}))}}function v(e){return{type:b,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",N="[E-COMMERCE APP] SAVE ORDER";function y(e){var t=n.a.get("/api/e-commerce-app/order",{params:e});return function(e){return t.then((function(t){return e({type:x,payload:t.data})}))}}},1698:function(e,t,a){"use strict";var r=a(72),n=a(5),l=a(1597),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:case l.e:return Object(n.a)({},t.payload);default:return e}},o={data:[],searchText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:return Object(n.a)(Object(n.a)({},e),{},{data:t.payload});case l.g:return Object(n.a)(Object(n.a)({},e),{},{searchText:t.searchText});default:return e}},m={data:null},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:case l.f:return Object(n.a)(Object(n.a)({},e),{},{data:t.payload});default:return e}},d={data:[],searchText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.d:return Object(n.a)(Object(n.a)({},e),{},{data:t.payload});case l.h:return Object(n.a)(Object(n.a)({},e),{},{searchText:t.searchText});default:return e}},p=Object(r.d)({products:u,product:s,orders:i,order:c});t.a=p},1797:function(e,t,a){"use strict";var r=a(8),n=a(2),l=a(0),c=a.n(l),o=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];t.a=function(e){return c.a.createElement("div",{className:Object(n.default)("inline text-12 p-4 rounded truncate",r.a.find(o,{name:e.name}).color)},e.name)}},3134:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a(130),l=a(1583),c=a(1574),o=a(1798),i=a(1800),m=a(1799),s=a(1536),d=a(51),u=a(1569),p=a(1570),E=a(1542),f=a(246),h=a(1628),b=a.n(h),g=a(297),v=a(1796),x=a.n(v),N=a(0),y=a.n(N),S=a(6),O=a(53),w=a(28),C=a(163),j=a(1597),k=a(1698),T=a(1566),R=a(1567),A=a(1535),P=a(1638),D=a(1641),I=a(1634),M=a(1639),U=a(1640),H=a(2),W=Object(A.a)((function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}})),q=y.a.memo((function(e){var t=W(e),a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return y.a.createElement("div",{className:Object(H.default)(t.root,"flex-grow flex-shrink-0 p-0")},e.order&&y.a.createElement(T.a,{className:"w-xl mx-auto",elevation:0},y.a.createElement(R.a,{className:"p-88 print:p-0"},y.a.createElement(f.a,{color:"textSecondary",className:"mb-32"},e.order.date),y.a.createElement("div",{className:"flex justify-between"},y.a.createElement("div",null,y.a.createElement("table",{className:"mb-16"},y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",{className:"pb-4"},y.a.createElement(f.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),y.a.createElement("td",{className:"pb-4 px-8"},y.a.createElement(f.a,{className:"font-light",variant:"h6",color:"inherit"},e.order.reference))))),y.a.createElement(f.a,{color:"textSecondary"},"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)),e.order.customer.invoiceAddress.address&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.invoiceAddress.address),e.order.customer.phone&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.phone),e.order.customer.email&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.email)),y.a.createElement("div",{className:Object(H.default)(t.seller,"flex items-center p-16")},y.a.createElement("img",{className:"w-80",src:"static/images/logos/fuse.svg",alt:"logo"}),y.a.createElement("div",{className:Object(H.default)(t.divider,"divider mx-8 h-96")}),y.a.createElement("div",{className:"px-8"},y.a.createElement(f.a,{color:"inherit"},"FUSE INC."),y.a.createElement(f.a,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),y.a.createElement(f.a,{color:"inherit"},"+66 123 455 87"),y.a.createElement(f.a,{color:"inherit"},"hello@fuseinc.com"),y.a.createElement(f.a,{color:"inherit"},"www.fuseinc.com")))),y.a.createElement("div",{className:"mt-64"},y.a.createElement(P.a,{className:"simple"},y.a.createElement(M.a,null,y.a.createElement(U.a,null,y.a.createElement(I.a,null,"PRODUCT"),y.a.createElement(I.a,null,"PRICE"),y.a.createElement(I.a,{align:"right"},"QUANTITY"),y.a.createElement(I.a,{align:"right"},"TOTAL"))),y.a.createElement(D.a,null,e.order.products.map((function(e){return y.a.createElement(U.a,{key:e.id},y.a.createElement(I.a,null,y.a.createElement(f.a,{variant:"subtitle1"},e.name)),y.a.createElement(I.a,{align:"right"},a.format(e.price)),y.a.createElement(I.a,{align:"right"},e.quantity),y.a.createElement(I.a,{align:"right"},a.format(e.price*e.quantity)))})))),y.a.createElement(P.a,{className:"simple mt-32"},y.a.createElement(D.a,null,y.a.createElement(U.a,null,y.a.createElement(I.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),y.a.createElement(I.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.subtotal)))),y.a.createElement(U.a,null,y.a.createElement(I.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),y.a.createElement(I.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.tax)))),y.a.createElement(U.a,null,y.a.createElement(I.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),y.a.createElement(I.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.discount)))),y.a.createElement(U.a,null,y.a.createElement(I.a,null,y.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),y.a.createElement(I.a,{align:"right"},y.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},a.format(e.order.total))))))),y.a.createElement("div",{className:"mt-96"},y.a.createElement(f.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),y.a.createElement("div",{className:"flex"},y.a.createElement("div",{className:"flex-shrink-0"},y.a.createElement("img",{className:"w-32",src:"static/images/logos/fuse.svg",alt:"logo"})),y.a.createElement(f.a,{className:"font-medium mb-64 px-24",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))})),B=a(1797);function J(e){return y.a.createElement(E.a,{title:e.text,placement:"top"},y.a.createElement(s.a,{className:"text-red"},"place"))}t.default=Object(g.a)("eCommerceApp",k.a)((function(e){var t=Object(S.c)(),a=Object(S.d)((function(e){return e.eCommerceApp.order})),E=Object(d.a)(),h=Object(O.i)(),g=Object(N.useState)(0),v=Object(r.a)(g,2),k=v[0],T=v[1],R=Object(N.useState)("shipping"),A=Object(r.a)(R,2),P=A[0],D=A[1];return Object(C.b)((function(){t(j.i(h))}),[t,h]),y.a.createElement(l.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:a&&y.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},y.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},y.a.createElement(n.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(f.a,{className:"normal-case flex items-center sm:mb-12",component:w.a,role:"button",to:"/apps/e-commerce/orders",color:"inherit"},y.a.createElement(s.a,{className:"text-20"},"ltr"===E.direction?"arrow_back":"arrow_forward"),y.a.createElement("span",{className:"mx-4"},"Orders"))),y.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},y.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(f.a,{className:"text-16 sm:text-20 truncate"},"Order ".concat(a.reference))),y.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(f.a,{variant:"caption"},"From ".concat(a.customer.firstName," ").concat(a.customer.lastName)))))),contentToolbar:y.a.createElement(p.a,{value:k,onChange:function(e,t){T(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},y.a.createElement(u.a,{className:"h-64 normal-case",label:"Order Details"}),y.a.createElement(u.a,{className:"h-64 normal-case",label:"Products"}),y.a.createElement(u.a,{className:"h-64 normal-case",label:"Invoice"})),content:a&&y.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===k&&y.a.createElement("div",null,y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(s.a,{color:"action"},"account_circle"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Customer")),y.a.createElement("div",{className:"mb-24"},y.a.createElement("div",{className:"table-responsive mb-16"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Email"),y.a.createElement("th",null,"Phone"),y.a.createElement("th",null,"Company"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("div",{className:"flex items-center"},y.a.createElement(c.a,{src:a.customer.avatar}),y.a.createElement(f.a,{className:"truncate mx-8"},"".concat(a.customer.firstName," ").concat(a.customer.lastName)))),y.a.createElement("td",null,y.a.createElement(f.a,{className:"truncate"},a.customer.email)),y.a.createElement("td",null,y.a.createElement(f.a,{className:"truncate"},a.customer.phone)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.customer.company)))))),y.a.createElement(o.a,{elevation:1,expanded:"shipping"===P,onChange:function(){return D("shipping"!==P&&"shipping")}},y.a.createElement(m.a,{expandIcon:y.a.createElement(b.a,null)},y.a.createElement(f.a,{className:"font-600"},"Shipping Address")),y.a.createElement(i.a,{className:"flex flex-col md:flex-row"},y.a.createElement(f.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},a.customer.shippingAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[a.customer.shippingAddress.lat,a.customer.shippingAddress.lng]},y.a.createElement(J,{text:a.customer.shippingAddress.address,lat:a.customer.shippingAddress.lat,lng:a.customer.shippingAddress.lng}))))),y.a.createElement(o.a,{elevation:1,expanded:"invoice"===P,onChange:function(){return D("invoice"!==P&&"invoice")}},y.a.createElement(m.a,{expandIcon:y.a.createElement(b.a,null)},y.a.createElement(f.a,{className:"font-600"},"Invoice Address")),y.a.createElement(i.a,{className:"flex flex-col md:flex-row"},y.a.createElement(f.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},a.customer.invoiceAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[a.customer.invoiceAddress.lat,a.customer.invoiceAddress.lng]},y.a.createElement(J,{text:a.customer.invoiceAddress.address,lat:a.customer.invoiceAddress.lat,lng:a.customer.invoiceAddress.lng}))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(s.a,{color:"action"},"access_time"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Order Status")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Status"),y.a.createElement("th",null,"Updated On"))),y.a.createElement("tbody",null,a.status.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",null,y.a.createElement(B.a,{name:e.name})),y.a.createElement("td",null,e.date))})))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(s.a,{color:"action"},"attach_money"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Payment")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"TransactionID"),y.a.createElement("th",null,"Payment Method"),y.a.createElement("th",null,"Amount"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.transactionId)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.method)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.amount)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.date))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(s.a,{color:"action"},"local_shipping"),y.a.createElement(f.a,{className:"h2 mx-12",color:"textSecondary"},"Shipping")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Tracking Code"),y.a.createElement("th",null,"Carrier"),y.a.createElement("th",null,"Weight"),y.a.createElement("th",null,"Fee"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,a.shippingDetails.map((function(e){return y.a.createElement("tr",{key:e.date},y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.tracking)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.carrier)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.weight)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.fee)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.date)))}))))))),1===k&&y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"ID"),y.a.createElement("th",null,"Image"),y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Price"),y.a.createElement("th",null,"Quantity"))),y.a.createElement("tbody",null,a.products.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",{className:"w-64"},e.id),y.a.createElement("td",{className:"w-80"},y.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),y.a.createElement("td",null,y.a.createElement(f.a,{component:w.a,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},"$",e.price)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},e.quantity)))}))))),2===k&&y.a.createElement(q,{order:a})),innerScroll:!0})}))}}]);