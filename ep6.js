// Wait loader
window.onload = () => {
  document.getElementById('loader').style.display = 'none';
  confetti({ particleCount: 50, spread: 70, colors: ['#ff69b4','#fcdfff','#fbcce7'] });
};

// Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {"value":60},
    "color": {"value":"#ff69b4"},
    "shape": {"type":"circle"},
    "opacity":{"value":0.5},
    "size":{"value":3},
    "move":{"enable":true,"speed":1}
  }
});

// Shooting star animation
const canvas = document.getElementById('shootingStar');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth; canvas.height = innerHeight;
function shoot() {
  const x = Math.random()*canvas.width*0.5;
  const y = Math.random()*canvas.height*0.5;
  const len = 150;
  const speed = 5;
  let dx = x, dy = y;
  const id = setInterval(() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(dx,dy);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();
    dx += speed; dy += speed;
    if(dx > x+len) {
      clearInterval(id);
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
  },16);
}
setInterval(shoot, 5000);

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('starry');
});

// Gift open & confetti
let opened = [false,false,false,false,false];
document.querySelectorAll('.gift-box').forEach(box => {
  box.addEventListener('click', () => {
    const i = box.dataset.id;
    document.querySelectorAll('.message-box').forEach(m=>m.style.display='none');
    document.getElementById('msg'+i).style.display='block';
    opened[i] = true;
    confetti({ particleCount: 30, spread: 60, colors: ['#ff69b4','#fcdfff'] });
    if(opened.every(v=>v)){
      document.getElementById('viewedAllPopup').style.display = 'block';
    }
  });
});

// Secret Popup button
document.getElementById('secretBtn').addEventListener('click', () => {
  document.getElementById('secretPopup').style.display = 'block';
});
document.getElementById('closeSecret').addEventListener('click', () => {
  document.getElementById('secretPopup').style.display = 'none';
});
document.getElementById('closeViewed').addEventListener('click', () => {
  document.getElementById('viewedAllPopup').style.display = 'none';
});
