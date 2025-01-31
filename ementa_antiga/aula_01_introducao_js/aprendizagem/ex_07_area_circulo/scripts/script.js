function calcularCirculo() {
  const raio = Number(document.getElementById("raio").value);
  const perimetro = 2 * Math.PI * raio;
  const area = Math.PI * Math.pow(raio, 2);
  document.getElementById(
    "resultadoCirculo"
  ).innerText = `Perímetro: ${perimetro.toFixed(
    2
  )} metros, Área: ${area.toFixed(2)} metros quadrados.`;
}
