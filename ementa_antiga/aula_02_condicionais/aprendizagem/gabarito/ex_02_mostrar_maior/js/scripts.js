document.querySelector('#formMaiorNumero').addEventListener('submit', function(event) {
    event.preventDefault()
    const num1 = parseFloat(document.querySelector('#num1').value)
    const num2 = parseFloat(document.querySelector('#num2').value)
    const num3 = parseFloat(document.querySelector('#num3').value)
    let resultado = ''

    if (num1 >= num2 && num1 >= num3) {
        resultado = `O maior número é ${num1}.`
    } else if (num2 >= num1 && num2 >= num3) {
        resultado = `O maior número é ${num2}.`
    } else {
        resultado = `O maior número é ${num3}.`
    }

    document.querySelector('#resultadoMaior').innerText = resultado
})