const url = 'https://667aa3fabd627f0dcc8fdd7b.mockapi.io/api/historia-sem-graca/historias/';

async function carregarHistorias() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Erro ao carregar histórias');
        const historias = await res.json();
        mostrarHistorias(historias);
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Não foi possível carregar as histórias');
    }
}

async function criarHistoria() {
    const inputDescricao = document.querySelector('#descricao');
    let descricao = inputDescricao.value;

    const historia = {
        descricao,
        likes: 0
    };

    const detalhesRequisicao = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historia)
    };

    try {
        const res = await fetch(url, detalhesRequisicao);
        if (!res.ok) throw new Error('Erro ao criar história');
        alert('História adicionada com sucesso');
        carregarHistorias();
        inputDescricao.value = '';
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Não foi possível adicionar a história');
    }
}

function carregarDadosHistoriaParaEditar(id, descricao) {
    const idHistoria = document.querySelector('#id-editar');
    const descricaoSelecionada = document.querySelector('#descricao-nova');
    idHistoria.value = id;
    descricaoSelecionada.value = descricao;
}

async function editarHistoria() {
    const idHistoria = document.querySelector('#id-editar').value;
    const descricaoNova = document.querySelector('#descricao-nova').value;
    const dadosNovos = { descricao: descricaoNova };

    const detalhesRequisicao = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosNovos)
    };

    try {
        const res = await fetch(`${url}/${idHistoria}`, detalhesRequisicao);
        if (!res.ok) throw new Error('Erro ao editar história');
        alert('História editada com sucesso');
        carregarHistorias();
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Não foi possível editar a história');
    }
}

async function excluirHistoria(id) {
    try {
        const res = await fetch(`${url}/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Erro ao excluir história');
        alert('História excluída com sucesso');
        carregarHistorias();
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Não foi possível excluir a história');
    }
}

function mostrarHistorias(historias) {
    const listaTasks = document.querySelector('#lista-historias');
    listaTasks.innerHTML = '';

    historias.forEach(historia => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = historia.id;

        const tdDescricao = document.createElement('td');
        tdDescricao.textContent = historia.descricao;

        const tdLikes = document.createElement('td');
        tdLikes.textContent = historia.likes;

        const tdAcoes = document.createElement('td');

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => carregarDadosHistoriaParaEditar(historia.id, historia.descricao);
        btnEditar.classList.add('btn', 'btn-primary', 'btn-sm');

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirHistoria(historia.id);
        btnExcluir.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');

        tdAcoes.appendChild(btnEditar);
        tdAcoes.appendChild(btnExcluir);

        tr.appendChild(tdId);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdLikes);
        tr.appendChild(tdAcoes);

        listaTasks.appendChild(tr);
    });
}

document.querySelector('#form-adicionar').addEventListener('submit', evento => {
    evento.preventDefault();
    criarHistoria();
});

document.querySelector('#form-editar').addEventListener('submit', evento => {
    evento.preventDefault();
    editarHistoria();
});

carregarHistorias();
