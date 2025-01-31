function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const anoNascimento = Number(document.querySelector("#anoNascimento").value);
  const idadeInput = document.querySelector("#idade");
  const idade = calcularIdade(anoNascimento);
  idadeInput.value = `A idade é ${idade} anos.`;
});
