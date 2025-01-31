// Função para o Exercício 6: Encontrar a primeira consoante em uma palavra
function exercise6() {
    const input = document.getElementById('input6').value
    const resultDiv = document.getElementById('result6')
    let firstConsonant = ''

    for (const char of input) {
        const isNotVowel =
            (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        
        if (!isNotVowel) {
            firstConsonant = char
            break
        }
    }

    if (firstConsonant) {
        resultDiv.innerHTML = `A primeira consoante é: ${firstConsonant}`
    } else {
        resultDiv.innerHTML = 'Nenhuma consoante encontrada.'
    }
}


// Função para o Exercício 7: Imprimir todos os caracteres, exceto as vogais
function exercise7() {
    const input = document.getElementById('input7').value
    const resultDiv = document.getElementById('result7')
    const vowels = 'aeiouAEIOU'
    let result = ''

    for (const char of input) {
        // Verificar se o caractere não é uma vogal
        const isNotVowel =
            char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' 
        
        if (isNotVowel) {
            result += char
        }
    }

    resultDiv.innerHTML = result
}


// Função para o Exercício 8: Imprimir todos os múltiplos de um número entre 1 e 20
function exercise8() {
    const input = document.getElementById('input8').value
    const resultDiv = document.getElementById('result8')
    const number = Number(input)
    let result = ''

    if (isNaN(number) || number <= 0) {
        resultDiv.innerHTML = 'Por favor, digite um número positivo.'
        return
    }

    for (let i = 1; i <= 20; i++) {
        if (i % number !== 0) {
            continue
        }
        result += `${i}<br>`
    }

    resultDiv.innerHTML = result || 'Nenhum múltiplo encontrado.'
}

// Adicionando event listeners para os botões
document.getElementById('btn6').addEventListener('click', exercise6)
document.getElementById('btn7').addEventListener('click', exercise7)
document.getElementById('btn8').addEventListener('click', exercise8)
