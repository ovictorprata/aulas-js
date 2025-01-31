// Função que será chamada quando o formulário for enviado
function mostrarMensagem(event) {
  event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

  // Obtém o nome do usuário a partir do campo de texto
  let nomeUsuario = document.getElementById("nome").value;

  // Exibe uma mensagem de boas-vindas
  document.getElementById("mensagem").textContent =
    "Bem-vindo, " + nomeUsuario + "!";
}

// Vinculando a função ao evento de envio do formulário
document
  .getElementById("formulario")
  .addEventListener("submit", mostrarMensagem);
