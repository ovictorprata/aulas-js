document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const pokemonNumberInput = document.getElementById('pokemon-number');
    const nameInput = document.getElementById('name');
    const typeInput = document.getElementById('type');
    const numberReadonlyInput = document.getElementById('numberReadonly');
    const imageElement = document.getElementById('image');

    button.addEventListener('click', async function() {
        const pokemonIdOrName = pokemonNumberInput.value.trim().toLowerCase();

        if (pokemonIdOrName) {
            try {
                const data = await fetchPokemon(pokemonIdOrName);

                if (data) {
                    nameInput.value = data.name || '';
                    typeInput.value = data.types.map(typeInfo => typeInfo.type.name).join(', ') || '';
                    numberReadonlyInput.value = data.id || '';
                    imageElement.src = data.sprites.front_default || '';
                } else {
                    alert('Pokémon não encontrado.');
                    limparCampos();
                }
            } catch (error) {
                console.error('Erro ao consultar o Pokémon:', error);
                alert('Erro ao consultar o Pokémon. Por favor, tente novamente.');
                limparCampos();
            }
        } else {
            alert('Por favor, digite um número ou nome do Pokémon.');
            limparCampos();
        }
    });

    async function fetchPokemon(idOrName) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        if (!response.ok) {
            throw new Error('Pokémon não encontrado.');
        }
        return response.json();
    }

    function limparCampos() {
        nameInput.value = '';
        typeInput.value = '';
        numberReadonlyInput.value = '';
        imageElement.src = '';
    }
});

