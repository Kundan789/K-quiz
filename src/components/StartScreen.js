import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div>
      <h2>Ready to Play? 😎</h2>
      <button onClick={onStart}>Start Quiz 🚀</button>
    </div>
  );
};

export default StartScreen;
