(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),c=n.n(s),i=n(3),a=n.n(i),l=(n(15),n.p,n(16),n(4)),r=n(5),u=n(9),g=n(8),d=n(6),h=n.n(d),j=n(7),p=n.n(j),b=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isFbLoggedIn:!1,isGoogleLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.componentClicked=function(){console.log("clicked")},e.responseGoogle=function(t){console.log(t),e.setState({isGoogleLoggedIn:!0})},e.responseFacebook=function(t){console.log(t),e.setState({isFbLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url})},e}return Object(r.a)(n,[{key:"render",value:function(){var e,t;return this.state.isFbLoggedIn?(e=Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:this.state.picture,alt:this.state.name}),Object(o.jsxs)("h2",{children:["Welcome ",this.state.name]}),Object(o.jsxs)("h3",{children:["Email:",this.state.email]})]}),t=null):e=Object(o.jsx)(p.a,{appId:"118973186652246",autoLoad:!0,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),this.state.isGoogleLoggedIn?(t=null,e=null):t=Object(o.jsx)(h.a,{clientId:"628582513251-8k12u35sjl2t770hj5h5ti72r48537m2.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),Object(o.jsxs)("div",{children:[e,t]})}}]),n}(s.Component);var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),c(e),i(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.d8853762.chunk.js.map