import React from 'react';

const MeditationPrompt = ({ prompt }) => {
  return (
    <div className="meditation-prompt">
      <p className='bg-gradient-to-r from-yellow-500  to-green-500 inline-block  text-transparent bg-clip-text text-2xl '>{prompt}</p>
    </div>
  );
};

export default MeditationPrompt;
