/* ---------- THEME TOGGLE + EASTER‑EGG ---------- */
let moonClicks = 0;
function toggleTheme(){
  document.body.classList.toggle('dark');
  moonClicks++;
  if(moonClicks===2){
    document.body.classList.toggle('starry');
    moonClicks = 0;
  }
}

/* ---------- PRELOADER (only exists on home) ---------- */
window.addEventListener("load",()=>{
  const pre=document.getElementById('preloader');
  if(pre){setTimeout(()=>pre.style.display="none",1200);}
});

/* ---------- SPARKLES ---------- */
tsParticles.load("sparkles",{
  fullScreen:{enable:false},
  particles:{
    number:{value:45,density:{enable:true,area:900}},
    color:{value:["#ffaad4","#ffb6c1","#ffa8e0","#a189bd"]},
    opacity:{value:.8,random:{enable:true,minimumValue:.4}},
    size:{value:4,random:{enable:true,minimumValue:2}},
    move:{enable:true,speed:1,outModes:{default:"bounce"}}
  },
  detectRetina:true
});

/* ---------- CONFETTI (home & ep1) ---------- */
function runConfetti(){
  confetti({particleCount:180,spread:80,origin:{y:.7},decay:.85});
}

/* ---------- EP1 TYPING & CHOICE ---------- */
let typingTimer,isTyping=false,fullText='';
function typeText(txt){
  const out=document.getElementById('typed-text');
  if(!out)return;                 // not on this page
  clearInterval(typingTimer);
  fullText=txt;out.innerText='';let i=0;isTyping=true;
  typingTimer=setInterval(()=>{if(i<fullText.length){out.innerText+=fullText.charAt(i++);}else{clearInterval(typingTimer);isTyping=false;}},40);
}
function choose(opt){
  if(isTyping){clearInterval(typingTimer);document.getElementById('typed-text').innerText=fullText;isTyping=false;return;}
  let msg='';
  if(opt==='ramen'){msg="🍜 You chose ramen – warm, comforting, legendary (just like you).";}
  else if(opt==='bubble'){msg="🧋 Bubble Tea! Sweet, cool, and a little bouncy – cheers to our friendship!";}
  else if(opt==='cake'){msg="🍰 Strawberry cake? Classic sweetness for the sweetest person.";}
  else {msg="🎁 A mystery box appears… Inside is a note: 'Plot twist ahead, main character!' ✨";}
  typeText(msg);runConfetti();
}
