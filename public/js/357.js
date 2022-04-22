"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[357],{8719:(t,e,n)=>{function r(){var t=function(t){var e=new Date(t);return e.setDate(e.getDate()-1),e.setHours(0,0,0,0),e}(new Date);return s(new Date(t.getFullYear(),t.getMonth(),1),t)}function o(t,e){return s(new Date(e,t,1),new Date(e,t+1,0))}function u(t){var e=new Date;return e.setMonth(t),e.toLocaleString("de-DE",{month:"long"})}function a(t){return new Date(t).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})}function i(t){return c(new Date(t))}function s(t,e){for(var n=[c(t)],r=t;r<e;)r.setDate(l(r)),n.push(c(r));return n.reverse()}function l(t){return new Date(t).getDate()+1}function c(t){var e=t.getTimezoneOffset();return new Date(t.getTime()-60*e*1e3).toISOString().split("T")[0]}n.d(e,{Ef:()=>o,FA:()=>a,hA:()=>i,jh:()=>r,o_:()=>u})},728:(t,e,n)=>{function r(t){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(t)}function o(t){return Math.trunc(100*t)+"%"}n.d(e,{T:()=>o,W:()=>r})},6711:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(7757),o=n.n(r),u=n(1575),a=n(8162);function i(t,e,n,r,o,u,a){try{var i=t[u](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){i(u,r,o,a,s,"next",t)}function s(t){i(u,r,o,a,s,"throw",t)}a(void 0)}))}}const l=(0,u.Q_)({id:"treats",state:function(){return{errors:{},treat:null,treats:[]}},getters:{unlockableTreats:function(t){return t.treats.filter((function(t){return null===t.unlocked}))}},actions:{fetchById:function(t){var e=this;return s(o().mark((function n(){var r,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/api/treats/".concat(t));case 2:r=n.sent,u=r.data,e.treat=u.treat;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var t=this;return s(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/api/treats");case 2:void 0!==(n=e.sent)&&(t.treats=n.data);case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this;return s(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.patch("/api/treats/".concat(t.id),t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),e.errors=n.t0.response.data.errors,n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(t){var e=this;return s(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.post("/api/treats",t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0.response.data.errors&&(e.errors=n.t0.response.data.errors),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},destroy:function(t){return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete("/api/treats/".concat(t));case 2:case"end":return e.stop()}}),e)})))()},divide:function(t,e){var n=this;return s(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.post("/api/treat/divide/".concat(t),{divideInto:e});case 3:return r.abrupt("return",!0);case 6:return r.prev=6,r.t0=r.catch(0),r.t0.response.data.errors&&(n.errors=r.t0.response.data.errors),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}})},1353:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(821),o={class:"py-4"};const u={},a=(0,n(3744).Z)(u,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.WI)(t.$slots,"default")])}]])},6876:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(821),o={class:"py-2 mb-5 border-b px-4 bg-gray-200 shadow"},u={class:"font-semibold text-sm uppercase"};const a={},i=(0,n(3744).Z)(a,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("header",o,[(0,r._)("h1",u,[(0,r.WI)(t.$slots,"default")])])}]])},7877:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(821),o={key:0,class:"text-sm text-red-500 mt-1"};const u={props:{error:Object},setup:function(t){return function(e,n){return t.error?((0,r.wg)(),(0,r.iD)("div",o,(0,r.zw)(t.error[0]),1)):(0,r.kq)("",!0)}}}},6377:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(821),o=["value","type"];const u={props:{modelValue:{type:[String,Number]},type:{type:String,default:"text"}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,u=function(t){return n("update:modelValue",t.target.value)};return function(e,n){return(0,r.wg)(),(0,r.iD)("input",{value:t.modelValue,type:t.type,onInput:u,class:"py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full sm:w-80 border-gray-300 block w-full"},null,40,o)}}}},9745:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(821),o={class:"block font-medium text-sm text-gray-700 mb-1"};const u={},a=(0,n(3744).Z)(u,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("label",o,[(0,r.WI)(t.$slots,"default")])}]])},2357:(t,e,n)=>{n.r(e),n.d(e,{default:()=>K});var r=n(7757),o=n.n(r),u=n(821),a=n(6876),i=n(1353),s=n(9745),l=n(6377),c=n(7877),d=n(6711),p=n(297),f=n(1698);function h(t,e,n,r,o,u,a){try{var i=t[u](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}var v=(0,u._)("h2",{class:"uppercase font-semibold text-gray-900"}," Treat aufteilen ",-1),m={class:"mt-4"},w={class:"flex"};const g={props:{id:{type:Number,required:!0}},emits:["divided"],setup:function(t,e){var n=e.emit,r=t,a=(0,d.Z)(),i=(0,u.iH)(2),s=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.divide(r.id,i.value);case 2:if(t.t0=t.sent,!0!==t.t0){t.next=5;break}n("divided");case 5:console.log(a.errors);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){h(u,r,o,a,i,"next",t)}function i(t){h(u,r,o,a,i,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return function(t,e){return(0,u.wg)(),(0,u.iD)("div",null,[v,(0,u._)("div",m,[(0,u._)("div",w,[(0,u._)("button",{onClick:e[0]||(e[0]=function(t){return i.value--}),class:"bg-gray-100 px-3 rounded-l-md"},[(0,u.Wm)((0,u.SU)(f.V_R))]),(0,u.Wm)((0,u.SU)(l.Z),{class:"rounded-none border-0 text-center",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.value=t})},null,8,["modelValue"]),(0,u._)("button",{onClick:e[2]||(e[2]=function(t){return i.value++}),class:"bg-gray-100 px-3 rounded-r-md"},[(0,u.Wm)((0,u.SU)(f.pOD))])]),(0,u.Wm)((0,u.SU)(c.Z),{error:(0,u.SU)(a).errors.divideInto},null,8,["error"]),(0,u._)("button",{onClick:s,type:"button",class:"w-full mt-4 bg-gray-800 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"}," Aufteilen ")])])}}};function k(t,e,n,r,o,u,a){try{var i=t[u](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}function x(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){k(u,r,o,a,i,"next",t)}function i(t){k(u,r,o,a,i,"throw",t)}a(void 0)}))}}var b={class:"px-4 py-4"},y={class:"uppercase font-semibold text-gray-900"},U={class:"mt-4"},S=(0,u.Uk)("Name"),W={class:"mt-4"},_=(0,u.Uk)("Kosten"),Z={class:"mt-4"},D=(0,u.Uk)("Gekauft"),z={class:"mt-4"},$=(0,u.Uk)("Freigeschaltet"),V={key:0,class:"mt-8 pt-6 border-t border-gray-400"},C={key:1,class:"mt-8 pt-6 border-t border-gray-600"},I=(0,u._)("h2",{class:"uppercase font-semibold text-gray-900 mb-2"}," Treat löschen ",-1);const j={props:{id:{type:Number,default:null}},setup:function(t){var e=t,n=(0,d.Z)(),r=(0,p.Z)(),a=(0,u.iH)({id:e.id,name:null,costs:null,bought:null,unlocked:null}),i=(0,u.Fl)((function(){return n.errors})),f=(0,u.Fl)((function(){return v()?"Treat bearbeiten":"Treat erstellen"})),h=function(){var t=x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.close(),t.next=3,n.fetchAll();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){return void 0!==e.id&&null!==e.id},m=(0,u.Fl)((function(){return v()&&n.treat&&null!==n.treat.unlocked})),w=function(){var t=x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==v()){t.next=5;break}return t.next=3,n.update(a.value);case 3:t.next=7;break;case 5:return t.next=7,n.store(a.value);case 7:return t.next=9,h();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.destroy(e.id);case 2:return t.next=4,h();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.fetchById(e.id);case 2:a.value.id=n.treat.id,a.value.name=n.treat.name,a.value.costs=n.treat.costs,a.value.bought=n.treat.bought,a.value.unlocked=n.treat.unlocked;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=(0,u.iH)(!1);return(0,u.bv)(x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v()){t.next=4;break}return t.next=3,j();case 3:A.value=!1===m.value;case 4:case"end":return t.stop()}}),t)})))),function(t,e){return(0,u.wg)(),(0,u.iD)("div",b,[(0,u._)("div",null,[(0,u._)("h2",y,(0,u.zw)((0,u.SU)(f)),1),(0,u._)("div",U,[(0,u.Wm)((0,u.SU)(s.Z),null,{default:(0,u.w5)((function(){return[S]})),_:1}),(0,u.Wm)((0,u.SU)(l.Z),{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=function(t){return a.value.name=t})},null,8,["modelValue"]),(0,u.Wm)((0,u.SU)(c.Z),{error:(0,u.SU)(i).name},null,8,["error"])]),(0,u._)("div",W,[(0,u.Wm)((0,u.SU)(s.Z),null,{default:(0,u.w5)((function(){return[_]})),_:1}),(0,u.Wm)((0,u.SU)(l.Z),{modelValue:a.value.costs,"onUpdate:modelValue":e[1]||(e[1]=function(t){return a.value.costs=t})},null,8,["modelValue"]),(0,u.Wm)((0,u.SU)(c.Z),{error:(0,u.SU)(i).costs},null,8,["error"])]),(0,u._)("div",Z,[(0,u.Wm)((0,u.SU)(s.Z),null,{default:(0,u.w5)((function(){return[D]})),_:1}),(0,u.Wm)((0,u.SU)(l.Z),{type:"date",modelValue:a.value.bought,"onUpdate:modelValue":e[2]||(e[2]=function(t){return a.value.bought=t})},null,8,["modelValue"]),(0,u.Wm)((0,u.SU)(c.Z),{error:(0,u.SU)(i).bought},null,8,["error"])]),(0,u._)("div",z,[(0,u.Wm)((0,u.SU)(s.Z),null,{default:(0,u.w5)((function(){return[$]})),_:1}),(0,u.Wm)((0,u.SU)(l.Z),{type:"date",modelValue:a.value.unlocked,"onUpdate:modelValue":e[3]||(e[3]=function(t){return a.value.unlocked=t})},null,8,["modelValue"]),(0,u.Wm)((0,u.SU)(c.Z),{error:(0,u.SU)(i).unlocked},null,8,["error"])]),(0,u._)("div",{class:"mt-6 flex"},[(0,u._)("button",{onClick:h,type:"button",class:"w-1/2 mr-1 border border-gray-300 rounded-md bg-gray-400 text-gray-800 text-sm uppercase font-semibold"}," Abbrechen "),(0,u._)("button",{onClick:w,type:"button",class:"w-1/2 bg-teal-500 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"}," Speichern ")])]),A.value?((0,u.wg)(),(0,u.iD)("div",V,[(0,u.Wm)((0,u.SU)(g),{id:a.value.id,onDivided:h},null,8,["id"])])):(0,u.kq)("",!0),!1===(0,u.SU)(m)?((0,u.wg)(),(0,u.iD)("div",C,[I,(0,u._)("button",{onClick:k,class:"w-full bg-red-900 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"}," Löschen ")])):(0,u.kq)("",!0)])}}};var A=n(8719),M=n(728);function H(t,e,n,r,o,u,a){try{var i=t[u](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}var P={class:"flex text-xs justify-between text-gray-400"},F={key:0},T=(0,u.Uk)(" Freigeschaltet: "),B={class:"font-semibold"},O={class:"flex justify-between"};const q={props:{treat:{type:Object,required:!0}},setup:function(t){var e=t;console.log(e.treat);var n=(0,p.Z)(),r=function(){var t,r=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.open((0,u.Xl)(j),{id:e.treat.id});case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){H(u,r,o,a,i,"next",t)}function i(t){H(u,r,o,a,i,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}(),a=(0,u.Fl)((function(){return null!==e.treat.unlocked}));return function(e,n){return(0,u.wg)(),(0,u.iD)("div",{onClick:r,class:(0,u.C_)(["border rounded-md p-2 bg-white",{"border-green-600 border-2":(0,u.SU)(a)}])},[(0,u._)("div",P,[(0,u._)("div",null,(0,u.zw)((0,u.SU)(A.FA)(t.treat.bought)),1),(0,u.SU)(a)?((0,u.wg)(),(0,u.iD)("div",F,[T,(0,u._)("span",B,(0,u.zw)((0,u.SU)(A.FA)(t.treat.unlocked)),1)])):(0,u.kq)("",!0)]),(0,u._)("div",O,[(0,u._)("div",null,(0,u.zw)(t.treat.name),1),(0,u._)("div",null,(0,u.zw)((0,u.SU)(M.W)(t.treat.costs)),1)])],2)}}};function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(t,e,n,r,o,u,a){try{var i=t[u](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}var Y=(0,u.Uk)("Treats"),L={class:"px-2 py-4"},R={class:"space-y-2"};const K={setup:function(t){return(e=o().mark((function t(){var e,n,r,s,l,c,f;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=(0,p.Z)(),c=(0,d.Z)(),e=(0,u.mv)((function(){return c.fetchAll()})),n=G(e,2),r=n[0],s=n[1],t.next=6,r;case 6:return s(),f=function(){return l.open((0,u.Xl)(j))},t.abrupt("return",(function(t,e){return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)((0,u.SU)(a.Z),null,{default:(0,u.w5)((function(){return[Y]})),_:1}),(0,u.Wm)((0,u.SU)(i.Z),null,{default:(0,u.w5)((function(){return[(0,u._)("div",L,[(0,u._)("div",{class:"mb-4"},[(0,u._)("button",{onClick:f,class:"border font-semibold inline-flex items-center px-3 py-1 rounded-md text-xs uppercase text-gray-100 bg-teal-500"}," Neu ")]),(0,u._)("div",R,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,u.SU)(c).treats,(function(t){return(0,u.wg)(),(0,u.j4)((0,u.SU)(q),{treat:t},null,8,["treat"])})),256))])])]})),_:1})],64)}));case 9:case"end":return t.stop()}}),t)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function a(t){N(u,r,o,a,i,"next",t)}function i(t){N(u,r,o,a,i,"throw",t)}a(void 0)}))})();var e}}},1698:(t,e,n)=>{n.d(e,{V_R:()=>a,g8U:()=>u,pOD:()=>s,r7p:()=>l,v4q:()=>o,vdY:()=>i});var r=n(821),o={name:"ChevronDownIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 9 12 15 18 9"},null),(0,r.Uk)(" ")])}},u={name:"ChevronUpIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-up",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 15 12 9 18 15"},null),(0,r.Uk)(" ")])}},a={name:"MinusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-minus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},i={name:"PencilIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-pencil",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"},null),(0,r.Uk)(" ")])}},s={name:"PlusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},l={name:"StarIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-star",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"},null),(0,r.Uk)(" ")])}}}}]);