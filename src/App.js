import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import "./index.css";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
        if (response.data && response.data.questions) {
          setQuizData(response.data.questions);
        } else {
          setError("Invalid quiz data format");
        }
      } catch (err) {
        setError("Failed to fetch quiz data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuizData();
  }, []);

  const startQuiz = () => setCurrentScreen("quiz");
  const endQuiz = (finalScore) => {
    setScore(finalScore);
    setCurrentScreen("result");
  };

  return (
    <div className="container fade-in">
      <Header />
      {loading && <p className="loading">Loading... ⏳</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          {currentScreen === "start" && <StartScreen onStart={startQuiz} />}
          {currentScreen === "quiz" && (
            <QuizScreen quizData={quizData} onEnd={endQuiz} />
          )}
          {currentScreen === "result" && (
            <ResultScreen score={score} totalQuestions={quizData.length} />
          )}
        </>
      )}
    </div>
  );
};
