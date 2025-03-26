import "../css/Heading.css"

// Returns the HTML heading section which includes a header, the scoreboard, and a brief explanation of the game rules
function Heading({score, highScore}){
    return(
        <section className="heading">
            <div className="heading-info">
                <h1>Pokémon Memory Game</h1>
                <p>Get points by clicking on an image. But don't click on any more than once!</p>
            </div>

            <div className="scoreboard">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
            </div>
        </section>
    );
}
export default Heading;