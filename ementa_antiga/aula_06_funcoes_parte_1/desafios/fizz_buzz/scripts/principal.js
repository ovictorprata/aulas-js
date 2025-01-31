// Inicializa o número atual
let numeroAtual = 1;

function calcularFizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero.toString();
  }
}

document.getElementById("fizzBuzzForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const userInput = document.getElementById("userInput");
  const fizzBuzzResult = document.getElementById("fizzBuzzResult");

  // Calcula o resultado esperado para o número atual
  const resultadoEsperado = calcularFizzBuzz(numeroAtual);

  if (
    userInput.value.trim().toLowerCase() === resultadoEsperado.toLowerCase()
  ) {
    // Se o jogador acertar e o número atual for 35, exibe a mensagem de vitória
    if (numeroAtual === 35) {
      fizzBuzzResult.textContent = "Parabéns, você ganhou!";
    } else {
      // Caso contrário, incrementa o número atual e exibe o próximo número
      numeroAtual++;
      document.getElementById("number").value = numeroAtual;
      fizzBuzzResult.textContent =
        "Resposta correta! O próximo número é " + numeroAtual;
    }
  } else {
    fizzBuzzResult.textContent = "Resposta incorreta. Tente novamente.";
  }

  // Limpa o campo de entrada após a verificação
  userInput.value = "";
});
