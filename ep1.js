/* ---------- THEME TOGGLE + EASTER‑EGG ---------- */
let moonClicks = 0;
function toggleTheme(){
  document.body.classList.toggle('dark');
  moonClicks++;
  if(moonClicks===2){                // 2nd click = starry night
    document.body.classList.toggle('starry');
    moonClicks = 0;
  }
}

/* ---------- SPARKLES ---------- */
tsParticles.load("sparkles",{
  fullScreen:{enable:false},
  fpsLimit:60,
  particles:{
    number:{value:45,density:{enable:true,area:900}},
    color:{value:["#ffaad4","#ffb6c1","#ffa8e0","#a189bd"]},
    opacity:{value:.8,random:{enable:true,minimumValue:.4}},
    size:{value:4,random:{enable:true,minimumValue:2}},
    move:{enable:true,speed:1,direction:"none",outModes:{default:"bounce"}}
  },
  detectRetina:true
});

/* ---------- TYPING ANIMATION ---------- */
let typingTimer, isTyping=false, fullText='';
function typeText(txt){
  clearInterval(typingTimer);
  fullText = txt;
  const out = document.getElementById('typed-text');
  out.innerText = '';
  let idx = 0;
  isTyping = true;
  typingTimer = setInterval(()=>{
    if(idx < fullText.length){
      out.innerText += fullText.charAt(idx++);
    }else{
      clearInterval(typingTimer);
      isTyping=false;
    }
  },40);
}

/* ---------- CONFETTI ---------- */
function blastConfetti(){
  confetti({particleCount:160,spread:75,origin:{y:.7},decay:.85});
}

/* ---------- CHOICE HANDLER ---------- */
function choose(opt){
  if(isTyping){                      // skip typing if clicked mid‑type
    clearInterval(typingTimer);
    document.getElementById('typed-text').innerText = fullText;
    isTyping=false; return;
  }

  let msg='';
  if(opt==='ramen'){
    msg="🍜 You chose ramen – warm, comforting, legendary (just like you).";
  }else if(opt==='bubble'){
    msg="🧋 Bubble Tea! Sweet, cool, & a little bouncy – cheers to our friendship!";
  }else if(opt==='cake'){
    msg="🍰 Strawberry cake? Classic sweetness for the sweetest person.";
  }else{
    msg="🎁 A mystery box appears… Inside is a note: 'Plot twist ahead, main character!' ✨";
  }

  typeText(msg);
  blastConfetti();
}
