import { useState } from "react";

function Game() {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [mark, setMark] = useState("X");
  const [winner, setWinner] = useState(false);

  function winCheck() {
    const possibleWins = [
      [0, 1, 2], // row
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6],
      [0, 3, 6], // column
      [1, 4, 7],
      [2, 5, 8],
    ];

    possibleWins.forEach((element) => {
      if (
        square[element[0]] &&
        square[element[0]] === square[element[1]] &&
        square[element[1]] === square[element[2]]
      ) {
        setWinner(square[element[0]]);
      }
    });
  }

  function placeMark(i) {
    if (!winner) {
      let updatedSquare = square;
      updatedSquare[i] = mark;

      setSquare(updatedSquare);
      mark === "X" ? setMark("O") : setMark("X");
    }
  }

  resetBoard() {
    
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
              winCheck();
            }}>
            <p>{element}</p>
          </div>
        ))}
        <div className="turn">
          {winner ? "Winner is " + winner : "It's " + mark + "-s turn"}
        </div>
        <div>
          <button
            id="reset"
            onClick={() => resetBoard()}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Game;
