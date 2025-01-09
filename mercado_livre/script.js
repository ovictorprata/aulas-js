// Função para abrir o formulário
function abrirFormulario() {
  document.getElementById("modalCadastroProduto").style.display = "block";
}

// Função para fechar o formulário
function fecharFormulario() {
  document.getElementById("modalCadastroProduto").style.display = "none";
}

// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function (evento) {
  if (evento.target == document.getElementById("modalCadastroProduto")) {
    fecharFormulario();
  }
};
