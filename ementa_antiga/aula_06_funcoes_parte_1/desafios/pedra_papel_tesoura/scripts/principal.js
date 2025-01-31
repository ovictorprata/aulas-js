function jogarPedraPapelTesoura(escolhaJogador) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

  if (escolhaJogador === escolhaComputador) {
    return `Empate! Ambos escolheram ${escolhaComputador}.`;
  }

  if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra")
  ) {
    return `Você ganhou! O computador escolheu ${escolhaComputador}.`;
  }

  return `Você perdeu! O computador escolheu ${escolhaComputador}.`;
}

document.getElementById("rpsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const resultadoRPS = document.getElementById("resultadoRPS");

  // Pega a escolha selecionada pelo usuário
  const escolhaSelecionada = document.querySelector(
    'input[name="escolha"]:checked'
  );

  if (escolhaSelecionada) {
    const escolhaJogador = escolhaSelecionada.value;
    const resultado = jogarPedraPapelTesoura(escolhaJogador);
    resultadoRPS.textContent = resultado;
  } else {
    resultadoRPS.textContent = "Por favor, selecione uma opção.";
  }
});
