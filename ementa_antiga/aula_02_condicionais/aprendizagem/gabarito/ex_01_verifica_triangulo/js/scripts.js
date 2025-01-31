document.querySelector('#formTriangulo').addEventListener('submit', function(event) {
    event.preventDefault()
    const lado1 = Number(document.querySelector('#lado1').value)
    const lado2 = Number(document.querySelector('#lado2').value)
    const lado3 = Number(document.querySelector('#lado3').value)
    let resultado = ''

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        resultado = 'Lados devem ser positivos!'
    } else if (lado1 === lado2 && lado2 === lado3) {
        resultado = 'O triângulo é Equilátero.'
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        resultado = 'O triângulo é Isósceles.'
    } else {
        resultado = 'O triângulo é Escaleno.'
    }

    document.querySelector('#resultadoTriangulo').innerText = resultado
})