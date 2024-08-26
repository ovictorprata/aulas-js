const botao = document.querySelector("button");

botao.addEventListener("click", (evento) => {
  evento.preventDefault();
  const usuarioDigitado = document.querySelector("#usuario").value;
  const senhaDigitada = document.querySelector("#senha").value;

  let resultado;
  if (usuarioDigitado === "admin" && senhaDigitada === "1234") {
    resultado = "Login realizado com sucesso!";
  } else {
    resultado = "Login inválido. Tente novamente.";
  }
  const pResultado = document.querySelector("#resultado");
  pResultado.innerHTML = resultado;
});
