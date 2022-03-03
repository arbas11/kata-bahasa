import "./styles/App.scss";
import GameBoard from "./component/GameBoard";
import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Timer from "./component/Timer";

function App() {
  const [fromStart, setFromStart] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [timerOut, setTimerOut] = useState(false);
  const [benar, setBenar] = useState(0);
  const [salah, setSalah] = useState(0);
  const [score, setScore] = useState(false);
  const [openScoreModal, setOpenScoreModal] = useState(false);

  useEffect(() => {
    setBenar(0);
    setSalah(0);
    setScore(false);
  }, [score]);

  function readySetGameOn() {
    setScore(true);
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
          benar={benar}
          setBenar={setBenar}
          salah={salah}
          setSalah={setSalah}
          openScoreModal={openScoreModal}
          setOpenScoreModal={setOpenScoreModal}
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
      <Modal
        isOpen={openScoreModal}
        toggle={() => setOpenScoreModal(!openScoreModal)}
      >
        <ModalBody className="modal-score">
          <div className="benar-salah-container">
            <div className="scoring-board">
              <h3>Benar</h3>
              <h1 className="benar-score">{benar}</h1>
            </div>
            <div className="scoring-board">
              <h3>Salah</h3>
              <h1 className="salah-score">{salah}</h1>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
