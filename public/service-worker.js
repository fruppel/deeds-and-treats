if(!self.define){let e,t={};const s=(s,o)=>(s=new URL(s+".js",o).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(t[i])return;let n={};const c=e=>s(e,i),f={module:{uri:i},exports:n,require:c};t[i]=Promise.all(o.map((e=>f[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/js/app.js.LICENSE.txt",revision:"abdaf99b27e37195078f18c09490356b"}],{})}));
