"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39],{3003:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1916),l={class:"min-h-screen flex items-center"},u={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},a=(0,r._)("div",null,[(0,r._)("div",{class:"text-xl text-center"},"Deeds & Treats")],-1);const s={},o=(0,n(3744).Z)(s,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",u,[a,(0,r.WI)(e.$slots,"default")])])}]])},6377:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(1916),l=["value","type"];const u={props:{modelValue:{type:[String,Number]},type:{type:String,default:"text"}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,u=function(e){return n("update:modelValue",e.target.value)};return function(t,n){return(0,r.wg)(),(0,r.iD)("input",{value:e.modelValue,type:e.type,onInput:u,class:"py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full sm:w-80 border-gray-300 block w-full"},null,40,l)}}}},9745:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(1916),l={class:"block font-medium text-sm text-gray-700 mb-1"};const u={},a=(0,n(3744).Z)(u,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("label",l,[(0,r.WI)(e.$slots,"default")])}]])},6039:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7757),l=n.n(r),u=n(1916),a=n(3003),s=n(9745),o=n(6377),i=n(2119),d=n(7432);function c(e,t,n,r,l,u,a){try{var s=e[u](a),o=s.value}catch(e){return void n(e)}s.done?t(o):Promise.resolve(o).then(r,l)}var m={class:"mt-4"},p=(0,u.Uk)("E-Mail"),f={class:"mt-4"},v=(0,u.Uk)("Password"),w={class:"mt-6"},y={class:"mt-5"},b=(0,u.Uk)("Neuen Account erstellen"),g=(0,u._)("a",{class:"block py-1"},"Password vergessen?",-1);const h={setup:function(e){var t=(0,d.Z)(),n=(0,i.tv)(),r=(0,i.yj)(),h=(0,u.iH)({email:"",password:""}),k=function(){var e,u=(e=l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.login({email:h.value.email,password:h.value.password});case 2:return e.next=4,n.push({path:r.query.redirect||"/dashboard"});case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var u=e.apply(t,n);function a(e){c(u,r,l,a,s,"next",e)}function s(e){c(u,r,l,a,s,"throw",e)}a(void 0)}))});return function(){return u.apply(this,arguments)}}();return function(e,t){return(0,u.wg)(),(0,u.j4)((0,u.SU)(a.Z),null,{default:(0,u.w5)((function(){return[(0,u._)("div",m,[(0,u.Wm)((0,u.SU)(s.Z),{for:"email"},{default:(0,u.w5)((function(){return[p]})),_:1}),(0,u.Wm)((0,u.SU)(o.Z),{modelValue:h.value.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.value.email=e}),type:"text",name:"email",id:"email"},null,8,["modelValue"])]),(0,u._)("div",f,[(0,u.Wm)((0,u.SU)(s.Z),{for:"password"},{default:(0,u.w5)((function(){return[v]})),_:1}),(0,u.Wm)((0,u.SU)(o.Z),{modelValue:h.value.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.value.password=e}),type:"password",name:"password",id:"password"},null,8,["modelValue"])]),(0,u._)("div",w,[(0,u._)("button",{onClick:k,type:"submit",class:"block w-full py-2 rounded-md bg-teal-500 text-white font-semibold"}," Login "),(0,u._)("div",y,[(0,u.Wm)((0,u.SU)(i.rH),{to:"/register",class:"block py-1"},{default:(0,u.w5)((function(){return[b]})),_:1}),g])])]})),_:1})}}}}}]);