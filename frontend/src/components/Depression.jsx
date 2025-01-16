import React from "react";
import { Link } from "react-router-dom";
import anxity from "../components/anxity.png.png";
const Depression = () => (
    
<div>
<div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Understanding Depression</h1>
          <p className="mt-4 text-lg md:text-xl">
            Your mental health matters. Learn about depression, its symptoms, and how to seek help.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 md:px-12">
        {/* What is Depression */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is Depression?</h2>
          <p className="text-gray-700 leading-relaxed">
            Depression is a common mental health disorder that affects how you feel, think, and handle daily activities. 
            It's more than just feeling sad or going through a tough time—it’s a persistent condition that requires attention.
          </p>
        </section>

        {/* Symptoms */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Common Symptoms</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Persistent feelings of sadness or emptiness</li>
            <li>Loss of interest in activities once enjoyed</li>
            <li>Fatigue and lack of energy</li>
            <li>Changes in appetite or weight</li>
            <li>Difficulty concentrating</li>
            <li>Thoughts of self-harm or suicide</li>
          </ul>
        </section>

        {/* Get Help */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Get Help</h2>
          <p className="text-gray-700 leading-relaxed">
            Seeking help is a sign of strength. Reach out to a trusted friend, family member, or a mental health professional. 
            Here are some resources that can support you:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Talk to a therapist or counselor</li>
            <li>Contact a mental health hotline</li>
            <li>Join support groups</li>
            <li>Engage in self-care and mindfulness activities</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            If you're in crisis, please contact emergency services or a local mental health hotline immediately.
          </p>
        </div>
      </footer>
    </div>

    <div className="mt-8">
    <Link  to="/info" style={buttonStyle}>Back to Info</Link>
     </div>
     <img className="w-full absolute bottom-0 right-0 max-w-lg  " src={anxity} alt="" />
</div>
  
);

const buttonStyle = {
  padding: "10px 25px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  margin:"40px",
  
};

export default Depression;
