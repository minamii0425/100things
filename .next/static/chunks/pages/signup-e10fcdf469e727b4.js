(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(3599)}])},3599:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSP:function(){return g}});var t=n(5893),r=n(7306),u=n(8267),l=n(3100),i=n(5370),a=n(8129),o=n(2028),c=n(7294),d=n(5922),h=n(5309),x=n(9430);let p=(e,s)=>{console.log(e.user.data),console.log(s);let n=(0,h.p)(),[p,g]=(0,c.useState)(""),[j,_]=(0,c.useState)(""),[f,v]=(0,c.useState)(""),w=async e=>{e.preventDefault();let{data:s,error:t}=await d.O.auth.signUp({email:p,password:j});t?n({title:"LogIn Failure",description:"We've created your account for you.",status:"error",duration:9e3,isClosable:!0}):(n({title:"Successfully Logged In",description:"We've logged in.",status:"success",duration:9e3,isClosable:!0}),g(""),_(""))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(x.Z,{children:(0,t.jsx)(r.K,{children:(0,t.jsxs)(u.NI,{children:[(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(i.l,{children:"メールアドレス"}),(0,t.jsx)(a.I,{type:"email",required:!0,value:p,onChange:e=>g(e.target.value)})]}),(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(i.l,{children:"パスワード"}),(0,t.jsx)(a.I,{type:"password",required:!0,value:j,onChange:e=>_(e.target.value)})]}),(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(i.l,{children:"パスワード（確認）"}),(0,t.jsx)(a.I,{type:"password",required:!0,value:f,onChange:e=>v(e.target.value)})]}),(0,t.jsx)(l.xu,{children:(0,t.jsx)(o.z,{type:"submit",onClick:w,children:"サインアップ"})})]})})})})};var g=!0;s.default=p}},function(e){e.O(0,[511,998,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);