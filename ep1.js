let typingIndex = 0;
let typingText = '';
let typingInterval;
let isTyping = false;

function typeText(text) {
  const textElement = document.getElementById('result-text');
  clearInterval(typingInterval);
  typingText = text;
  typingIndex = 0;
  textElement.innerText = '';
  isTyping = true;

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      textElement.innerText += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
      isTyping = false;
    }
  }, 40);
}

function chooseOption(option) {
  if (isTyping) {
    clearInterval(typingInterval);
    document.getElementById('result-text').innerText = typingText;
    isTyping = false;
    return;
  }

  if (option === 'coffee') {
    typeText("☕ You chose coffee — the fuel of legends!");
  } else if (option === 'juice') {
    typeText("🍹 You chose your favorite drink! Refreshing!");
  } else {
    typeText("🌟 A surprise? You're full of mystery and sparkle!");
  }
}
