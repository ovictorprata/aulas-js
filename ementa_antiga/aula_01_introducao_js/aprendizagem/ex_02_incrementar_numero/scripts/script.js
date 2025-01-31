function incrementarNumero() {
  const numero = Number(document.getElementById("numero").value);
  const resultado = numero + 1;
  document.getElementById(
    "resultadoIncremento"
  ).innerText = `O número incrementado é ${resultado}`;
}
