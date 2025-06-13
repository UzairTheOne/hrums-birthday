
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1500);

  tsParticles.load("sparkles", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 100 },
      size: { value: 2 },
      move: { speed: 0.5 },
      color: { value: "#ff69b4" },
      opacity: { value: 0.7 },
      shape: { type: "circle" }
    }
  });
});

function runConfetti() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
}
