import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SpecialityMenu = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find Your Problem</h1>
        <p className='sm:w-4/6 text-center text-sm'>Finding the right mental health professional is essential for receiving tailored care that meets your unique needs. Our platform allows you to search for experts by specialty, ensuring that you connect with a provider who has the training and experience to address your specific concerns. Whether you're seeking support for anxiety, depression, trauma, relationship challenges, or other mental health issues, our comprehensive directory makes it easy to filter by area of expertise.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
           <button onClick={()=>{navigate('/Info');scrollTo(0,0)}} >Awarness</button>
                
           
        </div>
    </div>
  )
}

export default SpecialityMenu