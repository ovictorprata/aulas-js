document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();
  const numero = Number(document.getElementById("numero").value);

  if (numero < 1 || numero > 999) {
    alert("Digite um número válido entre 1 e 999.");
    return;
  }

  const centenas = Math.floor(numero / 100);
  const dezenas = Math.floor((numero % 100) / 10);
  const unidades = numero % 10;

  let resultado = "";

  if (centenas > 0) {
    resultado += `${centenas} ${centenas > 1 ? "centenas" : "centena"}`;
  }
  if (dezenas > 0) {
    if (resultado) resultado += ", ";
    resultado += `${dezenas} ${dezenas > 1 ? "dezenas" : "dezena"}`;
  }
  if (unidades > 0) {
    if (resultado) resultado += " e ";
    resultado += `${unidades} ${unidades > 1 ? "unidades" : "unidade"}`;
  }
  if (resultado === "") {
    resultado = "0 unidade";
  }

  document.getElementById("resultado1").textContent = resultado;
});
