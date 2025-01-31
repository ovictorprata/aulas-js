function encontrarMaiorNumero(num1, num2, num3) {
  let maior = num1;
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }
  return maior;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const num3 = Number(document.querySelector("#num3").value);
  const resultadoMaiorInput = document.querySelector("#resultadoMaior");
  const maiorNumero = encontrarMaiorNumero(num1, num2, num3);
  resultadoMaiorInput.value = `O maior número é ${maiorNumero}.`;
});
