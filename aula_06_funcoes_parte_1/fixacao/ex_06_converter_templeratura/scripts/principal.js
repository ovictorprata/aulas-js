function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const celsius = Number(document.querySelector("#celsius").value);
  const fahrenheitInput = document.querySelector("#fahrenheit");
  const fahrenheit = converterCelsiusParaFahrenheit(celsius);
  fahrenheitInput.value = `A temperatura é ${fahrenheit.toFixed(2)} °F.`;
});
