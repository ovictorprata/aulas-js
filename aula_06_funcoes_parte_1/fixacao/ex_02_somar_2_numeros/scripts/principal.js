function somar(numero1, numero2) {
  return numero1 + numero2;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const n1 = Number(document.querySelector("#numero1").value);
  const n2 = Number(document.querySelector("#numero2").value);
  const resultadoInput = document.querySelector("#resultado");
  const soma = somar(n1, n2);
  resultadoInput.value = `A soma é ${soma}.`;
});
