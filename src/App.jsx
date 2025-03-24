import Heading from "./components/Heading";
import Game from "./components/Game";
import { useState} from "react";

function App() {
  // Scoreboard variables
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  

  return(
    <div className="content">
      <Heading score={score} highScore={highScore}/>
      <Game/>
    </div>
  );
}
export default App;