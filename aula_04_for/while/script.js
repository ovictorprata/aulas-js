let score1 = 0;
let score2 = 0;
let gameActive = false;

const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const winnerDisplay = document.getElementById("winner");
const startButton = document.getElementById("startButton");

function startGame() {
  score1 = 0;
  score2 = 0;
  gameActive = true;
  score1Display.textContent = score1;
  score2Display.textContent = score2;
  winnerDisplay.textContent = "";
  startButton.disabled = true;
  setTimeout(endGame, 10000); // Jogo dura 10 segundos
}

function endGame() {
  gameActive = false;
  startButton.disabled = false;
  if (score1 > score2) {
    winnerDisplay.textContent = "Jogador 1 Venceu!";
  } else if (score2 > score1) {
    winnerDisplay.textContent = "Jogador 2 Venceu!";
  } else {
    winnerDisplay.textContent = "Empate!";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    score1++;
    score1Display.textContent = score1;
  } else if (event.key === "k" || event.key === "K") {
    score2++;
    score2Display.textContent = score2;
  }
});

startButton.addEventListener("click", startGame);
