import React, { useState, useEffect } from 'react';
import MeditationPrompt from './MeditationPrompt';

const MeditationBlock = () => {
  const [time, setTime] = useState(300); // Default to 5 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);

  // Meditation prompts
  const prompts = [
    "Take a deep breath in... and slowly exhale.",
    "Clear your mind and let go of any stress.",
    "Focus on the rhythm of your breathing.",
    "Feel the tension leaving your body with each exhale.",
    "Allow yourself to relax deeper with every breath.",
  ];

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        // Change prompts every minute
        if (time % 60 === 0) {
          setPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
        }
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, prompts.length]);

  const startMeditation = () => setIsRunning(true);
  const pauseMeditation = () => setIsRunning(false);
  const resetMeditation = () => {
    setIsRunning(false);
    setTime(300); // Reset to 5 minutes
    setPromptIndex(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="meditation-block">
      <h2 className=' bg-blue-400 m-0 w-[94vw] sm:w-1 pl-5 py-3.5 pr-10 border border-gray-300 rounded-full text-justify '>{formatTime(time)}</h2>
      <MeditationPrompt prompt={prompts[promptIndex]} />
      <button onClick={startMeditation} disabled={isRunning} className='bg-yellow-500 p-1 px-3 m-2 rounded cursor-pointer hover:translate-y-[-5px] transition-all duration-500'>Start</button>
      <button onClick={pauseMeditation} disabled={!isRunning}className='bg-red-400 p-1 px-3 m-2 rounded cursor-pointer hover:translate-y-[-5px] transition-all duration-500'>Pause</button>
      <button onClick={resetMeditation} className='bg-green-500 p-1 px-3 m-2 rounded cursor-pointer hover:translate-y-[-5px] transition-all duration-500'>Reset</button>
    </div>
  );
};

export default MeditationBlock;
