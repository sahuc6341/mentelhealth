import React from "react";
import { Link } from "react-router-dom";
import stress from "../components/stress.png"
const Anxiety = () => (
  <div>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Understanding Anxiety</h1>
          <p className="mt-4 text-lg md:text-xl">
            Explore the signs, symptoms, and ways to manage anxiety for a healthier mind.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 md:px-12">
        {/* What is Anxiety */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">What is Anxiety?</h2>
          <p className="text-gray-700 leading-relaxed">
            Anxiety is a natural response to stress, but it becomes a concern when it interferes with daily life. 
            It can manifest as excessive fear, worry, or a sense of unease, often triggered by everyday situations.
          </p>
        </section>

        {/* Symptoms */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Common Symptoms</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Restlessness or feeling on edge</li>
            <li>Excessive worry or fear</li>
            <li>Increased heart rate or palpitations</li>
            <li>Difficulty concentrating</li>
            <li>Muscle tension or headaches</li>
            <li>Sleep disturbances, such as insomnia</li>
          </ul>
        </section>

        {/* Coping Strategies */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Coping Strategies</h2>
          <p className="text-gray-700 leading-relaxed">
            Managing anxiety can involve a mix of lifestyle changes, self-care practices, and professional help. Here are a few strategies to try:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Practice deep breathing and mindfulness</li>
            <li>Engage in regular physical activity</li>
            <li>Limit caffeine and alcohol intake</li>
            <li>Set aside time for relaxation and hobbies</li>
            <li>Seek support from friends, family, or a therapist</li>
          </ul>
        </section>

        {/* Seek Help */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">When to Seek Help</h2>
          <p className="text-gray-700 leading-relaxed">
            If anxiety is affecting your quality of life or you feel overwhelmed, it's important to reach out to a healthcare provider or therapist. 
            Professional treatment can include therapy, medication, or a combination of both.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Remember, you are not alone. Help is available, and taking the first step is a sign of strength.
          </p>
        </div>
      </footer>
    </div>
  
    <div className="mt-8">
    <Link to="/info" style={buttonStyle}>Back to Info</Link>
    </div>
   
  </div>
 
);

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
};

export default Anxiety;
