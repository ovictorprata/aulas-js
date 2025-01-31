document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cep-form');
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const bairroInput = document.getElementById('bairro');
    const localidadeInput = document.getElementById('localidade');
    const ufInput = document.getElementById('uf');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const cep = cepInput.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        if (cep.length === 8) {
            try {
                const data = await buscarCep(cep);
                if (data.erro) {
                    alert('CEP não encontrado.');
                    limparCampos();
                } else {
                    logradouroInput.value = data.logradouro || '';
                    bairroInput.value = data.bairro || '';
                    localidadeInput.value = data.localidade || '';
                    ufInput.value = data.uf || '';
                }
            } catch (error) {
                console.error('Erro ao consultar o CEP:', error);
                alert('Erro ao consultar o CEP. Por favor, tente novamente.');
                limparCampos();
            }
        } else {
            alert('CEP inválido. O CEP deve ter 8 dígitos.');
            limparCampos();
        }
    });

    async function buscarCep(cep) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return response.json();
    }

    function limparCampos() {
        logradouroInput.value = '';
        bairroInput.value = '';
        localidadeInput.value = '';
        ufInput.value = '';
    }
});

