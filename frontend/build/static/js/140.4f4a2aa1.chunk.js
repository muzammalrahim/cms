(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[140],{1586:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(39),r=a(36),o=a(1538),i=a(2),l=a(0),c=a.n(l),s=a(1566),d=a(6);var u=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},p=a(18),m=a(1532),h=a(1551);var g=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(i.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var f=c.a.forwardRef((function(e,t){var a=Object(l.useState)(!1),n=Object(p.a)(a,2),r=n[0],o=n[1],s=e.classes;Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){o(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{lgUp:"permanent"===e.variant},c.a.createElement(m.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(i.default)(s.sidebarWrapper,e.variant),paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(g,e))),"permanent"===e.variant&&c.a.createElement(h.a,{mdDown:!0},c.a.createElement(m.a,{variant:"permanent",className:Object(i.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(g,e))))})),b=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(l.useRef)(null),n=Object(l.useRef)(null),o=Object(l.useRef)(null),s=b(e),d=e.rightSidebarHeader||e.rightSidebarContent,p=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(i.default)(s.root,e.innerScroll&&s.innerScroll),ref:o},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},p&&c.a.createElement(f,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o}),c.a.createElement("div",{className:Object(i.default)(s.contentWrapper,p&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(u,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(i.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&c.a.createElement(f,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:o})))}));v.defaultProps={};var S=c.a.memo(v)},3090:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(84),o=a(162),i=a(161),l=a(39),c=a(0),s=a.n(c),d=a(1586),u=a(773),p=a(795),m=a(1544),h=a(245),g=a(1797),f=a(1642),b=a(1643),v=a(1644),S=a(1638),E=a(1645),y=a(1745),k=a(17),x=a(9),j=a(6),w=a(381),C=a(66),O=a(1639),P=a.n(O),R=a(1671),N=a.n(R),H=a(1661),W=a.n(H),U=a(1633),D=a.n(U),T=a(1713),I=a.n(T),L=a(234),_=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChangePage=function(e,t){r.setState({page:t})},r.handleChangeRowsPerPage=function(e){r.setState({rowsPerPage:e.target.value}),r.setState({page:0})},r.state={userList:[],page:0,rowsPerPage:25,columns:[{id:"id",label:"",minWidth:5},{id:"name",label:"UserName",minWidth:170},{id:"email",label:"Email",minWidth:100},{id:"first_name",label:"First Name",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"last_name",label:"Last Name",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"is_staff",label:"Staff Status",minWidth:170,align:"right"},{id:"actions",label:"Actions",minWidth:170,align:"right",actions:s.a.createElement(P.a,null)}],rows:[],params:{search:""}},r.getUsers(),r}return Object(r.a)(a,[{key:"handleDelete",value:function(e){var t=this;Object(w.b)("adm/auth/user/".concat(e,"/")).then((function(e){t.props.history.push("/".concat(C.a,"/auth/user")),t.getUsers()}))}},{key:"getUsers",value:function(){var e=this,t=this.state.params;Object(w.c)("adm/auth/user/",t).then((function(t){e.setState({userList:t.data});var a=[];t.data.map((function(t){a.push(e.createData(t.id,t.username,t.email,t.first_name,t.last_name,"true"===t.is_staff.toLocaleString()?s.a.createElement(N.a,{style:{color:L.a[500]},fontSize:"large"}):s.a.createElement(P.a,{color:"secondary",fontSize:"large"}),[s.a.createElement(I.a,{color:"primary",style:{cursor:"pointer"},onClick:function(){e.props.history.push("/".concat(C.a,"/auth/user/").concat(t.id))}}),s.a.createElement(D.a,{style:{cursor:"pointer"},onClick:function(){return e.handleDelete(t.id)},color:"secondary"})]))})),e.setState({rows:a})}))}},{key:"createData",value:function(e,t,a,n,r,o,i){return{id:e,name:t,email:a,first_name:n,last_name:r,is_staff:o,actions:i}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.params.search,r=a.rowsPerPage,o=a.page,i=a.rows,l=a.columns;return s.a.createElement(d.a,{classes:{root:t.layoutRoot},header:s.a.createElement("div",{className:"py-24"},s.a.createElement("h4",null,"Users")),contentToolbar:s.a.createElement("div",{className:"px-24",style:{width:"100%"}},s.a.createElement("span",null,"Users List"),s.a.createElement(u.a,{style:{margin:"2pc"},className:t.input,classes:{root:t.inputRoot,input:t.inputInput},value:n,onChange:function(t){var a={search:t.target.value};e.setState({params:a}),t.target.value||e.getUsers()},placeholder:"Search Users",inputProps:{"aria-label":"search users"}}),s.a.createElement(p.a,{type:"submit",className:t.iconButton,"aria-label":"search"},s.a.createElement(W.a,{onClick:function(){e.getUsers()}})),s.a.createElement("span",{style:{float:"right",marginTop:"30px"}},s.a.createElement(m.a,{variant:"contained",color:"primary",justifyContent:"flex-end",onClick:function(){e.props.history.push("/".concat(C.a,"/auth/user/add"))}},"Add User"),s.a.createElement(m.a,{variant:"contained",color:"primary",justifyContent:"flex-end",style:{marginLeft:"5px"}},"Delete Selected"))),content:s.a.createElement("div",{className:"p-24"},s.a.createElement(h.a,{className:t.root},s.a.createElement(g.a,{className:t.container},s.a.createElement(f.a,{stickyHeader:!0,"aria-label":"sticky table"},s.a.createElement(b.a,null,s.a.createElement(v.a,null,l.map((function(e,t){return s.a.createElement(S.a,{key:t,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),s.a.createElement(E.a,null,i.slice(o*r,o*r+r).map((function(t,a){return s.a.createElement(v.a,{hover:!0,role:"checkbox",tabIndex:-1,key:a},l.map((function(a,n){var r=t[a.id];return s.a.createElement(S.a,{key:n,align:a.align,style:{color:"name"===a.id&&"blue",cursor:"name"===a.id&&"pointer"},onClick:function(){"name"===a.id&&e.props.history.push("/".concat(C.a,"/auth/user/").concat(t.id))}},a.format&&"number"===typeof r?a.format(r):r)})))}))))),s.a.createElement(y.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:i.length,rowsPerPage:r,page:o,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})))})}}]),a}(c.Component);t.default=Object(j.b)(null,null)(Object(x.a)((function(e){return{layoutRoot:{},inputRoot:{color:"inherit"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.d)(e.palette.common.white,.25)}},searchIcon:{padding:e.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingRight:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"30ch"})}}))(_))}}]);