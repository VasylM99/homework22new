(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,a){},125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c);t(70),t(37);var s=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement("img",{className:"avatar",src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info-acc"},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"nickname"},e.username)))))},u=t(4),o=t(7),i=t.n(o),m=t(17),p=t(13),d=t.n(p);function f(){return function(){var e=Object(m.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://tweets.globalofficiallottery.com/users/");case 2:t=e.sent,a({type:"GET_USERS",payload:t.data.data});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}var E=function(){var e=Object(u.c)((function(e){return e.users.users})),a=Object(u.b)();return Object(n.useEffect)((function(){a(f())}),[]),r.a.createElement("div",{className:"layout-wrapper"},e.map((function(e){return r.a.createElement(s,{avatar:e.avatar,name:e.name,username:e.username})})))},v=t(11);var h=function(e){var a=Object(n.useState)(""),t=Object(v.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),o=Object(v.a)(s,2),p=o[0],f=o[1],E=Object(n.useState)(""),h=Object(v.a)(E,2),b=h[0],w=h[1],g=Object(u.b)();return r.a.createElement("div",{className:"layout-wrapper"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{value:p,placeholder:"Avatar",onChange:function(e){f(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{value:b,placeholder:"Username",onChange:function(e){w(e.target.value)}})),r.a.createElement("button",{onClick:function(){var e;g((e={name:c,avatar:p,username:b},function(){var a=Object(m.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("https://tweets.globalofficiallottery.com/users/",e);case 2:t({type:"CREATE_USER"});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())),l(""),f(""),w("")}},"Add user"))},b=t(16);function w(){return function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://tweets.globalofficiallottery.com/tweets/");case 2:return t=e.sent,e.next=5,d.a.get("https://tweets.globalofficiallottery.com/users/");case 5:n=e.sent,r=t.data.data.map((function(e){return Object(b.a)({},e,{author:n.data.data.find((function(a){return e.userId===a.id}))})})),a({type:"GET_POSTS",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}var g=function(e){var a=Object(n.useState)(""),t=Object(v.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),o=Object(v.a)(s,2),p=o[0],E=o[1],h=Object(u.c)((function(e){return e.users.users})),b=Object(n.useState)(h[0]),w=Object(v.a)(b,2),g=w[0],O=w[1],j=Object(u.b)();return Object(n.useEffect)((function(){j(f())}),[]),r.a.createElement("div",{className:"layout-wrapper"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Content",value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{value:p,placeholder:"Image",onChange:function(e){E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("select",{onChange:function(e){O(Number(e.target.value))}},h.map((function(e){return r.a.createElement("option",{value:e.id},e.name)})))),r.a.createElement("button",{onClick:function(){var e;j((e={userId:g,content:c,image:p},function(){var a=Object(m.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("https://tweets.globalofficiallottery.com/tweets/",e);case 2:t({type:"CREATE_POST"});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())),l(""),E("")}},"Add post"))},O=t(18),j=t(10);var N=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement("img",{className:"avatar",src:e.author.avatar,alt:"avatar"})),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info-acc"},r.a.createElement("span",{className:"name"},e.author.name),r.a.createElement("span",{className:"nickname"},e.author.username),r.a.createElement("span",{className:"date"},e.date)),r.a.createElement("div",null,r.a.createElement("i",{className:"fa  fa-chevron-down","aria-hidden":"true"}))),r.a.createElement("div",{className:"content-text"},e.content),r.a.createElement("div",{className:"main-content"},r.a.createElement("img",{className:"image",src:e.image,alt:"content image"}),r.a.createElement("div",{className:"footer"},r.a.createElement("i",{className:"fa fa-comment","aria-hidden":"true"},r.a.createElement("span",null,"482")),r.a.createElement("i",{className:"fa fa-retweet","aria-hidden":"true"},r.a.createElement("span",null,"146")),r.a.createElement("i",{className:"fa fa-heart-o ","aria-hidden":"true"},r.a.createElement("span",null,"887")),r.a.createElement("i",{className:"fa fa-cloud-upload","aria-hidden":"true"})))))},y=t(61),S=t.n(y)()("https://tweets.globalofficiallottery.com",{transport:["polling"],path:"/chat/"}),k=t(62),x=t.n(k);var T=function(){var e=new Audio(x.a);S.on("new-tweet",(function(a){t(w()),e.play()}));var a=Object(u.c)((function(e){return e.posts.posts})),t=Object(u.b)();return Object(n.useEffect)((function(){t(w())}),[]),r.a.createElement("div",{className:"layout-wrapper"},a.map((function(e){return r.a.createElement(N,{author:e.author,content:e.content,image:e.image,date:e.date})})))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null,r.a.createElement("nav",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/addUser"},"Add User")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/tweets"},"Tweets")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/addTweet"},"Add tweet")))),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/users"},r.a.createElement(E,null)),r.a.createElement(j.a,{path:"/addUser"},r.a.createElement(h,null)),r.a.createElement(j.a,{path:"/addTweet"},r.a.createElement(g,null)),r.a.createElement(j.a,{path:"/tweets"},r.a.createElement(T,null)))))},A=t(12),U=t(64),_={posts:[]},R={users:[]},G=Object(A.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_POSTS":return Object(b.a)({},e,{posts:a.payload});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USERS":return Object(b.a)({},e,{users:a.payload});default:return e}}}),I=Object(A.d)(G,Object(A.a)(U.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:I},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,a,t){},62:function(e,a,t){e.exports=t.p+"static/media/D.ca6c1c20.mp3"},65:function(e,a,t){e.exports=t(125)},70:function(e,a,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.15b3f045.chunk.js.map