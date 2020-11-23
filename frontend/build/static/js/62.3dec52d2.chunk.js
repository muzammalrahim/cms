(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[62],{1577:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(15),r=n(146),o=n(1557),l=n(1566),c=n(1536),i=n(1569),u=n(1570),m=n(0),s=n.n(m),p=n(11),d=n(6),f=n(84),b=n(85),E=n(162),B=n(161),h=n(1489),y=n(771),v=n(1527),g=n(1556),x=n(9),w=n(181),O=n(506),T=n(1578),G=n.n(T),N=Object(h.a)({productionPrefix:"iframe-"}),k=function(e){Object(E.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.b)(Object(d.a)(Object(d.a)({},Object(y.a)()),{},{plugins:[].concat(Object(p.a)(Object(y.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),s.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return s.a.createElement(G.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?s.a.createElement(v.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager},s.a.createElement(g.a,{theme:a},s.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(s.a.Component),j=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(k);function C(e){var t=Object(m.useState)(e.currentTabIndex),n=Object(a.a)(t,2),p=n[0],d=n[1],f=e.component,b=e.raw,E=e.iframe,B=e.className;return s.a.createElement(l.a,{className:B},s.a.createElement(o.a,{position:"static",color:"default",elevation:0},s.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){d(t)}},f&&s.a.createElement(i.a,{classes:{root:"min-w-64"},icon:s.a.createElement(c.a,null,"remove_red_eye")}),b&&s.a.createElement(i.a,{classes:{root:"min-w-64"},icon:s.a.createElement(c.a,null,"code")}))),s.a.createElement("div",{className:"flex justify-center"},s.a.createElement("div",{className:0===p?"flex flex-1":"hidden"},f&&(E?s.a.createElement(j,null,s.a.createElement(f,null)):s.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},s.a.createElement(f,null)))),s.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},b&&s.a.createElement("div",{className:"flex flex-1"},s.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}C.defaultProps={currentTabIndex:0};var S=C},2164:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1541),l=n(1893),c=n(1535),i=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function u(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{variant:"text",color:"primary","aria-label":"text primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},2165:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function BasicButtonGroup() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup color=\"primary\" aria-label=\"outlined primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"contained\" color=\"primary\" aria-label=\"contained primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"text\" color=\"primary\" aria-label=\"text primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n"},2166:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1541),l=n(1893),c=n(1535),i=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function u(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{size:"small","aria-label":"small outlined button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{color:"secondary","aria-label":"outlined secondary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},2167:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function GroupSizesColors() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup size=\"small\" aria-label=\"small outlined button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup color=\"secondary\" aria-label=\"outlined secondary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup size=\"large\" color=\"primary\" aria-label=\"large outlined primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n"},2168:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1541),l=n(1893),c=n(1535),i=Object(c.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function u(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"text"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},2169:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Button from \'@material-ui/core/Button\';\nimport ButtonGroup from \'@material-ui/core/ButtonGroup\';\nimport { makeStyles } from \'@material-ui/core/styles\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function GroupOrientation() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical outlined primary button group"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical contained primary button group"\n        variant="contained"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical contained primary button group"\n        variant="text"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n'},2170:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(15),r=n(0),o=n.n(r),l=n(1626),c=n(1541),i=n(1893),u=n(2171),m=n.n(u),s=n(1491),p=n(504),d=n(245),f=n(1502),b=n(1538),E=n(1496),B=["Create a merge commit","Squash and merge","Rebase and merge"];function h(){var e=o.a.useState(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],u=o.a.useRef(null),h=o.a.useState(1),y=Object(a.a)(h,2),v=y[0],g=y[1],x=function(e){u.current&&u.current.contains(e.target)||r(!1)};return o.a.createElement(l.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(i.a,{variant:"contained",color:"primary",ref:u,"aria-label":"split button"},o.a.createElement(c.a,{onClick:function(){console.info("You clicked ".concat(B[v]))}},B[v]),o.a.createElement(c.a,{color:"primary",size:"small","aria-controls":n?"split-button-menu":void 0,"aria-expanded":n?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){r((function(e){return!e}))}},o.a.createElement(m.a,null))),o.a.createElement(f.a,{open:n,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,n=e.placement;return o.a.createElement(p.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement(d.a,null,o.a.createElement(s.a,{onClickAway:x},o.a.createElement(E.a,{id:"split-button-menu"},B.map((function(e,t){return o.a.createElement(b.a,{key:e,disabled:2===t,selected:t===v,onClick:function(e){return function(e,t){g(t),r(!1)}(0,t)}},e)}))))))}))))}},2172:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Grid from '@material-ui/core/Grid';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Grow from '@material-ui/core/Grow';\nimport Paper from '@material-ui/core/Paper';\nimport Popper from '@material-ui/core/Popper';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MenuList from '@material-ui/core/MenuList';\n\nconst options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];\n\nexport default function SplitButton() {\n  const [open, setOpen] = React.useState(false);\n  const anchorRef = React.useRef(null);\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\n\n  const handleClick = () => {\n    console.info(`You clicked ${options[selectedIndex]}`);\n  };\n\n  const handleMenuItemClick = (event, index) => {\n    setSelectedIndex(index);\n    setOpen(false);\n  };\n\n  const handleToggle = () => {\n    setOpen((prevOpen) => !prevOpen);\n  };\n\n  const handleClose = (event) => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  return (\n    <Grid container direction=\"column\" alignItems=\"center\">\n      <Grid item xs={12}>\n        <ButtonGroup variant=\"contained\" color=\"primary\" ref={anchorRef} aria-label=\"split button\">\n          <Button onClick={handleClick}>{options[selectedIndex]}</Button>\n          <Button\n            color=\"primary\"\n            size=\"small\"\n            aria-controls={open ? 'split-button-menu' : undefined}\n            aria-expanded={open ? 'true' : undefined}\n            aria-label=\"select merge strategy\"\n            aria-haspopup=\"menu\"\n            onClick={handleToggle}\n          >\n            <ArrowDropDownIcon />\n          </Button>\n        </ButtonGroup>\n        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>\n          {({ TransitionProps, placement }) => (\n            <Grow\n              {...TransitionProps}\n              style={{\n                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',\n              }}\n            >\n              <Paper>\n                <ClickAwayListener onClickAway={handleClose}>\n                  <MenuList id=\"split-button-menu\">\n                    {options.map((option, index) => (\n                      <MenuItem\n                        key={option}\n                        disabled={index === 2}\n                        selected={index === selectedIndex}\n                        onClick={(event) => handleMenuItemClick(event, index)}\n                      >\n                        {option}\n                      </MenuItem>\n                    ))}\n                  </MenuList>\n                </ClickAwayListener>\n              </Paper>\n            </Grow>\n          )}\n        </Popper>\n      </Grid>\n    </Grid>\n  );\n}\n"},2173:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),r=n.n(a),o=n(1893),l=n(1541);function c(){return r.a.createElement(o.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(l.a,null,"One"),r.a.createElement(l.a,null,"Two"))}},2174:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport Button from '@material-ui/core/Button';\n\nexport default function DisableElevation() {\n  return (\n    <ButtonGroup disableElevation variant=\"contained\" color=\"primary\">\n      <Button>One</Button>\n      <Button>Two</Button>\n    </ButtonGroup>\n  );\n}\n"},2999:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1577),l=(n(146),n(200)),c=n(1541),i=n(1536),u=n(247),m=n(1535),s=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=s();return r.a.createElement(l.a,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(i.a,{className:"text-18",color:"action"},"home"),r.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(u.a,{color:"textSecondary"},"Documentation"),r.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(u.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(u.a,{variant:"h6"},"Button group")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/button-group",target:"_blank",role:"button"},r.a.createElement(i.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(u.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Button group"),r.a.createElement(u.a,{className:"description"},"The ButtonGroup component can be used to group related buttons."),r.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic button group"),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2164).default,raw:n(2165)})),r.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Sizes and colors"),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2166).default,raw:n(2167)})),r.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Vertical group"),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2168).default,raw:n(2169)})),r.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Split button"),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement("code",null,"ButtonGroup")," can also be used to create a split button. The dropdown can change the button action (as in this example), or be used to immediately trigger a related action."),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2170).default,raw:n(2172)})),r.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Disabled elevation"),r.a.createElement(u.a,{className:"mb-16",component:"div"},"You can remove the elevation with the ",r.a.createElement("code",null,"disableElevation")," prop."),r.a.createElement(u.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2173).default,raw:n(2174)})))})}}}]);