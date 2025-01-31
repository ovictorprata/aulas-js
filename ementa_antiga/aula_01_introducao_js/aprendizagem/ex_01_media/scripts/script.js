function calcularMedia() {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const media = (nota1 + nota2) / 2;
  document.getElementById(
    "resultadoMedia"
  ).innerText = `A média é ${media.toFixed(2)}`;
}
