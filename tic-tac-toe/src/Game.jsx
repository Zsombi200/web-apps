import { useState } from "react";

function Game() {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [mark, setMark] = useState("X");
  const [winner, setWinner] = useState(false);

  function winCheck() {
    return "asd"
  }

  function placeMark(i) {
    let updatedSquare = square;
    updatedSquare[i] = mark;

    setSquare(updatedSquare);
    mark === "X" ? setMark("O") : setMark("X");
  }

  return (
    <>
      <div id="game-table">
        {square.map((element, index) => (
          <div
            key={index}
            className="block"
            id={index}
            onClick={() => {
              placeMark(index);
            }}>
            <p>{element}</p>
          </div>
        ))}
      </div>
      {winCheck ? (
        <div id="turn">Winner is {winCheck}</div>
      ) : (
        <div id="turn">It's {mark}-s turn</div>
      )}
    </>
  );
}

export default Game;
