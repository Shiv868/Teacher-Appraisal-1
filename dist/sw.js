if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let t={};const o=e=>n(e,d),l={module:{uri:d},exports:t,require:o};i[d]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Dn6LyQZK.js",revision:null},{url:"assets/index-DYAgjzOR.css",revision:null},{url:"index.html",revision:"6590b565022897d243ab49dd0d664364"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-192x192.png",revision:"8441d608a9a36e9df5b3b6f2dd7b9672"},{url:"icon-512x512.png",revision:"8441d608a9a36e9df5b3b6f2dd7b9672"},{url:"manifest.webmanifest",revision:"5a6b5e58d6398254ee3951a388a280d6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
