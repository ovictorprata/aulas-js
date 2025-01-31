document
  .querySelector("#formSaque")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = Number(document.querySelector("#valor").value, 10);

    if (valor < 10 || valor > 600) {
      alert("O valor deve estar entre 10 e 600 reais.");
      return;
    }

    let restante = valor;

    // Calcula o número de notas de cada valor
    let notas100 = Math.floor(restante / 100);
    restante %= 100;

    let notas50 = Math.floor(restante / 50);
    restante %= 50;

    let notas10 = Math.floor(restante / 10);
    restante %= 10;

    let notas5 = Math.floor(restante / 5);
    restante %= 5;

    let notas1 = restante;

    // Exibe o resultado
    const resultadoNotas = `
      R$ 100: ${notas100} nota(s)<br>
      R$ 50: ${notas50} nota(s)<br>
      R$ 10: ${notas10} nota(s)<br>
      R$ 5: ${notas5} nota(s)<br>
      R$ 1: ${notas1} nota(s)
  `;
    document.querySelector("#resultadoNotas").innerHTML = resultadoNotas;
  });
