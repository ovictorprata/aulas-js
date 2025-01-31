const formCarro = document.querySelector('#formCarro').

formCarro.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const img = document.querySelector('img')
    const anos = Number(document.querySelector('#anos').value)
    let resultado = ''

    if (anos > 3) {
        resultado = 'O carro é velho.'
        img.src = './carro-velho.jpg'
    } else if (anos <= 5) {
        resultado = 'O carro é semi-novo.'
        img.src = './carro-semi-novo.jpeg'
    } else {
        resultado = 'O carro é novo.'
        img.src = './carro-novo.jpeg'
    }
    img.style.display = 'block'

    document.querySelector('#resultadoCarro').innerText = resultado
})