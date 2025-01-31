function repetirMensagem(mensagem, repeticoes) {
  let resultado = [];
  for (let i = 0; i < repeticoes; i++) {
    resultado.push(mensagem);
  }
  return resultado;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const mensagemInput = document.querySelector("#mensagem");
  const repeticoes = Number(document.querySelector("#repeticoes").value);
  const resultadoRepeticaoUl = document.querySelector("#resultadoRepeticao");
  const mensagem = mensagemInput.value.trim();
  const resultado = repetirMensagem(mensagem, repeticoes);

  // Limpar lista existente
  resultadoRepeticaoUl.innerHTML = "";

  // Adicionar novos itens de lista
  resultado.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    resultadoRepeticaoUl.appendChild(li);
  });
});
