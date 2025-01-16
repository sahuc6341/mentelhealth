import React from 'react'
import {Route, Routes } from 'react-router-dom'
import House from './Pages/House'
import Docto from './Pages/Docto'
import Login  from './Pages/Logi'
import About from './Pages/Abou'
import Contact from './Pages/Contac'
import Myprofile from './Pages/Myprofil'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Info from './Pages/Info'
import Home from './Pages/Home'
import MeditationColumn from './Pages/meditationColumn'
import MeditationBlock from './Pages/MeditationBlock'
import Result from './Pages/Result'
import Question from './Pages/Question'
import MentalCheck from './Pages/MentalCheck'
import BreathingExercise from './Pages/BreathingExercise'
import MeditationVideo from './Pages/MeditationVideo'
import Main from './component1/Main/Main'
import Slidebar from './component1/Slidebar/Slidebar'
import Chat from './Pages/Chat'
import {ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WhatsAppIcon from './component1/WhatsAppIcon'

import Depression from "./components/Depression";
import Anxiety from "./components/Anxiety";
import PTSD from "./components/PTSD";
import BipolarDisorder from "./components/BipolarDisorder";

const App = () => {
  return (
    <div className='mx-2 sm:mx-[]'>
      <ToastContainer/>
       <Navbar/>
       <WhatsAppIcon/>
      <Routes>

         <Route path='/'element={<House/>}/>    
         <Route path='/info'element={<Info/>}/>
         <Route path='/doctors'element={<Docto/>}/>
         <Route path='/doctors/:speciality'element={<Docto/>}/>
         <Route path='/login'element={<Login/>}/>
         <Route path='/about'element={<About/>}/>
         <Route path='/contact'element={<Contact/>}/>
         <Route path='/my-profile'element={<Myprofile/>}/>
         <Route path='/my-appointments'element={<MyAppointment/>}/>
         <Route path='/appointment/:docId'element={<Appointment/>}/>
         <Route path='/Home'element={<Home/>}/>
         <Route path='/meditaitonList'element={<MeditationColumn/>}/>
         <Route path='/MeditationBlock'element={<MeditationBlock/>}/>
         <Route path='/Result'element={<Result/>}/>
         <Route path='/Question'element={<Question/>}/>
         <Route path='/MentalCheck'element={<MentalCheck/>}/>
         <Route path='/BreathingExercise'element={<BreathingExercise/>}/>
         <Route path='/MeditationVideo'element={<MeditationVideo/>}/>
         <Route path='/Main'element={<Main/>}/>
         <Route path='/Slidebar'element={<Slidebar/>}/>
         <Route path='/Chat'element={<Chat/>}/>
         
       
        <Route path='/info' element={<Info/>}/>
        <Route path="/depression" element={<Depression/>} />
        <Route path="/anxiety" element={<Anxiety/>} />
        <Route path="/ptsd"  element={<PTSD/>}  />
        <Route path="/bipolar-disorder"  element={<BipolarDisorder/>}  />
      
          
      </Routes>
      <Footer/>
    </div>
  )
}

export default App