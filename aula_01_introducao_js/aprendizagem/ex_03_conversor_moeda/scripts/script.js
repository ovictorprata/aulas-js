function converterMoeda() {
  const usd = Number(document.getElementById("usd").value);
  const cotacao = Number(document.getElementById("cotacao").value);
  const brl = usd * cotacao;
  document.getElementById(
    "resultadoMoeda"
  ).innerText = `O valor em BRL é R$ ${brl.toFixed(2)}`;
}
