import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form"),r=document.querySelector('input[type="number"]');document.querySelector("button[type=submit]");const n=document.querySelector("input[value=fulfilled]");document.querySelector("input[value=rejected]");i.addEventListener("submit",e=>{e.preventDefault(),s(Number(r.value))});function s(e){new Promise((t,u)=>{setTimeout(()=>{n.checked?t(e):u(e)},e),console.log(typeof e)}).then(t=>o.success({message:`✅ Fulfilled promise in ${t}ms
        `,position:"topCenter"})).catch(t=>o.error({message:`❌ Rejected promise in ${t}ms`,position:"topCenter"})),r.value=""}
//# sourceMappingURL=2-snackbar.js.map
