import React, { useState } from "react";

const QuizScreen = ({ quizData, onEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onEnd(score + (isCorrect ? 1 : 0));
    }
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div>
      <h3>Question {currentQuestion + 1} of {quizData.length}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <h2>{quizData[currentQuestion].question}</h2>
      {quizData[currentQuestion].answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer.isCorrect)}
        >
          {answer.text} {answer.isCorrect ? "✅" : "❌"}
        </button>
      ))}
    </div>
  );
};
