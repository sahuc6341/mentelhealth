// src/components/MentalCheck.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import '../Pages/Quiz.css';
const questions = [
  {
    questionText: "How have you been feeling emotionally?",
    options: ["Happy", "Neutral", "Sad", "Anxious"],
    scoring: { Happy: 0, Neutral: 1, Sad: 2, Anxious: 3 },
  },
  {
    questionText: "How well have you been sleeping?",
    options: ["Very well", "Okay", "Not great", "Poorly"],
    scoring: { "Very well": 0, Okay: 1, "Not great": 2, Poorly: 3 },
  },
  {
    questionText: "How would you rate your stress levels?",
    options: ["Low", "Moderate", "High", "Very High"],
    scoring: { Low: 0, Moderate: 1, High: 2, "Very High": 3 },
  },
  {
    questionText: "How connected do you feel to others?",
    options: ["Very connected", "Somewhat connected", "Not much", "Isolated"],
    scoring: { "Very connected": 0, "Somewhat connected": 1, "Not much": 2, Isolated: 3 },
  },
];

function MentalCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  

  const handleAnswer = (scoringValue) => {
    setScore(score + scoringValue);
     
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      
    } else {
      setShowResult(true);
    }
  };
   const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="mental-check">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} onRetest={resetQuiz} />
      ) : (
        <Question question={questions[currentQuestion]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default MentalCheck;
