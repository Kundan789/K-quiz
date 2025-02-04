import React from "react";

const ResultScreen = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>{score === totalQuestions ? "Legendary! 🏅" : "Good Job! 🎉"}</h1>
      <p>You scored {score} out of {totalQuestions}</p>
      <button onClick={() => window.location.reload()}>
        Play Again 🔄
      </button>
    </div>
  );
};

export default ResultScreen;
