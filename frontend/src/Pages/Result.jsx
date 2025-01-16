// src/components/Result.js
import React from 'react';
import '../Pages/Quiz.css';
import { Link } from "react-router-dom";

function Result({ score, totalQuestions,onRetest }) {
  const maxScore = totalQuestions * 3;
  const scorePercentage = (score / maxScore) * 100;

  let feedback;
  if (scorePercentage <= 25) {
    feedback = "You're doing well. Keep it up!";
  } else if (scorePercentage <= 50) {
    feedback = "You're okay, but could use a little more support.";
  } else if (scorePercentage <= 75) {
    feedback = "You might be going through some stress. Consider taking steps to support your mental health.";
  } else {
    feedback = "It seems like you're struggling. It might be a good idea to reach out for support.";
  }

  return (
    <div className="result">
    <h2>Self-Check Complete</h2>
   
    <p>{feedback}</p>
    <button onClick={onRetest} className="retest-button">Retake Quiz</button>
    <Link to="/Home" style={buttonStyle}>Go to Meditation</Link>
    <Link to="/doctors" style={buttonStyle}>Go to Doctors</Link>
  </div>
  );
}
const buttonStyle = {
  padding: "10px 10px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  margin:"20px",
};


export default Result;
