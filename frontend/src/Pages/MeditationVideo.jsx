// src/components/MeditationVideo.js
import React from 'react';

const MeditationVideo = () => {
  return (
    <div>
      <h2 className='m-5 p-1 bg-blue-300 text-center text-xl' >Guided Meditation</h2>
      <div className='flex'>
      <iframe className='flex flex-col p-5' width="560" height="315" src="https://www.youtube.com/embed/inpok4MKVLM?si=oT-LJN-uiL04nPV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p className='flex flex-col p-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, modi et enim ipsa voluptatum aliquid nesciunt vero ex, explicabo alias inventore placeat, porro animi magni quod dicta magnam nostrum nisi!</p>
      </div>
    </div>
  );
};

export default MeditationVideo;
