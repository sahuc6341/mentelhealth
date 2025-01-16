// src/components/BreathingExercise.js
import React, { useState } from 'react';

const BreathingExercise = () => {
  const [step, setStep] = useState(0);
  const steps = ["Breathe in...", "Hold...", "Breathe out..."];

  const nextStep = () => {
    setStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className='m-2  p-3 bg-white rounded'>
      <h2>Breathing Exercise</h2>
      <p className= 'bg-yellow-300 w-20 p-2 rounded-md'>{steps[step]}</p>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default BreathingExercise;
