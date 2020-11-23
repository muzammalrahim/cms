(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[71],{1577:function(e,n,o){"use strict";o.d(n,"a",(function(){return L}));var t=o(15),a=o(146),r=o(1557),l=o(1566),c=o(1536),i=o(1569),s=o(1570),m=o(0),p=o.n(m),u=o(11),h=o(6),d=o(84),f=o(85),v=o(162),g=o(161),b=o(1489),E=o(771),y=o(1527),O=o(1556),C=o(9),P=o(181),R=o(506),x=o(1578),j=o.n(x),N=Object(b.a)({productionPrefix:"iframe-"}),T=function(e){Object(v.a)(o,e);var n=Object(g.a)(o);function o(){var e;Object(d.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(P.b)(Object(h.a)(Object(h.a)({},Object(E.a)()),{},{plugins:[].concat(Object(u.a)(Object(E.a)().plugins),[Object(R.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),p.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(o,[{key:"render",value:function(){var e=this.props,n=e.children,o=e.classes,t=e.theme;return p.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:o.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?p.a.createElement(y.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager},p.a.createElement(O.a,{theme:t},p.a.cloneElement(n,{container:this.state.container}))):null)}}]),o}(p.a.Component),z=Object(C.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(T);function F(e){var n=Object(m.useState)(e.currentTabIndex),o=Object(t.a)(n,2),u=o[0],h=o[1],d=e.component,f=e.raw,v=e.iframe,g=e.className;return p.a.createElement(l.a,{className:g},p.a.createElement(r.a,{position:"static",color:"default",elevation:0},p.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){h(n)}},d&&p.a.createElement(i.a,{classes:{root:"min-w-64"},icon:p.a.createElement(c.a,null,"remove_red_eye")}),f&&p.a.createElement(i.a,{classes:{root:"min-w-64"},icon:p.a.createElement(c.a,null,"code")}))),p.a.createElement("div",{className:"flex justify-center"},p.a.createElement("div",{className:0===u?"flex flex-1":"hidden"},d&&(v?p.a.createElement(z,null,p.a.createElement(d,null)):p.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},p.a.createElement(d,null)))),p.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},f&&p.a.createElement("div",{className:"flex flex-1"},p.a.createElement(a.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}F.defaultProps={currentTabIndex:0};var L=F},1666:function(e,n,o){"use strict";var t=o(203),a=o(0),r=o(520),l=a.forwardRef((function(e,n){var o=e.code,l=e.language,c=Object(t.a)(e,["code","language"]);return a.createElement(r.a,Object.assign({component:"pre",className:"language-".concat(l||"jsx"),ref:n},c),o)}));n.a=l},2462:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return p}));var t=o(15),a=o(0),r=o.n(a),l=o(1535),c=o(1495),i=o(247),s=o(1541),m=Object(l.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function p(){var e=m(),n=r.a.useState(null),o=Object(t.a)(n,2),a=o[0],l=o[1],p=Boolean(a),u=p?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(s.a,{"aria-describedby":u,variant:"contained",color:"primary",onClick:function(e){l(e.currentTarget)}},"Open Popover"),r.a.createElement(c.a,{id:u,open:p,anchorEl:a,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(i.a,{className:e.typography},"The content of the Popover.")))}},2463:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Popover from '@material-ui/core/Popover';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\n\nconst useStyles = makeStyles((theme) => ({\n  typography: {\n    padding: theme.spacing(2),\n  },\n}));\n\nexport default function SimplePopover() {\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  const open = Boolean(anchorEl);\n  const id = open ? 'simple-popover' : undefined;\n\n  return (\n    <div>\n      <Button aria-describedby={id} variant=\"contained\" color=\"primary\" onClick={handleClick}>\n        Open Popover\n      </Button>\n      <Popover\n        id={id}\n        open={open}\n        anchorEl={anchorEl}\n        onClose={handleClose}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'center',\n        }}\n        transformOrigin={{\n          vertical: 'top',\n          horizontal: 'center',\n        }}\n      >\n        <Typography className={classes.typography}>The content of the Popover.</Typography>\n      </Popover>\n    </div>\n  );\n}\n"},2464:function(e,n,o){"use strict";o.r(n);var t=o(40),a=o(6),r=o(15),l=o(0),c=o.n(l),i=o(9),s=o(795),m=o(1499),p=o(1540),u=o(1539),h=o(1571),d=o(1666),f=o(1626),v=o(234),g=o(247),b=o(1541),E=o(1495),y=o(735),O=o(798),C={anchorVertical:{top:{top:-5},center:{top:"calc(50% - 5px)"},bottom:{bottom:-5}},anchorHorizontal:{left:{left:-5},center:{left:"calc(50% - 5px)"},right:{right:-5}}};n.default=Object(i.a)((function(e){return{buttonWrapper:{position:"relative",marginBottom:e.spacing(4)},anchor:{backgroundColor:v.a[500],width:10,height:10,borderRadius:"50%",position:"absolute"},radioAnchor:{color:v.a[600],"&$checked":{color:v.a[500]}},checked:{},typography:{margin:e.spacing(2)}}}))((function(e){var n=e.classes,o=c.a.useRef(),l=c.a.useState({open:!1,anchorOriginVertical:"top",anchorOriginHorizontal:"left",transformOriginVertical:"top",transformOriginHorizontal:"left",positionTop:200,positionLeft:400,anchorReference:"anchorEl"}),i=Object(r.a)(l,2),v=i[0],P=i[1],R=v.open,x=v.anchorOriginVertical,j=v.anchorOriginHorizontal,N=v.transformOriginVertical,T=v.transformOriginHorizontal,z=v.positionTop,F=v.positionLeft,L=v.anchorReference,S=function(e){P(Object(a.a)(Object(a.a)({},v),{},Object(t.a)({},e.target.name,e.target.value)))},w=function(e){return function(n){P(Object(a.a)(Object(a.a)({},v),{},Object(t.a)({},e,parseInt(n.target.value,10))))}},k="";"anchorPosition"===L&&(k='\n  anchorReference="'.concat(L,'"\n  anchorPosition={{ top: ').concat(z,", left: ").concat(F," }}"));var G="\n<Popover ".concat(k,"\n  anchorOrigin={{\n    vertical: '").concat(x,"',\n    horizontal: '").concat(j,"',\n  }}\n  transformOrigin={{\n    vertical: '").concat(N,"',\n    horizontal: '").concat(T,"',\n  }}\n>\n  The content of the Popover.\n</Popover>\n"),H={root:n.radioAnchor,checked:n.checked};return c.a.createElement("div",null,c.a.createElement(f.a,{container:!0,justify:"center"},c.a.createElement(f.a,{item:!0,className:n.buttonWrapper},c.a.createElement(b.a,{ref:o,variant:"contained",onClick:function(){P(Object(a.a)(Object(a.a)({},v),{},{open:!0}))}},"Open Popover"),"anchorEl"===L&&c.a.createElement("div",{className:n.anchor,style:Object(a.a)(Object(a.a)({},C.anchorVertical[x]),C.anchorHorizontal[j])}))),c.a.createElement(E.a,{open:R,anchorEl:o.current,anchorReference:L,anchorPosition:{top:z,left:F},onClose:function(){P(Object(a.a)(Object(a.a)({},v),{},{open:!1}))},anchorOrigin:{vertical:x,horizontal:j},transformOrigin:{vertical:N,horizontal:T}},c.a.createElement(g.a,{className:n.typography},"The content of the Popover.")),c.a.createElement(f.a,{container:!0,spacing:2},c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{component:"fieldset"},c.a.createElement(m.a,{component:"legend"},"anchorReference"),c.a.createElement(u.a,{row:!0,"aria-label":"anchor reference",name:"anchorReference",value:L,onChange:S},c.a.createElement(p.a,{value:"anchorEl",control:c.a.createElement(h.a,null),label:"anchorEl"}),c.a.createElement(p.a,{value:"anchorPosition",control:c.a.createElement(h.a,null),label:"anchorPosition"})))),c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{className:n.formControl},c.a.createElement(O.a,{htmlFor:"position-top"},"anchorPosition.top"),c.a.createElement(y.a,{id:"position-top",type:"number",value:z,onChange:w("positionTop")})),"\xa0",c.a.createElement(s.a,{className:n.formControl},c.a.createElement(O.a,{htmlFor:"position-left"},"anchorPosition.left"),c.a.createElement(y.a,{id:"position-left",type:"number",value:F,onChange:w("positionLeft")}))),c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{component:"fieldset"},c.a.createElement(m.a,{component:"legend"},"anchorOrigin.vertical"),c.a.createElement(u.a,{"aria-label":"anchor origin vertical",name:"anchorOriginVertical",value:x,onChange:S},c.a.createElement(p.a,{value:"top",control:c.a.createElement(h.a,{classes:H}),label:"Top"}),c.a.createElement(p.a,{value:"center",control:c.a.createElement(h.a,{classes:H}),label:"Center"}),c.a.createElement(p.a,{value:"bottom",control:c.a.createElement(h.a,{classes:H}),label:"Bottom"})))),c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{component:"fieldset"},c.a.createElement(m.a,{component:"legend"},"transformOrigin.vertical"),c.a.createElement(u.a,{"aria-label":"transform origin vertical",name:"transformOriginVertical",value:N,onChange:S},c.a.createElement(p.a,{value:"top",control:c.a.createElement(h.a,{color:"primary"}),label:"Top"}),c.a.createElement(p.a,{value:"center",control:c.a.createElement(h.a,{color:"primary"}),label:"Center"}),c.a.createElement(p.a,{value:"bottom",control:c.a.createElement(h.a,{color:"primary"}),label:"Bottom"})))),c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{component:"fieldset"},c.a.createElement(m.a,{component:"legend"},"anchorOrigin.horizontal"),c.a.createElement(u.a,{row:!0,"aria-label":"anchor origin horizontal",name:"anchorOriginHorizontal",value:j,onChange:S},c.a.createElement(p.a,{value:"left",control:c.a.createElement(h.a,{classes:H}),label:"Left"}),c.a.createElement(p.a,{value:"center",control:c.a.createElement(h.a,{classes:H}),label:"Center"}),c.a.createElement(p.a,{value:"right",control:c.a.createElement(h.a,{classes:H}),label:"Right"})))),c.a.createElement(f.a,{item:!0,xs:12,sm:6},c.a.createElement(s.a,{component:"fieldset"},c.a.createElement(m.a,{component:"legend"},"transformOrigin.horizontal"),c.a.createElement(u.a,{row:!0,"aria-label":"transform origin horizontal",name:"transformOriginHorizontal",value:T,onChange:S},c.a.createElement(p.a,{value:"left",control:c.a.createElement(h.a,{color:"primary"}),label:"Left"}),c.a.createElement(p.a,{value:"center",control:c.a.createElement(h.a,{color:"primary"}),label:"Center"}),c.a.createElement(p.a,{value:"right",control:c.a.createElement(h.a,{color:"primary"}),label:"Right"}))))),c.a.createElement(d.a,{code:G,language:"jsx"}))}))},2465:function(e,n,o){"use strict";o.r(n),n.default='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport Radio from \'@material-ui/core/Radio\';\nimport HighlightedCode from \'app/main/documentation/material-ui-components/utils/HighlightedCode\';\nimport Grid from \'@material-ui/core/Grid\';\nimport { green } from \'@material-ui/core/colors\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Button from \'@material-ui/core/Button\';\nimport Popover from \'@material-ui/core/Popover\';\nimport Input from \'@material-ui/core/Input\';\nimport InputLabel from \'@material-ui/core/InputLabel\';\n\nconst styles = (theme) => ({\n  buttonWrapper: {\n    position: \'relative\',\n    marginBottom: theme.spacing(4),\n  },\n  anchor: {\n    backgroundColor: green[500],\n    width: 10,\n    height: 10,\n    borderRadius: \'50%\',\n    position: \'absolute\',\n  },\n  radioAnchor: {\n    color: green[600],\n    \'&$checked\': {\n      color: green[500],\n    },\n  },\n  checked: {},\n  typography: {\n    margin: theme.spacing(2),\n  },\n});\n\nconst inlineStyles = {\n  anchorVertical: {\n    top: {\n      top: -5,\n    },\n    center: {\n      top: \'calc(50% - 5px)\',\n    },\n    bottom: {\n      bottom: -5,\n    },\n  },\n  anchorHorizontal: {\n    left: {\n      left: -5,\n    },\n    center: {\n      left: \'calc(50% - 5px)\',\n    },\n    right: {\n      right: -5,\n    },\n  },\n};\n\nfunction AnchorPlayground(props) {\n  const { classes } = props;\n  const anchorRef = React.useRef();\n\n  const [state, setState] = React.useState({\n    open: false,\n    anchorOriginVertical: \'top\',\n    anchorOriginHorizontal: \'left\',\n    transformOriginVertical: \'top\',\n    transformOriginHorizontal: \'left\',\n    positionTop: 200, // Just so the popover can be spotted more easily\n    positionLeft: 400, // Same as above\n    anchorReference: \'anchorEl\',\n  });\n\n  const {\n    open,\n    anchorOriginVertical,\n    anchorOriginHorizontal,\n    transformOriginVertical,\n    transformOriginHorizontal,\n    positionTop,\n    positionLeft,\n    anchorReference,\n  } = state;\n\n  const handleChange = (event) => {\n    setState({\n      ...state,\n      [event.target.name]: event.target.value,\n    });\n  };\n\n  const handleNumberInputChange = (key) => (event) => {\n    setState({\n      ...state,\n      [key]: parseInt(event.target.value, 10),\n    });\n  };\n\n  const handleClickButton = () => {\n    setState({\n      ...state,\n      open: true,\n    });\n  };\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false,\n    });\n  };\n\n  let mode = \'\';\n\n  if (anchorReference === \'anchorPosition\') {\n    mode = `\n  anchorReference="${anchorReference}"\n  anchorPosition={{ top: ${positionTop}, left: ${positionLeft} }}`;\n  }\n\n  const jsx = `\n<Popover ${mode}\n  anchorOrigin={{\n    vertical: \'${anchorOriginVertical}\',\n    horizontal: \'${anchorOriginHorizontal}\',\n  }}\n  transformOrigin={{\n    vertical: \'${transformOriginVertical}\',\n    horizontal: \'${transformOriginHorizontal}\',\n  }}\n>\n  The content of the Popover.\n</Popover>\n`;\n\n  const radioAnchorClasses = { root: classes.radioAnchor, checked: classes.checked };\n\n  return (\n    <div>\n      <Grid container justify="center">\n        <Grid item className={classes.buttonWrapper}>\n          <Button ref={anchorRef} variant="contained" onClick={handleClickButton}>\n            Open Popover\n          </Button>\n          {anchorReference === \'anchorEl\' && (\n            <div\n              className={classes.anchor}\n              style={{\n                ...inlineStyles.anchorVertical[anchorOriginVertical],\n                ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],\n              }}\n            />\n          )}\n        </Grid>\n      </Grid>\n      <Popover\n        open={open}\n        anchorEl={anchorRef.current}\n        anchorReference={anchorReference}\n        anchorPosition={{ top: positionTop, left: positionLeft }}\n        onClose={handleClose}\n        anchorOrigin={{\n          vertical: anchorOriginVertical,\n          horizontal: anchorOriginHorizontal,\n        }}\n        transformOrigin={{\n          vertical: transformOriginVertical,\n          horizontal: transformOriginHorizontal,\n        }}\n      >\n        <Typography className={classes.typography}>The content of the Popover.</Typography>\n      </Popover>\n      <Grid container spacing={2}>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorReference</FormLabel>\n            <RadioGroup\n              row\n              aria-label="anchor reference"\n              name="anchorReference"\n              value={anchorReference}\n              onChange={handleChange}\n            >\n              <FormControlLabel value="anchorEl" control={<Radio />} label="anchorEl" />\n              <FormControlLabel value="anchorPosition" control={<Radio />} label="anchorPosition" />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl className={classes.formControl}>\n            <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>\n            <Input\n              id="position-top"\n              type="number"\n              value={positionTop}\n              onChange={handleNumberInputChange(\'positionTop\')}\n            />\n          </FormControl>\n          &nbsp;\n          <FormControl className={classes.formControl}>\n            <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>\n            <Input\n              id="position-left"\n              type="number"\n              value={positionLeft}\n              onChange={handleNumberInputChange(\'positionLeft\')}\n            />\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorOrigin.vertical</FormLabel>\n            <RadioGroup\n              aria-label="anchor origin vertical"\n              name="anchorOriginVertical"\n              value={anchorOriginVertical}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="top"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Top"\n              />\n              <FormControlLabel\n                value="center"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="bottom"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Bottom"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">transformOrigin.vertical</FormLabel>\n            <RadioGroup\n              aria-label="transform origin vertical"\n              name="transformOriginVertical"\n              value={transformOriginVertical}\n              onChange={handleChange}\n            >\n              <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" />\n              <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />\n              <FormControlLabel value="bottom" control={<Radio color="primary" />} label="Bottom" />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>\n            <RadioGroup\n              row\n              aria-label="anchor origin horizontal"\n              name="anchorOriginHorizontal"\n              value={anchorOriginHorizontal}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="left"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Left"\n              />\n              <FormControlLabel\n                value="center"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="right"\n                control={<Radio classes={radioAnchorClasses} />}\n                label="Right"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">transformOrigin.horizontal</FormLabel>\n            <RadioGroup\n              row\n              aria-label="transform origin horizontal"\n              name="transformOriginHorizontal"\n              value={transformOriginHorizontal}\n              onChange={handleChange}\n            >\n              <FormControlLabel value="left" control={<Radio color="primary" />} label="Left" />\n              <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />\n              <FormControlLabel value="right" control={<Radio color="primary" />} label="Right" />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n      </Grid>\n      <HighlightedCode code={jsx} language="jsx" />\n    </div>\n  );\n}\n\nAnchorPlayground.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(AnchorPlayground);\n'},2466:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return m}));var t=o(15),a=o(0),r=o.n(a),l=o(1495),c=o(247),i=o(1535),s=Object(i.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function m(){var e=s(),n=r.a.useState(null),o=Object(t.a)(n,2),a=o[0],i=o[1],m=function(){i(null)},p=Boolean(a);return r.a.createElement("div",null,r.a.createElement(c.a,{"aria-owns":p?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){i(e.currentTarget)},onMouseLeave:m},"Hover with a Popover."),r.a.createElement(l.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:p,anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:m,disableRestoreFocus:!0},r.a.createElement(c.a,null,"I use Popover.")))}},2467:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport Popover from '@material-ui/core/Popover';\nimport Typography from '@material-ui/core/Typography';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  popover: {\n    pointerEvents: 'none',\n  },\n  paper: {\n    padding: theme.spacing(1),\n  },\n}));\n\nexport default function MouseOverPopover() {\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handlePopoverOpen = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handlePopoverClose = () => {\n    setAnchorEl(null);\n  };\n\n  const open = Boolean(anchorEl);\n\n  return (\n    <div>\n      <Typography\n        aria-owns={open ? 'mouse-over-popover' : undefined}\n        aria-haspopup=\"true\"\n        onMouseEnter={handlePopoverOpen}\n        onMouseLeave={handlePopoverClose}\n      >\n        Hover with a Popover.\n      </Typography>\n      <Popover\n        id=\"mouse-over-popover\"\n        className={classes.popover}\n        classes={{\n          paper: classes.paper,\n        }}\n        open={open}\n        anchorEl={anchorEl}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        transformOrigin={{\n          vertical: 'top',\n          horizontal: 'left',\n        }}\n        onClose={handlePopoverClose}\n        disableRestoreFocus\n      >\n        <Typography>I use Popover.</Typography>\n      </Popover>\n    </div>\n  );\n}\n"},2468:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return p}));var t=o(0),a=o.n(t),r=o(247),l=o(1706),c=o(1541),i=o(1495),s=o(1728),m=o.n(s);function p(){return a.a.createElement(m.a,{variant:"popover",popupId:"demo-popup-popover"},(function(e){return a.a.createElement("div",null,a.a.createElement(c.a,Object.assign({variant:"contained",color:"primary"},Object(s.bindTrigger)(e)),"Open Popover"),a.a.createElement(i.a,Object.assign({},Object(s.bindPopover)(e),{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}}),a.a.createElement(l.a,{p:2},a.a.createElement(r.a,null,"The content of the Popover."))))}))}},2469:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport Typography from '@material-ui/core/Typography';\nimport Box from '@material-ui/core/Box';\nimport Button from '@material-ui/core/Button';\nimport Popover from '@material-ui/core/Popover';\nimport PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';\n\nexport default function PopoverPopupState() {\n  return (\n    <PopupState variant=\"popover\" popupId=\"demo-popup-popover\">\n      {(popupState) => (\n        <div>\n          <Button variant=\"contained\" color=\"primary\" {...bindTrigger(popupState)}>\n            Open Popover\n          </Button>\n          <Popover\n            {...bindPopover(popupState)}\n            anchorOrigin={{\n              vertical: 'bottom',\n              horizontal: 'center',\n            }}\n            transformOrigin={{\n              vertical: 'top',\n              horizontal: 'center',\n            }}\n          >\n            <Box p={2}>\n              <Typography>The content of the Popover.</Typography>\n            </Box>\n          </Popover>\n        </div>\n      )}\n    </PopupState>\n  );\n}\n"},3024:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),r=o(1577),l=(o(146),o(200)),c=o(1541),i=o(1536),s=o(247),m=o(1535),p=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){var n=p();return a.a.createElement(l.a,{classes:{root:n.layoutRoot},header:a.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},a.a.createElement("div",{className:"flex flex-col"},a.a.createElement("div",{className:"flex items-center mb-16"},a.a.createElement(i.a,{className:"text-18",color:"action"},"home"),a.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),a.a.createElement(s.a,{color:"textSecondary"},"Documentation"),a.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),a.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),a.a.createElement(s.a,{variant:"h6"},"Popover")),a.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/popover",target:"_blank",role:"button"},a.a.createElement(i.a,null,"link"),a.a.createElement("span",{className:"mx-4"},"Reference"))),content:a.a.createElement("div",{className:"p-24 max-w-2xl"},a.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Popover"),a.a.createElement(s.a,{className:"description"},"A Popover can be used to display some content on top of another."),a.a.createElement(s.a,{className:"mb-16",component:"div"},"Things to know when using the ",a.a.createElement("code",null,"Popover")," component:"),a.a.createElement("ul",null,a.a.createElement("li",null,"The component is built on top of the ",a.a.createElement("a",{href:"/components/modal/"},a.a.createElement("code",null,"Modal"))," component."),a.a.createElement("li",null,"The scroll and click away are blocked unlike with the ",a.a.createElement("a",{href:"/components/popper/"},a.a.createElement("code",null,"Popper"))," component.")),a.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Popover"),a.a.createElement(s.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:o(2462).default,raw:o(2463)})),a.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Anchor playground"),a.a.createElement(s.a,{className:"mb-16",component:"div"},"Use the radio buttons to adjust the ",a.a.createElement("code",null,"anchorOrigin")," and ",a.a.createElement("code",null,"transformOrigin")," positions. You can also set the ",a.a.createElement("code",null,"anchorReference")," to ",a.a.createElement("code",null,"anchorPosition")," or ",a.a.createElement("code",null,"anchorEl"),". When it is ",a.a.createElement("code",null,"anchorPosition"),", the component will, instead of ",a.a.createElement("code",null,"anchorEl"),", refer to the ",a.a.createElement("code",null,"anchorPosition")," prop which you can adjust to set the position of the popover."),a.a.createElement(s.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:o(2464).default,raw:o(2465)})),a.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Mouse over interaction"),a.a.createElement(s.a,{className:"mb-16",component:"div"},"This demonstrates how to use the ",a.a.createElement("code",null,"Popover")," component to implement a popover behavior based on the mouse over event."),a.a.createElement(s.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:o(2466).default,raw:o(2467)})),a.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Complementary projects"),a.a.createElement(s.a,{className:"mb-16",component:"div"},"For more advanced use cases you might be able to take advantage of:"),a.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"PopupState helper"),a.a.createElement(s.a,{className:"mb-16",component:"div"},"There is a 3rd party package ",a.a.createElement("a",{href:"https://github.com/jcoreio/material-ui-popup-state"},a.a.createElement("code",null,"material-ui-popup-state"))," that takes care of popover state for you in most cases."),a.a.createElement(s.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:o(2468).default,raw:o(2469)})))})}}}]);