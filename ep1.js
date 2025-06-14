let isTyping = false;
let typingIndex = 0;
let currentText = '';
let typingInterval;

function typeText(text) {
  const output = document.getElementById('typed-output');
  clearInterval(typingInterval);
  typingIndex = 0;
  currentText = text;
  output.innerText = '';
  isTyping = true;

  typingInterval = setInterval(() => {
    if (typingIndex < currentText.length) {
      output.innerText += currentText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
      isTyping = false;
    }
  }, 40);
}

function choose(option) {
  if (isTyping) {
    clearInterval(typingInterval);
    document.getElementById('typed-output').innerText = currentText;
    isTyping = false;
    return;
  }

  let text = '';
  if (option === 'ramen') {
    text = "🍜 You chose ramen! A classic choice — just like you: warm, comforting, and unforgettable.";
  } else if (option === 'bubbletea') {
    text = "🧋 Bubble tea? Sweet, cool, and a little bouncy — just like our friendship!";
  } else if (option === 'surprise') {
    text = "🎁 You love surprises, don’t you? There might be more hidden treasures waiting ahead!";
  }

  typeText(text);
}
