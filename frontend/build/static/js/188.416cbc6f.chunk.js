(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[188],{3086:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t(18),i=t(0),r=t.n(i),l=t(1535),o=t(244),c=t(1638),u=t(1641),m=t(1635),d=t(2967),s=t(1639),g=t(1739),p=t(1640),f=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function h(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}var b=[h("India","IN",1324171354,3287263),h("China","CN",1403500365,9596961),h("Italy","IT",60483973,301340),h("United States","US",327167434,9833520),h("Canada","CA",37602103,9984670),h("Australia","AU",25475400,7692024),h("Germany","DE",83019200,357578),h("Ireland","IE",4857e3,70273),h("Mexico","MX",126577691,1972550),h("Japan","JP",126317e3,377973),h("France","FR",67022e3,640679),h("United Kingdom","GB",67545757,242495),h("Russia","RU",146793744,17098246),h("Nigeria","NG",200962417,923768),h("Brazil","BR",210147125,8515767)],y=Object(l.a)({root:{width:"100%"},container:{maxHeight:440}});function E(){var e=y(),a=r.a.useState(0),t=Object(n.a)(a,2),i=t[0],l=t[1],h=r.a.useState(10),E=Object(n.a)(h,2),S=E[0],k=E[1];return r.a.createElement(o.a,{className:e.root},r.a.createElement(d.a,{className:e.container},r.a.createElement(c.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(s.a,null,r.a.createElement(p.a,null,f.map((function(e){return r.a.createElement(m.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(u.a,null,b.slice(i*S,i*S+S).map((function(e){return r.a.createElement(p.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},f.map((function(a){var t=e[a.id];return r.a.createElement(m.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.a.createElement(g.a,{rowsPerPageOptions:[10,25,100],component:"div",count:b.length,rowsPerPage:S,page:i,onChangePage:function(e,a){l(a)},onChangeRowsPerPage:function(e){k(+e.target.value),l(0)}}))}}}]);