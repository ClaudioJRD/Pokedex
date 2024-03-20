
const pokemons = []

function carregarPokemons(){

    const pokemon1 = 
    {
        id: 1,
        nome: "Bulbasaur",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

    }

    
    const pokemon2 =
    {
        id: 2,
        nome: "squirtle",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    }

        
    const pokemon3 =    
    {
        id: 3,
        nome: "charmander",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"

    }
    

    const pokemon4 =
    {
        id: 4,
        nome: "weezing",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    }
    

    const pokemon5 = 
    {
        id: 5,
        nome:"magikarp",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    }
    
     
    const pokemon6 =
    {
        id: 6,
        nome: "arcanine",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    }
    pokemons.push(pokemon1)
    pokemons.push(pokemon2)
    pokemons.push(pokemon3)
    pokemons.push(pokemon4)
    pokemons.push(pokemon5)
    pokemons.push(pokemon6)



    for(let index = 0 ; index < pokemons.length; index ++)
    {
        const pokemon = pokemons[index]
        adicionarCardPokemon(pokemon)
    }

}   
   

    function adicionarCardPokemon(pokemon)
    {
        const imagemElemento = document.createElement("img")

        imagemElemento.setAttribute("src", pokemon.imagem)

        const divElemento = document.getElementById("conteudo-pokemon")

        divElemento.appendChild(imagemElemento)



    }
    