(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9430:function(e,n,r){"use strict";r.d(n,{Z:function(){return N}});var i=r(5893),t=r(7335),s=r(5309),l=r(3100),a=r(204),o=r(2498),c=r(4859),d=r(8911),h=r(1560),f=r(7306),x=r(2028),u=r(8e3),g=r(7379),p=r(3948),b=r(3838),j=r(4416),m=r(6877),y=r(8163),w=r(4741),k=r(6864),v=r(1664),_=r(7294),S=r(1163),C=r(5922);let O=[{label:"What's this Site",href:"/about"},{label:"100 Things",href:"/todos"},{label:"Album",href:"/album"},{label:"Map",href:"/map"}],z=()=>{let{isOpen:e,onToggle:n}=(0,t.q)(),r=(0,s.p)(),g=(0,S.useRouter)(),[p,b]=(0,_.useState)(""),j=async()=>{var e;let{data:n,error:r}=await C.O.auth.getSession();b(null===(e=n.session)||void 0===e?void 0:e.user.email)};(0,_.useEffect)(()=>{j()});let m=async()=>{let{error:e}=await C.O.auth.signOut();e&&r({title:"LogOut Failure",description:"Cannot Logout",status:"error",duration:9e3,isClosable:!0}),r({title:"Successfully Logged out",description:"Logout Successfully",status:"success",duration:9e3,isClosable:!0}),g.reload()};return(0,i.jsxs)(l.xu,{children:[(0,i.jsxs)(a.k,{bg:(0,o.ff)("white","gray.800"),color:(0,o.ff)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:0,borderStyle:"solid",borderColor:(0,o.ff)("gray.200","gray.900"),align:"center",children:[(0,i.jsx)(a.k,{flex:{base:1,md:"auto"},ml:{base:-2},display:{base:"flex",md:"none"},children:(0,i.jsx)(c.h,{onClick:n,icon:e?(0,i.jsx)(y.T,{w:3,h:3}):(0,i.jsx)(w.U,{w:5,h:5}),variant:"ghost","aria-label":"Toggle Navigation"})}),(0,i.jsxs)(a.k,{flex:{base:1},justify:{base:"center",md:"start"},children:[(0,i.jsx)(d.x,{textAlign:(0,h.S)({base:"center",md:"left"}),fontFamily:"heading",color:(0,o.ff)("gray.800","white"),children:"100Things"}),(0,i.jsx)(a.k,{display:{base:"none",md:"flex"},ml:10,children:(0,i.jsx)(W,{})})]}),(0,i.jsx)(f.K,{flex:{base:1,md:0},justify:"flex-end",direction:"row",spacing:6,children:void 0===p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.z,{as:"a",fontSize:"sm",fontWeight:400,variant:"link",href:"/signin",children:"Sign In"}),(0,i.jsx)(x.z,{as:"a",display:{base:"none",md:"inline-flex"},fontSize:"sm",fontWeight:600,color:"white",bg:"pink.400",_hover:{bg:"pink.300"},href:"/signup",children:"Sign Up"})]}):(0,i.jsx)(x.z,{display:{base:"none",md:"inline-flex"},fontSize:"sm",fontWeight:600,color:"white",bg:"pink.400",_hover:{bg:"pink.300"},onClick:m,children:"Log Out"})})]}),(0,i.jsx)(u.U,{in:e,animateOpacity:!0,children:(0,i.jsx)(T,{})})]})},W=()=>{var e;let n=(0,o.ff)("gray.600","gray.200"),r=(0,o.ff)("gray.800","white"),t=(0,o.ff)("white","gray.800");return(0,i.jsx)(f.K,{direction:"row",spacing:4,children:O.map(s=>(0,i.jsx)(l.xu,{children:(0,i.jsxs)(g.J,{trigger:"hover",placement:"bottom-start",children:[(0,i.jsx)(p.x,{children:(0,i.jsx)(b.r,{p:2,href:null!==(e=s.href)&&void 0!==e?e:"#",fontSize:"sm",fontWeight:500,color:n,_hover:{textDecoration:"none",color:r},children:s.label})}),s.children&&(0,i.jsx)(j.y,{border:0,boxShadow:"xl",bg:t,p:4,rounded:"xl",minW:"sm",children:(0,i.jsx)(f.K,{children:s.children.map(e=>(0,i.jsx)(K,{...e},e.label))})})]})},s.label))})},K=e=>{let{label:n,href:r,subLabel:t}=e;return(0,i.jsx)(b.r,{href:r,role:"group",display:"block",p:2,rounded:"md",_hover:{bg:(0,o.ff)("pink.50","gray.900")},children:(0,i.jsxs)(f.K,{direction:"row",align:"center",children:[(0,i.jsxs)(l.xu,{children:[(0,i.jsx)(d.x,{transition:"all .3s ease",_groupHover:{color:"pink.400"},fontWeight:500,children:n}),(0,i.jsx)(d.x,{fontSize:"sm",children:t})]}),(0,i.jsx)(a.k,{transition:"all .3s ease",transform:"translateX(-10px)",opacity:0,_groupHover:{opacity:"100%",transform:"translateX(0)"},justify:"flex-end",align:"center",flex:1,children:(0,i.jsx)(m.J,{color:"pink.400",w:5,h:5,as:k.X})})]})})},T=()=>(0,i.jsx)(f.K,{bg:(0,o.ff)("white","gray.800"),p:4,display:{md:"none"},children:O.map(e=>(0,i.jsx)(E,{...e},e.label))}),E=e=>{let{label:n,children:r,href:s}=e,{isOpen:l,onToggle:c}=(0,t.q)();return(0,i.jsxs)(f.K,{spacing:4,onClick:r&&c,children:[(0,i.jsxs)(a.k,{py:2,as:b.r,href:null!=s?s:"#",justify:"space-between",align:"center",_hover:{textDecoration:"none"},children:[(0,i.jsx)(d.x,{fontWeight:600,color:(0,o.ff)("gray.600","gray.200"),children:n}),r&&(0,i.jsx)(m.J,{as:v.v,transition:"all .25s ease-in-out",transform:l?"rotate(180deg)":"",w:6,h:6})]}),(0,i.jsx)(u.U,{in:l,animateOpacity:!0,style:{marginTop:"0!important"},children:(0,i.jsx)(f.K,{mt:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:(0,o.ff)("gray.200","gray.700"),align:"start",children:r&&r.map(e=>(0,i.jsx)(b.r,{py:2,href:e.href,children:e.label},e.label))})})]})},L=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z,{}),e.children]});var N=L},4186:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return s}});var i=r(5893),t=r(9430);function s(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{children:"あ"})})}}},function(e){e.O(0,[511,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);