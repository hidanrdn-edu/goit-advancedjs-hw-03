/* empty css                      */import{a as m,S as u,i as n}from"./assets/vendor-B3UvNUPd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="58027101-8436ffa8ff8504f480371d17b",g=i=>{const t={image_type:"photo",orientation:"horizontal",safesearch:!0,key:p,q:i};return m.get(d,{params:t}).then(s=>s.data)},l={loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},h=new u(".gallery a"),y=i=>{const t=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:a,comments:c,downloads:f})=>`
    <li class="gallery-card">

        <a href="${o}" class="gallery-link"><img class="gallery-img" src="${s}" alt="${e}" /></a>              

        <div class="box-info">
            <ul class="card-infor">
                <li class="item-infor">
                    <p class="item-infor-name">Likes</p>
                    <p class="item-infor-value">${r}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Views</p>
                    <p class="item-infor-value">${a}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Comments</p>
                    <p class="item-infor-value">${c}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Downloads</p>
                    <p class="item-infor-value">${f}</p>
                </li>
            </ul>
        </div>
    </li>
  `).join("");l.gallery.innerHTML=t,h.refresh()};function L(){l.gallery.innerHTML=""}function b(){l.loader.classList.remove("hidden")}function v(){l.loader.classList.add("hidden")}const P={form:document.querySelector(".form")},S=i=>{i.preventDefault();const{currentTarget:t}=i,s=t.elements["search-text"].value.trim();if(!s){n.warning({message:"The search field should be filled in!"}),t.reset();return}t.reset(),L(),b(),g(s).then(o=>{if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits)}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{v()})};P.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
