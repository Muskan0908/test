(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),o=n.n(i),c=n(3),a=n.n(c),l=(n(15),n.p,n(16),n(4)),r=n(5),u=n(9),h=n(8),j=n(6),g=n.n(j),d=n(7),b=n.n(d),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isFbLoggedIn:!1,isGoogleLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.componentClicked=function(){console.log("clicked")},e.responseGoogle=function(t){console.log(t),e.setState({isGoogleLoggedIn:!0,name:t.profileObj.name,email:t.profileObj.email})},e.responseFacebook=function(t){console.log(t),e.setState({isFbLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url})},e}return Object(r.a)(n,[{key:"render",value:function(){var e,t;return e=this.state.isFbLoggedIn?Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:this.state.picture,alt:this.state.name}),Object(s.jsxs)("h2",{children:["Welcome ",this.state.name]}),Object(s.jsxs)("h3",{children:["Email:",this.state.email]})]}):Object(s.jsx)(b.a,{appId:"118973186652246",autoLoad:!0,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),t=this.state.isGoogleLoggedIn?Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["Welcome ",this.state.name]}),Object(s.jsxs)("h3",{children:["Email:",this.state.email]})]}):Object(s.jsx)(g.a,{clientId:"628582513251-8k12u35sjl2t770hj5h5ti72r48537m2.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),Object(s.jsxs)("div",{children:[e,t]})}}]),n}(i.Component);var p=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),o(e),c(e)}))};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.aadcc569.chunk.js.map