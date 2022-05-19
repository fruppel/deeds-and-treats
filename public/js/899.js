"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[899],{8719:(t,e,n)=>{function r(){var t=function(t){var e=new Date(t);return e.setDate(e.getDate()-1),e.setHours(0,0,0,0),e}(new Date);return u(new Date(t.getFullYear(),t.getMonth(),1),t)}function a(t,e){return u(new Date(e,t,1),new Date(e,t+1,0))}function i(t){var e=new Date;return e.setMonth(t),e.toLocaleString("de-DE",{month:"long"})}function o(t){return new Date(t).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})}function s(t){return l(new Date(t))}function u(t,e){for(var n=[l(t)],r=t;r<e;)r.setDate(c(r)),n.push(l(r));return n.reverse()}function c(t){return new Date(t).getDate()+1}function l(t){var e=t.getTimezoneOffset();return new Date(t.getTime()-60*e*1e3).toISOString().split("T")[0]}n.d(e,{Ef:()=>a,FA:()=>o,hA:()=>s,jh:()=>r,o_:()=>i})},728:(t,e,n)=>{function r(t){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(t)}function a(t){return Math.trunc(100*t)+"%"}n.d(e,{T:()=>a,W:()=>r})},3854:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7757),a=n.n(r),i=n(1575),o=n(8162);function s(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){s(i,r,a,o,u,"next",t)}function u(t){s(i,r,a,o,u,"throw",t)}o(void 0)}))}}const c=(0,i.Q_)({id:"deeds",state:function(){return{errors:{},deed:null,deeds:[]}},actions:{fetchById:function(t){var e=this;return u(a().mark((function n(){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/api/deeds/".concat(t,"/edit"));case 2:r=n.sent,i=r.data,e.deed=i.deed;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var t=this;return u(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/api/deeds");case 2:void 0!==(n=e.sent)&&(t.deeds=n.data.deeds);case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.patch("/api/deeds/".concat(t.id),t);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e.errors=n.t0.response.data.errors;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post("/api/deeds",t);case 3:n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e.errors=n.t0.response.data.errors;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}})},6711:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7757),a=n.n(r),i=n(1575),o=n(8162);function s(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){s(i,r,a,o,u,"next",t)}function u(t){s(i,r,a,o,u,"throw",t)}o(void 0)}))}}const c=(0,i.Q_)({id:"treats",state:function(){return{errors:{},treat:null,treats:[]}},getters:{unlockableTreats:function(t){return t.treats.filter((function(t){return null===t.unlocked}))}},actions:{fetchById:function(t){var e=this;return u(a().mark((function n(){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/api/treats/".concat(t));case 2:r=n.sent,i=r.data,e.treat=i.treat;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var t=this;return u(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/api/treats");case 2:void 0!==(n=e.sent)&&(t.treats=n.data);case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.patch("/api/treats/".concat(t.id),t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),e.errors=n.t0.response.data.errors,n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post("/api/treats",t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0.response.data.errors&&(e.errors=n.t0.response.data.errors),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},destroy:function(t){return u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete("/api/treats/".concat(t));case 2:case"end":return e.stop()}}),e)})))()},divide:function(t,e){var n=this;return u(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.post("/api/treat/divide/".concat(t),{divideInto:e});case 3:return r.abrupt("return",!0);case 6:return r.prev=6,r.t0=r.catch(0),r.t0.response.data.errors&&(n.errors=r.t0.response.data.errors),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}})},1353:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(821),a={class:"py-4"};const i={},o=(0,n(3744).Z)(i,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.WI)(t.$slots,"default")])}]])},7979:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(821),a={class:"py-2 mb-5 border-b px-4 bg-white shadow"},i={class:"font-semibold text-sm uppercase"};const o={},s=(0,n(3744).Z)(o,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("header",a,[(0,r._)("h1",i,[(0,r.WI)(t.$slots,"default")])])}]])},899:(t,e,n)=>{n.r(e),n.d(e,{default:()=>gt});var r=n(7757),a=n.n(r),i=n(821),o=n(8719),s=n(728),u=n(1575),c=n(8162);function l(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){l(i,r,a,o,s,"next",t)}function s(t){l(i,r,a,o,s,"throw",t)}o(void 0)}))}}const f=(0,u.Q_)({id:"deedlogs",state:function(){return{deedlogs:[]}},actions:{fetchAll:function(){var t=this;return d(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/api/deedlogs");case 2:void 0!==(n=e.sent)&&(t.deedlogs=n.data);case 4:case"end":return e.stop()}}),e)})))()},store:function(t){return d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("/api/deedlogs",t);case 2:case"end":return e.stop()}}),e)})))()},destroy:function(t){return d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("/api/deedlogs/".concat(t));case 2:case"end":return e.stop()}}),e)})))()}}});function v(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){v(i,r,a,o,s,"next",t)}function s(t){v(i,r,a,o,s,"throw",t)}o(void 0)}))}}const h=(0,u.Q_)({id:"user",state:function(){return{savings:0,intersectionTenDays:0,costsAll:0,costsSpent:0,costsOpen:0,activeTreat:{}}},getters:{available:function(t){return t.savings-t.costsSpent},activeReached:function(t){return null!==t.activeTreat.unlocked?1:Math.min(1,this.available/t.activeTreat.costs)},activeRest:function(t){return Math.max(0,t.activeTreat.costs-this.available)},activeEta:function(t){return Math.round(this.activeRest/t.intersectionTenDays)},openEta:function(t){return Math.round(t.costsOpen/t.intersectionTenDays)},hasActiveTreat:function(t){return t.activeTreat&&0!==Object.keys(t.activeTreat).length},canUnlock:function(t){return this.hasActiveTreat&&this.available>=t.activeTreat.costs}},actions:{fetch:function(){var t=this;return p(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/api/user");case 2:n=e.sent,t.savings=n.data.savings,t.intersectionTenDays=n.data.intersectionTenDays,t.costsAll=n.data.costsAll,t.costsSpent=n.data.costsSpent,t.costsOpen=n.data.costsOpen,t.activeTreat=n.data.activeTreat;case 9:case"end":return e.stop()}}),e)})))()},setActiveTreat:function(t){var e=this;return p(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("/api/activetreat/".concat(t.id));case 2:return n.sent,n.next=5,e.fetch();case 5:case"end":return n.stop()}}),n)})))()},removeActiveTreat:function(){var t=this;return p(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("/api/activetreat");case 2:return e.sent,e.next=5,t.fetch();case 5:case"end":return e.stop()}}),e)})))()},unlock:function(){var t=this;return p(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("/api/unlock/"+t.activeTreat.id);case 2:return e.sent,e.next=5,t.fetch();case 5:case"end":return e.stop()}}),e)})))()}}});function w(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}const m={props:{deed:{type:Object,required:!0},date:{type:String,required:!0}},setup:function(t){var e=f(),n=h(),r=function(t,n){var r;return void 0!==(null===(r=e.deedlogs[n])||void 0===r?void 0:r[t.id])},o=function(){var t,i=(t=a().mark((function t(i,o){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r(i,o)){t.next=5;break}return t.next=3,e.destroy(e.deedlogs[o][i.id].id);case 3:t.next=7;break;case 5:return t.next=7,e.store({deed_id:i.id,day:o});case 7:return t.next=9,e.fetchAll();case 9:return t.next=11,n.fetch();case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){w(i,r,a,o,s,"next",t)}function s(t){w(i,r,a,o,s,"throw",t)}o(void 0)}))});return function(t,e){return i.apply(this,arguments)}}();return function(e,n){return(0,i.wg)(),(0,i.iD)("div",{onClick:n[0]||(n[0]=function(e){return o(t.deed,t.date)}),class:(0,i.C_)(["select-none flex-1 text-center items-center py-3 border bg-gray-100 rounded-md",{"bg-gray-600 text-gray-200":r(t.deed,t.date)}])},(0,i.zw)(t.deed.name),3)}}};var g=n(3854),x={key:0,class:"px-1 py-1 text-xs text-center"},k={class:"flex justify-between space-x-1.5"};const b={props:{date:{type:String,default:""}},setup:function(t){var e=(0,g.Z)();return function(n,r){return(0,i.wg)(),(0,i.iD)("div",null,[t.date?((0,i.wg)(),(0,i.iD)("div",x,(0,i.zw)((0,i.SU)(o.FA)(t.date)),1)):(0,i.kq)("",!0),(0,i._)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(e).deeds.slice(0,3),(function(e){return(0,i.wg)(),(0,i.j4)(m,{deed:e,date:t.date},null,8,["deed","date"])})),256))])])}}};var y=n(1698),U={key:0},S={class:"block mr-1"};const _={props:{labelMore:{type:String,default:"Mehr anzeigen"},labelLess:{type:String,default:"Weniger anzeigen"}},setup:function(t){var e=t,n=(0,i.iH)(!1),r=(0,i.Fl)((function(){return!0===n.value?y.g8U:y.v4q})),a=(0,i.Fl)((function(){return!0===n.value?e.labelLess:e.labelMore})),o=function(){return n.value=!n.value};return function(t,e){return(0,i.wg)(),(0,i.iD)("div",null,[n.value?((0,i.wg)(),(0,i.iD)("div",U,[(0,i.WI)(t.$slots,"default")])):(0,i.kq)("",!0),(0,i._)("a",{onClick:o,class:"mt-1 flex w-full items-center py-1 text-gray-500 select-none"},[(0,i._)("span",S,(0,i.zw)((0,i.SU)(a)),1),((0,i.wg)(),(0,i.j4)((0,i.LL)((0,i.SU)(r)),{class:"w-5 h-5 text-gray-400"}))])])}}};var W={class:"flex"},D={class:"p-2 font-bold flex-1 mx-1"},z={class:"flex"},T={class:"p-2 font-bold flex-1 mx-1"},A={class:"space-y-2"};const Z={setup:function(t){var e=new Date,n=(0,i.iH)(e.getMonth()),r=(0,i.iH)(e.getFullYear()),a=(0,i.Fl)((function(){return n.value-1<0?11:n.value-1})),s=(0,i.Fl)((function(){return n.value+1>11?0:n.value+1})),u=(0,i.Fl)((function(){return n.value===e.getMonth()&&r.value===e.getFullYear()?(0,o.jh)():(0,o.Ef)(n.value,r.value)})),c=function(){return r.value++},l=function(){return r.value--},d=function(){if(n.value+1>11)return n.value=0,void c();n.value++},f=function(){if(n.value-1<0)return n.value=11,void l();n.value--};return function(t,e){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",W,[(0,i._)("button",{onClick:f,class:"p-2 block flex-1"}," « "+(0,i.zw)((0,i.SU)(o.o_)((0,i.SU)(a))),1),(0,i._)("button",D,(0,i.zw)((0,i.SU)(o.o_)(n.value)),1),(0,i._)("button",{onClick:d,class:"p-2 flex-1"},(0,i.zw)((0,i.SU)(o.o_)((0,i.SU)(s)))+" » ",1)]),(0,i._)("div",z,[(0,i._)("button",{onClick:l,class:"p-2 block flex-1"}," « "+(0,i.zw)(r.value-1),1),(0,i._)("button",T,(0,i.zw)(r.value),1),(0,i._)("button",{onClick:c,class:"p-2 flex-1"},(0,i.zw)(r.value+1)+" » ",1)]),(0,i._)("div",A,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(u).slice(0,3),(function(t){return(0,i.wg)(),(0,i.j4)((0,i.SU)(b),{key:t,date:t},null,8,["date"])})),128)),(0,i.Wm)((0,i.SU)(_),null,{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(u).slice(3),(function(t){return(0,i.wg)(),(0,i.j4)((0,i.SU)(b),{key:t,date:t},null,8,["date"])})),128))]})),_:1})])],64)}}};var j=n(7979),M=n(1353),$=n(6711),C={class:"font-semibold uppercase border-b text-gray-500 border-gray-100 mb-2 select-none"};var H=n(3744);const I={},O=(0,H.Z)(I,[["render",function(t,e){return(0,i.wg)(),(0,i.iD)("div",C,[(0,i.WI)(t.$slots,"default")])}]]);var F={class:"flex items-center mb-2"},P=["onClick"],E={class:"ml-2 flex-1"},q={class:"text-xs text-gray-500"},L={class:""};const Y={props:{treats:{type:Object,required:!0}},setup:function(t){var e=h(),n=function(t){return e.hasActiveTreat&&t.id===e.activeTreat.id},r=function(t){return n(t)?"text-yellow-600":"text-gray-400"};return function(a,u){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.treats,(function(t){return(0,i.wg)(),(0,i.iD)("div",F,[(0,i._)("button",{onClick:function(r){return function(t){n(t)?e.removeActiveTreat():e.setActiveTreat(t)}(t)},class:"py-2 pr-1"},[(0,i.Wm)((0,i.SU)(y.r7p),{class:(0,i.C_)(r(t))},null,8,["class"])],8,P),(0,i._)("div",E,[(0,i._)("div",q,(0,i.zw)((0,i.SU)(o.FA)(t.bought)),1),(0,i._)("div",L,(0,i.zw)(t.name),1)]),(0,i._)("div",null,(0,i.zw)((0,i.SU)(s.W)(t.costs)),1)])})),256)}}};var B={class:"py-1 flex justify-between text-lg"},G={class:"font-semibold"};const R={props:{label:{type:String,required:!0}},setup:function(t){return function(e,n){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",null,(0,i.zw)(t.label),1),(0,i._)("div",G,[(0,i.WI)(e.$slots,"default")])])}}};var K={class:"bg-white mx-2 py-2 px-3 shadow rounded-md"};const Q={},N=(0,H.Z)(Q,[["render",function(t,e){return(0,i.wg)(),(0,i.iD)("div",K,[(0,i.WI)(t.$slots,"default")])}]]);var V={class:"relative"},J={class:"mt-1 w-full bg-gray-200 rounded-full h-6 text-center"},X={class:"w-full h-6 flex items-center justify-center absolute top-0 left-0 text-xs text-center text-black font-bold"};const tt={props:{percent:{type:Number,required:!0}},setup:function(t){return function(e,n){return(0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("div",J,[(0,i._)("div",{class:"bg-teal-400 h-6 rounded-full",style:(0,i.j5)({width:(0,i.SU)(s.T)(t.percent)})},null,4)]),(0,i._)("div",X,(0,i.zw)((0,i.SU)(s.T)(t.percent)),1)])}}};function et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){s=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rt(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function at(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){rt(i,r,a,o,s,"next",t)}function s(t){rt(i,r,a,o,s,"throw",t)}o(void 0)}))}}var it=(0,i.Uk)("Dashboard"),ot=(0,i.Uk)("Heute"),st={class:"mt-3 flex justify-between items-center"},ut=(0,i._)("div",null,"Insgesamt verfügbar",-1),ct={class:"text-xl font-semibold text-teal-500"},lt=(0,i.Uk)("Derzeit aktiv"),dt={class:"flex justify-between text-lg"},ft={key:0},vt=["innerHTML"],pt=["innerHTML"],ht=(0,i.Uk)("Treats"),wt={class:"mt-4"},mt=(0,i.Uk)("Historie");const gt={setup:function(t){return at(a().mark((function t(){var e,n,r,u,c,l,d,v,p,w,m,x,k,y,U,S,W;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=h(),e=(0,i.mv)((function(){return m.fetch()})),n=et(e,2),p=n[0],w=n[1],t.next=5,p;case 5:return w(),x=(0,g.Z)(),r=(0,i.mv)((function(){return x.fetchAll()})),u=et(r,2),p=u[0],w=u[1],t.next=11,p;case 11:return w(),k=f(),c=(0,i.mv)((function(){return k.fetchAll()})),l=et(c,2),p=l[0],w=l[1],t.next=17,p;case 17:return w(),y=(0,$.Z)(),d=(0,i.mv)((function(){return y.fetchAll()})),v=et(d,2),p=v[0],w=v[1],t.next=23,p;case 23:return w(),U=(0,o.hA)((new Date).toISOString()),S=function(){var t=at(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.unlock();case 2:return t.next=4,y.fetchAll();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(t){return isFinite(t)?"".concat(t," Tage"):"&infin;"},document.addEventListener("visibilitychange",(function(){console.log(document.visibilityState),"visible"===document.visibilityState&&window.location.reload()})),t.abrupt("return",(function(t,e){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)((0,i.SU)(j.Z),null,{default:(0,i.w5)((function(){return[it]})),_:1}),(0,i.Wm)((0,i.SU)(M.Z),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(N),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(O),null,{default:(0,i.w5)((function(){return[ot]})),_:1}),(0,i.Wm)((0,i.SU)(b),{date:(0,i.SU)(U)},null,8,["date"]),(0,i._)("div",st,[ut,(0,i._)("div",ct,(0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).available)),1)])]})),_:1}),(0,i.SU)(m).hasActiveTreat?((0,i.wg)(),(0,i.j4)((0,i.SU)(N),{key:0,class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(O),null,{default:(0,i.w5)((function(){return[lt]})),_:1}),(0,i._)("div",null,[(0,i._)("div",dt,[(0,i._)("div",null,(0,i.zw)((0,i.SU)(m).activeTreat.name),1),(0,i._)("div",null,(0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).activeTreat.costs)),1)]),(0,i.Wm)((0,i.SU)(tt),{percent:(0,i.SU)(m).activeReached,class:"mt-3 mb-4"},null,8,["percent"]),(0,i.SU)(m).canUnlock?((0,i.wg)(),(0,i.iD)("div",ft,[(0,i._)("button",{onClick:e[0]||(e[0]=function(t){return S()}),class:"w-full text-center bg-gray-700 rounded-md text-white mb-4 py-2 font-semibold uppercase"}," Freischalten ")])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i.Wm)((0,i.SU)(R),{label:"Verbleibend"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).activeRest)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"Geschätzte Restzeit"},{default:(0,i.w5)((function(){return[(0,i._)("span",{innerHTML:W((0,i.SU)(m).activeEta)},null,8,vt)]})),_:1}),(0,i.Wm)((0,i.SU)(_),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(R),{label:"Gespart gesamt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).savings)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"Kosten gesamt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).costsAll)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"Ausgegeben"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).costsSpent)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"Offen"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).costsOpen)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"10-Tage Schnitt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(s.W)((0,i.SU)(m).intersectionTenDays)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(R),{label:"ETA (offen)"},{default:(0,i.w5)((function(){return[(0,i._)("span",{innerHTML:W((0,i.SU)(m).openEta)},null,8,pt)]})),_:1})]})),_:1})])])]})),_:1})):(0,i.kq)("",!0),(0,i.Wm)((0,i.SU)(N),{class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(O),null,{default:(0,i.w5)((function(){return[ht]})),_:1}),(0,i._)("div",wt,[(0,i.Wm)((0,i.SU)(Y),{treats:(0,i.SU)(y).unlockableTreats.slice(0,3)},null,8,["treats"]),(0,i.SU)(y).unlockableTreats.length>3?((0,i.wg)(),(0,i.j4)((0,i.SU)(_),{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(Y),{treats:(0,i.SU)(y).unlockableTreats.slice(3)},null,8,["treats"])]})),_:1})):(0,i.kq)("",!0)])]})),_:1}),(0,i.Wm)((0,i.SU)(N),{class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(O),null,{default:(0,i.w5)((function(){return[mt]})),_:1}),(0,i.Wm)((0,i.SU)(Z))]})),_:1})]})),_:1})],64)}));case 29:case"end":return t.stop()}}),t)})))()}}},1698:(t,e,n)=>{n.d(e,{V_R:()=>o,g8U:()=>i,pOD:()=>u,r7p:()=>c,v4q:()=>a,vdY:()=>s});var r=n(821),a={name:"ChevronDownIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 9 12 15 18 9"},null),(0,r.Uk)(" ")])}},i={name:"ChevronUpIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-up",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 15 12 9 18 15"},null),(0,r.Uk)(" ")])}},o={name:"MinusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-minus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},s={name:"PencilIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-pencil",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"},null),(0,r.Uk)(" ")])}},u={name:"PlusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},c={name:"StarIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-star",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"},null),(0,r.Uk)(" ")])}}}}]);