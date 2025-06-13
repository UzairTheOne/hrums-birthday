
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("preloader").classList.add("hidden");

  tsParticles.load("sparkles", {
    particles: {
      number: { value: 50 },
      size: { value: 2 },
      color: { value: "#ffb6c1" },
      move: { enable: true, speed: 0.8 },
      shape: { type: "circle" },
    },
    interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
    fullScreen: { enable: false }
  });
});

window.runConfetti = function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};
