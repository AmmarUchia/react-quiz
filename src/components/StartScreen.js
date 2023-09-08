import { useRef } from "react";

import { gsap } from "gsap";
function StartScreen({ numQuestions, dispatch }) {
  gsap.fromTo(".h2", { y: -100, ease: "none" }, { y: 0, ease: "ease" });

  return (
    <div className="start">
      <h2 className="h2">Welcome To the react quiz</h2>
      <h3>{numQuestions} questions to test your react mastery </h3>
      <button
        className="btn btn-ui   "
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
