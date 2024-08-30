function contarLetras(palavra) {
  return palavra.length;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const palavraInput = document.querySelector("#palavra");
  const resultadoLetrasInput = document.querySelector("#resultadoLetras");
  const palavra = palavraInput.value.trim();
  const numeroLetras = contarLetras(palavra);
  resultadoLetrasInput.value = `Número de letras: ${numeroLetras}.`;
});
