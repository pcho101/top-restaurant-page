(()=>{"use strict";const e=()=>{const e=document.createElement("main"),t=document.createElement("h1"),n=document.createElement("h2");return t.textContent="Restaurant Name",n.textContent="Restaurant Slogan",e.appendChild(t),e.appendChild(n),e},t=(e,t,n,d)=>({title:e,text:t,source:n,id:d}),n=t("Shrimp Dumpling","Shrimp wrapped with translucent wrapper","shrimp-dumpling.jpg","shrimp-dumpling"),d=t("Xiao Long Bao","Steamed soup dumplings filled with pork and broth","xiaolongbao.jpg","xiaolongbao"),a=t("Pork Dumpling","Dumpling with pork, shrimp and mushroom","pork-dumpling.jpg","pork-dumpling"),l=t("Lotus Leaf Rice","Sticky rice wrapped in lotus leaf","lotus-leaf-rice.jpg","lotus-leaf-rice"),o=t("Egg Tart","Custard tart with egg","egg-tart.jpg","egg-tart"),c=t("Sesame Balls","Deep fried dough filled with sweet paste","sesame-balls.jpg","sesame-balls"),i=e=>{const t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("p"),a=document.createElement("img");return a.src=e.source,a.alt=e.id,a.id=e.id,n.textContent=e.title,d.textContent=e.text,t.classList.add("dish"),t.appendChild(n),t.appendChild(d),t.appendChild(a),t},p=["Home","Menu","Contact"];(()=>{const t=document.getElementById("content");t.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("ul");e.appendChild(t);for(let e=0;e<p.length;e++){const n=document.createElement("li");n.textContent=p[e],t.appendChild(n)}return e})()),t.appendChild(e()),t.appendChild((()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Copyright © 2022 Restaurant Name | pcho101",e.appendChild(t),e})())})(),document.querySelectorAll("li").forEach((t=>{t.addEventListener("click",(()=>{const r=document.getElementById("content");t.textContent==p[0]?r.replaceChild(e(),r.children[1]):t.textContent==p[1]?r.replaceChild((()=>{const e=document.createElement("main"),t=document.createElement("h1");t.classList.add("menu"),t.textContent="Menu";const p=document.createElement("h2");p.classList.add("featured"),p.textContent="Featured Dishes",e.appendChild(t),e.appendChild(p);const r=document.createElement("div");return r.classList.add("menu-container"),r.appendChild(i(n)),r.appendChild(i(d)),r.appendChild(i(a)),r.appendChild(i(l)),r.appendChild(i(o)),r.appendChild(i(c)),e.appendChild(r),e})(),r.children[1]):t.textContent==p[2]&&r.replaceChild((()=>{const e=document.createElement("main"),t=document.createElement("h1");t.textContent="Contact Form",e.appendChild(t);const n=document.createElement("form");return e.appendChild(n),e})(),r.children[1])}))}))})();