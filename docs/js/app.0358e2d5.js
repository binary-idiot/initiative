(function(e){function t(t){for(var r,i,u=t[0],s=t[1],o=t[2],f=0,b=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e35":function(e,t,n){"use strict";n("fc45")},"2d79":function(e,t,n){},4062:function(e,t,n){"use strict";n("dd7d")},"4f12":function(e,t,n){"use strict";n("aacb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["f"])("header",null,[Object(r["f"])("h1",null,"Initiative")],-1);function a(e,t,n,a,i,u){var s=Object(r["l"])("CreatureList"),o=Object(r["l"])("CreatureDetails"),l=Object(r["l"])("UpdateBar");return Object(r["g"])(),Object(r["c"])(r["a"],null,[c,Object(r["f"])("main",null,[Object(r["f"])(s,{onChangeSelectedCreature:t[1]||(t[1]=function(e){return i.selectedCreature=e})}),Object(r["f"])(o,{creature:i.selectedCreature},null,8,["creature"]),Object(r["f"])(l)])],64)}n("4160"),n("d3b7"),n("159b"),n("96cf");var i=n("1da1"),u=Object(r["n"])("data-v-004429b8");Object(r["i"])("data-v-004429b8");var s={class:"creature-details"},o=Object(r["f"])("hr",null,null,-1),l=Object(r["f"])("hr",null,null,-1),f=Object(r["f"])("hr",null,null,-1);Object(r["h"])();var b=u((function(e,t,n,c,a,i){var u=Object(r["l"])("CreatureDetailHeader"),b=Object(r["l"])("CreatureDetailBasic"),d=Object(r["l"])("CreatureDetailScores"),j=Object(r["l"])("CreatureDetailTraits");return Object(r["g"])(),Object(r["c"])("div",s,[n.creature?(Object(r["g"])(),Object(r["c"])(r["a"],{key:0},[Object(r["f"])(u,{creature:n.creature},null,8,["creature"]),o,Object(r["f"])(b,{creature:n.creature},null,8,["creature"]),l,Object(r["f"])(d,{creature:n.creature},null,8,["creature"]),f,Object(r["f"])(j,{creature:n.creature},null,8,["creature"])],64)):Object(r["d"])("",!0)])})),d=(n("b0c0"),Object(r["n"])("data-v-c7e3b506"));Object(r["i"])("data-v-c7e3b506");var j={class:"creature-detail-header"},O={class:"creature-name"},g={class:"creature-type"},p=Object(r["e"])(" | "),h={class:"creature-alignment"};Object(r["h"])();var v=d((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("div",j,[Object(r["f"])("h2",O,Object(r["m"])(n.creature.name),1),Object(r["f"])("div",null,[Object(r["f"])("span",g,Object(r["m"])(e.$func.capitalize(i.creatureSize))+" "+Object(r["m"])(i.creatureType),1),p,Object(r["f"])("span",h,Object(r["m"])(i.alignment),1)])])})),m=(n("99af"),n("4de4"),n("caad"),n("a15b"),n("d81d"),n("45fc"),n("2532"),n("53ca")),y=n("d4ec"),C=n("bee2"),w=function(){function e(){Object(y["a"])(this,e)}return Object(C["a"])(e,null,[{key:"abvToFull",value:function(e){var t=this;if(!e)return null;if("object"===Object(m["a"])(e))return null!=e.special?e.special:"".concat(e.alignment.map((function(e){return t.abvToFull(e)})).join(" ")).concat(e.chance?" (".concat(e.chance,"%)"):"").concat(e.note?" (".concat(e.note,")"):"");var n=e.toUpperCase();switch(n){case"L":return"lawful";case"N":return"neutral";case"NX":return"neutral (law/chaos axis)";case"NY":return"neutral (good/evil axis)";case"C":return"chaotic";case"G":return"good";case"E":return"evil";case"U":return"unaligned";case"A":return"any alignment";default:return n}}},{key:"parse",value:function(e){var t=this;if(e.some((function(e){return"string"!==typeof e}))){if(e.some((function(e){return"string"===typeof e})))throw new Error("Mixed alignment types: ".concat(JSON.stringify(e)));var n=e.filter((function(e){return void 0===e.alignment||null!=e.alignment}));return n.map((function(e){return null!=e.special||null!=e.chance||null!=e.note?t.abvToFull(e):t.parse(e.alignment)})).join(" or ")}if(1===e.length)return this.abvToFull(e[0]);if(2===e.length)return e.map((function(e){return t.abvToFull(e)})).join(" ");if(3===e.length&&e.includes("NX")&&e.includes("NY")&&e.includes("N"))return"any neutral alignment";if(5===e.length){if(!e.includes("G"))return"any non-good alignment";if(!e.includes("E"))return"any non-evil alignment";if(!e.includes("L"))return"any non-lawful alignment";if(!e.includes("C"))return"any non-chaotic alignment"}if(4===e.length){if(!e.includes("L")&&!e.includes("NX"))return"any chaotic alignment";if(!e.includes("G")&&!e.includes("NY"))return"any evil alignment";if(!e.includes("C")&&!e.includes("NX"))return"any lawful alignment";if(!e.includes("E")&&!e.includes("NY"))return"any good alignment"}throw new Error("Unmapped alignment: ".concat(JSON.stringify(e)))}}]),e}(),k=w,P={name:"CreatureDetailHeader",props:{creature:Object},computed:{creatureSize:function(){return this.$func.sizeToFull(this.creature.size)},creatureType:function(){var e=this.creature.type;return"string"===typeof e?e:e.tags?"".concat(e.type," (").concat(e.tags,") "):e.swarmSize?"swarm of ".concat(this.$func.sizeToFull(e.swarmSize)," ").concat(e.type,"s"):void 0},alignment:function(){return k.parse(this.creature.alignment)}}};P.render=v,P.__scopeId="data-v-c7e3b506";var S=P,T=Object(r["n"])("data-v-09ac1a77");Object(r["i"])("data-v-09ac1a77");var N={class:"creature-detail-basics"},_={class:"creature-ac"},I=Object(r["f"])("strong",null,"Armor Class",-1),L=Object(r["e"])(),x={class:"creature-hp"},D=Object(r["f"])("strong",null,"Hit Points",-1),M=Object(r["e"])(")"),z={class:"creature-speed"},A=Object(r["f"])("strong",null,"Speed",-1);Object(r["h"])();var E=T((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("div",N,[Object(r["f"])("div",_,[I,L,Object(r["f"])("span",{innerHTML:i.armorClass},null,8,["innerHTML"])]),Object(r["f"])("div",x,[D,Object(r["e"])(" "+Object(r["m"])(n.creature.hp.average)+" (",1),Object(r["f"])("em",null,Object(r["m"])(n.creature.hp.formula),1),M]),Object(r["f"])("div",z,[A,Object(r["e"])(" "+Object(r["m"])(i.speed),1)])])})),F=(n("4fad"),n("3835")),B=(n("ac1f"),n("5319"),n("1276"),function(){function e(){Object(y["a"])(this,e)}return Object(C["a"])(e,null,[{key:"replaceTag",value:function(e,t,n){var r=n.split("|");switch(t){case"item":case"spell":return"<em>".concat(r[0],"</em>");default:throw new Error("Tag ".concat(t," not defined"))}}},{key:"parse",value:function(e){var t=/{@(\w*)(?: ([^}]*))*}/g;return e.replace(t,this.replaceTag)}}]),e}()),H=B,U={name:"CreatureDetailBasic",props:{creature:Object},computed:{armorClass:function(){var e=this.creature.ac.map((function(e){return"number"===typeof e?e:[e.ac,e.from?"(".concat(H.parse(e.from.join(", ")),")"):"",e.condition?H.parse(e.condition):""].filter(Boolean).join(" ")}));return e.join(", ")},speed:function(){var e=function(e){var t=Object(F["a"])(e,2),n=t[0],r=t[1];return"number"===typeof r?"".concat(n," ").concat(r,"ft"):[n,"".concat(r.number,"ft"),r.condition].join(" ")};return Object.entries(this.creature.speed).filter((function(e){var t=Object(F["a"])(e,1),n=t[0];return"canHover"!==n})).map(e).join(", ")}}};n("4f12");U.render=E,U.__scopeId="data-v-09ac1a77";var $=U,R=Object(r["n"])("data-v-0543adde");Object(r["i"])("data-v-0543adde");var G={class:"creature-detail-scores"},J=Object(r["f"])("br",null,null,-1);Object(r["h"])();var V=R((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("div",G,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(i.scores,(function(t){return Object(r["g"])(),Object(r["c"])("div",{class:"score",key:t.key},[Object(r["f"])("span",null,Object(r["m"])(t.key.toUpperCase()),1),J,Object(r["f"])("span",null,Object(r["m"])(t.value)+" ("+Object(r["m"])(e.$func.calcMod(t.value))+")",1)])})),128))])})),X={name:"CreatureDetailScores",props:{creature:Object},computed:{scores:function(){var e=this;return["str","dex","con","int","wis","cha"].map((function(t){return{key:t,value:e.creature[t]}}))}}};n("af16");X.render=V,X.__scopeId="data-v-0543adde";var Y=X,W=Object(r["n"])("data-v-c4efd594");Object(r["i"])("data-v-c4efd594");var q={class:"creature-detail-traits"},K={key:0,class:"creature-saves"},Q=Object(r["f"])("strong",null,"Saving Throws",-1),Z=Object(r["e"])(),ee={key:1,class:"creature-skills"},te=Object(r["f"])("strong",null,"Skills",-1),ne=Object(r["e"])(),re={key:2,class:"creature-resist"},ce=Object(r["f"])("strong",null,"Damage Resistances",-1),ae=Object(r["e"])(),ie={key:3,class:"creature-immune"},ue=Object(r["f"])("strong",null,"Damage Immunities",-1),se=Object(r["e"])(),oe={key:4,class:"creature-conditions"},le=Object(r["f"])("strong",null,"Condtiton Immunities",-1),fe=Object(r["e"])(),be={class:"creature-senses"},de=Object(r["f"])("strong",null,"Senses",-1),je=Object(r["e"])(),Oe={class:"creature-languages"},ge=Object(r["f"])("strong",null,"Languages",-1),pe=Object(r["e"])(),he={class:"creature-chalange"},ve=Object(r["f"])("strong",null,"Challange",-1),me=Object(r["e"])();Object(r["h"])();var ye=W((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("div",q,[i.saves?(Object(r["g"])(),Object(r["c"])("div",K,[Q,Z,Object(r["f"])("span",{innerHTML:i.saves},null,8,["innerHTML"])])):Object(r["d"])("",!0),i.skills?(Object(r["g"])(),Object(r["c"])("div",ee,[te,ne,Object(r["f"])("span",{innerHTML:i.skills},null,8,["innerHTML"])])):Object(r["d"])("",!0),i.resist?(Object(r["g"])(),Object(r["c"])("div",re,[ce,ae,Object(r["f"])("span",null,Object(r["m"])(i.resist),1)])):Object(r["d"])("",!0),i.immune?(Object(r["g"])(),Object(r["c"])("div",ie,[ue,se,Object(r["f"])("span",null,Object(r["m"])(i.immune),1)])):Object(r["d"])("",!0),i.conditions?(Object(r["g"])(),Object(r["c"])("div",oe,[le,fe,Object(r["f"])("span",null,Object(r["m"])(i.conditions),1)])):Object(r["d"])("",!0),Object(r["f"])("div",be,[de,je,Object(r["f"])("span",null,Object(r["m"])(i.senses),1)]),Object(r["f"])("div",Oe,[ge,pe,Object(r["f"])("span",null,Object(r["m"])(i.languages),1)]),Object(r["f"])("div",he,[ve,me,Object(r["f"])("span",null,Object(r["m"])(i.challange),1)])])})),Ce=(n("fb6a"),n("07ac"),{name:"CreatureDetailTraits",props:{creature:Object},methods:{listTraits:function(e){var t=this;return Object.entries(e).map((function(e){var n=Object(F["a"])(e,2),r=n[0],c=n[1];return" ".concat(t.$func.capitalize(r)," <em>").concat(c,"</em>")})).join(", ")},listDamageTraits:function(e,t){console.log(e);var n=[],r=e.map((function(e){return"string"===typeof e?e:(n.push(e),"")})).filter(Boolean).join(", ");return n.length>0&&(r=r.concat(r?"; ":"",n.map((function(e){if(e.special)return e.special;var n=Object.values(e[t]),r=n.slice(0,n.length-1).join(", ").concat(", and ",n[n.length-1]).concat(" ",e.note);return r})).join("; "))),r}},computed:{saves:function(){if("save"in this.creature)return this.listTraits(this.creature.save)},skills:function(){if("skill"in this.creature)return this.listTraits(this.creature.skill)},resist:function(){if("resist"in this.creature)return this.listDamageTraits(this.creature.resist,"resist")},immune:function(){if("immune"in this.creature)return this.listDamageTraits(this.creature.immune,"immune")},senses:function(){var e,t=null===(e=this.creature.senses)||void 0===e?void 0:e.join(", "),n="passive Perception ".concat(this.creature.passive);return t?t.concat(", ",n):n},conditions:function(){var e;return null===(e=this.creature.conditionImmune)||void 0===e?void 0:e.join(", ")},languages:function(){var e,t=null===(e=this.creature.languages)||void 0===e?void 0:e.join(", ");return t||"---"},challange:function(){if("string"===typeof this.creature.cr)return this.creature.cr;var e=this.creature.cr.lair?"".concat(this.creature.cr.lair," when encountered in lair"):"".concat(this.creature.cr.coven," when part of a coven");return"".concat(this.challange.cr.cr).concat(e?" or ".concat(e):"")}}});n("1e35");Ce.render=ye,Ce.__scopeId="data-v-c4efd594";var we=Ce,ke={name:"CreatureDetails",components:{CreatureDetailHeader:S,CreatureDetailBasic:$,CreatureDetailScores:Y,CreatureDetailTraits:we},props:{creature:Object}};n("9104");ke.render=b,ke.__scopeId="data-v-004429b8";var Pe=ke,Se=Object(r["n"])("data-v-4658cd63");Object(r["i"])("data-v-4658cd63");var Te={class:"creature-list"},Ne=Object(r["f"])("h3",null,"Creature List",-1);Object(r["h"])();var _e=Se((function(e,t,n,c,a,i){var u=Object(r["l"])("CreatureListItem"),s=Object(r["l"])("CreatureListPageSelect");return Object(r["g"])(),Object(r["c"])("div",Te,[Ne,Object(r["f"])("ul",null,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(i.creaturePage,(function(e){return Object(r["g"])(),Object(r["c"])("li",{key:e.name},[Object(r["f"])(u,{creatureName:e.name,onSelectCreature:t[1]||(t[1]=function(e){return i.onSelectCreature(e)})},null,8,["creatureName"])])})),128))]),Object(r["f"])(s,{page:a.currentPage,onChangePage:t[2]||(t[2]=function(e){return i.onChangePage(e)})},null,8,["page"])])})),Ie=(n("7db0"),Object(r["n"])("data-v-2161cacc")),Le=Ie((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("div",{class:"creature-list-item",onClick:t[1]||(t[1]=function(t){return e.$emit("selectCreature",n.creatureName)})},Object(r["m"])(n.creatureName),1)})),xe={name:"CreatureListItem",emits:["selectCreature"],props:{creatureName:String}};n("b7bb");xe.render=Le,xe.__scopeId="data-v-2161cacc";var De=xe,Me=Object(r["n"])("data-v-7d210e72"),ze=Me((function(e,t,n,c,a,i){var u=Object(r["l"])("IconCaretLeftFill"),s=Object(r["l"])("IconBase"),o=Object(r["l"])("IconCaretLeft"),l=Object(r["l"])("IconCaretRightFill"),f=Object(r["l"])("IconCaretRight");return Object(r["g"])(),Object(r["c"])("span",null,[Object(r["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("changePage",n.page-1)})},[Object(r["f"])(s,{class:"icon-default","icon-name":"left-arrow"},{default:Me((function(){return[Object(r["f"])(u)]})),_:1}),Object(r["f"])(s,{class:"icon-hover","icon-name":"left-arrow-hover"},{default:Me((function(){return[Object(r["f"])(o)]})),_:1})]),Object(r["f"])("input",{type:"number",value:i.pageNum,onChange:t[2]||(t[2]=function(e){return i.enterPageNum(e)})},null,40,["value"]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(t){return e.$emit("changePage",n.page+1)})},[Object(r["f"])(s,{class:"icon-default","icon-name":"right-arrow"},{default:Me((function(){return[Object(r["f"])(l)]})),_:1}),Object(r["f"])(s,{class:"icon-hover","icon-name":"right-arrow-hover"},{default:Me((function(){return[Object(r["f"])(f)]})),_:1})])])})),Ae=(n("a9e3"),Object(r["n"])("data-v-8a994622")),Ee=Ae((function(e,t,n,c,a,i){return Object(r["g"])(),Object(r["c"])("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",width:n.width,height:n.height,viewBox:"0 0 18 18","aria-labelledby":n.iconName,role:"presentation"},[Object(r["f"])("title",{id:n.iconName,lang:"en"},Object(r["m"])(n.iconName)+" icon",9,["id"]),Object(r["f"])("g",{fill:n.iconColor},[Object(r["k"])(e.$slots,"default")],8,["fill"])],8,["width","height","aria-labelledby"])})),Fe={props:{iconName:{type:String},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}};n("aac8");Fe.render=Ee,Fe.__scopeId="data-v-8a994622";var Be=Fe,He=Object(r["f"])("path",{d:"M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"},null,-1);function Ue(e,t){return Object(r["g"])(),Object(r["c"])("g",null,[He])}const $e={};$e.render=Ue;var Re=$e,Ge=Object(r["f"])("path",{d:"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"},null,-1);function Je(e,t){return Object(r["g"])(),Object(r["c"])("g",null,[Ge])}const Ve={};Ve.render=Je;var Xe=Ve,Ye=Object(r["f"])("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"},null,-1);function We(e,t){return Object(r["g"])(),Object(r["c"])("g",null,[Ye])}const qe={};qe.render=We;var Ke=qe,Qe=Object(r["f"])("path",{d:"M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"},null,-1);function Ze(e,t){return Object(r["g"])(),Object(r["c"])("g",null,[Qe])}const et={};et.render=Ze;var tt=et,nt={name:"CreatureListPageSelect",emits:["changePage"],components:{IconBase:Be,IconCaretLeftFill:Re,IconCaretLeft:Xe,IconCaretRightFill:Ke,IconCaretRight:tt},props:{page:Number},methods:{enterPageNum:function(e){this.$emit("changePage",e.target.value-1)}},computed:{pageNum:function(){return this.page+1}}};n("8415");nt.render=ze,nt.__scopeId="data-v-7d210e72";var rt=nt,ct={name:"CreatureList",data:function(){return{currentPage:0,creaturesPerPage:15}},emits:["changeSelectedCreature"],components:{CreatureListItem:De,CreatureListPageSelect:rt},inject:["creatures"],methods:{onSelectCreature:function(e){var t=this.creatures.find((function(t){return t.name===e}));this.$emit("changeSelectedCreature",t)},onChangePage:function(e){var t=this.currentPage;e<=this.creatures.length/this.creaturesPerPage&&e>=0?this.currentPage=e:this.currentPage=t}},computed:{creaturePage:function(){var e=this.currentPage*this.creaturesPerPage;return this.creatures.slice(e,e+this.creaturesPerPage)}}};n("7e82");ct.render=_e,ct.__scopeId="data-v-4658cd63";var at=ct,it=Object(r["n"])("data-v-791f673e");Object(r["i"])("data-v-791f673e");var ut={key:0,class:"update-bar"},st=Object(r["f"])("span",null,"An update is available",-1),ot=Object(r["f"])("br",null,null,-1);Object(r["h"])();var lt=it((function(e,t,n,c,a,i){return e.updateExists?(Object(r["g"])(),Object(r["c"])("div",ut,[st,ot,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return e.refreshApp&&e.refreshApp.apply(e,arguments)})},"Update")])):Object(r["d"])("",!0)})),ft={data:function(){return{reg:null,updateExists:!1,refreshing:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvalible,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{updateAvalible:function(e){this.reg=e.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.reg&&this.reg.waiting&&this.reg.waiting.postMessage({type:"SKIP_WAITING"})}}},bt={name:"UpdateBar",mixins:[ft]};n("4062");bt.render=lt,bt.__scopeId="data-v-791f673e";var dt=bt,jt={name:"App",components:{CreatureList:at,CreatureDetails:Pe,UpdateBar:dt},data:function(){return{creatures:[],selectedCreature:null}},provide:function(){return{creatures:this.creatures}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("./data/sources.json").then((function(e){return e.json()}));case 3:n=t.sent,n.creatures.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).then((function(e){return e.json()}));case 2:r=t.sent,r.forEach((function(t){e.creatures.push(t)})),Array.isArray(e.creatures)&&e.creatures.length&&(e.selectedCreature=e.creatures[0]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}};n("99e1");jt.render=a;var Ot=jt,gt=n("9483");Object(gt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var pt={capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},sizeToFull:function(e){switch(e.toUpperCase()){case"T":return"tiny";case"S":return"small";case"M":return"medium";case"L":return"large";case"H":return"huge";case"G":return"gigantic";default:return null}},calcMod:function(e){return Math.floor((e-10)/2)}},ht=Object(r["b"])(Ot);ht.config.globalProperties.$func=pt,ht.mount("#app")},"5cbc":function(e,t,n){},"67e8":function(e,t,n){},"7e82":function(e,t,n){"use strict";n("beb1")},8415:function(e,t,n){"use strict";n("c014")},9104:function(e,t,n){"use strict";n("67e8")},9611:function(e,t,n){},"99e1":function(e,t,n){"use strict";n("2d79")},aac8:function(e,t,n){"use strict";n("f38a")},aacb:function(e,t,n){},af16:function(e,t,n){"use strict";n("9611")},b7bb:function(e,t,n){"use strict";n("5cbc")},beb1:function(e,t,n){},c014:function(e,t,n){},dd7d:function(e,t,n){},f38a:function(e,t,n){},fc45:function(e,t,n){}});
//# sourceMappingURL=app.0358e2d5.js.map