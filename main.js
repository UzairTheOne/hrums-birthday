/* ---- Loader fade ---- */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').style.opacity=0,600);
  setTimeout(()=>document.getElementById('loader').style.display='none',1200);
  typeLine();
});

/* ---- Typing intro ---- */
const msg="Ready for your own birthday K‑drama adventure?";
let idx=0;
function typeLine(){
  const box=document.getElementById('type');
  if(idx<msg.length){
    box.textContent+=msg.charAt(idx++);
    setTimeout(typeLine,50);
  }
}

/* ---- Theme toggle ---- */
document.getElementById('themeToggle').onclick=()=>{
  document.body.classList.toggle('night');
};

/* ---- Sparkle cursor ---- */
document.addEventListener('mousemove',e=>{
  const s=document.createElement('div');
  s.className='spark';
  s.style.left=e.pageX+'px';
  s.style.top=e.pageY+'px';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),600);
});

/* ---- Secret star popup ---- */
document.getElementById('secretStar').onclick=()=>{
  document.getElementById('popup').style.display='flex';
};
document.getElementById('closePop').onclick=()=>{
  document.getElementById('popup').style.display='none';
};

/* ---- Begin Adventure ---- */
document.getElementById('startBtn').onclick=()=>{
  confettiBurst();
  setTimeout(()=>location.href='ep1.html',700);
};

/* ---- Confetti burst ---- */
function confettiBurst(){
  confetti({ particleCount:110, spread:90,
    colors:['#ff8cc6','#ffd4f2','#e0c3ff']});
}
