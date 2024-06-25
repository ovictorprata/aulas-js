url = 'https://667aa3fabd627f0dcc8fdd7b.mockapi.io/api/historia-sem-graca/historias/'

async function carregarHistorias() {
    const res = await fetch(url)
    const historias = await res.json()
    mostrarHistorias(historias)
}

async function criarHistoria(){
    const descricao = document.querySelector('#descricao').value
    try {
        const historia = {
            "descricao": descricao,
            "likes": 0
        }
        const detalhesRequisicao = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(historia)
        }
        const res = await fetch(url, detalhesRequisicao)
        carregarHistorias()
    } catch (erro) {
        console.error(erro)
    }
}

async function carregarDadosHistoriaParaEditar(id, descricao) {
    const idHistoria = document.querySelector('#id-editar')
    const descricaoSelecionada = document.querySelector('#descricao-nova')
    idHistoria.value = id
    descricaoSelecionada.value = descricao
}

async function editarHistoria(){
    const idHistoria = document.querySelector('#id-editar').value
    const descricaoNova = document.querySelector('#descricao-nova').value
    const dadosNovos = {id: idHistoria, descricao: descricaoNova}
    const detalhesRequisicao = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosNovos)
    }

    try {
        const resposta = await fetch(`${url}/${idHistoria}`, detalhesRequisicao)
        carregarHistorias()
    } catch {

    }

}

async function excluirHistoria(id) {
    const urlExcluir = `https://667aa3fabd627f0dcc8fdd7b.mockapi.io/api/historia-sem-graca/historias/${id}`
    try{
        const res = await fetch(urlExcluir, {method: "DELETE"})
        carregarHistorias()
    } catch (erro) {
        console.error(erro)
    }
}

function mostrarHistorias(historias) {
    const listaTasks = document.querySelector('#lista-historias')
    listaTasks.innerHTML = ''
    historias.forEach(historia => {
        listaTasks.innerHTML += `
        <tr>
            <td>${historia.id}</td>
            <td>${historia.descricao}</td>
            <td>${historia.likes}</td>
            <td>
                <button onclick="carregarDadosHistoriaParaEditar(${historia.id}, '${historia.descricao}')">Editar</button>
                <button onclick="excluirHistoria(${historia.id})">Excluir</button>
            </td>
        </tr>
        `
    });
}

const formAdd = document.querySelector('#form-adicionar')
formAdd.addEventListener('submit', evento => {
    evento.preventDefault()
    criarHistoria()
})

const formEditar = document.querySelector('#form-editar')
formEditar.addEventListener('submit', evento => {
    evento.preventDefault()
    editarHistoria()
})

carregarHistorias()