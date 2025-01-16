import React from "react";
import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div className="m-8">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-20">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div >
          <p>
          At <b> Soft Cure </b>, we believe that mental health is the cornerstone of a happy and fulfilling life.
          </p>
          <p className='sm:w-2/3 text-m text-justify'>
          Our mission is to provide a safe, supportive, and accessible space for individuals 
          seeking guidance and resources for their mental well-being. We aim to connect you with 
          qualified professionals, evidence-based tools, and a community that understands 
          the importance of mental health.
          </p>
          <p className='sm:w-2/3 text-left text-m items-center justify-center'>
          Whether you’re navigating life’s challenges, seeking personal growth, or supporting 
          a loved one, we are here to empower you with the knowledge and care you deserve. 
          Together, we can help you take the first steps toward healing and a brighter future.
          </p>
          <b className="text-gray-800">Our Visions</b>
          <p className='sm:w-2/3 text-left text-m items-center justify-center'>
          Our vision is to create a world where mental health is treated with the same 
          importance as physical health—where seeking help is a sign of strength, not stigma.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 ">
        <p>Why Choose Us</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-10 py-5 sm:py-16 m-2 flex-col hover:bg-yellow-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur,hghgj cfhdjk dfgjhkkhk.</p>
        </div>
        <div className="border px-10 md:px-10 py-5 sm:py-16  m-2 flex-col  hover:bg-purple-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Conviency</b>
          <p> As a online platform, theres no need to drive for basic consultency </p>
        </div>
        <div className="border px-10 md:px-10 py-5 sm:py-16  m-2 flex-col  hover:bg-pink-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personlization</b>
          <p>User can pesonalize their 'p</p>
        </div>
      </div>
    </div>
  );
};

export default About;
