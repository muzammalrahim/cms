(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[115],{1586:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(39),r=a(36),i=a(1538),o=a(2),s=a(0),c=a.n(s),l=a(1566),d=a(6);var u=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(l.a,{theme:t},e.header))},p=a(18),m=a(1532),g=a(1551);var f=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(l.a,{theme:t},c.a.createElement("div",{className:Object(o.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var b=c.a.forwardRef((function(e,t){var a=Object(s.useState)(!1),n=Object(p.a)(a,2),r=n[0],i=n[1],l=e.classes;Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){i(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{lgUp:"permanent"===e.variant},c.a.createElement(m.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(o.default)(l.sidebarWrapper,e.variant),paper:Object(o.default)(l.sidebar,e.variant,"left"===e.position?l.leftSidebar:l.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:l.backdrop}},style:{position:"absolute"}},c.a.createElement(f,e))),"permanent"===e.variant&&c.a.createElement(g.a,{mdDown:!0},c.a.createElement(m.a,{variant:"permanent",className:Object(o.default)(l.sidebarWrapper,e.variant),open:r,classes:{paper:Object(o.default)(l.sidebar,e.variant,"left"===e.position?l.leftSidebar:l.rightSidebar)}},c.a.createElement(f,e))))})),h=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(s.useRef)(null),n=Object(s.useRef)(null),i=Object(s.useRef)(null),l=h(e),d=e.rightSidebarHeader||e.rightSidebarContent,p=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(o.default)(l.root,e.innerScroll&&l.innerScroll),ref:i},c.a.createElement("div",{className:l.topBg}),c.a.createElement("div",{className:"flex container w-full"},p&&c.a.createElement(b,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:l,ref:a,rootRef:i}),c.a.createElement("div",{className:Object(o.default)(l.contentWrapper,p&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(u,{header:e.header,classes:l}),c.a.createElement("div",{className:Object(o.default)(l.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:l.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:l.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&c.a.createElement(b,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:l,ref:n,rootRef:i})))}));v.defaultProps={};var x=c.a.memo(v)},1617:function(e,t,a){"use strict";var n=a(4),r=a(1),i=a(0),o=(a(3),a(2)),s=a(9),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=i.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,g=e.container,f=void 0!==g&&g,b=e.direction,h=void 0===b?"row":b,v=e.item,x=void 0!==v&&v,S=e.justify,j=void 0===S?"flex-start":S,k=e.lg,O=void 0!==k&&k,E=e.md,w=void 0!==E&&E,y=e.sm,C=void 0!==y&&y,W=e.spacing,N=void 0===W?0:W,R=e.wrap,H=void 0===R?"wrap":R,I=e.xl,_=void 0!==I&&I,z=e.xs,M=void 0!==z&&z,G=e.zeroMinWidth,D=void 0!==G&&G,P=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(o.default)(d.root,u,f&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],x&&d.item,D&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==H&&d["wrap-xs-".concat(String(H))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==w&&d["grid-md-".concat(String(w))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==_&&d["grid-xl-".concat(String(_))]);return i.createElement(m,Object(r.a)({className:T,ref:t},P))})),p=Object(s.a)((function(e){return Object(r.a)(Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=p},1729:function(e,t,a){"use strict";var n=a(1),r=a(4),i=a(19),o=a(0),s=(a(3),a(2)),c=a(9),l=a(10),d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,p=void 0!==u&&u,m=e.fixed,g=void 0!==m&&m,f=e.maxWidth,b=void 0===f?"lg":f,h=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(s.default)(a.root,i,g&&a.fixed,p&&a.disableGutters,!1!==b&&a["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},h))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},3094:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(84),i=a(682),o=a(162),s=a(161),c=a(0),l=a.n(c),d=a(1586),u=a(1729),p=a(1617),m=a(1547),g=a(1550),f=a(1544),b=a(1489),h=a(6),v=a(3135),x=a(1711),S=a.n(x),j=a(1712),k=a.n(j),O=a(381),E=a(66),w=l.a.createElement(S.a,{fontSize:"small"}),y=l.a.createElement(k.a,{fontSize:"small"}),C=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onPermissionChange=function(e,t){var a=[r.state,t,[]],n=a[0].group,i=a[1],o=a[2];t.length>0&&t.map((function(e){o.push(e.id)})),n.permissions=o,r.setState({selected_permissions:i,group:n})},r.group={id:e.match.params.id,name:"",permissions:[]},r.state={group:r.group,permission_list:[],selected_permissions:[]},r.getPermissions=r.getPermissions.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"getGroup",value:function(){var e=this,t=this.state.group;Object(O.b)("adm/auth/group/".concat(t.id)).then((function(a){t=a.data,e.setState({group:t}),e.getPermissions()})).catch((function(e){console.log(e)}))}},{key:"getPermissions",value:function(){var e,t=this,a=[],n=this.state.group.permissions;Object(O.b)("adm/auth/permission/").then((function(r){r.data.map((function(e){n.includes(e.id)&&a.push(e)})),e=r.data,t.setState({permission_list:e,selected_permissions:a})})).catch((function(e){console.log(e)}))}},{key:"changeHandler",value:function(e){var t=[this.state,e.target.id,e.target.value],a=t[0].group,n=t[2];a[t[1]]=n,this.setState({group:a})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state.group;""!==a.name&&Object(O.d)("adm/auth/group/".concat(a.id,"/"),a).then((function(a){"save_and_edit"!==e&&t.props.history.push("/".concat(E.a,"save"===e?"/auth/group":"/auth/group/add"))}))}},{key:"componentDidMount",value:function(){this.getGroup()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.group,r=n.name,i=n.permissions,o=a.permission_list,s=a.selected_permissions;return l.a.createElement(d.a,{classes:{root:t.layoutRoot},header:l.a.createElement("div",{className:"py-24"},l.a.createElement("h1",null,"Groups")),contentToolbar:l.a.createElement("div",{className:"px-24"},l.a.createElement("span",null,"Edit Group")),content:l.a.createElement(u.a,{fixed:!0},l.a.createElement("div",{className:"p-24"},l.a.createElement("form",{id:"edit_user",autoComplete:"off"},l.a.createElement(p.a,{container:!0,spacing:3},l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(m.a,{id:"name",label:"Name",value:r,onChange:function(t){e.changeHandler(t)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement("h2",null,"PERMISSIONS"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(v.a,{multiple:!0,id:"permissions",options:o,disableCloseOnSelect:!0,value:s,onChange:this.onPermissionChange,getOptionLabel:function(e){return e.name},renderOption:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{icon:w,checkedIcon:y,style:{marginRight:8},checked:i&&i.includes(e.id)}),e.name)},renderInput:function(e){return l.a.createElement(m.a,Object.assign({},e,{id:"test",variant:"outlined",label:"User Permissions"}))}}))),l.a.createElement("div",{className:t.root,style:{textAlign:"right"}},l.a.createElement(f.a,{variant:"contained",onClick:function(){e.handleSubmit("save_and_new")}},"Save and add another"),l.a.createElement(f.a,{variant:"contained",onClick:function(){e.handleSubmit("save_and_edit")}},"Save and continue editing"),l.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){e.handleSubmit("save")}},"Save")))))})}}]),a}(c.Component);t.default=Object(h.b)(null,null)(Object(b.a)((function(e){return{layoutRoot:{},root:{"& > *":{margin:e.spacing(1),textAlign:"right"}}}}))(C))}}]);