let clicks = 0;
const btn   = document.getElementById('themeBtn');
const audio = document.getElementById('starSound');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');

  clicks++;
  if (clicks === 2) {
    // activate starry mode
    document.body.classList.toggle('starry');
    document.documentElement.classList.toggle('starry');
    clicks = 0;

    // play whoosh
    audio.currentTime = 0;
    audio.play().catch(()=>{});

    // popup
    setTimeout(()=>alert("🌌  Starry‑Sky mode unlocked! Hidden memories revealed…"),150);

    // shooting star
    shootStar();
  }
});

/* shooting‑star element */
function shootStar(){
  const s = document.createElement('div');
  s.className = 'shooting-star';
  document.body.appendChild(s);
  s.addEventListener('animationend', ()=>s.remove());
}
