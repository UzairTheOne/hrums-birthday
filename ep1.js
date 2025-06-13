
function choose(option) {
  const messages = [
    "You head out with your friends and find a picnic surprise — there's even your favorite drink! 🍹",
    "You turn off the lights, grab a blanket, and binge your favorite dramas. So many feels 😭💕",
    "You open the mysterious box... it’s a letter from future-you saying: 'You're doing amazing, sweetie!' 💌",
    "You sleep in. Like a queen. And you dream of cake falling from the sky. 🍰💤"
  ];

  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = '';

  const text = messages[option];
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      resultDiv.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, 30);
    }
  }
  typeChar();
}
