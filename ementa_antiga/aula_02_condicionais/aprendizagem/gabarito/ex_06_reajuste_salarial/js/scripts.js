document.querySelector('#formSalario').addEventListener('submit', function(event) {
    event.preventDefault()
    const salarioAtual = parseFloat(document.querySelector('#salario').value)
    let percentual = 0
    let aumento = 0
    let novoSalario = 0

    if (salarioAtual <= 280) {
        percentual = 20
    } else if (salarioAtual <= 700) {
        percentual = 15
    } else if (salarioAtual <= 1500) {
        percentual = 10
    } else {
        percentual = 5
    }

    aumento = salarioAtual * (percentual / 100)
    novoSalario = salarioAtual + aumento

    const resultado = `
        Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}<br>
        Percentual de aumento aplicado: ${percentual}%<br>
        Valor do aumento: R$ ${aumento.toFixed(2)}<br>
        Novo salário, após o aumento: R$ ${novoSalario.toFixed(2)}
    `

    document.querySelector('#resultadoSalario').innerHTML = resultado
})