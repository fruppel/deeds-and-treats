/*! For license information please see 39.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39],{6665:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(821),o={class:"min-h-screen flex items-center sm:justify-center"},i={class:"w-full sm:max-w-md mt-6"},a=(0,n._)("div",null,[(0,n._)("div",{class:"text-xl text-center mb-4 font-semibold"},[(0,n._)("h1",null,"Deeds & Treats")])],-1),u={class:"bg-white shadow-md px-6 py-4 sm:rounded-lg overflow-hidden"};const c={},l=(0,r(3744).Z)(c,[["render",function(t,e){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",i,[a,(0,n._)("div",u,[(0,n.WI)(t.$slots,"default")])])])}]])},7877:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(821),o={key:0,class:"text-sm text-red-500 mt-1"};const i={__name:"FormError",props:{error:Object},setup:function(t){return function(e,r){return t.error?((0,n.wg)(),(0,n.iD)("div",o,(0,n.zw)(t.error[0]),1)):(0,n.kq)("",!0)}}}},6377:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(821),o=["value","type"];const i={__name:"FormInput",props:{modelValue:{type:[String,Number]},type:{type:String,default:"text"}},emits:["update:modelValue"],setup:function(t,e){var r=e.emit,i=function(t){return r("update:modelValue",t.target.value)};return function(e,r){return(0,n.wg)(),(0,n.iD)("input",{value:t.modelValue,type:t.type,onInput:i,class:"py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full border-gray-300 block w-full dark:text-gray-900"},null,40,o)}}}},9745:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(821),o={class:"block font-medium text-sm text-gray-700 mb-1"};const i={},a=(0,r(3744).Z)(i,[["render",function(t,e){return(0,n.wg)(),(0,n.iD)("label",o,[(0,n.WI)(t.$slots,"default")])}]])},6039:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var n=r(821),o=r(6665),i=r(9745),a=r(6377),u=r(2201),c=r(7432),l=r(7877);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return U()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function h(){}function p(){}function m(){}var y={};u(y,o,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(E([])));w&&w!==e&&r.call(w,o)&&(y=w);var g=m.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,d=f.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(d).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:U}}function U(){return{value:void 0,done:!0}}return p.prototype=m,u(g,"constructor",m),u(m,"constructor",p),p.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),u(g,a,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function d(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var h={class:"mt-4"},p=(0,n.Uk)("E-Mail"),m={class:"mt-4"},y=(0,n.Uk)("Password"),v={class:"mt-6"},w={class:"mt-5"},g=(0,n.Uk)("Neuen Account erstellen"),b=(0,n.Uk)("Passwort vergessen?");const x={__name:"PageLogin",setup:function(t){var e=(0,c.Z)(),r=(0,u.tv)(),s=(0,u.yj)(),x=(0,n.iH)({email:"",password:""}),_=(0,n.Fl)((function(){return e.errors})),L=function(){var t,n=(t=f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.login({email:x.value.email,password:x.value.password});case 2:return t.next=4,r.push({path:s.query.redirect||"/dashboard"});case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,u,"next",t)}function u(t){d(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return function(t,e){return(0,n.wg)(),(0,n.j4)((0,n.SU)(o.Z),null,{default:(0,n.w5)((function(){return[(0,n._)("div",h,[(0,n.Wm)((0,n.SU)(i.Z),{for:"email"},{default:(0,n.w5)((function(){return[p]})),_:1}),(0,n.Wm)((0,n.SU)(a.Z),{modelValue:x.value.email,"onUpdate:modelValue":e[0]||(e[0]=function(t){return x.value.email=t}),type:"text",name:"email",id:"email"},null,8,["modelValue"]),(0,n.Wm)((0,n.SU)(l.Z),{error:(0,n.SU)(_).email},null,8,["error"])]),(0,n._)("div",m,[(0,n.Wm)((0,n.SU)(i.Z),{for:"password"},{default:(0,n.w5)((function(){return[y]})),_:1}),(0,n.Wm)((0,n.SU)(a.Z),{modelValue:x.value.password,"onUpdate:modelValue":e[1]||(e[1]=function(t){return x.value.password=t}),type:"password",name:"password",id:"password",onKeyup:(0,n.D2)(L,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.Wm)((0,n.SU)(l.Z),{error:(0,n.SU)(_).password},null,8,["error"])]),(0,n._)("div",v,[(0,n._)("button",{onClick:L,type:"submit",class:"block w-full py-2 rounded-md bg-teal-500 text-white font-semibold"}," Login "),(0,n._)("div",w,[(0,n.Wm)((0,n.SU)(u.rH),{to:"/register",class:"block py-1 underline"},{default:(0,n.w5)((function(){return[g]})),_:1}),(0,n.Wm)((0,n.SU)(u.rH),{to:"/forgot-password",class:"block py-1 underline"},{default:(0,n.w5)((function(){return[b]})),_:1})])])]})),_:1})}}}}}]);