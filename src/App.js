import "./styles/App.scss";
import GameBoard from "./component/GameBoard";
import { useState } from "react";
import { Button } from "reactstrap";
import Timer from "./component/Timer";

function App() {
  const [fromStart, setFromStart] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [timerOut, setTimerOut] = useState(false);

  function readySetGameOn() {
    setFromStart(false);
    setTimerOut(true);
  }

  return (
    <div className="App">
      {gameOn && (
        <GameBoard
          setFromStart={setFromStart}
          setGameOn={setGameOn}
          gameOn={gameOn}
        />
      )}
      {fromStart && (
        <div>
          <h1>selamat datang!</h1>
          <Button className="start-button btn-danger" onClick={readySetGameOn}>
            Mulai!
          </Button>
        </div>
      )}
      {timerOut && (
        <div>
          <Timer
            setGameOn={setGameOn}
            timerOut={timerOut}
            setTimerOut={setTimerOut}
            gameOn={gameOn}
          />
        </div>
      )}
    </div>
  );
}

export default App;
