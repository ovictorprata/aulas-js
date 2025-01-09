function calcularIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = peso / Math.pow(altura, 2);
  document.getElementById(
    "resultadoIMC"
  ).innerText = `O IMC é ${resultado.toFixed(2)}`;
}
