/* -------- preloader fade -------- */
window.addEventListener('load', ()=>{
  setTimeout(()=>document.getElementById('preloader').style.display='none', 1000);
  typeIntro();
});

/* -------- typing intro -------- */
const intro = "Hey Noona! Ready to begin your birthday adventure?";
let tIndex = 0;
function typeIntro(){
  const el = document.getElementById('typing');
  if(tIndex < intro.length){
    el.textContent += intro.charAt(tIndex++);
    setTimeout(typeIntro,50);
  }
}

/* -------- theme toggle -------- */
document.getElementById('themeBtn').onclick = ()=> {
  document.body.classList.toggle('night');
};

/* -------- secret star -------- */
document.getElementById('secretStar').onclick = ()=> {
  document.getElementById('secretPopup').style.display = 'flex';
};
document.getElementById('closeSecret').onclick = ()=> {
  document.getElementById('secretPopup').style.display = 'none';
};

/* -------- begin adventure (confetti + redirect) -------- */
document.getElementById('beginBtn').onclick = ()=>{
  confettiBurst();
  setTimeout(()=>location.href='ep1.html',1200);
};

/* confetti helper */
function confettiBurst(){
  confetti({particleCount:120,spread:80,origin:{y:0.6},colors:['#ff99cc','#ffe6f5','#ff85c0']});
}

/* -------- sparkle cursor trail -------- */
document.addEventListener('mousemove', e=>{
  const s=document.createElement('div');
  s.className='sparkle';
  s.style.left=e.pageX+'px';
  s.style.top =e.pageY+'px';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),700);
});
