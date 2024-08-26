document.addEventListener('DOMContentLoaded', function() {
    const userPhoto = document.getElementById('user-photo');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const button = document.querySelector('button');

    // Função para buscar um usuário aleatório
    async function fetchRandomUser() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
                throw new Error('Erro ao buscar usuário.');
            }
            const data = await response.json();
            const user = data.results[0];

            // Atualiza o conteúdo da página com os dados do usuário
            userPhoto.src = user.picture.large || '';
            userName.textContent = `${user.name.first} ${user.name.last}` || 'Nome não disponível';
            userEmail.textContent = user.email || 'Email não disponível';
        } catch (error) {
            console.error('Erro ao buscar o usuário:', error);
            alert('Erro ao buscar o usuário. Por favor, tente novamente.');
        }
    }

    // Adiciona um listener para o botão que chama a função fetchRandomUser
    button.addEventListener('click', fetchRandomUser);

    // Busca um usuário aleatório ao carregar a página pela primeira vez
    fetchRandomUser();
});

