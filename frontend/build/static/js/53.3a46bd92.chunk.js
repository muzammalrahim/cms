(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[53],{1576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,c=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(c=window);var l=t.FrameContext=o.default.createContext({document:i,window:c}),s=l.Provider,u=l.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1577:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(15),r=n(146),o=n(1557),i=n(1566),c=n(1536),l=n(1569),s=n(1570),u=n(0),m=n.n(u),d=n(11),p=n(6),f=n(84),h=n(85),b=n(162),y=n(161),v=n(1489),g=n(771),O=n(1527),E=n(1556),x=n(9),j=n(181),k=n(506),w=n(1578),D=n.n(w),P=Object(v.a)({productionPrefix:"iframe-"}),C=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.b)(Object(p.a)(Object(p.a)({},Object(g.a)()),{},{plugins:[].concat(Object(d.a)(Object(g.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(D.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(O.b,{jss:this.state.jss,generateClassName:P,sheetsManager:this.state.sheetsManager},m.a.createElement(E.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),N=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(C);function T(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],p=n[1],f=e.component,h=e.raw,b=e.iframe,y=e.className;return m.a.createElement(i.a,{className:y},m.a.createElement(o.a,{position:"static",color:"default",elevation:0},m.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){p(t)}},f&&m.a.createElement(l.a,{classes:{root:"min-w-64"},icon:m.a.createElement(c.a,null,"remove_red_eye")}),h&&m.a.createElement(l.a,{classes:{root:"min-w-64"},icon:m.a.createElement(c.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("div",{className:0===d?"flex flex-1":"hidden"},f&&(b?m.a.createElement(N,null,m.a.createElement(f,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},m.a.createElement(f,null)))),m.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},h&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}T.defaultProps={currentTabIndex:0};var M=T},1578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1576);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1579),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=m(o),c=m(n(21)),l=m(n(3)),s=n(1576),u=m(n(1580));function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);d.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(3)));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=s},1761:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var a=n(19),r=n(0),o=(n(3),n(1513)),i=n(2),c=(n(1),n(4),n(1535)),l=n(1621),s=n(1654),u=(n(1659),n(69),n(1648)),m=(n(110),n(37),n(207),n(252),n(253),Object(c.a)({toolbar:{flexDirection:"column",alignItems:"flex-start"},toolbarLandscape:{padding:16},dateLandscape:{marginRight:16}},{name:"MuiPickersDatePickerRoot"})),d=function(e){var t=e.date,n=e.views,a=e.setOpenView,c=e.isLandscape,u=e.openView,d=Object(o.c)(),p=m(),f=Object(r.useMemo)((function(){return Object(s.d)(n)}),[n]),h=Object(r.useMemo)((function(){return Object(s.b)(n)}),[n]);return Object(r.createElement)(l.b,{isLandscape:c,className:Object(i.default)(!f&&p.toolbar,c&&p.toolbarLandscape)},Object(r.createElement)(l.c,{variant:f?"h3":"subtitle1",onClick:function(){return a("year")},selected:"year"===u,label:d.getYearText(t)}),!f&&!h&&Object(r.createElement)(l.c,{variant:"h4",selected:"date"===u,onClick:function(){return a("date")},align:c?"left":"center",label:d.getDatePickerHeaderText(t),className:Object(i.default)(c&&p.dateLandscape)}),h&&Object(r.createElement)(l.c,{variant:"h4",onClick:function(){return a("month")},selected:"month"===u,label:d.getMonthText(t)}))};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u.c,{openTo:"date",views:["year","date"]});function h(e){var t=Object(o.c)();return{getDefaultFormat:function(){return Object(s.c)(e.views,t)}}}var b=Object(l.g)({useOptions:h,Input:l.d,useState:l.i,DefaultToolbarComponent:d}),y=Object(l.g)({useOptions:h,Input:l.a,useState:l.e,DefaultToolbarComponent:d});b.defaultProps=f,y.defaultProps=f},1762:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(19),r=(n(0),n(3),n(1513)),o=(n(2),n(1),n(4),n(1621)),i=(n(1659),n(69),n(1648)),c=(n(110),n(37),n(207),n(252),n(253),n(1704));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i.d,{openTo:"hours",views:["hours","minutes"]});function u(e){var t=Object(r.c)();return{getDefaultFormat:function(){return Object(o.h)(e.format,e.ampm,{"12h":t.time12hFormat,"24h":t.time24hFormat})}}}var m=Object(o.g)({useOptions:u,Input:o.d,useState:o.i,DefaultToolbarComponent:c.a}),d=Object(o.g)({useOptions:u,Input:o.a,useState:o.e,DefaultToolbarComponent:c.a,getCustomProps:function(e){return{refuse:e.ampm?/[^\dap]+/gi:/[^\d]+/gi}}});m.defaultProps=s,d.defaultProps=s},2454:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(15),r=n(0),o=n.n(r),i=n(1626),c=n(1776),l=n(1513),s=n(1761),u=n(1762);function m(){var e=o.a.useState(new Date("2014-08-18T21:11:54")),t=Object(a.a)(e,2),n=t[0],r=t[1],m=function(e){r(e)};return o.a.createElement(l.a,{utils:c.default},o.a.createElement(i.a,{container:!0,justify:"space-around"},o.a.createElement(s.b,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:n,onChange:m,KeyboardButtonProps:{"aria-label":"change date"}}),o.a.createElement(s.b,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:n,onChange:m,KeyboardButtonProps:{"aria-label":"change date"}}),o.a.createElement(u.a,{margin:"normal",id:"time-picker",label:"Time picker",value:n,onChange:m,KeyboardButtonProps:{"aria-label":"change time"}})))}},2455:function(e,t,n){"use strict";n.r(t),t.default='import \'date-fns\';\nimport React from \'react\';\nimport Grid from \'@material-ui/core/Grid\';\nimport DateFnsUtils from \'@date-io/date-fns\';\nimport {\n  MuiPickersUtilsProvider,\n  KeyboardTimePicker,\n  KeyboardDatePicker,\n} from \'@material-ui/pickers\';\n\nexport default function MaterialUIPickers() {\n  // The first commit of Material-UI\n  const [selectedDate, setSelectedDate] = React.useState(new Date(\'2014-08-18T21:11:54\'));\n\n  const handleDateChange = (date) => {\n    setSelectedDate(date);\n  };\n\n  return (\n    <MuiPickersUtilsProvider utils={DateFnsUtils}>\n      <Grid container justify="space-around">\n        <KeyboardDatePicker\n          disableToolbar\n          variant="inline"\n          format="MM/dd/yyyy"\n          margin="normal"\n          id="date-picker-inline"\n          label="Date picker inline"\n          value={selectedDate}\n          onChange={handleDateChange}\n          KeyboardButtonProps={{\n            \'aria-label\': \'change date\',\n          }}\n        />\n        <KeyboardDatePicker\n          margin="normal"\n          id="date-picker-dialog"\n          label="Date picker dialog"\n          format="MM/dd/yyyy"\n          value={selectedDate}\n          onChange={handleDateChange}\n          KeyboardButtonProps={{\n            \'aria-label\': \'change date\',\n          }}\n        />\n        <KeyboardTimePicker\n          margin="normal"\n          id="time-picker"\n          label="Time picker"\n          value={selectedDate}\n          onChange={handleDateChange}\n          KeyboardButtonProps={{\n            \'aria-label\': \'change time\',\n          }}\n        />\n      </Grid>\n    </MuiPickersUtilsProvider>\n  );\n}\n'},2456:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(1535),i=n(1545),c=Object(o.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function l(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(i.a,{id:"date",label:"Birthday",type:"date",defaultValue:"2017-05-24",className:e.textField,InputLabelProps:{shrink:!0}}))}},2457:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport TextField from '@material-ui/core/TextField';\n\nconst useStyles = makeStyles((theme) => ({\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 200,\n  },\n}));\n\nexport default function DatePickers() {\n  const classes = useStyles();\n\n  return (\n    <form className={classes.container} noValidate>\n      <TextField\n        id=\"date\"\n        label=\"Birthday\"\n        type=\"date\"\n        defaultValue=\"2017-05-24\"\n        className={classes.textField}\n        InputLabelProps={{\n          shrink: true,\n        }}\n      />\n    </form>\n  );\n}\n"},2458:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(1535),i=n(1545),c=Object(o.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function l(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(i.a,{id:"datetime-local",label:"Next appointment",type:"datetime-local",defaultValue:"2017-05-24T10:30",className:e.textField,InputLabelProps:{shrink:!0}}))}},2459:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport TextField from '@material-ui/core/TextField';\n\nconst useStyles = makeStyles((theme) => ({\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 200,\n  },\n}));\n\nexport default function DateAndTimePickers() {\n  const classes = useStyles();\n\n  return (\n    <form className={classes.container} noValidate>\n      <TextField\n        id=\"datetime-local\"\n        label=\"Next appointment\"\n        type=\"datetime-local\"\n        defaultValue=\"2017-05-24T10:30\"\n        className={classes.textField}\n        InputLabelProps={{\n          shrink: true,\n        }}\n      />\n    </form>\n  );\n}\n"},2460:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(1535),i=n(1545),c=Object(o.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function l(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(i.a,{id:"time",label:"Alarm clock",type:"time",defaultValue:"07:30",className:e.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}}))}},2461:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport TextField from '@material-ui/core/TextField';\n\nconst useStyles = makeStyles((theme) => ({\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 200,\n  },\n}));\n\nexport default function TimePickers() {\n  const classes = useStyles();\n\n  return (\n    <form className={classes.container} noValidate>\n      <TextField\n        id=\"time\"\n        label=\"Alarm clock\"\n        type=\"time\"\n        defaultValue=\"07:30\"\n        className={classes.textField}\n        InputLabelProps={{\n          shrink: true,\n        }}\n        inputProps={{\n          step: 300, // 5 min\n        }}\n      />\n    </form>\n  );\n}\n"},3023:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1577),i=(n(146),n(200)),c=n(1541),l=n(1536),s=n(247),u=n(1535),m=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=m();return r.a.createElement(i.a,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(s.a,{variant:"h6"},"Date / Time pickers")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/pickers",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Date / Time pickers"),r.a.createElement(s.a,{className:"description"},"Date pickers and Time pickers provide a simple way to select a single value from a pre-determined set."),r.a.createElement("ul",null,r.a.createElement("li",null,"On mobile, pickers are best suited for display in confirmation dialog."),r.a.createElement("li",null,"For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.")),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"@material-ui/pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},' src="https://img.shields.io/github/stars/mui-org/material-ui-pickers.svg?style=social&label=Stars" alt="stars/> src="https://img.shields.io/npm/dm/@material-ui/pickers.svg" alt="npm downloads/>'),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement("a",{href:"https://material-ui-pickers.dev/"},"@material-ui/pickers")," provides date picker and time picker controls."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2454).default,raw:n(2455)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Native pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f Native input controls support by browsers ",r.a.createElement("a",{href:"https://caniuse.com/#feat=input-datetime"},"isn't perfect"),". Have a look at ",r.a.createElement("a",{href:"https://material-ui-pickers.dev/"},"@material-ui/pickers")," for a richer solution."),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Datepickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native datepicker example with ",r.a.createElement("code",null,'type="date"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2456).default,raw:n(2457)})),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Date & Time pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native date & time picker example with ",r.a.createElement("code",null,'type="datetime-local"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2458).default,raw:n(2459)})),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Time pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native time picker example with ",r.a.createElement("code",null,'type="time"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2460).default,raw:n(2461)})))})}}}]);