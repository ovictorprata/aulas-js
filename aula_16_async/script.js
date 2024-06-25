const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Função para buscar todas as tarefas
async function fetchTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();
    displayTasks(tasks);
}

// Função para exibir tarefas na tabela
function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        taskList.innerHTML += `
            <tr>
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>
                    <button onclick="editTask(${task.id}, '${task.title}')">Editar</button>
                    <button onclick="deleteTask(${task.id})">Deletar</button>
                </td>
            </tr>
        `;
    });
}

// Função para criar uma nova tarefa
async function createTask(title) {
    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, userId: 1, completed: false })
    });
    fetchTasks();
}

// Função para atualizar uma tarefa
async function updateTask(id, title) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, userId: 1, completed: false })
    });
    fetchTasks();
}

// Função para deletar uma tarefa
async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    fetchTasks();
}

// Função para preencher o formulário com os dados da tarefa a ser editada
function editTask(id, title) {
    document.getElementById('task-id').value = id;
    document.getElementById('task-title').value = title;
}

// Evento do formulário para salvar a tarefa
document.getElementById('task-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const id = document.getElementById('task-id').value;
    const title = document.getElementById('task-title').value;
    if (id) {
        await updateTask(id, title);
    } else {
        await createTask(title);
    }
    document.getElementById('task-form').reset();
    fetchTasks();
});

// Carregar as tarefas ao iniciar a página
fetchTasks();
