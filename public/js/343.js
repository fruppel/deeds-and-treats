"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[343],{8719:(t,e,n)=>{function r(){var t=function(t){var e=new Date(t);return e.setDate(e.getDate()-1),e.setHours(0,0,0,0),e}(new Date);return u(new Date(t.getFullYear(),t.getMonth(),1),t)}function a(t,e){return u(new Date(e,t,1),new Date(e,t+1,0))}function i(t){var e=new Date;return e.setMonth(t),e.toLocaleString("de-DE",{month:"long"})}function s(t){return new Date(t).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})}function o(t){return l(new Date(t))}function u(t,e){for(var n=[l(t)],r=t;r<e;)r.setDate(c(r)),n.push(l(r));return n.reverse()}function c(t){return new Date(t).getDate()+1}function l(t){var e=t.getTimezoneOffset();return new Date(t.getTime()-60*e*1e3).toISOString().split("T")[0]}n.d(e,{Ef:()=>a,FA:()=>s,hA:()=>o,jh:()=>r,o_:()=>i})},728:(t,e,n)=>{function r(t){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(t)}function a(t){return Math.trunc(100*t)+"%"}n.d(e,{T:()=>a,W:()=>r})},3854:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7757),a=n.n(r),i=n(1575),s=n(8162);function o(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,u,"next",t)}function u(t){o(i,r,a,s,u,"throw",t)}s(void 0)}))}}const c=(0,i.Q_)({id:"deeds",state:function(){return{errors:{},deed:null,deeds:[]}},actions:{fetchById:function(t){var e=this;return u(a().mark((function n(){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/api/deeds/".concat(t,"/edit"));case 2:r=n.sent,i=r.data,e.deed=i.deed;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var t=this;return u(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/api/deeds");case 2:void 0!==(n=e.sent)&&(t.deeds=n.data.deeds);case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.patch("/api/deeds/".concat(t.id),t);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e.errors=n.t0.response.data.errors;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/api/deeds",t);case 3:n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e.errors=n.t0.response.data.errors;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}})},6711:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7757),a=n.n(r),i=n(1575),s=n(8162);function o(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,u,"next",t)}function u(t){o(i,r,a,s,u,"throw",t)}s(void 0)}))}}const c=(0,i.Q_)({id:"treats",state:function(){return{errors:{},treat:null,treats:[]}},getters:{unlockableTreats:function(t){return t.treats.filter((function(t){return null===t.unlocked}))}},actions:{fetchById:function(t){var e=this;return u(a().mark((function n(){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/api/treats/".concat(t));case 2:r=n.sent,i=r.data,e.treat=i.treat;case 5:case"end":return n.stop()}}),n)})))()},fetchAll:function(){var t=this;return u(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/api/treats");case 2:void 0!==(n=e.sent)&&(t.treats=n.data);case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.patch("/api/treats/".concat(t.id),t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),e.errors=n.t0.response.data.errors,n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},store:function(t){var e=this;return u(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/api/treats",t);case 3:n.next=9;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0.response.data.errors&&(e.errors=n.t0.response.data.errors),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,5]])})))()},destroy:function(t){return u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/api/treats/".concat(t));case 2:case"end":return e.stop()}}),e)})))()},divide:function(t,e){var n=this;return u(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.post("/api/treat/divide/".concat(t),{divideInto:e});case 3:return r.abrupt("return",!0);case 6:return r.prev=6,r.t0=r.catch(0),r.t0.response.data.errors&&(n.errors=r.t0.response.data.errors),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}})},1353:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(821),a={class:"py-4"};const i={},s=(0,n(3744).Z)(i,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.WI)(t.$slots,"default")])}]])},8261:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(821),a={class:"py-2 mb-5 border-b border-b-white dark:border-b-black px-4 bg-white dark:bg-gray-800 text-black dark:text-gray-300 shadow"},i={class:"font-semibold text-sm uppercase"};const s={},o=(0,n(3744).Z)(s,[["render",function(t,e){return(0,r.wg)(),(0,r.iD)("header",a,[(0,r._)("h1",i,[(0,r.WI)(t.$slots,"default")])])}]])},9343:(t,e,n)=>{n.r(e),n.d(e,{default:()=>gt});var r=n(7757),a=n.n(r),i=n(821),s=n(8719),o=n(728),u=n(1575),c=n(8162);function l(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){l(i,r,a,s,o,"next",t)}function o(t){l(i,r,a,s,o,"throw",t)}s(void 0)}))}}const f=(0,u.Q_)({id:"deedlogs",state:function(){return{deedlogs:[]}},actions:{fetchAll:function(){var t=this;return d(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/api/deedlogs");case 2:void 0!==(n=e.sent)&&(t.deedlogs=n.data);case 4:case"end":return e.stop()}}),e)})))()},store:function(t){return d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("/api/deedlogs",t);case 2:case"end":return e.stop()}}),e)})))()},destroy:function(t){return d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("/api/deedlogs/".concat(t));case 2:case"end":return e.stop()}}),e)})))()}}});function p(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){p(i,r,a,s,o,"next",t)}function o(t){p(i,r,a,s,o,"throw",t)}s(void 0)}))}}const h=(0,u.Q_)({id:"user",state:function(){return{savings:0,intersectionTenDays:0,costsAll:0,costsSpent:0,costsOpen:0,activeTreat:{}}},getters:{available:function(t){return t.savings-t.costsSpent},activeReached:function(t){return null!==t.activeTreat.unlocked?1:Math.min(1,this.available/t.activeTreat.costs)},activeRest:function(t){return Math.max(0,t.activeTreat.costs-this.available)},activeEta:function(t){return Math.round(this.activeRest/t.intersectionTenDays)},openEta:function(t){return Math.round(t.costsOpen/t.intersectionTenDays)},hasActiveTreat:function(t){return t.activeTreat&&0!==Object.keys(t.activeTreat).length},canUnlock:function(t){return this.hasActiveTreat&&this.available>=t.activeTreat.costs}},actions:{fetch:function(){var t=this;return v(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/api/user");case 2:n=e.sent,t.savings=n.data.savings,t.intersectionTenDays=n.data.intersectionTenDays,t.costsAll=n.data.costsAll,t.costsSpent=n.data.costsSpent,t.costsOpen=n.data.costsOpen,t.activeTreat=n.data.activeTreat;case 9:case"end":return e.stop()}}),e)})))()},setActiveTreat:function(t){var e=this;return v(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("/api/activetreat/".concat(t.id));case 2:return n.sent,n.next=5,e.fetch();case 5:case"end":return n.stop()}}),n)})))()},removeActiveTreat:function(){var t=this;return v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("/api/activetreat");case 2:return e.sent,e.next=5,t.fetch();case 5:case"end":return e.stop()}}),e)})))()},unlock:function(){var t=this;return v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("/api/unlock/"+t.activeTreat.id);case 2:return e.sent,e.next=5,t.fetch();case 5:case"end":return e.stop()}}),e)})))()}}});function w(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}const g={props:{deed:{type:Object,required:!0},date:{type:String,required:!0}},setup:function(t){var e=f(),n=h(),r=function(t,n){var r;return void 0!==(null===(r=e.deedlogs[n])||void 0===r?void 0:r[t.id])},s=function(){var t,i=(t=a().mark((function t(i,s){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r(i,s)){t.next=5;break}return t.next=3,e.destroy(e.deedlogs[s][i.id].id);case 3:t.next=7;break;case 5:return t.next=7,e.store({deed_id:i.id,day:s});case 7:return t.next=9,e.fetchAll();case 9:return t.next=11,n.fetch();case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){w(i,r,a,s,o,"next",t)}function o(t){w(i,r,a,s,o,"throw",t)}s(void 0)}))});return function(t,e){return i.apply(this,arguments)}}();return function(e,n){return(0,i.wg)(),(0,i.iD)("div",{onClick:n[0]||(n[0]=function(e){return s(t.deed,t.date)}),class:(0,i.C_)(["select-none flex-1 text-center items-center py-3 border rounded-lg",{"bg-gray-600 dark:bg-gray-800 text-gray-200 dark:text-gray-300 dark:border-gray-500":r(t.deed,t.date),"bg-gray-100 dark:bg-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600":!r(t.deed,t.date)}])},(0,i.zw)(t.deed.name),3)}}};var m=n(3854),x={key:0,class:"px-1 py-1 text-left text-xs dark:text-gray-400"};const k={props:{date:{type:String,default:""}},setup:function(t){var e=(0,m.Z)(),n=(0,i.Fl)((function(){var t=e.deeds.length;return 1===t?"grid-cols-1":2===t||4===t?"grid-cols-2":"grid-cols-3"}));return function(r,a){return(0,i.wg)(),(0,i.iD)("div",null,[t.date?((0,i.wg)(),(0,i.iD)("div",x,(0,i.zw)((0,i.SU)(s.FA)(t.date)),1)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,i.C_)(["grid gap-2",(0,i.SU)(n)])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(e).deeds,(function(e){return(0,i.wg)(),(0,i.j4)(g,{deed:e,date:t.date},null,8,["deed","date"])})),256))],2)])}}};var b=n(1698),y={key:0},U={class:"block mr-1"};const S={props:{labelMore:{type:String,default:"Mehr anzeigen"},labelLess:{type:String,default:"Weniger anzeigen"}},setup:function(t){var e=t,n=(0,i.iH)(!1),r=(0,i.Fl)((function(){return!0===n.value?b.g8U:b.v4q})),a=(0,i.Fl)((function(){return!0===n.value?e.labelLess:e.labelMore})),s=function(){return n.value=!n.value};return function(t,e){return(0,i.wg)(),(0,i.iD)("div",null,[n.value?((0,i.wg)(),(0,i.iD)("div",y,[(0,i.WI)(t.$slots,"default")])):(0,i.kq)("",!0),(0,i._)("a",{onClick:s,class:"mt-1 flex w-full items-center py-1 text-gray-500 dark:text-gray-300 select-none"},[(0,i._)("span",U,(0,i.zw)((0,i.SU)(a)),1),((0,i.wg)(),(0,i.j4)((0,i.LL)((0,i.SU)(r)),{class:"w-5 h-5 text-gray-400"}))])])}}};var _={class:"flex"},W={class:"p-2 font-bold flex-1 mx-1"},D={class:"flex"},z={class:"p-2 font-bold flex-1 mx-1"},T={class:"space-y-2"};const A={setup:function(t){var e=new Date,n=(0,i.iH)(e.getMonth()),r=(0,i.iH)(e.getFullYear()),a=(0,i.Fl)((function(){return n.value-1<0?11:n.value-1})),o=(0,i.Fl)((function(){return n.value+1>11?0:n.value+1})),u=(0,i.Fl)((function(){return n.value===e.getMonth()&&r.value===e.getFullYear()?(0,s.jh)():(0,s.Ef)(n.value,r.value)})),c=function(){return r.value++},l=function(){return r.value--},d=function(){if(n.value+1>11)return n.value=0,void c();n.value++},f=function(){if(n.value-1<0)return n.value=11,void l();n.value--};return function(t,e){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",_,[(0,i._)("button",{onClick:f,class:"p-2 block flex-1"}," « "+(0,i.zw)((0,i.SU)(s.o_)((0,i.SU)(a))),1),(0,i._)("button",W,(0,i.zw)((0,i.SU)(s.o_)(n.value)),1),(0,i._)("button",{onClick:d,class:"p-2 flex-1"},(0,i.zw)((0,i.SU)(s.o_)((0,i.SU)(o)))+" » ",1)]),(0,i._)("div",D,[(0,i._)("button",{onClick:l,class:"p-2 block flex-1"}," « "+(0,i.zw)(r.value-1),1),(0,i._)("button",z,(0,i.zw)(r.value),1),(0,i._)("button",{onClick:c,class:"p-2 flex-1"},(0,i.zw)(r.value+1)+" » ",1)]),(0,i._)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(u).slice(0,3),(function(t){return(0,i.wg)(),(0,i.j4)((0,i.SU)(k),{key:t,date:t},null,8,["date"])})),128)),(0,i.Wm)((0,i.SU)(S),null,{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(u).slice(3),(function(t){return(0,i.wg)(),(0,i.j4)((0,i.SU)(k),{key:t,date:t},null,8,["date"])})),128))]})),_:1})])],64)}}};var Z=n(8261),M=n(1353),j=n(6711),$={class:"font-semibold uppercase border-b text-gray-500 dark:text-gray-300 border-gray-100 dark:border-gray-600 mb-2 select-none"};var C=n(3744);const H={},I=(0,C.Z)(H,[["render",function(t,e){return(0,i.wg)(),(0,i.iD)("div",$,[(0,i.WI)(t.$slots,"default")])}]]);var F={class:"flex items-end mb-4"},O=["onClick"],P={class:"ml-2 flex-1"},E={class:"text-xs text-gray-500 dark:text-gray-400"},q={class:""};const L={props:{treats:{type:Object,required:!0}},setup:function(t){var e=h(),n=function(t){return e.hasActiveTreat&&t.id===e.activeTreat.id},r=function(t){return n(t)?"text-yellow-600":"text-gray-400"};return function(a,u){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.treats,(function(t){return(0,i.wg)(),(0,i.iD)("div",F,[(0,i._)("button",{onClick:function(r){return function(t){n(t)?e.removeActiveTreat():e.setActiveTreat(t)}(t)},class:"pt-2 pr-1 select-none outline-0"},[(0,i.Wm)((0,i.SU)(b.r7p),{class:(0,i.C_)(r(t))},null,8,["class"])],8,O),(0,i._)("div",P,[(0,i._)("div",E,(0,i.zw)((0,i.SU)(s.FA)(t.bought)),1),(0,i._)("div",q,(0,i.zw)(t.name),1)]),(0,i._)("div",null,(0,i.zw)((0,i.SU)(o.W)(t.costs)),1)])})),256)}}};var Y={class:"py-1 flex justify-between text-lg"},B={class:"font-semibold"};const G={props:{label:{type:String,required:!0}},setup:function(t){return function(e,n){return(0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("div",null,(0,i.zw)(t.label),1),(0,i._)("div",B,[(0,i.WI)(e.$slots,"default")])])}}};var R={class:"bg-white dark:bg-gray-700 text-black dark:text-gray-100 mx-2 py-2 px-3 shadow rounded-md"};const K={},Q=(0,C.Z)(K,[["render",function(t,e){return(0,i.wg)(),(0,i.iD)("div",R,[(0,i.WI)(t.$slots,"default")])}]]);var N={class:"relative"},V={class:"mt-1 w-full bg-gray-200 rounded-full h-6 text-center"},J={class:"w-full h-6 flex items-center justify-center absolute top-0 left-0 text-xs text-center text-black font-bold"};const X={props:{percent:{type:Number,required:!0}},setup:function(t){return function(e,n){return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",V,[(0,i._)("div",{class:"bg-teal-400 h-6 rounded-full",style:(0,i.j5)({width:(0,i.SU)(o.T)(t.percent)})},null,4)]),(0,i._)("div",J,(0,i.zw)((0,i.SU)(o.T)(t.percent)),1)])}}};function tt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,i=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return et(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function nt(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function rt(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){nt(i,r,a,s,o,"next",t)}function o(t){nt(i,r,a,s,o,"throw",t)}s(void 0)}))}}var at=(0,i.Uk)("Dashboard"),it=(0,i.Uk)("Heute"),st={class:"mt-3 flex justify-between items-center"},ot=(0,i._)("div",null,"Insgesamt verfügbar",-1),ut={class:"text-xl font-semibold text-teal-500"},ct=(0,i.Uk)("Derzeit aktiv"),lt={class:"flex justify-between text-lg"},dt={key:0},ft=["innerHTML"],pt=["innerHTML"],vt=(0,i.Uk)("Treats"),ht={class:"mt-4"},wt=(0,i.Uk)("Historie");const gt={setup:function(t){return rt(a().mark((function t(){var e,n,r,u,c,l,d,p,v,w,g,x;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=h(),l=(0,m.Z)(),d=f(),p=(0,j.Z)(),v=(0,i.iH)(null),w=function(){var t=rt(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.value=(0,s.hA)((new Date).toISOString()),t.next=3,c.fetch();case 3:return t.next=5,l.fetchAll();case 5:return t.next=7,d.fetchAll();case 7:return t.next=9,p.fetchAll();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=rt(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.unlock();case 2:return t.next=4,p.fetchAll();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t){return isFinite(t)?"".concat(t," Tage"):"&infin;"},e=(0,i.mv)((function(){return w()})),n=tt(e,2),r=n[0],u=n[1],t.next=11,r;case 11:return u(),document.addEventListener("visibilitychange",rt(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("visible"!==document.visibilityState){t.next=3;break}return t.next=3,w(!0);case 3:case"end":return t.stop()}}),t)})))),t.abrupt("return",(function(t,e){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)((0,i.SU)(Z.Z),null,{default:(0,i.w5)((function(){return[at]})),_:1}),(0,i.Wm)((0,i.SU)(M.Z),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(Q),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(I),null,{default:(0,i.w5)((function(){return[it]})),_:1}),(0,i.Wm)((0,i.SU)(k),{date:(0,i.SU)(v)},null,8,["date"]),(0,i._)("div",st,[ot,(0,i._)("div",ut,(0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).available)),1)])]})),_:1}),(0,i.SU)(c).hasActiveTreat?((0,i.wg)(),(0,i.j4)((0,i.SU)(Q),{key:0,class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(I),null,{default:(0,i.w5)((function(){return[ct]})),_:1}),(0,i._)("div",null,[(0,i._)("div",lt,[(0,i._)("div",null,(0,i.zw)((0,i.SU)(c).activeTreat.name),1),(0,i._)("div",null,(0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).activeTreat.costs)),1)]),(0,i.Wm)((0,i.SU)(X),{percent:(0,i.SU)(c).activeReached,class:"mt-3 mb-4"},null,8,["percent"]),(0,i.SU)(c).canUnlock?((0,i.wg)(),(0,i.iD)("div",dt,[(0,i._)("button",{onClick:e[0]||(e[0]=function(t){return g()}),class:"w-full text-center bg-gray-700 rounded-md text-white mb-4 py-2 font-semibold uppercase"}," Freischalten ")])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i.Wm)((0,i.SU)(G),{label:"Verbleibend"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).activeRest)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"Geschätzte Restzeit"},{default:(0,i.w5)((function(){return[(0,i._)("span",{innerHTML:x((0,i.SU)(c).activeEta)},null,8,ft)]})),_:1}),(0,i.Wm)((0,i.SU)(S),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(G),{label:"Gespart gesamt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).savings)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"Kosten gesamt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).costsAll)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"Ausgegeben"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).costsSpent)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"Offen"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).costsOpen)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"10-Tage Schnitt"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,i.zw)((0,i.SU)(o.W)((0,i.SU)(c).intersectionTenDays)),1)]})),_:1}),(0,i.Wm)((0,i.SU)(G),{label:"ETA (offen)"},{default:(0,i.w5)((function(){return[(0,i._)("span",{innerHTML:x((0,i.SU)(c).openEta)},null,8,pt)]})),_:1})]})),_:1})])])]})),_:1})):(0,i.kq)("",!0),(0,i.Wm)((0,i.SU)(Q),{class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(I),null,{default:(0,i.w5)((function(){return[vt]})),_:1}),(0,i._)("div",ht,[(0,i.Wm)((0,i.SU)(L),{treats:(0,i.SU)(p).unlockableTreats.slice(0,3)},null,8,["treats"]),(0,i.SU)(p).unlockableTreats.length>3?((0,i.wg)(),(0,i.j4)((0,i.SU)(S),{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(L),{treats:(0,i.SU)(p).unlockableTreats.slice(3)},null,8,["treats"])]})),_:1})):(0,i.kq)("",!0)])]})),_:1}),(0,i.Wm)((0,i.SU)(Q),{class:"mt-6"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,i.SU)(I),null,{default:(0,i.w5)((function(){return[wt]})),_:1}),(0,i.Wm)((0,i.SU)(A))]})),_:1})]})),_:1})],64)}));case 14:case"end":return t.stop()}}),t)})))()}}},1698:(t,e,n)=>{n.d(e,{V_R:()=>s,g8U:()=>i,pOD:()=>u,r7p:()=>c,v4q:()=>a,vdY:()=>o});var r=n(821),a={name:"ChevronDownIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 9 12 15 18 9"},null),(0,r.Uk)(" ")])}},i={name:"ChevronUpIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-up",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("polyline",{points:"6 15 12 9 18 15"},null),(0,r.Uk)(" ")])}},s={name:"MinusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-minus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},o={name:"PencilIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-pencil",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"},null),(0,r.Uk)(" ")])}},u={name:"PlusIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null),(0,r.Uk)("   "),(0,r.Wm)("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null),(0,r.Uk)(" ")])}},c={name:"StarIcon",props:{size:{type:String,default:"24"}},render(){const t=this.$props.size+"px",e=this.$data.attrs||{},n={...this.$data,width:e.width||t,height:e.height||t};return(0,r.Wm)("svg",(0,r.dG)({xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-star",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n),[(0,r.Uk)("   "),(0,r.Wm)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null),(0,r.Uk)("   "),(0,r.Wm)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"},null),(0,r.Uk)(" ")])}}}}]);