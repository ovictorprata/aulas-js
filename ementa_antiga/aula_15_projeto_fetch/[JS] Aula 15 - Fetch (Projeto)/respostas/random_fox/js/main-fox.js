function fetchRandomFox() {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fox-photo').src = data.image;
        })
        .catch(error => console.error('Erro ao buscar raposa:', error));
}

// Fetch an initial fox on page load
fetchRandomFox();