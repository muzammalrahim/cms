(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[149],{2984:function(e,a,t){"use strict";t.r(a);var n=t(18),c=t(130),l=t(145),r=t(200),s=t(1566),o=t(793),i=t(1536),m=t(735),f=t(796),u=t(1538),p=t(797),d=t(1535),E=t(246),h=t(0),b=t.n(h),g=["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"],y={translateX:[0,"100%"],opacity:[1,0]},v=Object(d.a)({layoutRoot:{},box:{width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:16}});a.default=function(){var e=v(),a=Object(h.useState)("fade"),t=Object(n.a)(a,2),d=t[0],x=t[1],N=Object(h.useState)(y),w=Object(n.a)(N,2),j=w[0],C=w[1],F=Object(h.useRef)();return Object(h.useEffect)((function(){return F.current=setInterval((function(){C(j?null:y)}),1e3),function(){clearInterval(F.current)}})),b.a.createElement(r.a,{classes:{root:e.layoutRoot},header:b.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},b.a.createElement("div",{className:"flex flex-col"},b.a.createElement("div",{className:"flex items-center mb-16"},b.a.createElement(i.a,{className:"text-18",color:"action"},"home"),b.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),b.a.createElement(E.a,{color:"textSecondary"},"Documentation"),b.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),b.a.createElement(E.a,{color:"textSecondary"},"Fuse Components")),b.a.createElement(E.a,{variant:"h6"},"FuseAnimate"))),content:b.a.createElement("div",{className:"p-24 max-w-2xl"},b.a.createElement(E.a,{className:"mb-16",component:"p"},b.a.createElement("code",null,"FuseAnimate")," is a container component which uses ",b.a.createElement("code",null,"VelocityComponent")," of",b.a.createElement("code",null,"velocity-react")," library."),b.a.createElement(E.a,{className:"mt-32 mb-8",variant:"h5"},"Predefined Effects Usage"),b.a.createElement(E.a,{className:"mb-16",component:"p"},"You can use predefined animation effects."),b.a.createElement(l.a,{component:"pre",className:"language-jsx"},'\n                                <FuseAnimate\n                                    animation="transition.'.concat(d,'In"\n                                    duration={400}\n                                    delay={400}\n                                >\n                                     <Card className={classes.box}>\n                                        <Typography>\n                                        {selectedEffect}\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             ')),b.a.createElement("div",{className:"flex flex-wrap p-48"},b.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},b.a.createElement(o.a,{className:"w-256"},b.a.createElement(f.a,{htmlFor:"effect-helper"},"Select Effect"),b.a.createElement(p.a,{value:d,onChange:function(e){x(e.target.value)},input:b.a.createElement(m.a,{name:"effect",id:"effect-helper"})},g.map((function(e){return b.a.createElement(u.a,{key:e,value:e},"transition.",e,"In")}))))),b.a.createElement("div",{className:"flex w-full sm:w-1/2 items-center justify-center"},b.a.createElement(c.a,{animation:d&&"transition.".concat(d,"In"),duration:400,delay:400},b.a.createElement(s.a,{className:e.box},b.a.createElement(E.a,null,d))))),b.a.createElement(E.a,{className:"mt-32 mb-8",variant:"h5"},"Custom Effects Usage"),b.a.createElement(E.a,{className:"mb-16",component:"p"},"You can create custom effects."),b.a.createElement(l.a,{component:"pre",className:"language-jsx"},"\n                                <FuseAnimate\n                                    animation={{\n                                        translateX: [0, '100%'],\n                                        opacity   : [1, 0]\n                                    }}\n                                    duration={400}\n                                    delay={400}\n                                >\n                                    <Card className={classes.box}>\n                                        <Typography>\n                                            Slide left and fade in\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             "),b.a.createElement("div",{className:"p-24 flex items-center justify-center"},b.a.createElement(c.a,{animation:j,duration:400,delay:400},b.a.createElement(s.a,{className:e.box},b.a.createElement(E.a,null,"Slide left and fade in")))),b.a.createElement(E.a,{className:"mb-16",component:"p"},"For more information checkout the",b.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8 font-bold"},"velocity-react"),"."))})}}}]);