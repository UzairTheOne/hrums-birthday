/* THEME TOGGLE */
let moonClicks=0;
function toggleTheme(){
  document.body.classList.toggle('dark');
  moonClicks++;
  if(moonClicks===2){document.body.classList.toggle('starry');moonClicks=0;}
}

/* SPARKLES */
tsParticles.load("sparkles",{
  fullScreen:{enable:false},
  particles:{number:{value:40,density:{enable:true,area:900}},
  color:{value:["#ffaad4","#ffa8e0","#a189bd","#fff3b0"]},
  opacity:{value:.8,random:{enable:true,minimumValue:.4}},
  size:{value:4,random:{enable:true,minimumValue:2}},
  move:{enable:true,speed:1,outModes:{default:"bounce"}}},
  detectRetina:true
});

/* CONFETTI */
function burst(){confetti({particleCount:160,spread:80,origin:{y:.7},decay:.85})}

/* TYPING */
let typingTimer,isTyping=false,fullTxt='';
function typeText(txt){
  const out=document.getElementById('typed-out');
  clearInterval(typingTimer);fullTxt=txt;out.innerText='';let i=0;isTyping=true;
  typingTimer=setInterval(()=>{if(i<fullTxt.length)out.innerText+=fullTxt.charAt(i++);else{clearInterval(typingTimer);isTyping=false;}},38);
}

/* MEMORIES */
const memories=[
  "🎂 That wild birthday when frosting ended up everywhere – and we laughed till we cried!",
  "🧃 Your bubble‑tea fever: 7 cups, 2 hours, infinite sugar rush. Still iconic.",
  "📚 All‑night study marathons where we quizzed each other and sang OSTs at 3 AM.",
  "😂 That inside joke no one else gets – but one glance and we both burst out laughing."
];
function showMemory(i){
  if(isTyping){clearInterval(typingTimer);document.getElementById('typed-out').innerText=fullTxt;isTyping=false;return;}
  typeText(memories[i]);burst();
}

/* AUDIO */
const music=document.getElementById('bgMusic');
const btn=document.getElementById('audioBtn');
let play=false;
function toggleAudio(){
  if(play){music.pause();btn.innerText='🔇';}
  else{music.play().catch(()=>{});btn.innerText='🔊';}
  play=!play;
}

/* PETALS BACKGROUND */
const cvs=document.getElementById('petals'),ctx=cvs.getContext('2d');
function resize(){cvs.width=innerWidth;cvs.height=innerHeight;}
window.addEventListener('resize',resize);resize();
const petals=[];
for(let i=0;i<60;i++)petals.push({x:Math.random()*cvs.width,
  y:Math.random()*cvs.height,r:8+Math.random()*6,s:1+Math.random()*1.5,dx:(Math.random()-.5)*0.5});
function draw(){
  ctx.clearRect(0,0,cvs.width,cvs.height);
  petals.forEach(p=>{
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
    ctx.fillStyle="rgba(255,255,255,0.15)";ctx.fill();
    p.y+=p.s;p.x+=p.dx;if(p.y>cvs.height+20){p.y=-20;p.x=Math.random()*cvs.width;}
  });
  requestAnimationFrame(draw);
}
draw();

/* SECRET POEM */
function revealPoem(){
  alert("🌸 Hidden Poem 🌸\\n\\nIn pages of dramas and nights full of stars,\\nYou studied, you shone, you carried your scars.\\nToday I remind you – you’re perfect as you are,\\nMy favorite leading lady, my brightest K‑drama star.");
}
