!function(){const e=["#079992","#b71540","#e58e26","#78e08f","#38ada9","#eb2f06","#fa983a","#2ecc71","#9b59b6"];let t=0;function n(n){t=(t+1)%e.length,document.documentElement.style.setProperty("--textTheme",e[t]),n.preventDefault()}document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".header__hero .name").addEventListener("click",n),document.querySelector(".profile").addEventListener("click",n);let e=window.matchMedia("(min-width: 600px)").matches,t=document.querySelectorAll(".project");for(let n=0;n<t.length;n++){let o=t[n],d=o.querySelector("video");d&&(e?(o.addEventListener("mouseover",(e=>{d.play()})),o.addEventListener("mouseleave",(e=>{d.pause()}))):d.play())}}))}();
//# sourceMappingURL=index.112d4534.js.map
