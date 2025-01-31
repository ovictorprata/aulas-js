async function fetchRandomFox() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const dados = await res.json()
    console.log(dados)
}
