let timer;
let helpButton = document.getElementById('help-button');
let chatbotContainer = document.getElementById('chatbot-container');
let helpShown = false;

function showHelpButton() {
  if (!helpShown) {
    helpButton.style.display = 'block';
    helpShown = true; // só aparece uma vez
  }
}

function resetTimer() {
  if (!helpShown) {
    clearTimeout(timer);
    timer = setTimeout(showHelpButton, 4000);
  }
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
resetTimer();

// Alternar chatbot ao clicar no botão
helpButton.addEventListener('click', () => {
  if (chatbotContainer.style.display === 'block') {
    chatbotContainer.style.display = 'none';
  } else {
    chatbotContainer.style.display = 'block';
  }
});
