// src/components/Question.js
import React from 'react';
import '../Pages/Quiz.css';

function Question({ question, handleAnswer }) {
  return (
    <div className='bg-blue-100 m-2 p-4'>
    <div className="question">
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(question.scoring[option])}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Question;
