(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[45],{1579:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(18),o=t(146),r=t(1564),c=t(1568),s=t(1538),i=t(1571),l=t(1572),m=t(0),u=t.n(m),p=t(11),d=t(5),f=t(83),h=t(84),b=t(162),k=t(161),v=t(1489),g=t(773),E=t(1529),C=t(1565),y=t(9),S=t(182),B=t(508),w=t(1580),N=t.n(w),T=Object(v.a)({productionPrefix:"iframe-"}),I=function(e){Object(b.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(S.b)(Object(d.a)(Object(d.a)({},Object(g.a)()),{},{plugins:[].concat(Object(p.a)(Object(g.a)().plugins),[Object(B.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return u.a.createElement(N.a,{head:this.renderHead(),ref:this.handleRef,className:t.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(E.b,{jss:this.state.jss,generateClassName:T,sheetsManager:this.state.sheetsManager},u.a.createElement(C.a,{theme:a},u.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(u.a.Component),O=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(I);function x(e){var n=Object(m.useState)(e.currentTabIndex),t=Object(a.a)(n,2),p=t[0],d=t[1],f=e.component,h=e.raw,b=e.iframe,k=e.className;return u.a.createElement(c.a,{className:k},u.a.createElement(r.a,{position:"static",color:"default",elevation:0},u.a.createElement(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){d(n)}},f&&u.a.createElement(i.a,{classes:{root:"min-w-64"},icon:u.a.createElement(s.a,null,"remove_red_eye")}),h&&u.a.createElement(i.a,{classes:{root:"min-w-64"},icon:u.a.createElement(s.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:0===p?"flex flex-1":"hidden"},f&&(b?u.a.createElement(O,null,u.a.createElement(f,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},u.a.createElement(f,null)))),u.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},h&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}x.defaultProps={currentTabIndex:0};var j=x},2561:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(18),o=t(0),r=t.n(o),c=t(1543),s=t(1556),i=t(794),l=t(1658),m=t.n(l);function u(){var e=r.a.useState(!1),n=Object(a.a)(e,2),t=n[0],o=n[1],l=function(e,n){"clickaway"!==n&&o(!1)};return r.a.createElement("div",null,r.a.createElement(c.a,{onClick:function(){o(!0)}},"Open simple snackbar"),r.a.createElement(s.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,autoHideDuration:6e3,onClose:l,message:"Note archived",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{color:"secondary",size:"small",onClick:l},"UNDO"),r.a.createElement(i.a,{size:"small","aria-label":"close",color:"inherit",onClick:l},r.a.createElement(m.a,{fontSize:"small"})))}))}},2562:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport CloseIcon from '@material-ui/icons/Close';\n\nexport default function SimpleSnackbar() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen(true);\n  };\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleClick}>Open simple snackbar</Button>\n      <Snackbar\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        open={open}\n        autoHideDuration={6000}\n        onClose={handleClose}\n        message=\"Note archived\"\n        action={\n          <React.Fragment>\n            <Button color=\"secondary\" size=\"small\" onClick={handleClose}>\n              UNDO\n            </Button>\n            <IconButton size=\"small\" aria-label=\"close\" color=\"inherit\" onClick={handleClose}>\n              <CloseIcon fontSize=\"small\" />\n            </IconButton>\n          </React.Fragment>\n        }\n      />\n    </div>\n  );\n}\n"},2563:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t(18),o=t(0),r=t.n(o),c=t(1543),s=t(1556),i=t(2956),l=t(1537);function m(e){return r.a.createElement(i.a,Object.assign({elevation:6,variant:"filled"},e))}var u=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function p(){var e=u(),n=r.a.useState(!1),t=Object(a.a)(n,2),o=t[0],i=t[1],l=function(e,n){"clickaway"!==n&&i(!1)};return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{variant:"outlined",onClick:function(){i(!0)}},"Open success snackbar"),r.a.createElement(s.a,{open:o,autoHideDuration:6e3,onClose:l},r.a.createElement(m,{onClose:l,severity:"success"},"This is a success message!")),r.a.createElement(m,{severity:"error"},"This is an error message!"),r.a.createElement(m,{severity:"warning"},"This is a warning message!"),r.a.createElement(m,{severity:"info"},"This is an information message!"),r.a.createElement(m,{severity:"success"},"This is a success message!"))}},2564:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport MuiAlert from '@material-ui/lab/Alert';\nimport { makeStyles } from '@material-ui/core/styles';\n\nfunction Alert(props) {\n  return <MuiAlert elevation={6} variant=\"filled\" {...props} />;\n}\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function CustomizedSnackbars() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen(true);\n  };\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  return (\n    <div className={classes.root}>\n      <Button variant=\"outlined\" onClick={handleClick}>\n        Open success snackbar\n      </Button>\n      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>\n        <Alert onClose={handleClose} severity=\"success\">\n          This is a success message!\n        </Alert>\n      </Snackbar>\n      <Alert severity=\"error\">This is an error message!</Alert>\n      <Alert severity=\"warning\">This is a warning message!</Alert>\n      <Alert severity=\"info\">This is an information message!</Alert>\n      <Alert severity=\"success\">This is a success message!</Alert>\n    </div>\n  );\n}\n"},2565:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t(5),o=t(18),r=t(0),c=t.n(r),s=t(1543),i=t(1556);function l(){var e=c.a.useState({open:!1,vertical:"top",horizontal:"center"}),n=Object(o.a)(e,2),t=n[0],r=n[1],l=t.vertical,m=t.horizontal,u=t.open,p=function(e){return function(){r(Object(a.a)({open:!0},e))}},d=c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{onClick:p({vertical:"top",horizontal:"center"})},"Top-Center"),c.a.createElement(s.a,{onClick:p({vertical:"top",horizontal:"right"})},"Top-Right"),c.a.createElement(s.a,{onClick:p({vertical:"bottom",horizontal:"right"})},"Bottom-Right"),c.a.createElement(s.a,{onClick:p({vertical:"bottom",horizontal:"center"})},"Bottom-Center"),c.a.createElement(s.a,{onClick:p({vertical:"bottom",horizontal:"left"})},"Bottom-Left"),c.a.createElement(s.a,{onClick:p({vertical:"top",horizontal:"left"})},"Top-Left"));return c.a.createElement("div",null,d,c.a.createElement(i.a,{anchorOrigin:{vertical:l,horizontal:m},open:u,onClose:function(){r(Object(a.a)(Object(a.a)({},t),{},{open:!1}))},message:"I love snacks",key:l+m}))}},2566:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\n\nexport default function PositionedSnackbar() {\n  const [state, setState] = React.useState({\n    open: false,\n    vertical: 'top',\n    horizontal: 'center',\n  });\n\n  const { vertical, horizontal, open } = state;\n\n  const handleClick = (newState) => () => {\n    setState({ open: true, ...newState });\n  };\n\n  const handleClose = () => {\n    setState({ ...state, open: false });\n  };\n\n  const buttons = (\n    <React.Fragment>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>\n        Bottom-Right\n      </Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>\n        Bottom-Center\n      </Button>\n      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>\n      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>\n    </React.Fragment>\n  );\n\n  return (\n    <div>\n      {buttons}\n      <Snackbar\n        anchorOrigin={{ vertical, horizontal }}\n        open={open}\n        onClose={handleClose}\n        message=\"I love snacks\"\n        key={vertical + horizontal}\n      />\n    </div>\n  );\n}\n"},2567:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var a=t(0),o=t.n(a),r=t(1543),c=t(1537),s=t(1492),i=o.a.createElement(r.a,{color:"secondary",size:"small"},"lorem ipsum dolorem"),l=Object(c.a)((function(e){return{root:{maxWidth:600,"& > * + *":{marginTop:e.spacing(2)}}}}));function m(){var e=l();return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{message:"I love snacks.",action:i}),o.a.createElement(s.a,{message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),o.a.createElement(s.a,{message:"I love candy. I love cookies. I love cupcakes.",action:i}),o.a.createElement(s.a,{message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:i}))}},2568:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport { makeStyles } from '@material-ui/core/styles';\nimport SnackbarContent from '@material-ui/core/SnackbarContent';\n\nconst action = (\n  <Button color=\"secondary\" size=\"small\">\n    lorem ipsum dolorem\n  </Button>\n);\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    maxWidth: 600,\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function LongTextSnackbar() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <SnackbarContent message=\"I love snacks.\" action={action} />\n      <SnackbarContent\n        message={\n          'I love candy. I love cookies. I love cupcakes. \\\n          I love cheesecake. I love chocolate.'\n        }\n      />\n      <SnackbarContent message=\"I love candy. I love cookies. I love cupcakes.\" action={action} />\n      <SnackbarContent\n        message={\n          'I love candy. I love cookies. I love cupcakes. \\\n          I love cheesecake. I love chocolate.'\n        }\n        action={action}\n      />\n    </div>\n  );\n}\n"},2569:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t(11),o=t(5),r=t(18),c=t(0),s=t.n(c),i=t(1537),l=t(1543),m=t(1556),u=t(794),p=t(1658),d=t.n(p),f=Object(i.a)((function(e){return{close:{padding:e.spacing(.5)}}}));function h(){var e=s.a.useState([]),n=Object(r.a)(e,2),t=n[0],c=n[1],i=s.a.useState(!1),p=Object(r.a)(i,2),h=p[0],b=p[1],k=s.a.useState(void 0),v=Object(r.a)(k,2),g=v[0],E=v[1];s.a.useEffect((function(){t.length&&!g?(E(Object(o.a)({},t[0])),c((function(e){return e.slice(1)})),b(!0)):t.length&&g&&h&&b(!1)}),[t,g,h]);var C=function(e){return function(){c((function(n){return[].concat(Object(a.a)(n),[{message:e,key:(new Date).getTime()}])}))}},y=function(e,n){"clickaway"!==n&&b(!1)},S=f();return s.a.createElement("div",null,s.a.createElement(l.a,{onClick:C("Message A")},"Show message A"),s.a.createElement(l.a,{onClick:C("Message B")},"Show message B"),s.a.createElement(m.a,{key:g?g.key:void 0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:h,autoHideDuration:6e3,onClose:y,onExited:function(){E(void 0)},message:g?g.message:void 0,action:s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{color:"secondary",size:"small",onClick:y},"UNDO"),s.a.createElement(u.a,{"aria-label":"close",color:"inherit",className:S.close,onClick:y},s.a.createElement(d.a,null)))}))}},2570:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport CloseIcon from '@material-ui/icons/Close';\n\nconst useStyles = makeStyles((theme) => ({\n  close: {\n    padding: theme.spacing(0.5),\n  },\n}));\n\nexport default function ConsecutiveSnackbars() {\n  const [snackPack, setSnackPack] = React.useState([]);\n  const [open, setOpen] = React.useState(false);\n  const [messageInfo, setMessageInfo] = React.useState(undefined);\n\n  React.useEffect(() => {\n    if (snackPack.length && !messageInfo) {\n      // Set a new snack when we don't have an active one\n      setMessageInfo({ ...snackPack[0] });\n      setSnackPack((prev) => prev.slice(1));\n      setOpen(true);\n    } else if (snackPack.length && messageInfo && open) {\n      // Close an active snack when a new one is added\n      setOpen(false);\n    }\n  }, [snackPack, messageInfo, open]);\n\n  const handleClick = (message) => () => {\n    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);\n  };\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return;\n    }\n    setOpen(false);\n  };\n\n  const handleExited = () => {\n    setMessageInfo(undefined);\n  };\n\n  const classes = useStyles();\n  return (\n    <div>\n      <Button onClick={handleClick('Message A')}>Show message A</Button>\n      <Button onClick={handleClick('Message B')}>Show message B</Button>\n      <Snackbar\n        key={messageInfo ? messageInfo.key : undefined}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        open={open}\n        autoHideDuration={6000}\n        onClose={handleClose}\n        onExited={handleExited}\n        message={messageInfo ? messageInfo.message : undefined}\n        action={\n          <React.Fragment>\n            <Button color=\"secondary\" size=\"small\" onClick={handleClose}>\n              UNDO\n            </Button>\n            <IconButton\n              aria-label=\"close\"\n              color=\"inherit\"\n              className={classes.close}\n              onClick={handleClose}\n            >\n              <CloseIcon />\n            </IconButton>\n          </React.Fragment>\n        }\n      />\n    </div>\n  );\n}\n"},2571:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var a=t(39),o=t(0),r=t.n(o),c=t(1537),s=t(1564),i=t(1759),l=t(1547),m=t(794),u=t(1619),p=t.n(u),d=t(247),f=t(1543),h=t(1558),b=t(1630),k=t.n(b),v=t(1556),g=Object(c.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.background.paper}},menuButton:{marginRight:e.spacing(2)},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},snackbar:Object(a.a)({},e.breakpoints.down("xs"),{bottom:90})}}));function E(){var e=g();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",null,r.a.createElement(s.a,{position:"static",color:"primary"},r.a.createElement(l.a,null,r.a.createElement(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(p.a,null)),r.a.createElement(d.a,{variant:"h6",color:"inherit"},"App Bar"))),r.a.createElement(h.a,{color:"secondary",className:e.fab},r.a.createElement(k.a,null)),r.a.createElement(v.a,{open:!0,autoHideDuration:6e3,message:"Archived",action:r.a.createElement(f.a,{color:"inherit",size:"small"},"Undo"),className:e.snackbar})))}},2572:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Toolbar from '@material-ui/core/Toolbar';\nimport IconButton from '@material-ui/core/IconButton';\nimport MenuIcon from '@material-ui/icons/Menu';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport Snackbar from '@material-ui/core/Snackbar';\n\nconst useStyles = makeStyles((theme) => ({\n  '@global': {\n    body: {\n      backgroundColor: theme.palette.background.paper,\n    },\n  },\n  menuButton: {\n    marginRight: theme.spacing(2),\n  },\n  fab: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  snackbar: {\n    [theme.breakpoints.down('xs')]: {\n      bottom: 90,\n    },\n  },\n}));\n\nexport default function FabIntegrationSnackbar() {\n  const classes = useStyles();\n\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <div>\n        <AppBar position=\"static\" color=\"primary\">\n          <Toolbar>\n            <IconButton\n              edge=\"start\"\n              className={classes.menuButton}\n              color=\"inherit\"\n              aria-label=\"menu\"\n            >\n              <MenuIcon />\n            </IconButton>\n            <Typography variant=\"h6\" color=\"inherit\">\n              App Bar\n            </Typography>\n          </Toolbar>\n        </AppBar>\n        <Fab color=\"secondary\" className={classes.fab}>\n          <AddIcon />\n        </Fab>\n        <Snackbar\n          open\n          autoHideDuration={6000}\n          message=\"Archived\"\n          action={\n            <Button color=\"inherit\" size=\"small\">\n              Undo\n            </Button>\n          }\n          className={classes.snackbar}\n        />\n      </div>\n    </React.Fragment>\n  );\n}\n"},2573:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var a=t(5),o=t(18),r=t(0),c=t.n(r),s=t(1543),i=t(1556),l=t(770),m=t(1501),u=t(505);function p(e){return c.a.createElement(m.a,Object.assign({},e,{direction:"up"}))}function d(e){return c.a.createElement(u.a,e)}function f(){var e=c.a.useState({open:!1,Transition:l.a}),n=Object(o.a)(e,2),t=n[0],r=n[1],m=function(e){return function(){r({open:!0,Transition:e})}};return c.a.createElement("div",null,c.a.createElement(s.a,{onClick:m(d)},"Grow Transition"),c.a.createElement(s.a,{onClick:m(l.a)},"Fade Transition"),c.a.createElement(s.a,{onClick:m(p)},"Slide Transition"),c.a.createElement(i.a,{open:t.open,onClose:function(){r(Object(a.a)(Object(a.a)({},t),{},{open:!1}))},TransitionComponent:t.Transition,message:"I love snacks",key:t.Transition.name}))}},2574:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport Fade from '@material-ui/core/Fade';\nimport Slide from '@material-ui/core/Slide';\nimport Grow from '@material-ui/core/Grow';\n\nfunction SlideTransition(props) {\n  return <Slide {...props} direction=\"up\" />;\n}\n\nfunction GrowTransition(props) {\n  return <Grow {...props} />;\n}\n\nexport default function TransitionsSnackbar() {\n  const [state, setState] = React.useState({\n    open: false,\n    Transition: Fade,\n  });\n\n  const handleClick = (Transition) => () => {\n    setState({\n      open: true,\n      Transition,\n    });\n  };\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false,\n    });\n  };\n\n  return (\n    <div>\n      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>\n      <Button onClick={handleClick(Fade)}>Fade Transition</Button>\n      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>\n      <Snackbar\n        open={state.open}\n        onClose={handleClose}\n        TransitionComponent={state.Transition}\n        message=\"I love snacks\"\n        key={state.Transition.name}\n      />\n    </div>\n  );\n}\n"},2575:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var a=t(18),o=t(0),r=t.n(o),c=t(1543),s=t(1556),i=t(1501);function l(e){return r.a.createElement(i.a,Object.assign({},e,{direction:"left"}))}function m(e){return r.a.createElement(i.a,Object.assign({},e,{direction:"up"}))}function u(e){return r.a.createElement(i.a,Object.assign({},e,{direction:"right"}))}function p(e){return r.a.createElement(i.a,Object.assign({},e,{direction:"down"}))}function d(){var e=r.a.useState(!1),n=Object(a.a)(e,2),t=n[0],o=n[1],i=r.a.useState(void 0),d=Object(a.a)(i,2),f=d[0],h=d[1],b=function(e){return function(){h((function(){return e})),o(!0)}};return r.a.createElement("div",null,r.a.createElement(c.a,{onClick:b(l)},"Right"),r.a.createElement(c.a,{onClick:b(m)},"Up"),r.a.createElement(c.a,{onClick:b(u)},"Left"),r.a.createElement(c.a,{onClick:b(p)},"Down"),r.a.createElement(s.a,{open:t,onClose:function(){o(!1)},TransitionComponent:f,message:"I love snacks",key:f?f.name:""}))}},2576:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Snackbar from '@material-ui/core/Snackbar';\nimport Slide from '@material-ui/core/Slide';\n\nfunction TransitionLeft(props) {\n  return <Slide {...props} direction=\"left\" />;\n}\n\nfunction TransitionUp(props) {\n  return <Slide {...props} direction=\"up\" />;\n}\n\nfunction TransitionRight(props) {\n  return <Slide {...props} direction=\"right\" />;\n}\n\nfunction TransitionDown(props) {\n  return <Slide {...props} direction=\"down\" />;\n}\n\nexport default function DirectionSnackbar() {\n  const [open, setOpen] = React.useState(false);\n  const [transition, setTransition] = React.useState(undefined);\n\n  const handleClick = (Transition) => () => {\n    setTransition(() => Transition);\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleClick(TransitionLeft)}>Right</Button>\n      <Button onClick={handleClick(TransitionUp)}>Up</Button>\n      <Button onClick={handleClick(TransitionRight)}>Left</Button>\n      <Button onClick={handleClick(TransitionDown)}>Down</Button>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        TransitionComponent={transition}\n        message=\"I love snacks\"\n        key={transition ? transition.name : ''}\n      />\n    </div>\n  );\n}\n"},2577:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var a=t(0),o=t.n(a),r=t(1543),c=t(2578);function s(){var e,n=Object(c.b)().enqueueSnackbar;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{onClick:function(){n("I love snacks.")}},"Show snackbar"),o.a.createElement(r.a,{onClick:(e="success",function(){n("This is a success message!",{variant:e})})},"Show success snackbar"))}function i(){return o.a.createElement(c.a,{maxSnack:3},o.a.createElement(s,null))}},2579:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport { SnackbarProvider, useSnackbar } from 'notistack';\n\nfunction MyApp() {\n  const { enqueueSnackbar } = useSnackbar();\n\n  const handleClick = () => {\n    enqueueSnackbar('I love snacks.');\n  };\n\n  const handleClickVariant = (variant) => () => {\n    // variant could be success, error, warning, info, or default\n    enqueueSnackbar('This is a success message!', { variant });\n  };\n\n  return (\n    <React.Fragment>\n      <Button onClick={handleClick}>Show snackbar</Button>\n      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>\n    </React.Fragment>\n  );\n}\n\nexport default function IntegrationNotistack() {\n  return (\n    <SnackbarProvider maxSnack={3}>\n      <MyApp />\n    </SnackbarProvider>\n  );\n}\n"},3033:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(1579),c=(t(146),t(201)),s=t(1543),i=t(1538),l=t(247),m=t(1537),u=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){var n=u();return o.a.createElement(c.a,{classes:{root:n.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(l.a,{variant:"h6"},"Snackbar")),o.a.createElement(s.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/snackbars",target:"_blank",role:"button"},o.a.createElement(i.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Snackbar"),o.a.createElement(l.a,{className:"description"},"Snackbars provide brief messages about app processes. The component is also known as a toast."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/snackbars.html"},"Snackbars")," inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn\u2019t interrupt the user experience, and they don\u2019t require user input to disappear."),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons. You can use them to display notifications."),o.a.createElement(l.a,{className:"text-16 mt-32 mb-8",component:"h4"},"Frequency"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Only one snackbar may be displayed at a time."),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple snackbars"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"A basic snackbar that aims to reproduce Google Keep's snackbar behavior."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2561).default,raw:t(2562)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized snackbars"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Here are some examples of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2563).default,raw:t(2564)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Positioned snackbars"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the ",o.a.createElement("code",null,"anchorOrigin")," prop."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2565).default,raw:t(2566)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Message Length"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Some snackbars with varying message length."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2567).default,raw:t(2568)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Transitions"),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Consecutive Snackbars"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"When multiple snackbar updates are necessary, they should appear one at a time."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2569).default,raw:t(2570)})),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Snackbars and floating action buttons (FABs)"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Snackbars should appear above FABs (on mobile)."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!0,component:t(2571).default,raw:t(2572)})),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Change Transition"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"/components/transitions/#grow"},"Grow")," is the default transition but you can use a different one."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2573).default,raw:t(2574)})),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Control Slide direction"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"You can change the direction of the ",o.a.createElement("a",{href:"/components/transitions/#slide"},"Slide")," transition."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2575).default,raw:t(2576)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Complementary projects"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"For more advanced use cases you might be able to take advantage of:"),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"notistack"),o.a.createElement(l.a,{className:"mb-16",component:"div"},' src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars" alt="stars/> src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads/>'),o.a.createElement(l.a,{className:"mb-16",component:"div"},"This example demonstrates how to use ",o.a.createElement("a",{href:"https://github.com/iamhosseindhv/notistack"},"notistack"),". notistack has an ",o.a.createElement("strong",null,"imperative API")," that makes it easy to display snackbars, without having to handle their open/close state. It also enables you to ",o.a.createElement("strong",null,"stack")," them on top of one another (although this is discouraged by the Material Design specification)."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2577).default,raw:t(2579)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-1.1/#alert"},"https://www.w3.org/TR/wai-aria-1.1/#alert"),")"),o.a.createElement("ul",null,o.a.createElement("li",null,"By default, the snackbar won't auto-hide. However, if you decide to use the ",o.a.createElement("code",null,"autoHideDuration")," prop, it's recommended to give the user ",o.a.createElement("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html"},"sufficient time")," to respond.")))})}}}]);