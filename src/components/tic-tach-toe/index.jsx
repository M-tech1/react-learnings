import { useEffect, useState } from "react";
import "./styles.css";
export default function TicTacToe() {
  function Square({ value, onClick }) {
    return (
      <button onClick={onClick} className="square">
        {value}
      </button>
    );
  }

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState("");
  //   const [isO, setIsO] = useState();

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isX ? "X" : "O";
    setIsX(!isX);
    setSquares(cpySquares);
  }

  function getWinner(squares) {
    const winningPatters = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatters.length; i++) {
      const [x, y, z] = winningPatters[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== " ")) {
      setStatus("this is a draw, please Restart");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next Player is ${isX ? "X" : "O"}`);
    }
  }, [squares]);

  function handleRestart() {
    setIsX(true);
    setSquares(Array(9).fill(""));
  }

  return (
    <>
      <div className="game-container">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <h1>{status}</h1>
        <button onCanPlay={handleRestart}>Restart</button>
      </div>
    </>
  );
}
