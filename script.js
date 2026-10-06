const layer=document.querySelector(".hearts");

function heart(){
  const h=document.createElement("span");
  h.className="float-heart";
  h.textContent=["♥","♡","❤","❣"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*22)+"px";
  h.style.animationDuration=(6+Math.random()*8)+"s";
  layer.appendChild(h);
  setTimeout(()=>h.remove(),15000);
}
setInterval(heart,700);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity="1";
      e.target.style.transform="translateY(0)";
    }
  });
},{threshold:.12});

document.querySelectorAll(".quote,.reasons-grid div,.letter").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(25px)";
  el.style.transition="opacity .7s ease, transform .7s ease";
  observer.observe(el);
});
