(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i={umas:[],addUma(n){this.umas.push(n)},removeUma(n){this.umas=this.umas.filter(t=>t.id!==n)},updateUma(n,t){const o=this.umas.findIndex(a=>a.id===n);o!==-1&&(this.umas[o]={...this.umas[o],...t})}};function m(){const n=document.getElementById("uma-table");n.innerHTML="";const t=document.createElement("table");t.innerHTML=`
    <thead>
      <tr>
        <th>Name</th>
        <th>Sparks</th>
      </tr>
    </thead>
    <tbody>
      ${i.umas.map(o=>`
        <tr>
          <td>${o.name}</td>
          <td>${o.sparks.map(a=>`${a.name} (${a.type} ⭐${a.level})`).join(", ")}</td>
        </tr>
      `).join("")}
    </tbody>
  `,n.appendChild(t)}function h(n){const t=document.createElement("form");t.innerHTML=`
    <input type="text" name="name" placeholder="Uma Name" required />
    <textarea name="sparks" placeholder="Enter sparks as 'name,type,level' one per line" required></textarea>
    <button type="submit">Add Uma</button>
  `,t.addEventListener("submit",o=>{o.preventDefault();const a=new FormData(t),e=a.get("name"),s=a.get("sparks").split(`
`).map(c=>{const[u,l,p]=c.split(",").map(f=>f.trim());return{name:u,type:l,level:Number(p)}}),d={id:crypto.randomUUID(),name:e,sparks:s};i.addUma(d),t.reset(),m()}),n.appendChild(t)}const y=document.getElementById("uma-form");h(y);m();
