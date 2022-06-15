(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),d=t.n(c),l=new URL(t(990),t.b),s=i()(a());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap);"]),s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);var p=d()(l);s.push([e.id,"body {\n    margin: 0;\n    min-height: 100vh;\n    background-image: url("+p+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    background-color: #c58856;\n    font-family: 'Raleway', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100vh;\n}\n\nheader {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\nul {\n    display: flex;\n    justify-content: center;\n    padding: 0px;\n    gap: 32px;\n}\n\nli {\n    list-style: none;\n    cursor: pointer;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.7);\n    justify-content: center;\n    flex: 1;\n    padding-bottom: 20px;\n}\n\n.restaurant-name {\n    font-size: 4rem;\n}\n\n.slogan {\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\nh1 {\n    font-family: 'Berkshire Swash', cursive;\n    font-weight: normal;\n    text-align: center;\n}\n\n.menu-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\nimg {\n    height: 200px;\n    width: 250px;\n    border: 2px solid #7a4221;\n    border-radius: 10px;\n}\n\n.dish {\n    text-align: center;\n    padding: 10px;\n    min-width: 40vw;\n}\n\nh2 {\n    margin: 0px;\n    text-align: center;\n}\n\nh3 {\n    margin: 0px;\n}\n\n.dish>p {\n    margin: 0px;\n    padding: 5px 0px;\n}\n\nfooter {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    align-content: center;\n    justify-content: center;\n}\n\nfooter>p {\n    font-size: 0.8rem;\n}\n\na:link {\n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n    color: white;\n}\n\na:hover {\n    color: grey;\n}\n\nform {\n    padding: 20px;\n    font-weight: 700;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n}\n\nmain>p {\n    margin: 0px;\n    text-align: center;\n}\n\ninput,\ntextarea {\n    padding: 0.5rem;\n}\n\ntextarea {\n    resize: none;\n    height: 120px;\n}\n\nbutton {\n    padding: 0.5rem;\n    font-weight: 700;\n    color: white;\n    background-color: #7a4221;\n    border-radius: 5px;\n    border-style: none;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #552d16;\n}\n\n.active {\n    border-bottom: 4px solid #c58856;\n}\n\nli {\n    font-weight: 700;\n    padding-bottom: 6px;\n    border-bottom: 4px solid transparent;\n}\n\nli:hover {\n    border-bottom: 4px solid #a95f23;\n}",""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},990:(e,n,t)=>{e.exports=t.p+"a03f9ef69f7f7098c756.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{const e=document.createElement("main"),n=document.createElement("h1"),t=document.createElement("h2");return n.textContent="Moon Jade Restaurant",t.textContent="Traditional and Authentic Cuisine",n.classList.add("restaurant-name"),t.classList.add("slogan"),e.appendChild(n),e.appendChild(t),e},g=t.p+"1a084e3f19e20ba6fc2c.jpg",x=t.p+"6e3feff4c710b4c28952.jpg",v=t.p+"cf11f79bc62f1f999b5c.jpg",C=t.p+"ba3bc2eba459279f203f.jpg",b=t.p+"e228a8291d57e674c017.jpg",y=t.p+"d8c59e9b6e8b81ccf6a7.jpg",w=(e,n,t,r)=>({source:e,title:n,text:t,id:r}),E=w(g,"Shrimp Dumpling","Shrimp wrapped with translucent wrapper","shrimp-dumpling"),L=w(x,"Xiao Long Bao","Steamed soup dumplings with pork and broth","xiaolongbao"),k=w(v,"Pork Dumpling","Dumpling with pork, shrimp and mushroom","pork-dumpling"),S=w(C,"Lotus Leaf Rice","Sticky rice wrapped in lotus leaf","lotus-leaf-rice"),j=w(b,"Egg Tart","Custard tart with egg","egg-tart"),T=w(y,"Sesame Balls","Deep fried dough filled with sweet paste","sesame-balls"),M=e=>{const n=document.createElement("div"),t=document.createElement("h3"),r=document.createElement("p"),a=document.createElement("img");return a.src=e.source,a.alt=e.id,a.id=e.id,t.textContent=e.title,r.textContent=e.text,n.classList.add("dish"),n.appendChild(t),n.appendChild(r),n.appendChild(a),n},I=()=>{const e=document.createElement("div"),n=document.createElement("label"),t=document.createElement("input");return e.classList.add("form-row"),n.htmlFor="full-name",n.textContent="Name",t.type="text",t.name="full-name",t.id="full-name",t.required=!0,e.appendChild(n),e.appendChild(t),e},A=()=>{const e=document.createElement("div"),n=document.createElement("label"),t=document.createElement("input");return e.classList.add("form-row"),n.htmlFor="email",n.textContent="Email",t.type="email",t.name="email",t.id="email",t.required=!0,e.appendChild(n),e.appendChild(t),e},B=()=>{const e=document.createElement("div"),n=document.createElement("label"),t=document.createElement("textarea");return e.classList.add("form-row"),n.htmlFor="comment",n.textContent="Comment",t.name="comment",t.id="comment",t.required=!0,e.appendChild(n),e.appendChild(t),e},R=()=>{const e=document.createElement("div"),n=document.createElement("button");return e.classList.add("form-row"),n.textContent="Submit",e.appendChild(n),e},F=["Home","Menu","Contact"],P=e=>{const n=document.getElementById("content");e.target.classList.contains("active")||(D(e.target),e.target.textContent==F[0]?n.replaceChild(f(),n.children[1]):e.target.textContent==F[1]?n.replaceChild((()=>{const e=document.createElement("main"),n=document.createElement("h1"),t=document.createElement("h2"),r=document.createElement("div");return n.textContent="Menu",t.textContent="Featured Dishes",n.classList.add("menu"),t.classList.add("featured"),r.classList.add("menu-container"),r.appendChild(M(E)),r.appendChild(M(L)),r.appendChild(M(k)),r.appendChild(M(S)),r.appendChild(M(j)),r.appendChild(M(T)),e.appendChild(n),e.appendChild(t),e.appendChild(r),e})(),n.children[1]):e.target.textContent==F[2]&&n.replaceChild((()=>{const e=document.createElement("main"),n=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p"),o=document.createElement("p");return n.textContent="Contact Us",t.textContent="Hours: Everyday 06:00 - 22:00",r.textContent="Address: 5678 Imaginary Boulevard",a.textContent="Phone: 123 - 456 - 7890",o.textContent="Leave us your feedback on our products and services.",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a),e.appendChild(o),e.appendChild((()=>{const e=document.createElement("form");return e.action="#",e.method="get",e.appendChild(I()),e.appendChild(A()),e.appendChild(B()),e.appendChild(R()),e})()),e})(),n.children[1]))},D=e=>{document.querySelector(".active").classList.remove("active"),e.classList.add("active")};(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("ul");for(let e=0;e<F.length;e++){const t=document.createElement("li");t.textContent=F[e],t.classList.add(F[e].toLowerCase()),0==e&&t.classList.add("active"),t.addEventListener("click",P),n.appendChild(t)}return e.appendChild(n),e})()),e.appendChild(f()),e.appendChild((()=>{const e=document.createElement("footer"),n=document.createElement("p"),t=document.createElement("a");return n.textContent="Copyright © 2022 | ",t.textContent="pcho101",t.href="https://github.com/pcho101/top-restaurant-page",n.appendChild(t),e.appendChild(n),e})())})()})()})();