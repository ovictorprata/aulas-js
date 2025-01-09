// Exemplo de código para adicionar tarefa
const botaoAdicionar = document.querySelector("#adicionar");
const lista = document.querySelector("#lista-tarefas");

botaoAdicionar.addEventListener("click", () => {
  const novaTarefa = document.createElement("li"); // Cria novo <li>
  novaTarefa.textContent = `Nova Tarefa`; // Define o texto
  lista.appendChild(novaTarefa); // Adiciona à lista
});

// Exemplo de código para remover última tarefa
const botaoRemover = document.querySelector("#remover");

botaoRemover.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("#lista-tarefas li"); // Pega todos os <li> da lista
  if (tarefas.length > 0) {
    lista.removeChild(tarefas[tarefas.length - 1]); // Remove o último <li>
  }
});

// Exemplo de código para limpar lista
const botaoLimpar = document.querySelector("#limpar");

botaoLimpar.addEventListener("click", () => {
  lista.innerHTML = ""; // Remove todos os <li>
});
