(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[139],{1586:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(39),n=a(36),o=a(1538),i=a(2),l=a(0),c=a.n(l),s=a(1566),p=a(6);var d=function(e){var t=Object(p.d)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},u=a(18),m=a(1532),g=a(1551);var h=function(e){var t=Object(p.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(i.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(n.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var b=c.a.forwardRef((function(e,t){var a=Object(l.useState)(!1),r=Object(u.a)(a,2),n=r[0],o=r[1],s=e.classes;Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:p}}));var p=function(){o(!n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{lgUp:"permanent"===e.variant},c.a.createElement(m.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return p()},classes:{root:Object(i.default)(s.sidebarWrapper,e.variant),paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(h,e))),"permanent"===e.variant&&c.a.createElement(g.a,{mdDown:!0},c.a.createElement(m.a,{variant:"permanent",className:Object(i.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(h,e))))})),f=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(l.useRef)(null),r=Object(l.useRef)(null),o=Object(l.useRef)(null),s=f(e),p=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(i.default)(s.root,e.innerScroll&&s.innerScroll),ref:o},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},u&&c.a.createElement(b,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o}),c.a.createElement("div",{className:Object(i.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",p&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(d,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(i.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),p&&c.a.createElement(b,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:o})))}));v.defaultProps={};var y=c.a.memo(v)},3093:function(e,t,a){"use strict";a.r(t);var r=a(83),n=a(84),o=a(162),i=a(161),l=a(39),c=a(0),s=a.n(c),p=a(1586),d=a(773),u=a(795),m=a(1544),g=a(245),h=a(1797),b=a(1642),f=a(1643),v=a(1644),y=a(1638),E=a(1645),S=a(1745),k=a(17),x=a(9),j=a(6),w=a(381),C=a(66),O=a(1550),P=a(1661),R=a.n(P),N=a(1633),H=a.n(N),D=a(1713),T=a.n(D),I=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:+e.target.value}),n.setState({page:n.state.page})},n.state={groupList:[],page:0,rowsPerPage:25,columns:[{id:"id",label:""},{id:"name",label:"Group Name"},{id:"actions",label:"Actions",minWidth:170,align:"right"}],rows:[],params:{search:""}},n.getGroups(),n}return Object(n.a)(a,[{key:"handleDelete",value:function(e){var t=this;Object(w.b)("adm/auth/group/".concat(e,"/")).then((function(e){t.props.history.push("/".concat(C.a,"/auth/group")),t.getGroups()}))}},{key:"getGroups",value:function(){var e=this,t=this.state.params;Object(w.c)("adm/auth/group/",t).then((function(t){e.setState({groupList:t.data});var a=[];t.data.map((function(t){O.a;a.push(e.createData(t.id,t.name,[s.a.createElement(T.a,{color:"primary",style:{cursor:"pointer"},onClick:function(){e.props.history.push("/".concat(C.a,"/auth/group/").concat(t.id))}}),s.a.createElement(H.a,{style:{cursor:"pointer"},onClick:function(){return e.handleDelete(t.id)},color:"secondary"})]))})),e.setState({rows:a})}))}},{key:"createData",value:function(e,t,a){return{id:e,name:t,actions:a}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,r=a.params.search,n=a.rowsPerPage,o=a.page,i=a.rows,l=a.columns;return s.a.createElement(p.a,{classes:{root:t.layoutRoot},header:s.a.createElement("div",{className:"py-24"},s.a.createElement("h4",null,"Groups")),contentToolbar:s.a.createElement("div",{className:"px-24",style:{width:"100%"}},s.a.createElement("span",null,"Groups List"),s.a.createElement(d.a,{style:{margin:"2pc"},className:t.input,classes:{root:t.inputRoot,input:t.inputInput},value:r,onChange:function(t){var a={search:t.target.value};e.setState({params:a}),t.target.value||e.getGroups()},placeholder:"Search Groups",inputProps:{"aria-label":"search groups"}}),s.a.createElement(u.a,{type:"submit",className:t.iconButton,"aria-label":"search"},s.a.createElement(R.a,{onClick:function(){e.getGroups()}})),s.a.createElement("span",{style:{float:"right",marginTop:"30px"}},s.a.createElement(m.a,{variant:"contained",color:"primary",justifyContent:"flex-end",onClick:function(){e.props.history.push("/".concat(C.a,"/auth/group/add"))}},"Add Group"),s.a.createElement(m.a,{variant:"contained",color:"primary",justifyContent:"flex-end",style:{marginLeft:"5px"}},"Delete Selected"))),content:s.a.createElement("div",{className:"p-24"},s.a.createElement(g.a,{className:t.root},s.a.createElement(h.a,{className:t.container},s.a.createElement(b.a,{stickyHeader:!0,"aria-label":"sticky table"},s.a.createElement(f.a,null,s.a.createElement(v.a,null,l.map((function(e){return s.a.createElement(y.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),s.a.createElement(E.a,null,i.slice(o*n,o*n+n).map((function(t){return s.a.createElement(v.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.email},l.map((function(a){var r=t[a.id];return s.a.createElement(y.a,{key:a.id,align:a.align,style:{color:"name"===a.id&&"blue",cursor:"name"===a.id&&"pointer"},onClick:function(){"name"===a.id&&e.props.history.push("/".concat(C.a,"/auth/group/").concat(t.id))}},a.format&&"number"===typeof r?a.format(r):r)})))}))))),s.a.createElement(S.a,{rowsPerPageOptions:[10,25,50,100],component:"div",count:i.length,rowsPerPage:n,page:o,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})))})}}]),a}(c.Component);t.default=Object(j.b)(null,null)(Object(x.a)((function(e){return{layoutRoot:{},inputRoot:{color:"inherit"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.d)(e.palette.common.white,.25)}},searchIcon:{padding:e.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),paddingRight:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"30ch"})}}))(I))}}]);