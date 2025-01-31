function converterCelsius() {
  const celsius = Number(document.getElementById("celsius").value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById(
    "resultadoFahrenheit"
  ).innerText = `A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}`;
}
