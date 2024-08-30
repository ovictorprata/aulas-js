const numeroSecreto = Math.floor(Math.random() * 20) + 1;

document.getElementById("guessForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const guessInput = document.getElementById("guess");
  const feedback = document.getElementById("feedback");
  const palpite = Number(guessInput.value);

  if (palpite === numeroSecreto) {
    feedback.textContent = "Parabéns! Você acertou!";
  } else if (palpite < numeroSecreto) {
    feedback.textContent = "Muito baixo! Tente novamente.";
  } else if (palpite > numeroSecreto) {
    feedback.textContent = "Muito alto! Tente novamente.";
  }
});
