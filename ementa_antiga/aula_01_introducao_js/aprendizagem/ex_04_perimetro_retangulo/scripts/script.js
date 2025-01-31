function calcularPerimetro() {
  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = 2 * (largura + altura);
  document.getElementById(
    "resultadoPerimetro"
  ).innerText = `O perímetro é ${resultado}`;
}
