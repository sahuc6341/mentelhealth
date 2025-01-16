import React from 'react'

const Basic = () => {
  return (
    <div>
        <div className='flex'>
          {/*---------Left side-------*/}
          <div className='flex flex-col bg-yellow-300 p-10'>
            <p className= 'text-white mb-4 font-semibold leading-none text-3xl py-4  md-text-3xl lg:text-4xl'>Mental health</p>
            <p>What is Mental Health?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum eos provident est delectus eius </p>
          </div>
          
          {/*---------Left side-------*/}
          <div className='flex flex-col bg-red-500 p-10'>
          <p className= 'text-white mb-4 font-semibold leading-none text-3xl py-4  md-text-3xl lg:text-4xl'>Mental Illness</p>
            <p>What is Mental Illness?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum eos provident est delectus eius </p>
          </div>
        </div>
    </div>
  )
}

export default Basic