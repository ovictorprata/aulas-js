// Exercício 1: Imprimir a frase digitada pelo usuário 5 vezes
function exercise1() {
    const input = document.getElementById('input1').value;
    const resultDiv = document.getElementById('result1');
    let result = '';

    for (let i = 0; i < 5; i++) {
        result += `${input}<br>`;
    }

    resultDiv.innerHTML = result;
}

// Exercício 2: Imprimir a tabuada do número fornecido
function exercise2() {
    const number = document.getElementById('input2').value;
    const resultDiv = document.getElementById('result2');
    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`;
    }

    resultDiv.innerHTML = result;
}

// Exercício 3: Imprimir cada caractere da string em uma linha separada
function exercise3() {
    const input = document.getElementById('input3').value;
    const resultDiv = document.getElementById('result3');
    let result = '';

    for (const char of input) {
        result += `${char}<br>`;
    }

    resultDiv.innerHTML = result;
}

// Exercício 4: Contar o número de vogais na string fornecida
function exercise4() {
    const input = document.getElementById('input4').value || ''; // Garantir que input não seja null ou undefined
    const resultDiv = document.getElementById('result4');
    let count = 0;

    for (const char of input) {
        // Verifica se o caractere é uma vogal
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }

    resultDiv.innerHTML = `Total de vogais: ${count}`;
}


// Exercício 5: Contar quantas vezes uma letra específica ocorre em uma string
function exercise5() {
    const stringInput = document.getElementById('input5').value;
    const letterInput = document.getElementById('letter').value;
    const resultDiv = document.getElementById('result5');
    let count = 0;

    if (letterInput.length === 1) {
        for (const char of stringInput) {
            if (char === letterInput) {
                count++;
            }
        }
        resultDiv.innerHTML = `A letra '${letterInput}' ocorre ${count} vez(es) na string.`;
    } else {
        resultDiv.innerHTML = 'Por favor, insira apenas uma letra.';
    }
}

// Adicionando event listeners aos botões
document.getElementById('btn1').addEventListener('click', exercise1);
document.getElementById('btn2').addEventListener('click', exercise2);
document.getElementById('btn3').addEventListener('click', exercise3);
document.getElementById('btn4').addEventListener('click', exercise4);
document.getElementById('btn5').addEventListener('click', exercise5);
