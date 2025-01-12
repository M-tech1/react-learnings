import "./styles.css";
export default function TicTacToe() {
  function Square({ value }) {
    return (
      <>
        <button className="square">{value}</button>
      </>
    );
  }

  return (
    <>
      <div className="game-container">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
