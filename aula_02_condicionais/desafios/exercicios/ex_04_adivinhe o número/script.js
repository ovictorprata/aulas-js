document.addEventListener("DOMContentLoaded", function () {
  const guessForm = document.getElementById("guessForm");
  const guessInput = document.getElementById("guessInput");
  const resultMessage = document.getElementById("resultMessage");

  const secretNumber = Math.floor(Math.random() * 100) + 1;

  guessForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userGuess = parseInt(guessInput.value, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      resultMessage.textContent =
        "Por favor, digite um número válido entre 1 e 100.";
      resultMessage.style.color = "red";
      return;
    }

    if (userGuess === secretNumber) {
      resultMessage.textContent = "Parabéns! Você adivinhou o número correto!";
      resultMessage.style.color = "green";
    } else if (userGuess < secretNumber) {
      resultMessage.textContent = "Tente um número maior.";
      resultMessage.style.color = "blue";
    } else {
      resultMessage.textContent = "Tente um número menor.";
      resultMessage.style.color = "blue";
    }

    guessInput.value = "";
  });
});
