async function carregarAlunos() {
  const resposta = await fetch("https://api.exemplo.com/alunos"); // Substitua pela URL real
  alunos = await resposta.json();
  renderizarLista();
}

function renderizarLista() {
  const ul = document.getElementById("studentList");
  ul.innerHTML = "";
  alunos.forEach((aluno) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>ID:</strong> ${aluno.id} <br>
            <strong>Nome:</strong> ${aluno.nome} <br>
            <strong>Idade:</strong> ${aluno.idade}
            <button onclick="editarAluno(${aluno.id})">Editar</button>
            <button onclick="deletarAluno(${aluno.id})">Deletar</button>
        `;
    ul.appendChild(li);
  });
}
