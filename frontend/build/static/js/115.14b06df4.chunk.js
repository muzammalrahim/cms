(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[115],{1585:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(39),r=a(36),o=a(1537),l=a(2),c=a(0),i=a.n(c),s=a(1565),d=a(6);var u=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(s.a,{theme:t},e.header))},m=a(18),p=a(1531),f=a(1550);var b=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(s.a,{theme:t},i.a.createElement("div",{className:Object(l.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var O=i.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),n=Object(m.a)(a,2),r=n[0],o=n[1],s=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){o(!r)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{lgUp:"permanent"===e.variant},i.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(l.default)(s.sidebarWrapper,e.variant),paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},i.a.createElement(b,e))),"permanent"===e.variant&&i.a.createElement(f.a,{mdDown:!0},i.a.createElement(p.a,{variant:"permanent",className:Object(l.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},i.a.createElement(b,e))))})),E=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),h=i.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),n=Object(c.useRef)(null),o=Object(c.useRef)(null),s=E(e),d=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(l.default)(s.root,e.innerScroll&&s.innerScroll),ref:o},i.a.createElement("div",{className:s.topBg}),i.a.createElement("div",{className:"flex container w-full"},m&&i.a.createElement(O,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o}),i.a.createElement("div",{className:Object(l.default)(s.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(u,{header:e.header,classes:s}),i.a.createElement("div",{className:Object(l.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&i.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&i.a.createElement(O,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:o})))}));h.defaultProps={};var g=i.a.memo(h)},1655:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),c=a(9),i=o.forwardRef((function(e,t){var a=e.classes,c=e.className,i=e.dividers,s=void 0!==i&&i,d=Object(r.a)(e,["classes","className","dividers"]);return o.createElement("div",Object(n.a)({className:Object(l.default)(a.root,c,s&&a.dividers),ref:t},d))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(i)},1668:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),c=a(9),i=o.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,i=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(n.a)({className:Object(l.default)(i.root,s,!c&&i.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},3121:function(e,t,a){"use strict";a.r(t);var n=a(1585),r=a(298),o=a(0),l=a.n(o),c=a(6),i=a(54),s=a(164),d=a(5),u=a(49),m=a.n(u),p="[TODO APP] GET TODOS",f="[TODO APP] UPDATE TODO";function b(){return function(e,t){var a=t().todoApp.todos.routeParams;return m.a.get("/api/todo-app/todos",{params:a}).then((function(t){return e({type:"[TODO APP] UPDATE TODOS",payload:t.data})}))}}function O(e){var t=m.a.post("/api/todo-app/update-todo",e);return function(e){return t.then((function(t){Promise.all([e({type:f,payload:t.data})]).then((function(){return e(b())}))}))}}var E="[TODO APP] GET FOLDERS";var h="[TODO APP] GET LABELS";var g="[TODO APP] GET FILTERS";var v=a(73),y=a(11),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(y.a)(t.payload);default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)(t.payload);default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(y.a)(t.payload);default:return e}},T=a(39),N=a(8),S={entities:[],searchText:"",orderBy:"",orderDescending:!1,routeParams:{},todoDialog:{type:"new",props:{open:!1},data:null}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),{},{entities:N.a.keyBy(t.payload,"id"),searchText:"",routeParams:t.routeParams});case"[TODO APP] UPDATE TODOS":return Object(d.a)(Object(d.a)({},e),{},{entities:N.a.keyBy(t.payload,"id")});case"[TODO APP] OPEN NEW TODO DIALOG":return Object(d.a)(Object(d.a)({},e),{},{todoDialog:{type:"new",props:{open:!0},data:null}});case"[TODO APP] CLOSE NEW TODO DIALOG":return Object(d.a)(Object(d.a)({},e),{},{todoDialog:{type:"new",props:{open:!1},data:null}});case"[TODO APP] OPEN EDIT TODO DIALOG":return Object(d.a)(Object(d.a)({},e),{},{todoDialog:{type:"edit",props:{open:!0},data:t.data}});case"[TODO APP] CLOSE EDIT TODO DIALOG":return Object(d.a)(Object(d.a)({},e),{},{todoDialog:{type:"edit",props:{open:!1},data:null}});case f:var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{entities:Object(d.a)(Object(d.a)({},e.entities),{},Object(T.a)({},a.id,Object(d.a)({},a)))});case"[TODO APP] SET SEARCH TEXT":return Object(d.a)(Object(d.a)({},e),{},{searchText:t.searchText});case"[TODO APP] TOGGLE ORDER DESCENDING":return Object(d.a)(Object(d.a)({},e),{},{orderDescending:!e.orderDescending});case"[TODO APP] CHANGE ORDER":return Object(d.a)(Object(d.a)({},e),{},{orderBy:t.orderBy});default:return e}},k=Object(v.d)({todos:P,folders:D,labels:x,filters:j}),A=a(18),C=a(26),w=a(1564),I=a(1576),L=a(1543),R=a(1549),G=a(1551),H=a(235),B=a(620),W=a(1554),_=a(1668),M=a(1655),F=a(1563),U=a(795),V=a(1538),z=a(794),q=a(1566),Y=a(1545),J=a(531),X=a(1540),K=a(1546),Q=a(1547),Z=a(247),$=a(149),ee=a.n($),te={id:"",title:"",notes:"",startDate:new Date,dueDate:new Date,completed:!1,starred:!1,important:!1,deleted:!1,labels:[]};var ae=function(e){var t=Object(c.c)(),a=Object(c.d)((function(e){return e.todoApp.todos.todoDialog})),n=Object(c.d)((function(e){return e.todoApp.labels})),r=Object(o.useState)(null),i=Object(A.a)(r,2),u=i[0],p=i[1],f=Object(s.c)(Object(d.a)({},te)),E=f.form,h=f.handleChange,g=f.setForm,v=ee()(E.startDate).format(ee.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),j=ee()(E.dueDate).format(ee.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),D=Object(o.useCallback)((function(){"edit"===a.type&&a.data&&g(Object(d.a)({},a.data)),"new"===a.type&&g(Object(d.a)(Object(d.a)(Object(d.a)({},te),a.data),{},{id:C.a.generateGUID()}))}),[a.data,a.type,g]);function x(){return"edit"===a.type?t({type:"[TODO APP] CLOSE EDIT TODO DIALOG"}):t({type:"[TODO APP] CLOSE NEW TODO DIALOG"})}function T(e,t){e.stopPropagation(),g(N.a.set(Object(d.a)(Object(d.a)({},E),{},{labels:E.labels.includes(t)?E.labels.filter((function(e){return e!==t})):[].concat(Object(y.a)(E.labels),[t])})))}function S(){return E.title.length>0}return Object(o.useEffect)((function(){a.props.open&&D()}),[a.props.open,D]),l.a.createElement(W.a,Object.assign({},a.props,{onClose:x,fullWidth:!0,maxWidth:"sm"}),l.a.createElement(w.a,{position:"static",elevation:1},l.a.createElement(Q.a,{className:"flex w-full"},l.a.createElement(Z.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New Todo":"Edit Todo"))),l.a.createElement(M.a,{classes:{root:"p-0"}},l.a.createElement("div",{className:"mb-16"},l.a.createElement("div",{className:"flex items-center justify-between p-12"},l.a.createElement("div",{className:"flex"},l.a.createElement(R.a,{tabIndex:-1,checked:E.completed,onChange:function(){g(Object(d.a)(Object(d.a)({},E),{},{completed:!E.completed}))},onClick:function(e){return e.stopPropagation()}})),l.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},l.a.createElement(z.a,{onClick:function(){g(Object(d.a)(Object(d.a)({},E),{},{important:!E.important}))}},E.important?l.a.createElement(V.a,{style:{color:H.a[500]}},"error"):l.a.createElement(V.a,null,"error_outline")),l.a.createElement(z.a,{onClick:function(){g(Object(d.a)(Object(d.a)({},E),{},{starred:!E.starred}))}},E.starred?l.a.createElement(V.a,{style:{color:B.a[500]}},"star"):l.a.createElement(V.a,null,"star_outline")),l.a.createElement("div",null,l.a.createElement(z.a,{"aria-owns":u?"label-menu":null,"aria-haspopup":"true",onClick:function(e){p(e.currentTarget)}},l.a.createElement(V.a,null,"label")),l.a.createElement(J.a,{id:"label-menu",anchorEl:u,open:Boolean(u),onClose:function(e){p(null)}},n.length>0&&n.map((function(e){return l.a.createElement(X.a,{onClick:function(t){return T(t,e.id)},key:e.id},l.a.createElement(q.a,{className:"min-w-24"},l.a.createElement(V.a,{color:"action"},E.labels.includes(e.id)?"check_box":"check_box_outline_blank")),l.a.createElement(Y.a,{className:"mx-8",primary:e.title,disableTypography:!0}),l.a.createElement(q.a,{className:"min-w-24"},l.a.createElement(V.a,{style:{color:e.color},color:"action"},"label")))})))))),l.a.createElement(F.a,{className:"mx-24"})),E.labels.length>0&&l.a.createElement("div",{className:"flex flex-wrap w-full px-12 sm:px-20 mb-16"},E.labels.map((function(e){return l.a.createElement(G.a,{avatar:l.a.createElement(I.a,{classes:{colorDefault:"bg-transparent"}},l.a.createElement(V.a,{className:"text-20",style:{color:N.a.find(n,{id:e}).color}},"label")),label:N.a.find(n,{id:e}).title,onDelete:function(t){return T(t,e)},className:"mx-4 my-4",classes:{label:"px-8"},key:e})}))),l.a.createElement("div",{className:"px-16 sm:px-24"},l.a.createElement(U.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0},l.a.createElement(K.a,{label:"Title",autoFocus:!0,name:"title",value:E.title,onChange:h,required:!0,variant:"outlined"})),l.a.createElement(U.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0},l.a.createElement(K.a,{label:"Notes",name:"notes",multiline:!0,rows:"6",value:E.notes,onChange:h,variant:"outlined"})),l.a.createElement("div",{className:"flex -mx-4"},l.a.createElement(K.a,{name:"startDate",label:"Start Date",type:"datetime-local",className:"mt-8 mb-16 mx-4",InputLabelProps:{shrink:!0},inputProps:{max:j},value:v,onChange:h,variant:"outlined"}),l.a.createElement(K.a,{name:"dueDate",label:"Due Date",type:"datetime-local",className:"mt-8 mb-16 mx-4",InputLabelProps:{shrink:!0},inputProps:{min:v},value:j,onChange:h,variant:"outlined"})))),"new"===a.type?l.a.createElement(_.a,{className:"justify-between p-8"},l.a.createElement("div",{className:"px-16"},l.a.createElement(L.a,{variant:"contained",color:"primary",onClick:function(){t(function(e){var t=m.a.post("/api/todo-app/new-todo",e);return function(e){return t.then((function(t){return Promise.all([e({type:"[TODO APP] ADD TODO"})]).then((function(){return e(b())}))}))}}(E)),x()},disabled:!S()},"Add"))):l.a.createElement(_.a,{className:"justify-between p-8"},l.a.createElement("div",{className:"px-16"},l.a.createElement(L.a,{variant:"contained",color:"primary",onClick:function(){t(O(E)),x()},disabled:!S()},"Save")),l.a.createElement(z.a,{className:"min-w-auto",onClick:function(){t(function(e){var t=m.a.post("/api/todo-app/remove-todo",e);return function(e){return t.then((function(t){return Promise.all([e({type:"[TODO APP] REMOVE TODO"})]).then((function(){return e(b())}))}))}}(E.id)),x()}},l.a.createElement(V.a,null,"delete"))))},ne=a(1550),re=a(737),oe=a(245),le=a(1565);var ce=function(e){var t=Object(c.c)(),a=Object(c.d)((function(e){return e.todoApp.todos.searchText})),n=Object(c.d)((function(e){return e.fuse.settings.mainTheme}));return l.a.createElement(le.a,{theme:n},l.a.createElement("div",{className:"flex flex-1"},l.a.createElement(oe.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 rounded-8",elevation:1},l.a.createElement(ne.a,{lgUp:!0},l.a.createElement(z.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},l.a.createElement(V.a,null,"menu"))),l.a.createElement(V.a,{color:"action"},"search"),l.a.createElement(re.a,{placeholder:"Search",className:"px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t({type:"[TODO APP] SET SEARCH TEXT",searchText:e.target.value.toLowerCase()})}}))))},ie=a(131),se=a(206),de=a(1497),ue=a(1498),me=a(1537),pe=a(2),fe=Object(me.a)((function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}}));var be=function(e){var t=fe();return l.a.createElement("div",{className:Object(pe.default)(t.root,e.className)},l.a.createElement("div",{className:t.color,style:{backgroundColor:e.color}}),l.a.createElement("div",null,e.title))},Oe=Object(me.a)({todoItem:{"&.completed":{background:"rgba(0,0,0,0.03)","& .todo-title, & .todo-notes":{textDecoration:"line-through"}}}});var Ee=function(e){var t=Object(c.c)(),a=Object(c.d)((function(e){return e.todoApp.labels})),n=Oe(e);return l.a.createElement(ue.a,{className:Object(pe.default)(n.todoItem,{completed:e.todo.completed},"border-solid border-b-1 py-16 px-0 sm:px-8"),onClick:function(a){a.preventDefault(),t({type:"[TODO APP] OPEN EDIT TODO DIALOG",data:e.todo})},dense:!0,button:!0},l.a.createElement(R.a,{tabIndex:-1,disableRipple:!0,checked:e.todo.completed,onChange:function(){return t(function(e){var t=Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed});return function(e){return Promise.all([e({type:"[TODO APP] TOGGLE COMPLETED"})]).then((function(){return e(O(t))}))}}(e.todo))},onClick:function(e){return e.stopPropagation()}}),l.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden px-8"},l.a.createElement(Z.a,{variant:"subtitle1",className:"todo-title truncate",color:e.todo.completed?"textSecondary":"inherit"},e.todo.title),l.a.createElement(Z.a,{color:"textSecondary",className:"todo-notes truncate"},N.a.truncate(e.todo.notes.replace(/<(?:.|\n)*?>/gm,""),{length:180})),l.a.createElement("div",{className:Object(pe.default)(n.labels,"flex -mx-2")},e.todo.labels.map((function(e){return l.a.createElement(be,{className:"mx-2 mt-4",title:N.a.find(a,{id:e}).title,color:N.a.find(a,{id:e}).color,key:e})})))),l.a.createElement("div",{className:"px-8"},l.a.createElement(z.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(function(e){var t=Object(d.a)(Object(d.a)({},e),{},{important:!e.important});return function(e){return Promise.all([e({type:"[TODO APP] TOGGLE IMPORTANT"})]).then((function(){return e(O(t))}))}}(e.todo))}},e.todo.important?l.a.createElement(V.a,{style:{color:H.a[500]}},"error"):l.a.createElement(V.a,null,"error_outline")),l.a.createElement(z.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(function(e){var t=Object(d.a)(Object(d.a)({},e),{},{starred:!e.starred});return function(e){return Promise.all([e({type:"[TODO APP] TOGGLE STARRED"})]).then((function(){return e(O(t))}))}}(e.todo))}},e.todo.starred?l.a.createElement(V.a,{style:{color:B.a[500]}},"star"):l.a.createElement(V.a,null,"star_outline"))))};var he=function(e){var t=Object(c.d)((function(e){return e.todoApp.todos.entities})),a=Object(c.d)((function(e){return e.todoApp.todos.searchText})),n=Object(c.d)((function(e){return e.todoApp.todos.orderBy})),r=Object(c.d)((function(e){return e.todoApp.todos.orderDescending})),i=Object(o.useState)(null),s=Object(A.a)(i,2),d=s[0],u=s[1];return Object(o.useEffect)((function(){t&&u(N.a.orderBy(function(e,t){var a=Object.keys(e).map((function(t){return e[t]}));return 0===t.length?a:C.a.filterArrayByString(a,t)}(t,a),[n],[r?"desc":"asc"]))}),[t,a,n,r]),d?0===d.length?l.a.createElement(ie.a,{delay:100},l.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},l.a.createElement(Z.a,{color:"textSecondary",variant:"h5"},"There are no todos!"))):l.a.createElement(de.a,{className:"p-0"},l.a.createElement(se.a,{enter:{animation:"transition.slideUpBigIn"}},d.map((function(e){return l.a.createElement(Ee,{todo:e,key:e.id})})))):null},ge=a(116),ve=a(1562),ye=Object(me.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}},listSubheader:{paddingLeft:24}}}));var je=function(e){var t=Object(c.c)(),a=Object(c.d)((function(e){return e.todoApp.labels})),n=Object(c.d)((function(e){return e.todoApp.folders})),r=Object(c.d)((function(e){return e.todoApp.filters})),o=ye(e);return l.a.createElement(ie.a,{animation:"transition.slideUpIn",delay:400},l.a.createElement("div",{className:"flex-auto border-l-1 border-solid"},l.a.createElement("div",{className:"p-24"},l.a.createElement(L.a,{onClick:function(){t({type:"[TODO APP] OPEN NEW TODO DIALOG"})},variant:"contained",color:"primary",className:"w-full"},"ADD TASK")),l.a.createElement("div",{className:o.listWrapper},l.a.createElement(de.a,null,n.length>0&&n.map((function(e){return l.a.createElement(ue.a,{button:!0,component:ge.a,to:"/apps/todo/".concat(e.handle),key:e.id,activeClassName:"active",className:o.listItem},l.a.createElement(V.a,{className:"list-item-icon",color:"action"},e.icon),l.a.createElement(Y.a,{primary:e.title,disableTypography:!0}))}))),l.a.createElement(de.a,null,l.a.createElement(ve.a,{className:o.listSubheader,disableSticky:!0},"FILTERS"),r.length>0&&r.map((function(e){return l.a.createElement(ue.a,{button:!0,component:ge.a,to:"/apps/todo/filter/".concat(e.handle),activeClassName:"active",className:o.listItem,key:e.id},l.a.createElement(V.a,{className:"list-item-icon",color:"action"},e.icon),l.a.createElement(Y.a,{primary:e.title,disableTypography:!0}))}))),l.a.createElement(de.a,null,l.a.createElement(ve.a,{className:o.listSubheader,disableSticky:!0},"LABELS"),a.length>0&&a.map((function(e){return l.a.createElement(ue.a,{button:!0,component:ge.a,to:"/apps/todo/label/".concat(e.handle),key:e.id,className:o.listItem},l.a.createElement(V.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),l.a.createElement(Y.a,{primary:e.title,disableTypography:!0}))}))))))},De={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"};var xe=function(){var e=Object(o.useState)("creapond"),t=Object(A.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},l.a.createElement("div",{className:"flex items-center flex-1"},l.a.createElement(ie.a,{animation:"transition.expandIn",delay:300},l.a.createElement(V.a,{className:"text-32"},"check_box")),l.a.createElement(ie.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement("span",{className:"text-24 mx-16"},"To-Do"))),l.a.createElement(ie.a,{animation:"transition.slideUpIn",delay:300},l.a.createElement(K.a,{id:"account-selection",select:!0,label:a,value:a,onChange:function(e){n(e.target.value)},placeholder:"Select Account",margin:"normal"},Object.keys(De).map((function(e,t){return l.a.createElement(X.a,{key:e,value:e},De[e])})))))},Te=a(799);var Ne=function(e){var t=Object(c.c)(),a=Object(c.d)((function(e){return e.todoApp.todos.orderBy})),n=Object(c.d)((function(e){return e.todoApp.todos.orderDescending}));return l.a.createElement("div",{className:"flex justify-between w-full"},l.a.createElement("div",{className:"flex"}),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(U.a,{className:""},l.a.createElement(Te.a,{value:a,onChange:function(e){t(function(e){return{type:"[TODO APP] CHANGE ORDER",orderBy:e}}(e.target.value))},displayEmpty:!0,name:"filter",className:""},l.a.createElement(X.a,{value:""},l.a.createElement("em",null,"Order by")),l.a.createElement(X.a,{value:"startDate"},"Start Date"),l.a.createElement(X.a,{value:"dueDate"},"Due Date"),l.a.createElement(X.a,{value:"title"},"Title"))),l.a.createElement(z.a,{onClick:function(e){return t({type:"[TODO APP] TOGGLE ORDER DESCENDING"})}},l.a.createElement(V.a,{style:{transform:n?"scaleY(-1)":"scaleY(1)"}},"sort"))))};t.default=Object(r.a)("todoApp",k)((function(e){var t=Object(c.c)(),a=Object(o.useRef)(null),r=Object(i.i)();return Object(o.useEffect)((function(){t(function(){var e=m.a.get("/api/todo-app/filters");return function(t){return e.then((function(e){return t({type:g,payload:e.data})}))}}()),t(function(){var e=m.a.get("/api/todo-app/folders");return function(t){return e.then((function(e){return t({type:E,payload:e.data})}))}}()),t(function(){var e=m.a.get("/api/todo-app/labels");return function(t){return e.then((function(e){return t({type:h,payload:e.data})}))}}())}),[t]),Object(s.b)((function(){t(function(e){var t=m.a.get("/api/todo-app/todos",{params:e});return function(a){return t.then((function(t){return a({type:p,routeParams:e,payload:t.data})}))}}(r))}),[t,r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{classes:{root:"w-full",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:l.a.createElement(ce,{pageLayout:a}),contentToolbar:l.a.createElement(Ne,null),content:l.a.createElement(he,null),leftSidebarHeader:l.a.createElement(xe,null),leftSidebarContent:l.a.createElement(je,null),ref:a,innerScroll:!0}),l.a.createElement(ae,null))}))}}]);