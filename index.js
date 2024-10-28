async function fetchDados(){
    try {

        const nomePokemon = document.getElementById('pokemon').value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)

        if (!response.ok) {
            throw new Error('Erro ao executar a requisição')
        }

        const dados = await response.json()

        const pokemonImg = dados.sprites.front_default

        const htmlIMG = document.getElementById('imagemPokemon')

        htmlIMG.src = pokemonImg

        htmlIMG.style.display = 'block'

        htmlIMG.style.width = '200px' 

    } catch (error) {
        console.error('Erro:', error)
    }
} 

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', e => {
    e.preventDefault()
    fetchDados()
})