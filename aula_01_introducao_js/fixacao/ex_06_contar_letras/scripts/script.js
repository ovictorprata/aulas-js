function contarLetras() {
  const nome = document.getElementById("nome").value;
  const numLetras = nome.replace(/\s+/g, "").length; // Remove espaços e conta caracteres
  document.getElementById(
    "resultadoContagem"
  ).innerText = `Número de letras: ${numLetras}`;
}
