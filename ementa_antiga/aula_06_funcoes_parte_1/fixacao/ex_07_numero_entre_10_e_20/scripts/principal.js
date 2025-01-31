function verificarIntervalo(numero) {
  let mensagem;
  if (numero >= 10 && numero <= 20) {
    mensagem = "O número está no intervalo.";
  } else {
    mensagem = "O número não está no intervalo.";
  }
  return mensagem;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = Number(document.querySelector("#numero").value);
  console.log(numero);
  const resultadoIntervaloInput = document.querySelector("#resultadoIntervalo");
  const resultado = verificarIntervalo(numero);
  resultadoIntervaloInput.value = resultado;
});
