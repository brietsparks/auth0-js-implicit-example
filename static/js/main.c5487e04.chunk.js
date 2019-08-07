(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=a(88),i=a(16),u=a(17),m=a(21),s=a(61),p=a(82),g=Object(s.a)(function(e){return{progress:{margin:e.spacing(2)},message:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"}}}),h=function(){var e=Object(n.useState)(2e3),t=Object(m.a)(e,2),a=t[0],o=t[1];setTimeout(function(){return o(a-1e3)},1e3);var c=g();return 0===a?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",{className:c.message},"Logging out",r.a.createElement("br",null),r.a.createElement(d,null))};function d(){var e=g(),t=r.a.useState(0),a=Object(m.a)(t,2),n=a[0],o=a[1];return r.a.useEffect(function(){var e=setInterval(function(){o(function(e){return e>=100?0:e+1})},20);return function(){clearInterval(e)}},[]),r.a.createElement(p.a,{size:80,className:e.progress,variant:"determinate",value:n})}var E=a(35),f=a(36),b=a.n(f),v=window.location.origin+"/login-callback",x=window.location.origin+"/logged-out",w=new E.a.WebAuth({domain:"auth0-implicit-utils.auth0.com",clientID:"MZO8uv33Mhx9OxMws96Qfo73u1cU7REf",audience:"my-api-2.com",redirectUri:v}),k=new b.a(w,x,{reauthenticationLeeway:5,onReauthenticationSuccess:function(e){console.log("Silently reauthenticated: ",e)},onReauthenticationFailure:function(e){return console.log("Reauthentication failure: ",e)}}),y=function(){return!!k.getAuthStorage().retrieveAccessToken()};var j=a(83),O={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},S=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),l=Object(m.a)(c,2),i=l[0],s=l[1];return Object(n.useEffect)(function(){k.handleLoginSuccess().then(function(e){o(e.redirectTo)}).catch(function(e){return s(e.message)})},[]),a?r.a.createElement(u.a,{to:a}):i?r.a.createElement("div",{style:O},r.a.createElement(j.a,null,"An error occurred attempting to log in")):null},A=a(84),P=a(89),N=a(90),T=Object(s.a)(function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5),textDecoration:"none"}}}),B=function(){var e=T();return r.a.createElement("div",null,r.a.createElement(N.a,{position:"static",color:"default",elevation:0,className:e.appBar},r.a.createElement(A.a,{className:e.toolbar},r.a.createElement(j.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle},r.a.createElement(i.b,{to:"/",className:e.link},"Auth0.js Implicit Example")),r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/public",className:e.link},"Public Page"),r.a.createElement(i.b,{to:"/private",className:e.link},"Private Page")),y()?r.a.createElement(P.a,{onClick:function(){return k.logout()}},"Logout"):r.a.createElement(P.a,{onClick:function(){return k.promptLogin(window.location.pathname)}},"Login"))))},C=a(85),L=Object(s.a)(function(e){return{main:{padding:e.spacing(8)}}}),z=function(e){var t=e.children,a=L();return r.a.createElement(C.a,{component:"main",className:a.main},t)},I=function(){return k.authenticate("/private").then(function(e){console.log("Authenticated:",e)}),y()?r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(z,null,r.a.createElement(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Private Page"),r.a.createElement(j.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"This page is top secret! You are logged in if you are seeing this!"),r.a.createElement(j.a,{align:"center",color:"textSecondary",component:"p"},"Access tokens have an life of 30 seconds and will silently reauthenticate 5 seconds before expiring. Check the console to see this."))):null},W=function(){return k.authenticate().then(function(e){console.log("Authenticated:",e.accessToken?e:"anonymous user")}),r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(z,null,r.a.createElement(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Public Page"),r.a.createElement(j.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"This page is public. You don't have to be logged in to see this.")))},D=a(39),M=a(86),R=a(87),J=Object(s.a)(function(e){return{sources:{padding:e.spacing(8,0,6)}}}),U=function(){var e=J();return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(z,null,r.a.createElement(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Demo App"),r.a.createElement(j.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"Try the authentication flow by using the menubar navigation."),r.a.createElement(C.a,{maxWidth:"md",className:e.sources},r.a.createElement(M.a,{container:!0,spacing:5,alignItems:"flex-end"},r.a.createElement(M.a,{item:!0,xs:12,md:6},r.a.createElement("a",{href:"https://github.com/brietsparks/auth0-js-implicit",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(j.a,{align:"center"},"Library Source Code"),r.a.createElement(Y,{size:4}))),r.a.createElement(M.a,{item:!0,xs:12,md:6},r.a.createElement("a",{href:"https://github.com/brietsparks/auth0-js-implicit-example",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(j.a,{align:"center"},"Demo Source Code"),r.a.createElement(Y,{size:4})))))))};function Y(e){var t=e.size,a=void 0===t?1:t,n=Object(D.a)(e,["size"]),o={width:"".concat(a,"em"),height:"".concat(a,"em"),display:"block",margin:"auto"};return r.a.createElement(R.a,Object.assign({},n,{style:o}),r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))}var _="auth0-js-implicit-example";var F=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement(i.a,{basename:_},r.a.createElement(u.b,{exact:!0,path:"/",component:U}),r.a.createElement(u.b,{exact:!0,path:"/public",component:W}),r.a.createElement(u.b,{exact:!0,path:"/private",component:I}),r.a.createElement(u.b,{exact:!0,path:"/login-callback",component:S}),r.a.createElement(u.b,{exact:!0,path:"/logged-out",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.c5487e04.chunk.js.map