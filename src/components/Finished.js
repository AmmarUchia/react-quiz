function Finished({ score, maximumAmountOfPoints, highscore, dispatch }) {
  return (
    <>
      <p className="result">
        <strong>You Scored {score}</strong> from {maximumAmountOfPoints}
      </p>
      <p className="highscore">Your Highscore was {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default Finished;
