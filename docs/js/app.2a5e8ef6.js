(function(e){function n(n){for(var r,s,i=n[0],u=n[1],a=n[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(p.length)p.shift()();return c.push.apply(c,a||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},c=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var f=u;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=Object(r["d"])("h1",null,"Initiative",-1);function c(e,n,t,c,s,i){var u=Object(r["g"])("MonsterList");return Object(r["e"])(),Object(r["c"])(r["a"],null,[o,Object(r["d"])(u,{monsters:s.monsters},null,8,["monsters"])],64)}t("4160"),t("d3b7"),t("159b"),t("96cf");var s=t("1da1"),i=(t("b0c0"),{class:"monster-list"});function u(e,n,t,o,c,s){return Object(r["e"])(),Object(r["c"])("div",i,[Object(r["d"])("ul",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(t.monsters,(function(e){return Object(r["e"])(),Object(r["c"])("li",{key:e.name},Object(r["h"])(e.name),1)})),128))])])}var a={name:"MonsterList",props:{monsters:Array}};t("5a23");a.render=u;var f=a,l={name:"App",components:{MonsterList:f},data:function(){return{monsters:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("./data/sources.json").then((function(e){return e.json()}));case 3:t=n.sent,t.monsters.forEach(function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(t){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t).then((function(e){return e.json()}));case 2:r=n.sent,r.forEach((function(n){e.monsters.push(n)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}};t("8ef4");l.render=c;var p=l,d=t("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(r["b"])(p).mount("#app")},"5a23":function(e,n,t){"use strict";t("9cd8")},"7f15":function(e,n,t){},"8ef4":function(e,n,t){"use strict";t("7f15")},"9cd8":function(e,n,t){}});
//# sourceMappingURL=app.2a5e8ef6.js.map