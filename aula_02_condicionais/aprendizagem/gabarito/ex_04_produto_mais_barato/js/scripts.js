document.querySelector('#formProdutoBarato').addEventListener('submit', function(event) {
    event.preventDefault()
    const preco1 = parseFloat(document.querySelector('#preco1').value)
    const preco2 = parseFloat(document.querySelector('#preco2').value)
    const preco3 = parseFloat(document.querySelector('#preco3').value)
    let resultado = ''

    if (preco1 <= preco2 && preco1 <= preco3) {
        resultado = `O primeiro produto é o mais barato com R$ ${preco1.toFixed(2)}.`
    } else if (preco2 <= preco1 && preco2 <= preco3) {
        resultado = `O segundo produto é o mais barato com R$ ${preco2.toFixed(2)}.`
    } else {
        resultado = `O terceiro produto é o mais barato com R$ ${preco3.toFixed(2)}.`
    }

    document.querySelector('#resultadoProduto').innerText = resultado
})