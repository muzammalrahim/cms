(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[157],{2984:function(e,t,a){"use strict";a.r(t);var n=a(145),o=a(200),i=a(26),l=a(1541),c=a(1536),m=a(246),r=a(76),s=a(24),p=a(0),d=a.n(p),u=a(6);t.default=function(e){var t=Object(u.c)();return d.a.createElement(o.a,{header:d.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},d.a.createElement("div",{className:"flex flex-col"},d.a.createElement("div",{className:"flex items-center mb-16"},d.a.createElement(c.a,{className:"text-18",color:"action"},"home"),d.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),d.a.createElement(m.a,{color:"textSecondary"},"Documentation"),d.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),d.a.createElement(m.a,{color:"textSecondary"},"Fuse Components")),d.a.createElement(m.a,{variant:"h6"},"FuseNavigation"))),content:d.a.createElement("div",{className:"p-24 max-w-2xl"},d.a.createElement(m.a,{className:"mb-16",component:"p"},d.a.createElement("code",null,"FuseNavigation")," is a custom built Fuse component allows you to create a multi-level collapsable navigation."),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"[navigation]"),d.a.createElement(m.a,{className:"mb-16",component:"p"},d.a.createElement("code",null,"FuseNavigation")," uses a array to populate the entire navigation. It supports four different navigation items; Group, Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts."),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"[layout]"),d.a.createElement(m.a,{className:"mb-16",component:"p"},'"vertical" or "horizontal" layout options.'),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"[active]"),d.a.createElement(m.a,{className:"mb-16",component:"p"},"You can set ",d.a.createElement("b",null,"active"),' to "square" for to use square active item style instead of rounded/circle for ',d.a.createElement("b",null,"vertical layout"),"."),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"[dense]"),d.a.createElement(m.a,{className:"mb-16",component:"p"},"You can use ",d.a.createElement("b",null,"dense={true}")," to set dense variation of the navigation."),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),d.a.createElement(n.a,{component:"pre",className:"language-jsx"},'\n                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>\n                                '),d.a.createElement(m.a,{className:"mt-48 mb-8",variant:"h4"},"Navigation item types"),d.a.createElement(m.a,{className:"mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8"},"Its mandatory to give a unique id to all of your navigation items."),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Group"),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                     {\n                                        'id'       : 'applications',\n                                        'title'    : 'Applications',\n                                        'type'     : 'group',\n                                        'icon'     : 'apps',\n                                        'url'      : '/apps/calendar' //optional\n                                        'children' : [\n                                             {\n                                                'id'       : 'calendar',\n                                                'title'    : 'Calendar',\n                                                'type'     : 'item',\n                                                'icon'     : 'today',\n                                                'url'      : '/apps/calendar'\n                                            }\n                                        ]\n                                     }\n                                "),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Collapse"),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                     {\n                                        'id'       : 'dashboards',\n                                        'title'    : 'Dashboards',\n                                        'type'     : 'collapse',\n                                        'icon'     : 'dashboard',\n                                        'url'      : '/apps/dashboards/project' //optional\n                                        'children' : [\n                                            {\n                                                'id'   : 'project',\n                                                'title': 'Project',\n                                                'type' : 'item',\n                                                'url'  : '/apps/dashboards/project'\n                                            }\n                                        ]\n                                      }\n                                "),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Item"),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                "),d.a.createElement(m.a,{className:"text-20 mt-24 mb-8 font-semibold",component:"h2"},"exact: bool"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"When true, the active class/style will only be applied if the location is matched exactly."),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project',\n                                    'exact': true\n                                }\n                                "),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Link"),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'    : 'test-link',\n                                    'title' : 'Test Link',\n                                    'type'  : 'link',\n                                    'icon'  : 'link',\n                                    'url'   : 'http://fusetheme.com',\n                                    'target': '_blank'\n                                },\n                               "),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Divider"),d.a.createElement(n.a,{component:"pre",className:"language-json"},"\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                {\n                                    'type': 'divider\n                                },\n                                {\n                                    'id'   : 'project',\n                                    'title': 'Project',\n                                    'type' : 'item',\n                                    'url'  : '/apps/dashboards/project'\n                                }\n                                "),d.a.createElement(m.a,{className:"mt-48 mb-8",variant:"h4"},"Actions"),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.setNavigation"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use ",d.a.createElement("code",null,"setNavigation(navigation","<Array>",")")," action to set/change whole navigation."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},"With the button below, whole navigation is changed."),d.a.createElement(l.a,{onClick:function(){t(s.m([{id:"auth",title:"Auth",type:"group",icon:"apps",children:[{id:"login",title:"Login",type:"item",url:"/login",auth:r.b.onlyGuest,icon:"lock"},{id:"register",title:"Register",type:"item",url:"/register",auth:r.b.onlyGuest,icon:"person_add"}]}]))},variant:"contained",color:"primary"},"Set Navigation"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.setNavigation([\n                                            {\n                                                'id'      : 'auth',\n                                                'title'   : 'Auth',\n                                                'type'    : 'group',\n                                                'icon'    : 'apps',\n                                                'children': [\n                                                    {\n                                                        'id'   : 'login',\n                                                        'title': 'Login',\n                                                        'type' : 'item',\n                                                        'url'  : '/login',\n                                                        auth   : authRoles.onlyGuest,\n                                                        'icon' : 'lock'\n                                                    },\n                                                    {\n                                                        'id'   : 'register',\n                                                        'title': 'Register',\n                                                        'type' : 'item',\n                                                        'url'  : '/register',\n                                                        auth   : authRoles.onlyGuest,\n                                                        'icon' : 'person_add'\n                                                    },\n                                                ]\n                                            }\n                                        ]));\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Set Navigation\n                                </Button>\n                                ")),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.resetNavigation"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use ",d.a.createElement("code",null,"resetNavigation()")," action to reset navigation to initial state."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},"With the button below, navigation is returned to config defaults."),d.a.createElement(l.a,{onClick:function(){t(s.k())},variant:"contained",color:"primary"},"Reset Navigation"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},'\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.resetNavigation());\n                                    }}\n                                    variant="contained"\n                                    color="primary"\n                                >\n                                    Reset Navigation\n                                </Button>\n                                ')),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.updateNavigationItem"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use",d.a.createElement("code",null,"updateNavigationItem(id, ",d.a.createElement("i",null,"object"),")"),"action to update a navigation item."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},"With the button below, 'dashboards' title changes and a badge is added."),d.a.createElement(l.a,{onClick:function(){t(s.p("dashboards",{title:"All Dashboards",badge:{title:2,bg:"rgb(3, 155, 228)",fg:"#FFFFFF"}}))},variant:"contained",color:"primary"},"Update Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.updateNavigationItem('dashboards',\n                                            {\n                                                'title': 'All Dashboards',\n                                                'badge': {\n                                                    'title': 2,\n                                                    'bg'   : 'rgb(3, 155, 228)',\n                                                    'fg'   : '#FFFFFF'\n                                                }\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                Update Navigation Item\n                                </Button>\n                            ")),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.removeNavigationItem"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use ",d.a.createElement("code",null,"removeNavigationItem(id)")," action to remove a navigation item."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "Calendar" navigation item is removed.'),d.a.createElement(l.a,{onClick:function(){t(s.j("calendar"))},variant:"contained",color:"primary"},"Remove Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},'\n                                  <Button\n                                        onClick={()=> {\n                                            dispatch(Actions.removeNavigationItem(\'calendar\'))\n                                        }}\n                                        variant="contained"\n                                        color="primary"\n                                  >\n                                  Remove Navigation Item\n                                  </Button>\n                            ')),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.prependNavigationItem"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use",d.a.createElement("code",null,"prependNavigationItem(",d.a.createElement("i",null,"object"),", ",d.a.createElement("i",null,"collapseId/groupId"),"?)"),"action to prepend a navigation item into the navigation array."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added at the top of the navigation array.'),d.a.createElement(l.a,{onClick:function(){t(s.i({id:"test-link-".concat(i.a.generateGUID()),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"primary"},"Prepend Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.prependNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Prepend Navigation Item\n                                </Button>\n                                ")),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added into top of the "Dashboards" children.'),d.a.createElement(l.a,{onClick:function(){t(s.i({id:"test-link-".concat(i.a.generateGUID()),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"primary"},"Prepend Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.prependNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }, 'dashboards'\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Prepend Navigation Item\n                                </Button>\n                                ")),d.a.createElement(m.a,{className:"mt-32 mb-8",variant:"h6"},"Actions.appendNavigationItem"),d.a.createElement(m.a,{className:"text-16 mb-8",component:"h2"},"Use",d.a.createElement("code",null,"appendNavigationItem(",d.a.createElement("i",null,"object"),", ",d.a.createElement("i",null,"collapseId/groupId"),"?)"),"action to append a navigation item into the navigation array."),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added at the bottom of the array.'),d.a.createElement(l.a,{onClick:function(){t(s.a({id:"test-link-".concat(i.a.generateGUID()),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"primary"},"Append Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.appendNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Append Navigation Item\n                                </Button>\n                                ")),d.a.createElement("div",{className:"border-1 rounded-8 p-16 my-16"},d.a.createElement(m.a,{className:"text-16 mb-24",component:"h2"},'With the button below, "fusetheme.com" navigation item is added into bottom of the "Dashboards" children.'),d.a.createElement(l.a,{onClick:function(){t(s.a({id:"test-link-".concat(i.a.generateGUID()),title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"primary"},"Append Navigation Item"),d.a.createElement(n.a,{component:"pre",className:"language-jsx mt-24"},"\n                                <Button\n                                    onClick={()=> {\n                                        dispatch(Actions.appendNavigationItem(\n                                            {\n                                                'id'    : 'test-link',\n                                                'title' : 'fusetheme.com',\n                                                'type'  : 'link',\n                                                'icon'  : 'link',\n                                                'url'   : 'http://fusetheme.com',\n                                                'target': '_blank'\n                                            }, 'dashboards'\n                                        ))\n                                    }}\n                                    variant=\"contained\"\n                                    color=\"primary\"\n                                >\n                                    Append Navigation Item\n                                </Button>\n                                ")))})}}}]);