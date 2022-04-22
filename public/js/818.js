"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[818],{3854:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7757),o=n.n(r),i=n(1575),a=n(8162);function s(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,l,"next",e)}function l(e){s(i,r,o,a,l,"throw",e)}a(void 0)}))}}const u=(0,i.Q_)({id:"deeds",state:function(){return{errors:{},deed:null,deeds:[]}},actions:{fetchById:function(e){var t=this;return l(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/api/deeds/".concat(e,"/edit"));case 2:r=n.sent,i=r.data,t.deed=i.deed;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var e=this;return l(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/api/deeds");case 2:void 0!==(n=t.sent)&&(e.deeds=n.data.deeds);case 4:case"end":return t.stop()}}),t)})))()},update:function(e){var t=this;return l(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.patch("/api/deeds/".concat(e.id),e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),t.errors=n.t0.response.data.errors;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(e){var t=this;return l(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.post("/api/deeds",e);case 3:n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),t.errors=n.t0.response.data.errors;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}})},1353:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),o={class:"py-4"};const i={},a=(0,n(3744).Z)(i,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.WI)(e.$slots,"default")])}]])},6876:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={class:"py-2 mb-5 border-b px-4 bg-gray-200 shadow"},i={class:"font-semibold text-sm uppercase"};const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("header",o,[(0,r._)("h1",i,[(0,r.WI)(e.$slots,"default")])])}]])},7877:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),o={key:0,class:"text-sm text-red-500 mt-1"};const i={props:{error:Object},setup:function(e){return function(t,n){return e.error?((0,r.wg)(),(0,r.iD)("div",o,(0,r.zw)(e.error[0]),1)):(0,r.kq)("",!0)}}}},6377:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),o=["value","type"];const i={props:{modelValue:{type:[String,Number]},type:{type:String,default:"text"}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,i=function(e){return n("update:modelValue",e.target.value)};return function(t,n){return(0,r.wg)(),(0,r.iD)("input",{value:e.modelValue,type:e.type,onInput:i,class:"py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full sm:w-80 border-gray-300 block w-full"},null,40,o)}}}},9745:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),o={class:"block font-medium text-sm text-gray-700 mb-1"};const i={},a=(0,n(3744).Z)(i,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("label",o,[(0,r.WI)(e.$slots,"default")])}]])},7818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var r=n(7757),o=n.n(r),i=n(821),a=n(6876),s=n(1353),l=n(9745),u=n(6377),c=n(7877),d=n(3854),p=n(297);function h(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){h(i,r,o,a,s,"next",e)}function s(e){h(i,r,o,a,s,"throw",e)}a(void 0)}))}}var v={class:"px-4 py-4"},m={class:"uppercase font-semibold text-gray-900"},w={class:"mt-4"},k=(0,i.Uk)("Name"),g={class:"mt-4"},x=(0,i.Uk)("Belohnung");const b={props:{id:{type:Number}},setup:function(e){var t=e,n=(0,d.Z)(),r=(0,p.Z)(),a=(0,i.iH)({id:t.id,name:null,value:null}),s=(0,i.Fl)((function(){return n.errors})),h=(0,i.Fl)((function(){return y()?"Deed bearbeiten":"Deed erstellen"})),b=function(){return r.close()},y=function(){return void 0!==t.id&&null!==t.id},U=function(){var e=f(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==y()){e.next=5;break}return e.next=3,n.update(a.value);case 3:e.next=7;break;case 5:return e.next=7,n.store(a.value);case 7:return e.next=9,n.fetchAll();case 9:b();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=f(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchById(t.id);case 2:a.value.id=n.deed.id,a.value.name=n.deed.name,a.value.value=n.deed.value;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.bv)(f(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==y()){e.next=3;break}return e.next=3,W();case 3:case"end":return e.stop()}}),e)})))),function(e,t){return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("h2",m,(0,i.zw)((0,i.SU)(h)),1),(0,i._)("div",w,[(0,i.Wm)((0,i.SU)(l.Z),null,{default:(0,i.w5)((function(){return[k]})),_:1}),(0,i.Wm)((0,i.SU)(u.Z),{modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.value.name=e})},null,8,["modelValue"]),(0,i.Wm)((0,i.SU)(c.Z),{error:(0,i.SU)(s).name},null,8,["error"])]),(0,i._)("div",g,[(0,i.Wm)((0,i.SU)(l.Z),null,{default:(0,i.w5)((function(){return[x]})),_:1}),(0,i.Wm)((0,i.SU)(u.Z),{modelValue:a.value.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.value.value=e})},null,8,["modelValue"]),(0,i.Wm)((0,i.SU)(c.Z),{error:(0,i.SU)(s).value},null,8,["error"])]),(0,i._)("div",{class:"mt-6 flex"},[(0,i._)("button",{onClick:b,type:"button",class:"w-1/2 mr-1 border border-gray-300 rounded-md bg-gray-400 text-gray-800 text-sm uppercase font-semibold"}," Abbrechen "),(0,i._)("button",{onClick:U,type:"button",class:"w-1/2 bg-teal-500 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"}," Speichern ")])])}}};var y=n(1698);function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){S(i,r,o,a,s,"next",e)}function s(e){S(i,r,o,a,s,"throw",e)}a(void 0)}))}}var Z=(0,i.Uk)("Deeds"),z={class:"table-auto border-collapse w-full"},$=(0,i._)("tr",null,[(0,i._)("th",{class:"text-left"},"Name"),(0,i._)("th",{class:"text-right"},"Belohnung"),(0,i._)("th",{class:"hidden sm:table-cell text-left"},"Erstellt"),(0,i._)("th")],-1),C={class:"py-1 border-b"},I={class:"py-1 border-b text-right"},D={class:"py-1 border-b flex justify-end"},j=["onClick"];const V={setup:function(e){return _(o().mark((function e(){var t,n,r,l,u,c,h,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,p.Z)(),c=(0,d.Z)(),t=(0,i.mv)((function(){return c.fetchAll()})),n=U(t,2),r=n[0],l=n[1],e.next=6,r;case 6:return l(),h=function(){var e=_(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.open((0,i.Xl)(b),{id:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){return u.open((0,i.Xl)(b))},e.abrupt("return",(function(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)((0,i.SU)(a.Z),null,{default:(0,i.w5)((function(){return[Z]})),_:1}),(0,i.Wm)((0,i.SU)(s.Z),null,{default:(0,i.w5)((function(){return[(0,i._)("div",{class:"mb-4"},[(0,i._)("button",{onClick:f,class:"border font-semibold inline-flex items-center px-3 py-1 rounded-md text-xs uppercase text-gray-100 bg-teal-500"}," Neu ")]),(0,i._)("table",z,[$,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(c).deeds,(function(e){return(0,i.wg)(),(0,i.iD)("tr",null,[(0,i._)("td",C,(0,i.zw)(e.name),1),(0,i._)("td",I,(0,i.zw)(e.value),1),(0,i._)("td",null,(0,i.zw)(e.created),1),(0,i._)("td",D,[(0,i._)("a",{onClick:function(t){return h(e.id)},class:"mr-1 border rounded-md block p-1 border-teal-500 text-teal-500"},[(0,i.Wm)((0,i.SU)(y.vdY))],8,j)])])})),256))])]})),_:1})],64)}));case 10:case"end":return e.stop()}}),e)})))()}}},1698:(e,t,n)=>{n.d(t,{V_R:()=>a,g8U:()=>i,pOD:()=>l,r7p:()=>u,v4q:()=>o,vdY:()=>s});var r=n(821),o={name:"ChevronDownIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 9 12 15 18 9"},null),(0,r.Uk)(" ")])}},i={name:"ChevronUpIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-up",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 15 12 9 18 15"},null),(0,r.Uk)(" ")])}},a={name:"MinusIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-minus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},s={name:"PencilIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-pencil",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"},null),(0,r.Uk)(" ")])}},l={name:"PlusIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},u={name:"StarIcon",props:{size:{type:String,default:"24"}},render(){const e=this.$props.size+"px",t=this.$data.attrs||{},n={...this.$data,width:t.width||e,height:t.height||e};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-star",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"},null),(0,r.Uk)(" ")])}}}}]);