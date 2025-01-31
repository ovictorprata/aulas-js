document.addEventListener('DOMContentLoaded', function() {
  const apiUrl = 'http://localhost:3000/stories';
  const storyForm = document.getElementById('story-form');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const storiesList = document.getElementById('stories-list');

  // Função para carregar as histórias
  function loadStories() {
      fetch(apiUrl)
          .then(function(response) {
              return response.json();
          })
          .then(function(stories) {
              displayStories(stories);
          })
          .catch(function(error) {
              console.error('Erro ao carregar histórias:', error);
          });
  }

  // Função para exibir as histórias
  function displayStories(stories) {
      storiesList.innerHTML = '';
      stories.forEach(function(story) {
          const li = document.createElement('li');
          li.dataset.id = story.id;
          li.innerHTML = `
              <strong>${story.title}</strong>
              <p>${story.content}</p>
              <button onclick="deleteStory(${story.id})">Excluir</button>
          `;
          storiesList.appendChild(li);
      });
  }

  // Função para adicionar uma história
  storyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const newStory = {
          title: titleInput.value,
          content: contentInput.value
      };
      fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newStory)
      })
      .then(function() {
          titleInput.value = '';
          contentInput.value = '';
          loadStories();
      })
      .catch(function(error) {
          console.error('Erro ao adicionar história:', error);
      });
  });

  // Função para excluir uma história
  window.deleteStory = function(id) {
      fetch(`${apiUrl}/${id}`, {
          method: 'DELETE'
      })
      .then(function() {
          loadStories();
      })
      .catch(function(error) {
          console.error('Erro ao excluir história:', error);
      });
  };

  // Carregar histórias ao iniciar a página
  loadStories();
});
