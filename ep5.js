let clickCount = 0;
const btn   = document.getElementById('themeBtn');
const sound = document.getElementById('starSound');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');

  clickCount++;
  if (clickCount === 2) {                // 2nd click → Starry mode
    document.body.classList.toggle('starry');
    document.documentElement.classList.toggle('starry');
    clickCount = 0;

    // play whoosh sound
    sound.currentTime = 0;
    sound.play().catch(()=>{ /* autoplay blocked – ignore */ });

    // fun popup
    setTimeout(() => {
      alert("🌌  Starry‑Sky mode unlocked! \nHidden memories revealed…");
    }, 150);

    // spawn shooting star
    createShootingStar();
  }
});

/* ---- shooting‑star generator ---- */
function createShootingStar(){
  const star = document.createElement('div');
  star.className = 'shooting-star';
  document.body.appendChild(star);
  star.addEventListener('animationend', () => star.remove());
}
