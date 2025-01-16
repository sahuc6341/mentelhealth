import React from 'react'
import MeditationColumn from './meditationColumn';
import MeditationBlock from './MeditationBlock';
import BreathingExercise from './BreathingExercise';
import MeditationVideo from './MeditationVideo';
import '../App';
import Slidebar from '../component1/Slidebar/Slidebar';
import Main from '../component1/Main/Main';
const Home = () => {
  return (
    <div  class=" bg-gradient-to-r from-yellow-300 to-pink-400">
         <h1></h1>
        <p>
           <br/> <br/>
        </p>
      
     <MeditationColumn/>
     
     <MeditationBlock/>
     <BreathingExercise/>
      <MeditationVideo/>
      
       
    </div>
  )
}

export default Home