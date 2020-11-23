(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[139],{2972:function(e,a,t){"use strict";t.r(a);var c=t(146),n=t(200),l=t(1536),r=t(247),o=t(0),s=t.n(o),m=t(29);a.default=function(){return s.a.createElement(n.a,{header:s.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",{className:"flex items-center mb-16"},s.a.createElement(l.a,{className:"text-18",color:"action"},"home"),s.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(r.a,{color:"textSecondary"},"Documentation"),s.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(r.a,{color:"textSecondary"},"Authentication")),s.a.createElement(r.a,{variant:"h6"},"Auth0 Authentication"))),content:s.a.createElement("div",{className:"p-24 max-w-2xl"},s.a.createElement(r.a,{className:"mb-16",component:"p"},"With Auth0 Authentication in Fuse React."),s.a.createElement("ul",null,s.a.createElement("li",{className:"mb-12"},"You can ",s.a.createElement(m.a,{to:"/register"},"register"),"."),s.a.createElement("li",{className:"mb-12"},"You can ",s.a.createElement(m.a,{to:"/login"},"login"),"."),s.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) as user_metadata to Auth0 Database.")),s.a.createElement(r.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",s.a.createElement("code",null,"/src/auth0Service")),s.a.createElement(r.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in",s.a.createElement("code",null,"src/app/App.js"),"."),s.a.createElement(r.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),s.a.createElement(r.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Auth0 Project into",s.a.createElement("code",null,"src/app/services/auth0Service/auth0ServiceConfig.js")),s.a.createElement(c.a,{component:"pre",className:"language-jsx my-16"},'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '))})}}}]);