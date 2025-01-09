function mostrarNomeCompleto() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const nomeCompleto = nome + " " + sobrenome;
  document.getElementById(
    "resultadoNomeCompleto"
  ).innerText = `Seu nome completo é: ${nomeCompleto}`;
}
