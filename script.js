/* --------- PRELOADER --------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1200);

  /* --------- Sparkles --------- */
  tsParticles.load("sparkles", {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ["#ffaad4", "#a189bd", "#93f0ff", "#fff3b0"] },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: { enable: true, minimumValue: 0.4 } },
      size: { value: 4, random: { enable: true, minimumValue: 2 } },
      move: { enable: true, speed: 0.9, outModes: { default: "bounce" } }
    },
    detectRetina: true
  });
});

/* --------- Confetti --------- */
window.runConfetti = function () {
  confetti({
    particleCount: 160,
    spread: 80,
    origin: { y: 0.6 },
    decay: 0.8
  });
};

/* --------- Theme + Easter Egg --------- */
let moonClicks = 0;
window.toggleTheme = function () {
  document.body.classList.toggle("dark");
  moonClicks++;
  if (moonClicks === 2) {               // second click -> starry mode
    document.body.classList.toggle("starry");
    moonClicks = 0;
  }
};
