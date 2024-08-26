
const containerProdutos = document.querySelector(".produtos")
const containerCategorias = document.querySelector(".categorias")
const qtdCarrinho = document.querySelector(".carrinho span")
const containerCarrinho = document.querySelector(".produtos-carrinho")
const toastMessage = document.querySelector(".toast-message")
const modalCompra = document.querySelector(".modal-compra")

let produtos = []

let carrinho = localStorage.getItem("fakestore:carrinho") 
carrinho = carrinho ? JSON.parse(carrinho) : []
qtdCarrinho.innerHTML = carrinho.length

function atualizarDadosCarrinho() {
  localStorage.setItem("fakestore:carrinho", JSON.stringify(carrinho))
  qtdCarrinho.innerHTML = carrinho.length
}

async function captarProdutos() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const dados = await res.json()

        produtos = dados

        mostrarNaTela()
    } catch (error) {
        console.log(error)
    }
}

function mostrarNaTela(arrayProdutos = produtos) {
    containerProdutos.innerHTML = ""

    arrayProdutos.forEach((produto) => {
        containerProdutos.innerHTML += `
        <div class="produto">
            <div class="infos">
                <img src="${produto.image}" />
                <h4>${produto.title}</h4>
            </div>
            <div>
                <p>R$ ${produto.price}</p>
                <img onclick="adicionarNoCarrinho(${produto.id})" src="https://cdn-icons-png.flaticon.com/512/649/649931.png" />
            </div>
        </div>
        `
    })
}

function adicionarNoCarrinho(idProduto) {
    const produto = produtos.find((item) => item.id === idProduto)
    const produtoJaExiste = carrinho.find(item => item.id === produto.id)

    if (!produtoJaExiste) {
        produto.quantity = 1
        carrinho.push(produto)
        
        toastMessage.style.transform = "translate(0)"
        
        setTimeout(() => {
          toastMessage.style.transform = "translate(120%)"
        }, 3000)
    } else {
        carrinho = carrinho.map(item => {
            if (item.id === idProduto) {
                item.quantity += 1
            }

            return item
        })
    }

    montarCarrinho()

    atualizarDadosCarrinho()
}

function  montarCarrinho() {
  containerCarrinho.innerHTML = ''

  carrinho.forEach(produto => {
    containerCarrinho.innerHTML += `
    <div class="produto-carrinho">
        <img src="${produto.image}" />

        <div class="quantidade">
          <button onclick="diminuirQuantidade(${produto.id})">-</button>
          <input type="text" value="${produto.quantity}" readonly/>
          <button onclick="aumentarQuantidade(${produto.id})">+</button>
        </div>

        <p>R$ ${produto.price * produto.quantity}</p>
      </div>
    `
  })
}

function diminuirQuantidade(idProduto) {
  const produto = carrinho.find((item) => item.id === idProduto)

  if (produto.quantity === 1) {
    let confirmar = confirm("Deseja remover o produto?")
    
    if (!confirmar) {
      return;
    }

    carrinho = carrinho.filter(item => item.id !== idProduto)
  }

  carrinho = carrinho.map(item => {
    if (item.id === idProduto) {
        item.quantity -= 1
    }

    return item
  })

  montarCarrinho()
  atualizarDadosCarrinho()
}

function aumentarQuantidade(idProduto) {
  carrinho = carrinho.map(item => {
    if (item.id === idProduto) {
        item.quantity += 1
    }

    return item
  })

  montarCarrinho()
  atualizarDadosCarrinho()
}

async function captarCategorias() {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const categorias = await res.json() 

        categorias.forEach(categoria => {
            containerCategorias.innerHTML += `
                <div>
                    <input oninput="filtrarPorCategoria()" name="categoria" type="checkbox" value="${categoria}" />
                    <label >${categoria}</label>
                </div>
            `
        })
    } catch (error) {
        console.log(error)
    }
}

function filtrarPorCategoria() {
    const inputsChecados = document.querySelectorAll("input[name=categoria]:checked")
    const filtros = [...inputsChecados].map(input => input.value)

    const produtosFiltrados = produtos.filter(produto => filtros.includes(produto.category)) //[]

    mostrarNaTela(filtros.length > 0 ? produtosFiltrados : produtos)
}

function checkout() {
  modalCompra.style.display = "flex"
}

function fecharModal() {
  modalCompra.style.display = "none"
}

function finalizarCompra() {
  modalCompra.style.display = "none"
  
  toastMessage.innerHTML = "Compra finalizada com sucesso!"
  toastMessage.style.transform = "translate(0)"
  carrinho = []
        
  setTimeout(() => {
    toastMessage.style.transform = "translate(120%)"
  }, 3000)

  atualizarDadosCarrinho()
}

captarProdutos()
captarCategorias()
montarCarrinho()