(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[66],{1577:function(e,a,n){"use strict";n.d(a,"a",(function(){return S}));var t=n(15),o=n(146),r=n(1557),i=n(1566),l=n(1536),c=n(1569),s=n(1570),m=n(0),d=n.n(m),u=n(11),p=n(6),b=n(84),f=n(85),h=n(162),v=n(161),g=n(1489),E=n(771),x=n(1527),y=n(1556),N=n(9),I=n(181),F=n(506),w=n(1578),T=n.n(w),j=Object(g.a)({productionPrefix:"iframe-"}),O=function(e){Object(h.a)(n,e);var a=Object(v.a)(n);function n(){var e;Object(b.a)(this,n);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={ready:!1},e.handleRef=function(a){e.contentDocument=a?a.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(I.b)(Object(p.a)(Object(p.a)({},Object(E.a)()),{},{plugins:[].concat(Object(u.a)(Object(E.a)().plugins),[Object(F.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,a=e.children,n=e.classes,t=e.theme;return d.a.createElement(T.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(x.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},d.a.createElement(y.a,{theme:t},d.a.cloneElement(a,{container:this.state.container}))):null)}}]),n}(d.a.Component),A=Object(N.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(O);function C(e){var a=Object(m.useState)(e.currentTabIndex),n=Object(t.a)(a,2),u=n[0],p=n[1],b=e.component,f=e.raw,h=e.iframe,v=e.className;return d.a.createElement(i.a,{className:v},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,a){p(a)}},b&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"remove_red_eye")}),f&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center"},d.a.createElement("div",{className:0===u?"flex flex-1":"hidden"},b&&(h?d.a.createElement(A,null,d.a.createElement(b,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},d.a.createElement(b,null)))),d.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},f&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}C.defaultProps={currentTabIndex:0};var S=C},1628:function(e,a,n){"use strict";var t=n(773);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),r=(0,t(n(1575)).default)(o.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=r},1629:function(e,a,n){"use strict";var t=n(773);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),r=(0,t(n(1575)).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=r},1900:function(e,a,n){"use strict";var t=n(773);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),r=(0,t(n(1575)).default)(o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=r},1901:function(e,a,n){"use strict";var t=n(773);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),r=(0,t(n(1575)).default)(o.default.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");a.default=r},2325:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h}));var t=n(0),o=n.n(t),r=n(1535),i=n(1558),l=n(1628),c=n.n(l),s=n(1900),m=n.n(s),d=n(1629),u=n.n(d),p=n(1901),b=n.n(p),f=Object(r.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function h(){var e=f();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{color:"primary","aria-label":"add"},o.a.createElement(c.a,null)),o.a.createElement(i.a,{color:"secondary","aria-label":"edit"},o.a.createElement(m.a,null)),o.a.createElement(i.a,{variant:"extended"},o.a.createElement(b.a,{className:e.extendedIcon}),"Navigate"),o.a.createElement(i.a,{disabled:!0,"aria-label":"like"},o.a.createElement(u.a,null)))}},2326:function(e,a,n){"use strict";n.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport NavigationIcon from '@material-ui/icons/Navigation';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtons() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Fab color=\"primary\" aria-label=\"add\">\n        <AddIcon />\n      </Fab>\n      <Fab color=\"secondary\" aria-label=\"edit\">\n        <EditIcon />\n      </Fab>\n      <Fab variant=\"extended\">\n        <NavigationIcon className={classes.extendedIcon} />\n        Navigate\n      </Fab>\n      <Fab disabled aria-label=\"like\">\n        <FavoriteIcon />\n      </Fab>\n    </div>\n  );\n}\n"},2327:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return u}));var t=n(0),o=n.n(t),r=n(1535),i=n(1558),l=n(1628),c=n.n(l),s=n(1901),m=n.n(s),d=Object(r.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function u(){var e=d();return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(i.a,{size:"small",color:"secondary","aria-label":"add",className:e.margin},o.a.createElement(c.a,null)),o.a.createElement(i.a,{size:"medium",color:"secondary","aria-label":"add",className:e.margin},o.a.createElement(c.a,null)),o.a.createElement(i.a,{color:"secondary","aria-label":"add",className:e.margin},o.a.createElement(c.a,null))),o.a.createElement("div",null,o.a.createElement(i.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:e.margin},o.a.createElement(m.a,{className:e.extendedIcon}),"Extended"),o.a.createElement(i.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin},o.a.createElement(m.a,{className:e.extendedIcon}),"Extended"),o.a.createElement(i.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin},o.a.createElement(m.a,{className:e.extendedIcon}),"Extended")))}},2328:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Fab from \'@material-ui/core/Fab\';\nimport AddIcon from \'@material-ui/icons/Add\';\nimport NavigationIcon from \'@material-ui/icons/Navigation\';\n\nconst useStyles = makeStyles((theme) => ({\n  margin: {\n    margin: theme.spacing(1),\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtonSize() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <div>\n        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n      </div>\n      <div>\n        <Fab\n          variant="extended"\n          size="small"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab\n          variant="extended"\n          size="medium"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n      </div>\n    </div>\n  );\n}\n'},2329:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return A}));var t=n(15),o=n(203),r=n(0),i=n.n(r),l=n(2),c=n(1743),s=n.n(c),m=n(1535),d=n(52),u=n(1557),p=n(1570),b=n(1569),f=n(247),h=n(1890),v=n(1558),g=n(1628),E=n.n(g),x=n(1900),y=n.n(x),N=n(1803),I=n.n(N),F=n(234),w=n(1706);function T(e){var a=e.children,n=e.value,t=e.index,r=Object(o.a)(e,["children","value","index"]);return i.a.createElement(f.a,Object.assign({component:"div",role:"tabpanel",hidden:n!==t,id:"action-tabpanel-".concat(t),"aria-labelledby":"action-tab-".concat(t)},r),n===t&&i.a.createElement(w.a,{p:3},a))}function j(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var O=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fabGreen:{color:e.palette.common.white,backgroundColor:F.a[500],"&:hover":{backgroundColor:F.a[600]}}}}));function A(){var e=O(),a=Object(d.a)(),n=i.a.useState(0),o=Object(t.a)(n,2),r=o[0],c=o[1],m={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},f=[{color:"primary",className:e.fab,icon:i.a.createElement(E.a,null),label:"Add"},{color:"secondary",className:e.fab,icon:i.a.createElement(y.a,null),label:"Edit"},{color:"inherit",className:Object(l.default)(e.fab,e.fabGreen),icon:i.a.createElement(I.a,null),label:"Expand"}];return i.a.createElement("div",{className:e.root},i.a.createElement(u.a,{position:"static",color:"default"},i.a.createElement(p.a,{value:r,onChange:function(e,a){c(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},i.a.createElement(b.a,Object.assign({label:"Item One"},j(0))),i.a.createElement(b.a,Object.assign({label:"Item Two"},j(1))),i.a.createElement(b.a,Object.assign({label:"Item Three"},j(2))))),i.a.createElement(s.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){c(e)}},i.a.createElement(T,{value:r,index:0,dir:a.direction},"Item One"),i.a.createElement(T,{value:r,index:1,dir:a.direction},"Item Two"),i.a.createElement(T,{value:r,index:2,dir:a.direction},"Item Three")),f.map((function(e,a){return i.a.createElement(h.a,{key:e.color,in:r===a,timeout:m,style:{transitionDelay:"".concat(r===a?m.exit:0,"ms")},unmountOnExit:!0},i.a.createElement(v.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}},2330:function(e,a,n){"use strict";n.r(a),a.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport clsx from 'clsx';\nimport SwipeableViews from 'react-swipeable-views';\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport Tabs from '@material-ui/core/Tabs';\nimport Tab from '@material-ui/core/Tab';\nimport Typography from '@material-ui/core/Typography';\nimport Zoom from '@material-ui/core/Zoom';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport UpIcon from '@material-ui/icons/KeyboardArrowUp';\nimport { green } from '@material-ui/core/colors';\nimport Box from '@material-ui/core/Box';\n\nfunction TabPanel(props) {\n  const { children, value, index, ...other } = props;\n\n  return (\n    <Typography\n      component=\"div\"\n      role=\"tabpanel\"\n      hidden={value !== index}\n      id={`action-tabpanel-${index}`}\n      aria-labelledby={`action-tab-${index}`}\n      {...other}\n    >\n      {value === index && <Box p={3}>{children}</Box>}\n    </Typography>\n  );\n}\n\nTabPanel.propTypes = {\n  children: PropTypes.node,\n  index: PropTypes.any.isRequired,\n  value: PropTypes.any.isRequired,\n};\n\nfunction a11yProps(index) {\n  return {\n    id: `action-tab-${index}`,\n    'aria-controls': `action-tabpanel-${index}`,\n  };\n}\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    backgroundColor: theme.palette.background.paper,\n    width: 500,\n    position: 'relative',\n    minHeight: 200,\n  },\n  fab: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  fabGreen: {\n    color: theme.palette.common.white,\n    backgroundColor: green[500],\n    '&:hover': {\n      backgroundColor: green[600],\n    },\n  },\n}));\n\nexport default function FloatingActionButtonZoom() {\n  const classes = useStyles();\n  const theme = useTheme();\n  const [value, setValue] = React.useState(0);\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  const handleChangeIndex = (index) => {\n    setValue(index);\n  };\n\n  const transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen,\n  };\n\n  const fabs = [\n    {\n      color: 'primary',\n      className: classes.fab,\n      icon: <AddIcon />,\n      label: 'Add',\n    },\n    {\n      color: 'secondary',\n      className: classes.fab,\n      icon: <EditIcon />,\n      label: 'Edit',\n    },\n    {\n      color: 'inherit',\n      className: clsx(classes.fab, classes.fabGreen),\n      icon: <UpIcon />,\n      label: 'Expand',\n    },\n  ];\n\n  return (\n    <div className={classes.root}>\n      <AppBar position=\"static\" color=\"default\">\n        <Tabs\n          value={value}\n          onChange={handleChange}\n          indicatorColor=\"primary\"\n          textColor=\"primary\"\n          variant=\"fullWidth\"\n          aria-label=\"action tabs example\"\n        >\n          <Tab label=\"Item One\" {...a11yProps(0)} />\n          <Tab label=\"Item Two\" {...a11yProps(1)} />\n          <Tab label=\"Item Three\" {...a11yProps(2)} />\n        </Tabs>\n      </AppBar>\n      <SwipeableViews\n        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}\n        index={value}\n        onChangeIndex={handleChangeIndex}\n      >\n        <TabPanel value={value} index={0} dir={theme.direction}>\n          Item One\n        </TabPanel>\n        <TabPanel value={value} index={1} dir={theme.direction}>\n          Item Two\n        </TabPanel>\n        <TabPanel value={value} index={2} dir={theme.direction}>\n          Item Three\n        </TabPanel>\n      </SwipeableViews>\n      {fabs.map((fab, index) => (\n        <Zoom\n          key={fab.color}\n          in={value === index}\n          timeout={transitionDuration}\n          style={{\n            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,\n          }}\n          unmountOnExit\n        >\n          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>\n            {fab.icon}\n          </Fab>\n        </Zoom>\n      ))}\n    </div>\n  );\n}\n"},3011:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(1577),i=(n(146),n(200)),l=n(1541),c=n(1536),s=n(247),m=n(1535),d=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));a.default=function(e){var a=d();return o.a.createElement(i.a,{classes:{root:a.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(c.a,{className:"text-18",color:"action"},"home"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Documentation"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(s.a,{variant:"h6"},"Floating action button")),o.a.createElement(l.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/floating-action-button",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Floating action button"),o.a.createElement(s.a,{className:"description"},"A floating action button (FAB) performs the primary, or most common, action on a screen."),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Floating Action Button"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"A ",o.a.createElement("a",{href:"https://material.io/design/components/buttons-floating-action-button.html"},"floating action button"),"appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Only use a FAB if it is the most suitable way to present a screen\u2019s primary action."),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Only one floating action button is recommended per screen to represent the most common action."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2325).default,raw:n(2326)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Size"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Use the ",o.a.createElement("code",null,"size")," prop for larger or smaller floating action buttons."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2327).default,raw:n(2328)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Animation"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"The floating action button animates onto the screen as an expanding piece of material, by default."),o.a.createElement(s.a,{className:"mb-16",component:"div"},"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."),o.a.createElement(s.a,{className:"mb-16",component:"div"},"The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",o.a.createElement("code",null,"enterDelay")," to allow the outgoing Floating Action Button's animation to finish before the new one enters."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2329).default,raw:n(2330)})))})}}}]);