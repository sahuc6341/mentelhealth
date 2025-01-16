import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*-------Left side-----*/}
            <div className=''>
              <img className='mb-5 w-40 ' src={assets.logo} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 '>we are committed to raising awareness about mental illnesses and providing hope through education and support. Mental health challenges are treatable, and recovery is possible with the right care, resources, and understanding. Together, we can break the stigma, spread compassion, and empower individuals on their journey to healing.</p>
            </div>
             {/*-------Center side-----*/}
             <div >
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                    <li onClick={()=>{navigate('/');scrollTo(0,0)}}>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
             </div>
             {/*-------Left side-----*/}
              <div>
                   <p  className='text-xl font-medium mb-5'>GET TO TOUCH</p>
                   <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+9399547130</li>
                    <li>sahuc6341@gmail.com</li>
                   </ul>
             </div>
        </div>
    </div>
  )
}

export default Footer