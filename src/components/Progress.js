function Progress({ index, question, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={question} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {question}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
