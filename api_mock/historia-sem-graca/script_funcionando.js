const historiasURL = 'https://667aa3fabd627f0dcc8fdd7b.mockapi.io/api/historia-sem-graca/historias'
const formulario = document.querySelector('#story-form')

async function carregarHistorias(){
    const res = await fetch(historiasURL)
    const historias = await res.json()
    mostrarHistorias(historias)
}

function mostrarHistorias(historias) {
    if(historias.length !== 0) {
        console.log(historias)
        const taskList = document.getElementById('story-list');
        taskList.innerHTML = '';
      historias.forEach(historia => {
        taskList.innerHTML += `
            <tr>
                <td>${historia.id}</td>
                <td>${historia.descricao}</td>
                <td>${historia.likes}</td>
                <td>
                    <button onclick="editTask(${historia.id}, '${historia.descricao}')">Editar</button>
                    <button onclick="deleteTask(${historia.id})">Deletar</button>
                </td>
            </tr>
        `;
      });
    } else {
      console.log('Nenhuma história está cadastrada ainda.')
    }
}

async function criarHistoria(descricao) {
    const likes = 0
    const httpSettings = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({descricao, likes})
    }
    await fetch(historiasURL, httpSettings)
    carregarHistorias()
}

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault()
    const id = document.querySelector('#story-id').value
    const descricao = document.querySelector('#story-descricao').value
    if(!id) {
        await criarHistoria(descricao)
    }
})

carregarHistorias()