(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(39),r=a.n(c),i=a(4),o=a(8),l=a(1),d=function(){return Object(l.jsxs)("div",{className:"next-steps",children:[Object(l.jsx)("h2",{className:"my-5 text-center",children:"What can I do next?"}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(l.jsx)("h6",{className:"mb-3",children:Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/connections",children:[Object(l.jsx)("i",{className:"fas fa-link mr-2"}),"Configure other identity providers"]})}),Object(l.jsx)("p",{children:"Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."})]}),Object(l.jsx)("div",{className:"col-md"}),Object(l.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(l.jsx)("h6",{className:"mb-3",children:Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/multifactor-authentication",children:[Object(l.jsx)("i",{className:"fas fa-link mr-2"}),"Enable Multi-Factor Authentication"]})}),Object(l.jsx)("p",{children:"Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."})]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(l.jsx)("h6",{className:"mb-3",children:Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/anomaly-detection",children:[Object(l.jsx)("i",{className:"fas fa-link mr-2"}),"Anomaly Detection"]})}),Object(l.jsx)("p",{children:"Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."})]}),Object(l.jsx)("div",{className:"col-md"}),Object(l.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(l.jsx)("h6",{className:"mb-3",children:Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/rules",children:[Object(l.jsx)("i",{className:"fas fa-link mr-2"}),"Learn About Rules"]})}),Object(l.jsx)("p",{children:"Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."})]})]})]})},j=function(){return Object(l.jsxs)("div",{className:"text-center hero",children:[Object(l.jsx)("img",{className:"mb-3 app-logo",src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png",alt:"React logo",width:"120"}),Object(l.jsx)("h1",{className:"mb-4",children:"React Sample Project"}),Object(l.jsxs)("p",{className:"lead",children:["This is a sample application that demonstrates an authentication flow for an SPA, using"," ",Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/quickstart/spa/react",children:"React"})]})]})},u=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},m=a(13),b=a(11),h=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0];t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"External API"}),Object(l.jsxs)("p",{children:["You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value.",Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"This route should be protected"}),"."]}),Object(l.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Public Message"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Protected Message"})]}),a&&Object(l.jsxs)("div",{className:"mt-5",children:[Object(l.jsx)("h6",{className:"muted",children:"Result"}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(a,null,2)})})})]})]})},p=a(12),O=a.n(p),g=a(15),x=a(25),f=a(42),v=a.n(f),w=function(){return Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=v.a.get("client/soKVdT2wmzd1LKYoZpv6FJMTg6yQ238.js"),a=t.data,console.log(a)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(d,{})]})},N=function(){var e=Object(m.a)().user,t=e.name,a=e.picture,n=e.email;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(l.jsx)("div",{className:"col-md-2 mb-3",children:Object(l.jsx)("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(l.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{className:"lead text-muted",children:n})]})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("pre",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(e,null,2)})})]})},y=a(3),S=a(43),A=["component"],P=function(e){var t=e.component,a=Object(S.a)(e,A);return Object(l.jsx)(i.b,Object(y.a)({component:Object(m.b)(t,{onRedirecting:function(){return Object(l.jsx)(u,{})}})},a))},C=a(14),k=s.a.createContext({}),L=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],c=a[1];console.log("configs",e);var r=new x.a.WebAuth({domain:"atul-mcafee.us.auth0.com",clientID:"soKVdT2wmzd71LKYoZpv6FJMTg6yQ238",responseType:"token id_token",redirectUri:"http://localhost:4040/authorize"});return Object(l.jsx)(k.Provider,{value:{webAuth:r,otpStart:function(e){return new Promise((function(t,a){var n={email:e,connection:"email",send:"code"};r.passwordlessStart(n,(function(e,n){e?(console.log(e),a(e)):t(n)}))}))},otpLogin:function(e,t){return new Promise((function(a,n){r.passwordlessLogin({email:e,connection:"email",verificationCode:t},(function(e,t){e?n(e):(window.origin=window.location.origin,a(t))}))}))},loginWithPassword:function(e,t){return new Promise((function(a,n){r.login({realm:"Username-Password-Authentication",username:e,password:t},(function(e,t){if(e)return console.log(e),void n(e);t&&(window.origin=window.location.origin,a(t))}))}))},SignupWithPassword:function(e,t){return new Promise((function(a,n){var s={connection:"Username-Password-Authentication",email:e,password:t};r.signup(s,(function(e,t){if(e)return console.log(e),void n(e);t&&(window.origin=window.location.origin,a(t))}))}))},AuthenticateUser:function(e){localStorage.setItem("auth_token",e),c(!0)},storeUserData:function(e){localStorage.setItem("userData",JSON.stringify(e))},isAuthenticated:s},children:e.children})};function E(e){var t=Object(n.useContext)(k),a=t.loginWithPassword,c=t.otpLogin,r=t.otpStart,i=Object(n.useState)({email:"",password:"",otp:"",otpAvailable:!1,isSubmitting:!1}),o=Object(b.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)({email:"",isEmailError:"",databaseError:""}),u=Object(b.a)(j,2),m=u[0],h=u[1],p=Object(n.useState)(!1),x=Object(b.a)(p,2),f=x[0],v=x[1],w=Object(n.useState)(!1),N=Object(b.a)(w,2),S=N[0],A=N[1],P=function(e){if("email"===e.target.name)e.target.value?e.target.value&&(t=e.target.value,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))?h(Object(y.a)(Object(y.a)({},m),{},Object(C.a)({isEmailError:!0},e.target.name,"Email is not valid"))):h(Object(y.a)(Object(y.a)({},m),{},Object(C.a)({isEmailError:!1},e.target.name,""))):h(Object(y.a)(Object(y.a)({},m),{},Object(C.a)({isEmailError:!0},e.target.name,"Email is required")));var t},L=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f){e.next=16;break}return e.prev=2,e.next=5,a(l.email,l.password);case 5:n=e.sent,h(Object(y.a)(Object(y.a)({},m),{},{databaseError:""})),console.log(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),h(Object(y.a)(Object(y.a)({},m),{},{databaseError:e.t0.description}));case 14:e.next=29;break;case 16:if(e.prev=16,!l.otpAvailable){e.next=23;break}return e.next=20,c(l.email,l.otp);case 20:s=e.sent,console.log("----------\x3e",l.email,l.otp),console.log(s,"ankit");case 23:e.next=29;break;case 25:e.prev=25,e.t1=e.catch(16),console.log(e.t1),h(Object(y.a)(Object(y.a)({},m),{},{databaseError:e.t1.description}));case 29:case"end":return e.stop()}}),e,null,[[2,10],[16,25]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(g.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!f),e.next=4,r(l.email);case 4:t=e.sent,console.log("enter here",t),d(Object(y.a)(Object(y.a)({},l),{},{otpAvailable:!0})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),h(Object(y.a)(Object(y.a)({},m),{},{databaseError:e.t0.description}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=s.a.Children.only(e.children);return s.a.cloneElement(I,{onChange:function(e){d(Object(y.a)(Object(y.a)({},l),{},Object(C.a)({},e.target.name,e.target.value))),P(e)},onToggle:function(){v(!f),h(Object(y.a)(Object(y.a)({},m),{},{email:"",databaseError:""}))},switchLogin:f,onSubmit:L,LoginForm:l,LoginError:m,Continue:S,onPressContinue:function(){A(!0)},getOtp:E})}a(37);var I=a(16),F=a(20),M=function(e){var t=e.onChange,a=e.switchLogin,n=e.onSubmit,s=e.LoginError,c=e.LoginForm,r=e.onToggle,i=(e.Continue,e.onPressContinue,e.getOtp);return Object(l.jsxs)("div",{className:"LoginWrapperContainer",children:[Object(l.jsxs)("form",{className:"InputWrapper",children:[!a&&Object(l.jsxs)(l.Fragment,{children:[""!==c.email?Object(l.jsx)("div",{className:"InputLabel",children:"Email"}):null,Object(l.jsxs)("div",{className:"InputAndLogo",style:{border:!0===s.isEmailError?"2px solid red":!1===s.isEmailError?"2px solid green":""},children:[Object(l.jsx)(I.b,{style:{height:"2rem",width:"2rem","margin-top":"1rem",color:"rgb(175, 174, 174)"}}),Object(l.jsx)("input",{type:"email",id:"email",name:"email",value:c.email,placeholder:"Email",className:"Input",onChange:t})]})]}),s.email&&Object(l.jsx)("div",{className:"Error",children:s.email}),!a&&Object(l.jsxs)(l.Fragment,{children:[""!==c.password?Object(l.jsx)("div",{className:"InputLabelPass",children:"Password"}):null,Object(l.jsxs)("div",{className:"InputAndLogo",children:[Object(l.jsx)(F.a,{style:{height:"2rem",width:"2rem","margin-top":"1rem",color:"rgb(175, 174, 174)"}}),Object(l.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",className:"Input",onChange:t})]})]}),a&&c.otpAvailable&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"InputLabel",children:"one-time passcode"}),Object(l.jsx)("div",{className:"InputAndLogo",children:Object(l.jsx)("input",{id:"otp",name:"otp",className:"Input",onChange:t})})]}),Object(l.jsx)("button",{className:"RequestOtp",onClick:n,children:Object(l.jsx)("div",{children:"Sign in"})})]}),Object(l.jsx)("div",{className:"Error",children:s.databaseError}),Object(l.jsxs)("div",{className:"SwitchContainer",children:[Object(l.jsx)("div",{className:"Switch",children:"OR"}),!a&&Object(l.jsx)("button",{className:"SwitchBtn",onClick:i,children:Object(l.jsx)("div",{children:"Sign in with a one-time passcode"})}),a&&Object(l.jsx)("button",{className:"SwitchBtn",onClick:r,children:Object(l.jsx)("div",{children:"Sign in with password"})})]})]})},W=function(e){var t=e.onChange,a=e.switchLogin,n=e.onToggle,s=e.onSubmit,c=e.LoginError,r=e.LoginForm,i=e.Continue,d=e.onPressContinue,j=e.getOtp;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"LoginContainer",children:[Object(l.jsx)("div",{className:"LeftWrapper",children:Object(l.jsxs)("div",{className:"WelcomeContainer",children:[Object(l.jsx)("img",{alt:"McAfeeLogo",className:"Logo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"}),Object(l.jsx)("div",{className:"Intro",children:"Sign in to your McAfee account"}),Object(l.jsx)("div",{className:"IntroSubHeading",children:"Enter your email address so we can find your account."}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsx)("div",{className:"bottom-heading",children:Object(l.jsxs)("p",{children:["Don\u2019t have an account?",Object(l.jsx)("span",{children:Object(l.jsx)(o.b,{to:"/signUp",children:" Create one now"})})]})})]})}),Object(l.jsx)("div",{className:"RightWrapper",children:Object(l.jsx)(M,{LoginError:c,onChange:t,switchLogin:a,onSubmit:s,LoginForm:r,onToggle:n,onPressContinue:d,Continue:i,getOtp:j})})]})})},T=function(e){return Object(l.jsx)(E,Object(y.a)(Object(y.a)({},e),{},{children:Object(l.jsx)(W,{})}))},R=(a(77),function(){var e=JSON.parse(localStorage.getItem("userData"));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"DashboardContainer",children:[Object(l.jsx)("div",{className:"DashBoardHeading",children:"Welcome to DashBoard... "}),Object(l.jsx)("div",{className:"UserImg",style:{backgroundImage:"url(".concat(null===e||void 0===e?void 0:e.picture,")")}}),Object(l.jsx)("div",{className:"UserName",children:e.name})]})})}),D=function(e){return Object(l.jsx)(R,{})},U=function(e){var t=Object(n.useContext)(k),a=t.isAuthenticated,s=t.storeUserData,c=t.AuthenticateUser,r=t.webAuth;return Object(n.useEffect)((function(){window.location.hash&&(console.log("this is the -----\x3e",window.location.hash),r.parseHash({hash:window.location.hash,state:e.config.state,nonce:e.config.extraParams.nonce},(function(e,t){if(e)return console.log(e),void localStorage.clear();var a=t.idTokenPayload,n=a.email,r=a.name,i=a.picture,o=a.sub;s({email:n,name:r,picture:i,id:o}),c(t.idToken)})))}),[]),a?Object(l.jsx)(i.a,{to:"/dashboard"}):Object(l.jsx)("div",{children:"Loading...."})};function z(e){var t=Object(n.useContext)(k),a=t.SignupWithPassword,c=t.loginWithPassword,r=Object(n.useState)({email:"",password:"",confirmPassword:""}),i=Object(b.a)(r,2),o=i[0],l=i[1],d=function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===o.email||""===o.password||""===o.confirmPassword||o.password!==o.confirmPassword){e.next=18;break}return e.prev=2,e.next=5,a(o.email,o.password);case 5:if(n=e.sent,console.log(n),!n.email){e.next=11;break}return e.next=10,c(o.email,o.password);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:e.next=19;break;case 18:console.log("enter details");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),j=s.a.Children.only(e.children);return s.a.cloneElement(j,{onSubmit:d,SignupForm:o,onChange:function(e){l(Object(y.a)(Object(y.a)({},o),{},Object(C.a)({},e.target.name,e.target.value)))}})}a(38);var B=function(e){var t=e.onSubmit,a=e.SignupForm,n=e.onChange;return Object(l.jsx)("div",{className:"formWrapper",children:Object(l.jsx)("form",{className:"InputWrapper",children:Object(l.jsxs)(l.Fragment,{children:[""!==a.email?Object(l.jsx)("div",{className:"InputLabel",children:"Email"}):null,Object(l.jsxs)("div",{className:"InputAndLogo",children:[Object(l.jsx)(I.b,{style:{height:"2rem",width:"2rem","margin-top":"0.7rem",color:"rgb(175, 174, 174)"}}),Object(l.jsx)("input",{type:"email",id:"email",name:"email",value:a.email,placeholder:"Email",className:"Input",onChange:n})]}),""!==a.password?Object(l.jsx)("div",{className:"InputLabelPass",children:"Password"}):null,Object(l.jsxs)("div",{className:"InputAndLogo",children:[Object(l.jsx)(F.a,{style:{height:"2rem",width:"2rem","margin-top":"0.7rem",color:"rgb(175, 174, 174)"}}),Object(l.jsx)("input",{type:"password",id:"password",name:"password",value:a.password,placeholder:"Password",className:"Input",onChange:n}),Object(l.jsx)(I.a,{style:{height:"2rem",width:"2rem","margin-top":"0.7rem",color:"rgb(175, 174, 174)"}})]}),""!==a.confirmPassword?Object(l.jsx)("div",{className:"InputLabelCPass",children:"Confirm Password"}):null,Object(l.jsxs)("div",{className:"InputAndLogo",children:[Object(l.jsx)(F.a,{style:{height:"2rem",width:"2rem","margin-top":"0.7rem",color:"rgb(175, 174, 174)"}}),Object(l.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:a.confirmPassword,placeholder:"Confirm Password",className:"Input",onChange:n}),Object(l.jsx)(I.a,{style:{height:"2rem",width:"2rem","margin-top":"0.7rem",color:"rgb(175, 174, 174)"}})]}),Object(l.jsxs)("div",{className:"PolicyLink",children:["By clicking Create my account, you accept"," ",Object(l.jsxs)("span",{style:{color:"rgb(66, 88, 255)"},children:["McAfee\u2019s License ",Object(l.jsx)("br",{}),"Agreement"]})," ","and",Object(l.jsx)("span",{style:{color:"rgb(66, 88, 255)"},children:" Privacy Notice"})]}),Object(l.jsx)("button",{className:""!==a.email&&""!==a.password&&""!==a.confirmPassword?"SubmitButtonActive":"SubmitButton",onClick:t,children:Object(l.jsx)("div",{children:"Create My Account"})})]})})})},J=function(e){var t=e.onSubmit,a=e.SignupForm,n=e.onChange;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"SignupWrapper",children:[Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsx)("img",{alt:"McAfeeLogo",className:"Logo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"}),Object(l.jsx)("div",{className:"Intro",children:"Create your McAfee account"}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("div",{className:"IntroSubHeading",children:[Object(l.jsx)("div",{className:"PointsHeading",children:"Step 1"}),Object(l.jsx)("div",{className:"Points",children:"Enter your email address so we can find your account."})]}),Object(l.jsxs)("div",{className:"IntroSubHeading",children:[Object(l.jsx)("div",{className:"PointsHeading",children:"Step 2"}),Object(l.jsx)("div",{className:"Points",children:"Set a password and we\u2019ll create your account."})]})]}),Object(l.jsx)("div",{className:"RightContainer",children:Object(l.jsx)(B,{onChange:n,onSubmit:t,SignupForm:a})})]})})},H=function(e){return Object(l.jsx)(z,Object(y.a)(Object(y.a)({},e),{},{children:Object(l.jsx)(J,{})}))},_=(a(78),function(e){var t=e.pageConfig;return console.log("Bundle is working fine"),Object(l.jsx)(o.a,{children:Object(l.jsx)(L,{config:t,children:Object(l.jsx)("div",{id:"app",className:"d-flex flex-column h-100",children:Object(l.jsx)("div",{className:"container flex-grow-1",children:Object(l.jsx)("div",{className:"mt-5",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:w}),Object(l.jsx)(i.b,{path:"/login",exact:!0,component:T}),Object(l.jsx)(i.b,{path:"/signUp",exact:!0,component:H}),Object(l.jsx)(i.b,{exact:!0,path:"/authorize",children:Object(l.jsx)(U,{config:t})}),Object(l.jsx)(i.b,{exact:!0,path:"/dashboard",component:D}),Object(l.jsx)(P,{path:"/profile",component:N}),Object(l.jsx)(P,{path:"/external-api",component:h})]})})})})})})});a(79);r.a.render(Object(l.jsx)(_,{pageConfig:{}}),document.getElementById("root"))}},[[80,1,2]]]);