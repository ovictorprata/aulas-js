function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = Number(document.querySelector("#numero").value);
  const resultadoParImparInput = document.querySelector("#resultadoParImpar");
  const resultado = verificarParOuImpar(numero);
  resultadoParImparInput.value = `O número é ${resultado}.`;
});
