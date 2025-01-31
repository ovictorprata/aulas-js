document
  .querySelector("#formNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nota1 = parseFloat(document.querySelector("#nota1").value);
    const nota2 = parseFloat(document.querySelector("#nota2").value);
    const media = (nota1 + nota2) / 2;

    let conceito = "";
    let status = "";

    if (media >= 9.0) {
      conceito = "A";
      status = "APROVADO";
    } else if (media >= 7.5) {
      conceito = "B";
      status = "APROVADO";
    } else if (media >= 6.0) {
      conceito = "C";
      status = "APROVADO";
    } else if (media >= 4.0) {
      conceito = "D";
      status = "REPROVADO";
    } else {
      conceito = "E";
      status = "REPROVADO";
    }

    document.querySelector(
      "#notas"
    ).value = `Nota 1: ${nota1} ---- Nota 2: ${nota2}`;
    document.querySelector("#media").value = `${media.toFixed(1)}`;
    document.querySelector("#conceito").value = `${conceito}`;
    document.querySelector("#status").value = status;
  });
