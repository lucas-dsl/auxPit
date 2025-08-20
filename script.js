let timer;
let helpButton = document.getElementById('help-button');
let helpShown = false;

function showHelpButton() {
  if (!helpShown) {
    helpButton.style.display = 'block';
    helpShown = true; // só mostra uma vez
  }
}

function resetTimer() {
  if (!helpShown) {
    clearTimeout(timer);
    timer = setTimeout(showHelpButton, 2000);
  }
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

resetTimer(); // inicializa o timer
