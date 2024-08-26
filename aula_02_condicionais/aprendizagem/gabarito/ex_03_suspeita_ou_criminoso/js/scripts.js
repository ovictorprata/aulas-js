document.querySelector('#formCrime').addEventListener('submit', function(event) {
    event.preventDefault()

    // Obtém o valor dos radiobuttons selecionados individualmente
    const telefone = document.querySelector('input[name="telefone"]:checked')?.value
    const local = document.querySelector('input[name="local"]:checked')?.value
    const mora = document.querySelector('input[name="mora"]:checked')?.value
    const devia = document.querySelector('input[name="devia"]:checked')?.value
    const trabalhou = document.querySelector('input[name="trabalhou"]:checked')?.value

    // Conta quantos 'sim' foram selecionados
    let countSim = 0
    if (telefone === 'sim') countSim++
    if (local === 'sim') countSim++
    if (mora === 'sim') countSim++
    if (devia === 'sim') countSim++
    if (trabalhou === 'sim') countSim++

    let resultado
    if (countSim === 5) {
        resultado = 'Assassino'
    } else if (countSim >= 3) {
        resultado = 'Cúmplice'
    } else if (countSim === 2) {
        resultado = 'Suspeita'
    } else {
        resultado = 'Inocente'
    }

    document.querySelector('#resultadoCrime').innerText = resultado
})
