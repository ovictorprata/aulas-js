function saudacao(nome) {
  let mensagem;
  if (nome) {
    mensagem = "Bem-vindo, " + nome + "!";
  } else {
    mensagem = "Bem-vindo à aula de JavaScript!";
  }
  return mensagem;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  const mensagemInput = document.querySelector("#mensagem");
  mensagemInput.innerHTML = saudacao(nome);
});
