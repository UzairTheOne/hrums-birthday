function openGift(index) {
  document.querySelectorAll('.message-box').forEach((box, i) => {
    box.style.display = (i === index) ? 'block' : 'none';
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function revealEasterEgg() {
  const gift = document.getElementById('easterGift');
  gift.classList.remove('hidden');
  gift.scrollIntoView({ behavior: "smooth" });
  gift.style.animation = "pop 0.5s ease";
}

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

