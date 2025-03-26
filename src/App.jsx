import Heading from "./components/Heading";
import Game from "./components/Game";
import { useState} from "react";

function App() {
  // Scoreboard variables
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  function resetScore() {
    setScore(0);
  }

  function updateScore() {
    setScore(prevScore => {
      const newScore = prevScore + 1;
      // Update highScore if the new score is higher than the current highScore
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      return newScore;
    });
  }

  const scores = { setScore, setHighScore, resetScore, updateScore};

  return(
    <div className="content">
      <Heading score={score} highScore={highScore}/>
      <Game scores={scores}/>
    </div>
  );
}
export default App;