import fetchKantoPokemon from "../scripts/fetchKantoPokemon";
import shuffleArray from "../scripts/shuffleArray";
import { useState, useEffect } from "react";

function Game() {
  // Will contain an array of pokemon data  
  const [pokemon, setPokemon] = useState([]);

  // useEffect hook and fetch the pokemon data
  useEffect(() => {
    async function loadPokemon() {
      const data = await fetchKantoPokemon();
      setPokemon(data);
    }

    loadPokemon();
  }, []);

  // Shuffle the pokemon array
  function shufflePokemon() {
    setPokemon(prevPokemon => {
      const shuffled = shuffleArray([...prevPokemon]);
      return shuffled;
    });
  }

  return (
    <div className="game-grid">
      {(pokemon.length > 0) ? (
        <div className="pokemon-container" onClick={shufflePokemon}>
            <p>pokemon: {pokemon[0].name}</p>
            <img src={pokemon[0].sprite}></img>
        </div>
      ) : (
        <p className="loading-msg">Loading...</p> // Show loading message until data has loaded
      )}
    </div>
  );
}
export default Game;