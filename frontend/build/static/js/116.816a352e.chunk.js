(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[116],{1585:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(39),r=a(36),i=a(1537),o=a(2),s=a(0),l=a.n(s),c=a(1565),d=a(6);var u=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return l.a.createElement("div",{className:e.classes.header},e.header&&l.a.createElement(c.a,{theme:t},e.header))},m=a(18),p=a(1531),f=a(1550);var g=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return l.a.createElement(l.a.Fragment,null,e.header&&l.a.createElement(c.a,{theme:t},l.a.createElement("div",{className:Object(o.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&l.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var h=l.a.forwardRef((function(e,t){var a=Object(s.useState)(!1),n=Object(m.a)(a,2),r=n[0],i=n[1],c=e.classes;Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){i(!r)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{lgUp:"permanent"===e.variant},l.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(o.default)(c.sidebarWrapper,e.variant),paper:Object(o.default)(c.sidebar,e.variant,"left"===e.position?c.leftSidebar:c.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:c.backdrop}},style:{position:"absolute"}},l.a.createElement(g,e))),"permanent"===e.variant&&l.a.createElement(f.a,{mdDown:!0},l.a.createElement(p.a,{variant:"permanent",className:Object(o.default)(c.sidebarWrapper,e.variant),open:r,classes:{paper:Object(o.default)(c.sidebar,e.variant,"left"===e.position?c.leftSidebar:c.rightSidebar)}},l.a.createElement(g,e))))})),b=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=l.a.forwardRef((function(e,t){var a=Object(s.useRef)(null),n=Object(s.useRef)(null),i=Object(s.useRef)(null),c=b(e),d=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return l.a.useImperativeHandle(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),l.a.createElement("div",{className:Object(o.default)(c.root,e.innerScroll&&c.innerScroll),ref:i},l.a.createElement("div",{className:c.topBg}),l.a.createElement("div",{className:"flex container w-full"},m&&l.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:c,ref:a,rootRef:i}),l.a.createElement("div",{className:Object(o.default)(c.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},l.a.createElement(u,{header:e.header,classes:c}),l.a.createElement("div",{className:Object(o.default)(c.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&l.a.createElement("div",{className:c.toolbar},e.contentToolbar),e.content&&l.a.createElement(r.a,{className:c.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&l.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:c,ref:n,rootRef:i})))}));v.defaultProps={};var x=l.a.memo(v)},1620:function(e,t,a){"use strict";var n=a(4),r=a(1),i=a(0),o=(a(3),a(2)),s=a(9),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=i.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,u=e.className,m=e.component,p=void 0===m?"div":m,f=e.container,g=void 0!==f&&f,h=e.direction,b=void 0===h?"row":h,v=e.item,x=void 0!==v&&v,E=e.justify,S=void 0===E?"flex-start":E,j=e.lg,k=void 0!==j&&j,y=e.md,O=void 0!==y&&y,w=e.sm,C=void 0!==w&&w,_=e.spacing,W=void 0===_?0:_,R=e.wrap,H=void 0===R?"wrap":R,N=e.xl,I=void 0!==N&&N,D=e.xs,L=void 0!==D&&D,T=e.zeroMinWidth,G=void 0!==T&&T,P=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(o.default)(d.root,u,g&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],x&&d.item,G&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==H&&d["wrap-xs-".concat(String(H))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==S&&d["justify-xs-".concat(String(S))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==O&&d["grid-md-".concat(String(O))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==I&&d["grid-xl-".concat(String(I))]);return i.createElement(p,Object(r.a)({className:z,ref:t},P))})),m=Object(s.a)((function(e){return Object(r.a)(Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return l.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};c.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=m},1809:function(e,t,a){"use strict";var n=a(1),r=a(4),i=a(19),o=a(0),s=(a(3),a(2)),l=a(9),c=a(10),d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,d=void 0===l?"div":l,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,f=void 0!==p&&p,g=e.maxWidth,h=void 0===g?"lg":g,b=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(s.default)(a.root,i,f&&a.fixed,m&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(c.a)(String(h)))]),ref:t},b))}));t.a=Object(l.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},3092:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(84),i=a(162),o=a(161),s=a(0),l=a.n(s),c=a(1585),d=a(1543),u=a(1809),m=a(1620),p=a(1546),f=a(1500),g=a(1542),h=a(1549),b=a(1488),v=a(6),x=a(3136),E=a(1710),S=a.n(E),j=a(1711),k=a.n(j),y=a(383),O=a(71),w=l.a.createElement(S.a,{fontSize:"small"}),C=l.a.createElement(k.a,{fontSize:"small"}),_=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onGroupChange=function(e,t){var a=[t,[],r.state],n=a[0],i=a[1],o=a[2].user;t.length>0&&t.map((function(e){i.push(e.id)})),o.groups=i,r.setState({selected_groups:n,user:o})},r.onPermissionChange=function(e,t){var a=[t,[],r.state],n=a[0],i=a[1],o=a[2].user;t.length>0&&t.map((function(e){i.push(e.id)})),o.user_permissions=i,r.setState({selected_permissions:n,user:o})},r.user={id:e.match.params.id,username:"",first_name:"",last_name:"",email:"",is_active:!1,is_staff:!1,is_superuser:!1,groups:[],user_permissions:[]},r.state={user:r.user,group_list:[],selected_groups:[],permission_list:[],selected_permissions:[]},r}return Object(r.a)(a,[{key:"getUser",value:function(){var e=this,t=this.state.user;Object(y.b)("adm/auth/user/".concat(t.id)).then((function(a){t=a.data,e.setState({user:t}),e.getGroups(),e.getPermissions()})).catch((function(e){console.log(e)}))}},{key:"getGroups",value:function(){var e,t=this,a=[],n=this.state.user.groups;Object(y.b)("adm/auth/group/").then((function(r){r.data.map((function(e){n.includes(e.id)&&a.push(e)})),e=r.data,t.setState({group_list:e,selected_groups:a})})).catch((function(e){console.log(e)}))}},{key:"getPermissions",value:function(){var e,t=this,a=[],n=this.state.user.user_permissions;Object(y.b)("adm/auth/permission/").then((function(r){r.data.map((function(e){n.includes(e.id)&&a.push(e)})),e=r.data,t.setState({permission_list:e,selected_permissions:a})})).catch((function(e){console.log(e)}))}},{key:"changeHandler",value:function(e){var t=[e.target.id,e.target.value,this.state.user],a=t[0],n=t[1],r=t[2];r[a]="is_active"===a||"is_staff"===a||"is_superuser"===a?!r[a]:n,this.setState({user:r})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state.user;""!==a.username&&Object(y.d)("adm/auth/user/".concat(a.id,"/"),a).then((function(a){"save_and_edit"!==e&&t.props.history.push("/".concat(O.a,"save"===e?"/auth/user":"/auth/user/add"))}))}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.user,r=n.username,i=n.first_name,o=n.last_name,s=n.email,b=n.is_active,v=n.is_staff,E=n.is_superuser,S=n.groups,j=n.user_permissions,k=a.group_list,y=a.selected_groups,O=a.permission_list,_=a.selected_permissions;return l.a.createElement(c.a,{classes:{root:t.layoutRoot},header:l.a.createElement("div",{className:"py-24"},l.a.createElement("h1",null,"Users")),contentToolbar:l.a.createElement("div",{className:"px-24"},l.a.createElement("span",null,"Edit User"),l.a.createElement(d.a,{variant:"contained",color:"primary",raised:!0,justifyContent:"flex-end",style:{marginLeft:"30px"}},"History"),l.a.createElement(d.a,{variant:"contained",color:"primary",raised:!0,justifyContent:"flex-end",style:{marginLeft:"30px"}},"Delete User")),content:l.a.createElement(u.a,{fixed:!0},l.a.createElement("div",{className:"p-24"},l.a.createElement("form",{id:"edit_user",className:t.root,autoComplete:"off"},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"username",label:"Username",value:r,onChange:function(t){e.changeHandler(t)},variant:"outlined",fullWidth:!0,helperText:"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."})),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"password",type:"password",label:"Password",variant:"outlined",fullWidth:!0,disabled:!0,helperText:"Raw passwords are not stored, so there is no way to see this user\u2019s password, but you can change the password using this form."})),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement("h2",null,"Personal Info"),l.a.createElement("hr",null)),l.a.createElement(m.a,{item:!0,xs:12,md:4},l.a.createElement(p.a,{fullWidth:!0,id:"first_name",label:"First Name",variant:"outlined",value:i,onChange:function(t){e.changeHandler(t)}})),l.a.createElement(m.a,{item:!0,xs:12,md:4},l.a.createElement(p.a,{fullWidth:!0,id:"last_name",label:"Last Name",variant:"outlined",value:o,onChange:function(t){e.changeHandler(t)}})),l.a.createElement(m.a,{item:!0,xs:12,md:4},l.a.createElement(p.a,{fullWidth:!0,id:"email",label:"Email Address",variant:"outlined",value:s,onChange:function(t){e.changeHandler(t)}})),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement("h2",null,"Permisions"),l.a.createElement("hr",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{control:l.a.createElement(h.a,{id:"is_active",color:"primary",checked:b,onChange:function(t){e.changeHandler(t)}}),label:"Active"}),l.a.createElement(g.a,{control:l.a.createElement(h.a,{id:"is_staff",color:"primary",checked:v,onChange:function(t){e.changeHandler(t)}}),label:"Staff Status"}),l.a.createElement(g.a,{control:l.a.createElement(h.a,{id:"is_superuser",color:"primary",checked:E,onChange:function(t){e.changeHandler(t)}}),label:"Superuser Status"}))),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement("h2",null,"Groups"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(x.a,{multiple:!0,id:"groups",options:k,disableCloseOnSelect:!0,value:y,onChange:this.onGroupChange,getOptionLabel:function(e){return e.name},renderOption:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{icon:w,checkedIcon:C,style:{marginRight:8},checked:S.includes(e.id)}),e.name)},renderInput:function(e){return l.a.createElement(p.a,Object.assign({},e,{id:"test",variant:"outlined",label:"Groups"}))}})),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement("h2",null,"USER PERMISSIONS"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(x.a,{multiple:!0,id:"permissions",options:O,disableCloseOnSelect:!0,value:_,onChange:this.onPermissionChange,getOptionLabel:function(e){return e.name},renderOption:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{icon:w,checkedIcon:C,style:{marginRight:8},checked:j.includes(e.id)}),e.name)},renderInput:function(e){return l.a.createElement(p.a,Object.assign({},e,{id:"test",variant:"outlined",label:"User Permissions"}))}})),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement("h2",null,"Important Dates"),l.a.createElement("hr",null),l.a.createElement("br",null)),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"outlined-basic",label:"Last Login Date",variant:"outlined",fullWidth:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"outlined-basic",label:"Last Login Time",variant:"outlined",fullWidth:!0})),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement("h2",null,"Date Joined"),l.a.createElement("hr",null),l.a.createElement("br",null)),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"outlined-basic",label:"Joined Date",variant:"outlined",fullWidth:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{id:"outlined-basic",label:"Joined Time",variant:"outlined",fullWidth:!0}))),l.a.createElement("div",{className:t.root},l.a.createElement(d.a,{variant:"contained",onClick:function(){e.handleSubmit("save_and_new")}},"Save and add another"),l.a.createElement(d.a,{variant:"contained",onClick:function(){e.handleSubmit("save_and_edit")}},"Save and continue editing"),l.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){e.handleSubmit("save")}},"Save")))))})}}]),a}(s.Component);t.default=Object(v.b)(null,null)(Object(b.a)((function(e){return{layoutRoot:{},PaperProps:{style:{maxHeight:224,width:250}},root:{"& > *":{margin:e.spacing(1),textAlign:"right"}}}}))(_))}}]);