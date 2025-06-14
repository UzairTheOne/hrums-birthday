// Theme toggle
let moonClicks = 0;
function toggleTheme(){
  document.body.classList.toggle('dark');
  moonClicks++;
  if(moonClicks===2){document.body.classList.toggle('starry');moonClicks=0;}
}

// Sparkles
tsParticles.load("sparkles",{
  fullScreen:{enable:false},
  particles:{
    number:{value:45,density:{enable:true,area:900}},
    color:{value:["#ffaad4","#ffb6c1","#ffa8e0","#a189bd"]},
    opacity:{value:0.8,random:{enable:true,minimumValue:0.4}},
    size:{value:4,random:{enable:true,minimumValue:2}},
    move:{enable:true,speed:1,outModes:{default:"bounce"}}
  },detectRetina:true});

// Confetti
function runConfetti(){
  confetti({particleCount:180,spread:80,origin:{y:0.7},decay:0.85});
}

// Typing
let typingTimer,isTyping=false,fullText='';
function typeText(txt){
  const out=document.getElementById('typed-text');
  clearInterval(typingTimer);
  fullText=txt;out.innerText='';let i=0;isTyping=true;
  typingTimer=setInterval(()=>{
    if(i<fullText.length)out.innerText+=fullText.charAt(i++);
    else{clearInterval(typingTimer);isTyping=false;}
  },40);
}

// Play on choice
function choose(opt){
  if(isTyping){clearInterval(typingTimer);document.getElementById('typed-text').innerText=fullText;isTyping=false;return;}
  let msg='';
  if(opt==='ramen')msg="🍜 You chose ramen – cozy and legendary, just like you!";
  else if(opt==='bubble')msg="🧋 Sipping bubble tea – sweet, fun, and full of surprises!";
  else if(opt==='cake')msg="🍰 Strawberry cake – classic sweetness, for the sweetest person!";
  else msg="🎁 Mystery box...open to discover the next plot twist in your story!";
  typeText(msg);runConfetti();
}

// Audio control
const music=document.getElementById('bg-music');
const audioBtn=document.getElementById('audio-btn');
let playing=false;
function toggleAudio(){
  if(playing){music.pause();audioBtn.innerText="🔇";}
  else{music.play().catch(()=>{});audioBtn.innerText="🔊";}
  playing=!playing;
}

// Bubble background
const canvas=document.getElementById('bubbles');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
window.onresize=()=>{canvas.width=innerWidth;canvas.height=innerHeight;initBubbles();};

const bubbles=[];
function initBubbles(){
  bubbles.length=0;
  for(let i=0;i<60;i++){
    bubbles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,
      r:Math.random()*30+10,dy:Math.random()*0.5+0.5});
  }
}
initBubbles();
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bubbles.forEach(b=>{
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.r,0,2*Math.PI);
    ctx.fillStyle="rgba(255,255,255,0.15)";
    ctx.fill();
    b.y-=b.dy;
    if(b.y< -b.r) b.y=canvas.height+ b.r;
  });
  requestAnimationFrame(animate);
}
animate();

// Easter‑egg poem: HARU typed
let secret = '';
window.addEventListener('keydown',e=>{
  secret+=e.key.toUpperCase();
  if(secret.endsWith('HARU')){
    alert("🌸 Happy birthday, Hrum!\n\nYou're the sunshine in everyone's K‑drama life — full of warmth, heart, and unforgettable moments. I love you more than all the plot twists combined 💖");
    secret='';
  } else if(secret.length>10) secret=secret.slice(-4);
});
