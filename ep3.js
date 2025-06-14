/* Sparkles */
tsParticles.load("sparkles",{
  fullScreen:{enable:false},detectRetina:true,
  particles:{number:{value:40,density:{enable:true,area:900}},
  color:{value:["#ffaad4","#ffa8e0","#a189bd","#fff3b0"]},
  opacity:{value:.8,random:{enable:true,minimumValue:.4}},
  size:{value:4,random:{enable:true,minimumValue:2}},
  move:{enable:true,speed:1,outModes:{default:"bounce"}}}
});

/* Theme toggle */
let moon=0;
function toggleTheme(){
  document.body.classList.toggle('dark');document.documentElement.classList.toggle('dark');
  moon++;if(moon===2){document.body.classList.toggle('starry');document.documentElement.classList.toggle('starry');moon=0;}
}

/* Flip logic & confetti hearts */
document.querySelectorAll('.flip').forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('flip-active'));
  card.addEventListener('dblclick',()=>confetti({particleCount:120,spread:70,shapes:['heart'],scalar:1.2,origin:{y:.6}}));
});

/* Secret poem */
function revealPoem(){
  alert("💌 Hidden Poem 💌\\n\\nTen things could never be enough,\\nYour smile, your care, your goofy stuff.\\nSo peek behind each pastel hue,\\nAnd feel how much I cherish you.");
}

/* no extra JS needed for grid */
