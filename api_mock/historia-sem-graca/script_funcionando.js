const historiasURL = 'https://667aa3fabd627f0dcc8fdd7b.mockapi.io/api/historia-sem-graca/historias'

async function carregarHistorias(){
  const res = await fetch(historiasURL)
  const historias = await res.json()
  mostrarHistorias(historias)
}

function mostrarHistorias(historias) {
    if(historias) {
      historias.forEach(historia => {
        console.log(historia)
      });
    }
}