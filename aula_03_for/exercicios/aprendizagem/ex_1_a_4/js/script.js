document.getElementById('btn1').addEventListener('click', exercise1);
document.getElementById('btn2').addEventListener('click', exercise2);
document.getElementById('btn3').addEventListener('click', exercise3);
document.getElementById('btn4').addEventListener('click', exercise4);

// Exercício 1: Mostrar todos os números inteiros de 1 a n
function exercise1() {
    const input = document.getElementById('input1').value;
    const resultDiv = document.getElementById('result1');
    let result = '';

    for (let i = 1; i <= input; i++) {
        result += `${i}<br>`;
    }

    resultDiv.innerHTML = result;
}

// Exercício 2: Imprimir os quadrados dos próximos 10 números a partir do número digitado
function exercise2() {
    const number = parseInt(document.getElementById('input2').value);
    const resultDiv = document.getElementById('result2');
    let result = '';

    for (let i = number; i < number + 10; i++) {
        result += `${i * i}<br>`;
    }

    resultDiv.innerHTML = result;
}

// Exercício 3: Substituir letras a, b e c por asteriscos
function exercise3() {
    const input = document.getElementById('input3').value;
    const resultDiv = document.getElementById('result3');
    let result = '';

    for (const char of input) {
        if (char === 'a' || char === 'b' || char === 'c') {
            result += '*';
        } else {
            result += char;
        }
    }

    resultDiv.innerHTML = `String com substituição: ${result}`;
}

// Exercício 4: Imprimir cada palavra da frase em uma linha separada se a frase termina com ., ? ou !
function exercise4() {
    const input = document.getElementById('input4').value;
    const resultDiv = document.getElementById('result4');
    let result = '';

    // Verificar se a frase termina com ., ? ou !
    let endsWithValidChar = false;
    for (const char of input) {
        if (char === '?' || char === '.' || char === '!') {
            endsWithValidChar = true;
        }
    }

    if (endsWithValidChar) {
        // Imprimir cada palavra em uma linha separada
        let word = '';
        for (const char of input) {
            if (char === ' ' || char === '.' || char === '?' || char === '!') {
                if (word.length > 0) {
                    result += word + '<br>';
                    word = '';
                }
            } else {
                word += char;
            }
        }
        if (word.length > 0) {
            result += word + '<br>';
        }
    } else {
        result = 'A frase deve terminar com ., ? ou !';
    }

    resultDiv.innerHTML = result;
}
