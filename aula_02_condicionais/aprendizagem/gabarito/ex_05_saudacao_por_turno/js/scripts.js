document.querySelector('#formTurno').addEventListener('submit', function(event) {
    console.log('oi')
    event.preventDefault()
    const turno = document.querySelector('#turno').value
    let saudacao = ''

    switch(turno) {
        case 'M':
            saudacao = 'Bom Dia!'
            break
        case 'V':
            saudacao = 'Boa Tarde!'
            break
        case 'N':
            saudacao = 'Boa Noite!'
            break
        default:
            saudacao = 'Valor Inválido!'
    }

    document.querySelector('#resultadoTurno').innerText = saudacao
})