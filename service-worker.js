if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const a=e=>n(e,o),l={module:{uri:o},exports:t,require:a};s[o]=Promise.all(r.map((e=>l[e]||a(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"adsense_app1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/adsense_app1/css/app.742fbd13.css",revision:null},{url:"/adsense_app1/index.html",revision:"35ae0313f734bded1298376ec7afe335"},{url:"/adsense_app1/js/about.17b5b527.js",revision:null},{url:"/adsense_app1/js/app.57fd8b00.js",revision:null},{url:"/adsense_app1/js/chunk-vendors.8b3293cf.js",revision:null},{url:"/adsense_app1/manifest.json",revision:"e85125e853d4708d094677c8ca774453"},{url:"/adsense_app1/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
