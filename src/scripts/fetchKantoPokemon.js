// Uses the pokemon API to return an array containing data for all pokemon from the kanto region
async function fetchKantoPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const allPokemon = await response.json();
    const pokemonArray = [];
    
    // For each pokemon in results, append its name and sprite as an object into pokemonArray
    for (const pokemon of allPokemon.results) {
        const data = await fetchPokemonData(pokemon);
        pokemonArray.push({ name: data.forms[0].name, sprite: data.sprites.front_default });
    }
    return pokemonArray;
}

export default fetchKantoPokemon;

// Helper function to fetch individual pokemon data
async function fetchPokemonData(pokemon) {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
}
