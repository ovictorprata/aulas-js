const formCarro = document
  .querySelector("#formCarro")
  .formCarro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const img = document.querySelector("img");
    const anos = Number(document.querySelector("#anos").value, 10);
    let resultado = "";

    if (anos > 3) {
      resultado = "O carro é velho.";
      img.src = "./carro-velho.jpg";
    } else {
      resultado = "O carro é novo.";
      img.src = "./carro-novo.jpeg";
    }
    img.style.display = "block";

    document.querySelector("#resultadoCarro").innerText = resultado;
  });
