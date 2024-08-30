let pergunta;
let respostaCorreta;

function gerarPergunta() {
  const operacoes = ["+", "-", "*", "/"];
  const operacao = operacoes[Math.floor(Math.random() * operacoes.length)];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  switch (operacao) {
    case "+":
      pergunta = `${num1} + ${num2}`;
      respostaCorreta = num1 + num2;
      break;
    case "-":
      pergunta = `${num1} - ${num2}`;
      respostaCorreta = num1 - num2;
      break;
    case "*":
      pergunta = `${num1} * ${num2}`;
      respostaCorreta = num1 * num2;
      break;
    case "/":
      pergunta = `${num1} / ${num2}`;
      respostaCorreta = num1 / num2;
      break;
  }

  document.getElementById(
    "question"
  ).textContent = `Qual é o resultado de ${pergunta}?`;
}

document.getElementById("mathForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const answerInput = document.getElementById("answer");
  const mathResult = document.getElementById("mathResult");
  const resposta = Number(answerInput.value);

  if (resposta === respostaCorreta) {
    mathResult.textContent = "Correto!";
  } else {
    mathResult.textContent = "Incorreto! Tente novamente.";
  }

  gerarPergunta();
});

// Inicializa a primeira pergunta
gerarPergunta();
