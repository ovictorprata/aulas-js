function multiplicar(n1, n2) {
  return n1 * n2;
}

function validarMultiplicacao(n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return "Multiplicação por zero não é permitida.";
  } else {
    return `O produto é ${multiplicar(n1, n2)}.`;
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const n1 = Number(document.querySelector("#n1").value);
  const n2 = Number(document.querySelector("#n2").value);
  const resultadoProdutoInput = document.querySelector("#resultadoProduto");
  resultadoProdutoInput.value = validarMultiplicacao(n1, n2);
});
