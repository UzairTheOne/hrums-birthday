/* ----- Remove preloader on load ----- */
window.addEventListener('load',()=>{document.getElementById('preloader').style.display='none';});

/* ----- Theme / starry toggle (double‑click) ----- */
let clicks=0;
document.getElementById('themeToggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');
  clicks++;
  if(clicks===2){
    document.body.classList.toggle('starry');
    document.documentElement.classList.toggle('starry');
    clicks=0;
  }
});

/* ----- Quiz result + confetti burst ----- */
document.getElementById('quizForm').addEventListener('submit',e=>{
  e.preventDefault();
  const res=document.getElementById('result');
  res.innerHTML="✨ Your ideal birthday day is a cozy mix of love, laughter, a little chaos, and a lot of peace. That’s so Hrum of you 💛 ✨";

  /* simple confetti */
  for(let i=0;i<120;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.style.left=Math.random()*100+'vw';
    c.style.setProperty('--h',Math.random());
    c.style.animationDuration=2+Math.random()*3+'s';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
});
