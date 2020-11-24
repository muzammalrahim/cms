(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[44],{1577:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var a=t(18),o=t(145),r=t(1562),l=t(1566),i=t(1536),c=t(1569),m=t(1570),s=t(0),u=t.n(s),p=t(11),d=t(5),f=t(82),h=t(83),E=t(162),v=t(161),M=t(1487),y=t(771),I=t(1527),b=t(1563),g=t(9),C=t(181),k=t(505),x=t(1578),S=t.n(x),w=Object(M.a)({productionPrefix:"iframe-"}),N=function(e){Object(E.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(C.b)(Object(d.a)(Object(d.a)({},Object(y.a)()),{},{plugins:[].concat(Object(p.a)(Object(y.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return u.a.createElement(S.a,{head:this.renderHead(),ref:this.handleRef,className:t.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(I.b,{jss:this.state.jss,generateClassName:w,sheetsManager:this.state.sheetsManager},u.a.createElement(b.a,{theme:a},u.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(u.a.Component),L=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(N);function T(e){var n=Object(s.useState)(e.currentTabIndex),t=Object(a.a)(n,2),p=t[0],d=t[1],f=e.component,h=e.raw,E=e.iframe,v=e.className;return u.a.createElement(l.a,{className:v},u.a.createElement(r.a,{position:"static",color:"default",elevation:0},u.a.createElement(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){d(n)}},f&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(i.a,null,"remove_red_eye")}),h&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(i.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:0===p?"flex flex-1":"hidden"},f&&(E?u.a.createElement(L,null,u.a.createElement(f,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},u.a.createElement(f,null)))),u.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},h&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}T.defaultProps={currentTabIndex:0};var O=T},2397:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var a=t(18),o=t(0),r=t.n(o),l=t(1541),i=t(529),c=t(1538);function m(){var e=r.a.useState(null),n=Object(a.a)(e,2),t=n[0],o=n[1],m=function(){o(null)};return r.a.createElement("div",null,r.a.createElement(l.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},"Open Menu"),r.a.createElement(i.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:m},r.a.createElement(c.a,{onClick:m},"Profile"),r.a.createElement(c.a,{onClick:m},"My account"),r.a.createElement(c.a,{onClick:m},"Logout")))}},2398:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\n\nexport default function SimpleMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <div>\n      <Button aria-controls=\"simple-menu\" aria-haspopup=\"true\" onClick={handleClick}>\n        Open Menu\n      </Button>\n      <Menu\n        id=\"simple-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={Boolean(anchorEl)}\n        onClose={handleClose}\n      >\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\n        <MenuItem onClick={handleClose}>My account</MenuItem>\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\n      </Menu>\n    </div>\n  );\n}\n"},2399:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var a=t(18),o=t(0),r=t.n(o),l=t(1535),i=t(1495),c=t(1496),m=t(1543),s=t(1538),u=t(529),p=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}})),d=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function f(){var e=p(),n=r.a.useState(null),t=Object(a.a)(n,2),o=t[0],l=t[1],f=r.a.useState(1),h=Object(a.a)(f,2),E=h[0],v=h[1];return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{component:"nav","aria-label":"Device settings"},r.a.createElement(c.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){l(e.currentTarget)}},r.a.createElement(m.a,{primary:"When device is locked",secondary:d[E]}))),r.a.createElement(u.a,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){l(null)}},d.map((function(e,n){return r.a.createElement(s.a,{key:e,disabled:0===n,selected:n===E,onClick:function(e){return function(e,n){v(n),l(null)}(0,n)}},e)}))))}},2400:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Menu from '@material-ui/core/Menu';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nconst options = [\n  'Show some love to Material-UI',\n  'Show all notification content',\n  'Hide sensitive notification content',\n  'Hide all notification content',\n];\n\nexport default function SimpleListMenu() {\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\n\n  const handleClickListItem = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleMenuItemClick = (event, index) => {\n    setSelectedIndex(index);\n    setAnchorEl(null);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <div className={classes.root}>\n      <List component=\"nav\" aria-label=\"Device settings\">\n        <ListItem\n          button\n          aria-haspopup=\"true\"\n          aria-controls=\"lock-menu\"\n          aria-label=\"when device is locked\"\n          onClick={handleClickListItem}\n        >\n          <ListItemText primary=\"When device is locked\" secondary={options[selectedIndex]} />\n        </ListItem>\n      </List>\n      <Menu\n        id=\"lock-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={Boolean(anchorEl)}\n        onClose={handleClose}\n      >\n        {options.map((option, index) => (\n          <MenuItem\n            key={option}\n            disabled={index === 0}\n            selected={index === selectedIndex}\n            onClick={(event) => handleMenuItemClick(event, index)}\n          >\n            {option}\n          </MenuItem>\n        ))}\n      </Menu>\n    </div>\n  );\n}\n"},2401:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t(18),o=t(0),r=t.n(o),l=t(1541),i=t(1489),c=t(503),m=t(244),s=t(1500),u=t(1538),p=t(1494),d=t(1535),f=Object(d.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}}));function h(){var e=f(),n=r.a.useState(!1),t=Object(a.a)(n,2),o=t[0],d=t[1],h=r.a.useRef(null),E=function(e){h.current&&h.current.contains(e.target)||d(!1)};function v(e){"Tab"===e.key&&(e.preventDefault(),d(!1))}var M=r.a.useRef(o);return r.a.useEffect((function(){!0===M.current&&!1===o&&h.current.focus(),M.current=o}),[o]),r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{className:e.paper},r.a.createElement(p.a,null,r.a.createElement(u.a,null,"Profile"),r.a.createElement(u.a,null,"My account"),r.a.createElement(u.a,null,"Logout"))),r.a.createElement("div",null,r.a.createElement(l.a,{ref:h,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){d((function(e){return!e}))}},"Toggle Menu Grow"),r.a.createElement(s.a,{open:o,anchorEl:h.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var n=e.TransitionProps,t=e.placement;return r.a.createElement(c.a,Object.assign({},n,{style:{transformOrigin:"bottom"===t?"center top":"center bottom"}}),r.a.createElement(m.a,null,r.a.createElement(i.a,{onClickAway:E},r.a.createElement(p.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:v},r.a.createElement(u.a,{onClick:E},"Profile"),r.a.createElement(u.a,{onClick:E},"My account"),r.a.createElement(u.a,{onClick:E},"Logout")))))}))))}},2402:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Grow from '@material-ui/core/Grow';\nimport Paper from '@material-ui/core/Paper';\nimport Popper from '@material-ui/core/Popper';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MenuList from '@material-ui/core/MenuList';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n  },\n  paper: {\n    marginRight: theme.spacing(2),\n  },\n}));\n\nexport default function MenuListComposition() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n  const anchorRef = React.useRef(null);\n\n  const handleToggle = () => {\n    setOpen((prevOpen) => !prevOpen);\n  };\n\n  const handleClose = (event) => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === 'Tab') {\n      event.preventDefault();\n      setOpen(false);\n    }\n  }\n\n  // return focus to the button when we transitioned from !open -> open\n  const prevOpen = React.useRef(open);\n  React.useEffect(() => {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n\n  return (\n    <div className={classes.root}>\n      <Paper className={classes.paper}>\n        <MenuList>\n          <MenuItem>Profile</MenuItem>\n          <MenuItem>My account</MenuItem>\n          <MenuItem>Logout</MenuItem>\n        </MenuList>\n      </Paper>\n      <div>\n        <Button\n          ref={anchorRef}\n          aria-controls={open ? 'menu-list-grow' : undefined}\n          aria-haspopup=\"true\"\n          onClick={handleToggle}\n        >\n          Toggle Menu Grow\n        </Button>\n        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>\n          {({ TransitionProps, placement }) => (\n            <Grow\n              {...TransitionProps}\n              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}\n            >\n              <Paper>\n                <ClickAwayListener onClickAway={handleClose}>\n                  <MenuList autoFocusItem={open} id=\"menu-list-grow\" onKeyDown={handleListKeyDown}>\n                    <MenuItem onClick={handleClose}>Profile</MenuItem>\n                    <MenuItem onClick={handleClose}>My account</MenuItem>\n                    <MenuItem onClick={handleClose}>Logout</MenuItem>\n                  </MenuList>\n                </ClickAwayListener>\n              </Paper>\n            </Grow>\n          )}\n        </Popper>\n      </div>\n    </div>\n  );\n}\n"},2403:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return I}));var a=t(18),o=t(0),r=t.n(o),l=t(9),i=t(1541),c=t(529),m=t(1538),s=t(1564),u=t(1543),p=t(1632),d=t.n(p),f=t(1708),h=t.n(f),E=t(1763),v=t.n(E),M=Object(l.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(c.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),y=Object(l.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(m.a);function I(){var e=r.a.useState(null),n=Object(a.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(i.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){o(e.currentTarget)}},"Open Menu"),r.a.createElement(M,{id:"customized-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){o(null)}},r.a.createElement(y,null,r.a.createElement(s.a,null,r.a.createElement(v.a,{fontSize:"small"})),r.a.createElement(u.a,{primary:"Sent mail"})),r.a.createElement(y,null,r.a.createElement(s.a,null,r.a.createElement(h.a,{fontSize:"small"})),r.a.createElement(u.a,{primary:"Drafts"})),r.a.createElement(y,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{fontSize:"small"})),r.a.createElement(u.a,{primary:"Inbox"}))))}},2404:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\nimport DraftsIcon from '@material-ui/icons/Drafts';\nimport SendIcon from '@material-ui/icons/Send';\n\nconst StyledMenu = withStyles({\n  paper: {\n    border: '1px solid #d3d4d5',\n  },\n})((props) => (\n  <Menu\n    elevation={0}\n    getContentAnchorEl={null}\n    anchorOrigin={{\n      vertical: 'bottom',\n      horizontal: 'center',\n    }}\n    transformOrigin={{\n      vertical: 'top',\n      horizontal: 'center',\n    }}\n    {...props}\n  />\n));\n\nconst StyledMenuItem = withStyles((theme) => ({\n  root: {\n    '&:focus': {\n      backgroundColor: theme.palette.primary.main,\n      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n        color: theme.palette.common.white,\n      },\n    },\n  },\n}))(MenuItem);\n\nexport default function CustomizedMenus() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <div>\n      <Button\n        aria-controls=\"customized-menu\"\n        aria-haspopup=\"true\"\n        variant=\"contained\"\n        color=\"primary\"\n        onClick={handleClick}\n      >\n        Open Menu\n      </Button>\n      <StyledMenu\n        id=\"customized-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={Boolean(anchorEl)}\n        onClose={handleClose}\n      >\n        <StyledMenuItem>\n          <ListItemIcon>\n            <SendIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Sent mail\" />\n        </StyledMenuItem>\n        <StyledMenuItem>\n          <ListItemIcon>\n            <DraftsIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Drafts\" />\n        </StyledMenuItem>\n        <StyledMenuItem>\n          <ListItemIcon>\n            <InboxIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Inbox\" />\n        </StyledMenuItem>\n      </StyledMenu>\n    </div>\n  );\n}\n"},2405:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t(18),o=t(0),r=t.n(o),l=t(792),i=t(529),c=t(1538),m=t(1686),s=t.n(m),u=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function p(){var e=r.a.useState(null),n=Object(a.a)(e,2),t=n[0],o=n[1],m=Boolean(t),p=function(){o(null)};return r.a.createElement("div",null,r.a.createElement(l.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(s.a,null)),r.a.createElement(i.a,{id:"long-menu",anchorEl:t,keepMounted:!0,open:m,onClose:p,PaperProps:{style:{maxHeight:216,width:"20ch"}}},u.map((function(e){return r.a.createElement(c.a,{key:e,selected:"Pyxis"===e,onClick:p},e)}))))}},2406:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport IconButton from '@material-ui/core/IconButton';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MoreVertIcon from '@material-ui/icons/MoreVert';\n\nconst options = [\n  'None',\n  'Atria',\n  'Callisto',\n  'Dione',\n  'Ganymede',\n  'Hangouts Call',\n  'Luna',\n  'Oberon',\n  'Phobos',\n  'Pyxis',\n  'Sedna',\n  'Titania',\n  'Triton',\n  'Umbriel',\n];\n\nconst ITEM_HEIGHT = 48;\n\nexport default function LongMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <div>\n      <IconButton\n        aria-label=\"more\"\n        aria-controls=\"long-menu\"\n        aria-haspopup=\"true\"\n        onClick={handleClick}\n      >\n        <MoreVertIcon />\n      </IconButton>\n      <Menu\n        id=\"long-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={open}\n        onClose={handleClose}\n        PaperProps={{\n          style: {\n            maxHeight: ITEM_HEIGHT * 4.5,\n            width: '20ch',\n          },\n        }}\n      >\n        {options.map((option) => (\n          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>\n            {option}\n          </MenuItem>\n        ))}\n      </Menu>\n    </div>\n  );\n}\n"},2407:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var a=t(0),o=t.n(a),r=t(1494),l=t(1538),i=t(244),c=t(1535),m=t(1564),s=t(246),u=t(1708),p=t.n(u),d=t(1763),f=t.n(d),h=t(2408),E=t.n(h),v=Object(c.a)({root:{width:230}});function M(){var e=v();return o.a.createElement(i.a,{className:e.root},o.a.createElement(r.a,null,o.a.createElement(l.a,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{fontSize:"small"})),o.a.createElement(s.a,{variant:"inherit"},"A short message")),o.a.createElement(l.a,null,o.a.createElement(m.a,null,o.a.createElement(E.a,{fontSize:"small"})),o.a.createElement(s.a,{variant:"inherit"},"A very long text that overflows")),o.a.createElement(l.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,{fontSize:"small"})),o.a.createElement(s.a,{variant:"inherit",noWrap:!0},"A very long text that overflows"))))}},2409:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport MenuList from '@material-ui/core/MenuList';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Paper from '@material-ui/core/Paper';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\nimport Typography from '@material-ui/core/Typography';\nimport DraftsIcon from '@material-ui/icons/Drafts';\nimport SendIcon from '@material-ui/icons/Send';\nimport PriorityHighIcon from '@material-ui/icons/PriorityHigh';\n\nconst useStyles = makeStyles({\n  root: {\n    width: 230,\n  },\n});\n\nexport default function TypographyMenu() {\n  const classes = useStyles();\n\n  return (\n    <Paper className={classes.root}>\n      <MenuList>\n        <MenuItem>\n          <ListItemIcon>\n            <SendIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\">A short message</Typography>\n        </MenuItem>\n        <MenuItem>\n          <ListItemIcon>\n            <PriorityHighIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\">A very long text that overflows</Typography>\n        </MenuItem>\n        <MenuItem>\n          <ListItemIcon>\n            <DraftsIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\" noWrap>\n            A very long text that overflows\n          </Typography>\n        </MenuItem>\n      </MenuList>\n    </Paper>\n  );\n}\n"},2410:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(18),o=t(0),r=t.n(o),l=t(1541),i=t(529),c=t(1538),m=t(768);function s(){var e=r.a.useState(null),n=Object(a.a)(e,2),t=n[0],o=n[1],s=Boolean(t),u=function(){o(null)};return r.a.createElement("div",null,r.a.createElement(l.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},"Open with fade transition"),r.a.createElement(i.a,{id:"fade-menu",anchorEl:t,keepMounted:!0,open:s,onClose:u,TransitionComponent:m.a},r.a.createElement(c.a,{onClick:u},"Profile"),r.a.createElement(c.a,{onClick:u},"My account"),r.a.createElement(c.a,{onClick:u},"Logout")))}},2411:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Fade from '@material-ui/core/Fade';\n\nexport default function FadeMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <div>\n      <Button aria-controls=\"fade-menu\" aria-haspopup=\"true\" onClick={handleClick}>\n        Open with fade transition\n      </Button>\n      <Menu\n        id=\"fade-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={open}\n        onClose={handleClose}\n        TransitionComponent={Fade}\n      >\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\n        <MenuItem onClick={handleClose}>My account</MenuItem>\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\n      </Menu>\n    </div>\n  );\n}\n"},2412:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(18),o=t(0),r=t.n(o),l=t(529),i=t(1538),c=t(246),m={mouseX:null,mouseY:null};function s(){var e=r.a.useState(m),n=Object(a.a)(e,2),t=n[0],o=n[1],s=function(){o(m)};return r.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),o({mouseX:e.clientX-2,mouseY:e.clientY-4})},style:{cursor:"context-menu"}},r.a.createElement(c.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."),r.a.createElement(l.a,{keepMounted:!0,open:null!==t.mouseY,onClose:s,anchorReference:"anchorPosition",anchorPosition:null!==t.mouseY&&null!==t.mouseX?{top:t.mouseY,left:t.mouseX}:void 0},r.a.createElement(i.a,{onClick:s},"Copy"),r.a.createElement(i.a,{onClick:s},"Print"),r.a.createElement(i.a,{onClick:s},"Highlight"),r.a.createElement(i.a,{onClick:s},"Email")))}},2413:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Typography from '@material-ui/core/Typography';\n\nconst initialState = {\n  mouseX: null,\n  mouseY: null,\n};\n\nexport default function ContextMenu() {\n  const [state, setState] = React.useState(initialState);\n\n  const handleClick = (event) => {\n    event.preventDefault();\n    setState({\n      mouseX: event.clientX - 2,\n      mouseY: event.clientY - 4,\n    });\n  };\n\n  const handleClose = () => {\n    setState(initialState);\n  };\n\n  return (\n    <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>\n      <Typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit\n        amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi\n        finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada\n        ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis\n        finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet\n        facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse\n        lacinia tellus a libero volutpat maximus.\n      </Typography>\n      <Menu\n        keepMounted\n        open={state.mouseY !== null}\n        onClose={handleClose}\n        anchorReference=\"anchorPosition\"\n        anchorPosition={\n          state.mouseY !== null && state.mouseX !== null\n            ? { top: state.mouseY, left: state.mouseX }\n            : undefined\n        }\n      >\n        <MenuItem onClick={handleClose}>Copy</MenuItem>\n        <MenuItem onClick={handleClose}>Print</MenuItem>\n        <MenuItem onClick={handleClose}>Highlight</MenuItem>\n        <MenuItem onClick={handleClose}>Email</MenuItem>\n      </Menu>\n    </div>\n  );\n}\n"},2414:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1541),l=t(529),i=t(1538),c=t(1730),m=t.n(c);function s(){return o.a.createElement(m.a,{variant:"popover",popupId:"demo-popup-menu"},(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,Object.assign({variant:"contained",color:"primary"},Object(c.bindTrigger)(e)),"Open Menu"),o.a.createElement(l.a,Object(c.bindMenu)(e),o.a.createElement(i.a,{onClick:e.close},"Cake"),o.a.createElement(i.a,{onClick:e.close},"Death")))}))}},2415:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';\n\nexport default function MenuPopupState() {\n  return (\n    <PopupState variant=\"popover\" popupId=\"demo-popup-menu\">\n      {(popupState) => (\n        <React.Fragment>\n          <Button variant=\"contained\" color=\"primary\" {...bindTrigger(popupState)}>\n            Open Menu\n          </Button>\n          <Menu {...bindMenu(popupState)}>\n            <MenuItem onClick={popupState.close}>Cake</MenuItem>\n            <MenuItem onClick={popupState.close}>Death</MenuItem>\n          </Menu>\n        </React.Fragment>\n      )}\n    </PopupState>\n  );\n}\n"},3017:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(1577),l=(t(145),t(200)),i=t(1541),c=t(1536),m=t(246),s=t(1535),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){var n=u();return o.a.createElement(l.a,{classes:{root:n.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(c.a,{className:"text-18",color:"action"},"home"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Documentation"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(m.a,{variant:"h6"},"Menus")),o.a.createElement(i.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/menus",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(m.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Menus"),o.a.createElement(m.a,{className:"description"},"Menus display a list of choices on temporary surfaces."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"A ",o.a.createElement("a",{href:"https://material.io/design/components/menus.html"},"Menu")," displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Menu"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Simple menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make sure that all menu items are completely visible."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Choosing an option should immediately ideally commit the option and close the menu."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("strong",null,"Disambiguation"),": In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user\u2019s current context."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2397).default,raw:t(2398)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Selected menus"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item. The currently selected menu item is set using the ",o.a.createElement("code",null,"selected")," property (from ",o.a.createElement("a",{href:"/api/list-item/"},"ListItem"),"). To use a selected menu item without impacting the initial focus or the vertical positioning of the menu, set the ",o.a.createElement("code",null,"variant")," property to ",o.a.createElement("code",null,"menu"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2399).default,raw:t(2400)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"MenuList composition"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"Menu")," component uses the ",o.a.createElement("code",null,"Popover")," component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a ",o.a.createElement("code",null,"MenuList")," component that you can compose, with ",o.a.createElement("code",null,"Popper")," in this example."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The primary responsibility of the ",o.a.createElement("code",null,"MenuList")," component is to handle the focus."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2401).default,raw:t(2402)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized menus"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2403).default,raw:t(2404)})),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"MenuItem")," is a wrapper around ",o.a.createElement("code",null,"ListItem")," with some additional styles. You can use the same list composition features with the ",o.a.createElement("code",null,"MenuItem")," component:"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"\ud83c\udfa8 If you are looking for inspiration, you can check ",o.a.createElement("a",{href:"https://mui-treasury.com/styles/menu"},"MUI Treasury's customization examples"),"."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Max height menus"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"If the height of a menu prevents all menu items from being displayed, the menu can scroll internally."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2405).default,raw:t(2406)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Limitations"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"There is ",o.a.createElement("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=327437"},"a flexbox bug")," that prevents ",o.a.createElement("code",null,"text-overflow: ellipsis")," from working in a flexbox layout. You can use the ",o.a.createElement("code",null,"Typography")," component with ",o.a.createElement("code",null,"noWrap")," to workaround this issue:"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2407).default,raw:t(2409)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Change transition"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Use a different transition."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2410).default,raw:t(2411)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Context menu"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Here is an example of a context menu. (Right click to open.)"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2412).default,raw:t(2413)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Complementary projects"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"For more advanced use cases you might be able to take advantage of:"),o.a.createElement(m.a,{className:"text-24 mt-32 mb-8",component:"h3"},"PopupState helper"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"There is a 3rd party package ",o.a.createElement("a",{href:"https://github.com/jcoreio/material-ui-popup-state"},o.a.createElement("code",null,"material-ui-popup-state"))," that takes care of menu state for you in most cases."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2414).default,raw:t(2415)})))})}}}]);