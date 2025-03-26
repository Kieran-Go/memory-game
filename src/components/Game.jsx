import fetchKantoPokemon from "../scripts/fetchKantoPokemon";
import shuffleArray from "../scripts/shuffleArray";
import capitalizeFirstLetter from "../scripts/CapitalizeFirstLetter";
import { useState, useEffect } from "react";
import "../css/Game.css";

function Game({ scores }) {
  // Will contain an array of pokemon data  
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Destructure the functions from the scores object
  const { setHighScore, resetScore, updateScore } = scores;

  // useEffect hook and fetch the pokemon data
  useEffect(() => {
    async function loadPokemon() {
      const data = await fetchKantoPokemon();
      const shuffledData = shuffleArray(data);
      setPokemon(shuffledData);
    }
    loadPokemon();
  }, []);

   // Shuffle the Pokemon whenever clickedPokemon changes
   useEffect(() => {
    console.log("Updated clickedPokemon:", clickedPokemon);
    shufflePokemon();
  }, [clickedPokemon]);

  // Event handler when the user clicks on a pokemon
  function handlePokemonClick(pokemonName) {
    // The player loses if their clicked pokemon is already in the clickedPokemon array
    if(clickedPokemon.includes(pokemonName)) {
        setGameOver(true);
    }
    else {
        // Add the clicked pokemon to the clickedPokemon array
        setClickedPokemon(prevClickedPokemon => {
        return [...prevClickedPokemon, pokemonName];
        })

        // The player wins if they have clicked all pokemon
        if(clickedPokemon.length == pokemon.length - 1) {
            setGameWon(true);
            setGameOver(true);
            setHighScore(pokemon.length); // Set high score to max
        }
        // Update the score talley
        else updateScore();
    }
  }

  // Shuffle the pokemon array
  function shufflePokemon() {
    setPokemon(prevPokemon => {
      const shuffled = shuffleArray([...prevPokemon]);
      return shuffled;
    });
  }

  // Reset the game
  function reset() {
    resetScore();
    setClickedPokemon([]);
    setGameWon(false);
    setGameOver(false);
  }

  return (
    <>
      {!gameOver ? (
        pokemon.length > 0 ? (
          <div className="game-grid">
            {/* Render 30 pokemon */}
            {pokemon.slice(0, 30).map((poke) => (
              <div
                className="pokemon-container"
                key={poke.name}
                onClick={() => handlePokemonClick(poke.name)}
              >
                <p>{capitalizeFirstLetter(poke.name)}</p>
                <img src={poke.sprite} alt={poke.name} />
              </div>
            ))}
          </div>
        ) : (
          <div className="loading-msg">
            <p>Loading...</p> {/* Show loading message until data has loaded */}
          </div>
        )
      ) : (
        // Show message and reset button when game is over
        <div className="game-over-msg">
          <p>{gameWon ? "You Win!" : "You Lose!"}</p>
          <button onClick={reset}>Play Again</button>
        </div>
      )}
    </>
  );
  
}
export default Game;