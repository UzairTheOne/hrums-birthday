/* Sparkles */
tsParticles.load("sparkles",{
  fullScreen:{enable:false},detectRetina:true,
  particles:{number:{value:40,density:{enable:true,area:900}},
    color:{value:["#ffaad4","#ffa8e0","#a189bd","#fff3b0"]},
    opacity:{value:.8,random:{enable:true,minimumValue:.4}},
    size:{value:4,random:{enable:true,minimumValue:2}},
    move:{enable:true,speed:1,outModes:{default:"bounce"}}}
});

/* Theme toggle (affects html & body) */
function toggleTheme(){
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');
  if(document.body.classList.contains('starry')){
    document.body.classList.remove('starry');document.documentElement.classList.remove('starry');
  }else if(document.body.classList.toggle('starryPending')){
    // second click becomes starry
    setTimeout(()=>{document.body.classList.remove('starryPending')},350);
  }else if(document.body.classList.contains('dark')){
    // second click while dark -> starry
    document.body.classList.add('starry');document.documentElement.classList.add('starry');
  }
}

/* Typing & Confetti */
let typingTimer,isTyping=false,fullTxt='';
function typeText(txt){
  clearInterval(typingTimer);fullTxt=txt;
  const out=document.getElementById('typed-text');out.innerText='';let i=0;isTyping=true;
  typingTimer=setInterval(()=>{if(i<fullTxt.length){out.innerText+=fullTxt.charAt(i++)}
    else{clearInterval(typingTimer);isTyping=false;}},38);
}
function confettiBlast(){
  confetti({particleCount:160,spread:80,origin:{y:.7},decay:.85});
}
function choose(opt){
  if(isTyping){clearInterval(typingTimer);document.getElementById('typed-text').innerText=fullTxt;isTyping=false;return;}
  const msgs={
    ramen:"🍜 You chose ramen – legendary comfort food!",
    bubble:"🧋 Bubble tea – sweet, cool, totally you!",
    cake:"🍰 Strawberry cake – classic perfection!",
    surprise:"🎁 Mystery box… what’s inside? Only fate knows!"
  };
  typeText(msgs[opt]);confettiBlast();
}

/* Audio */
const music=document.getElementById('bgMusic'),btn=document.getElementById('audioBtn');let playing=false;
function toggleAudio(){playing?(music.pause(),btn.innerText='🔇'):(music.play().catch(()=>{}),btn.innerText='🔊');playing=!playing;}
