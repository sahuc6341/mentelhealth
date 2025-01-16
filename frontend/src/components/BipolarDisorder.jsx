import React from "react";
import { Link } from "react-router-dom";

const BipolarDisorder = () => (
  
<div>
<div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-purple-700 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Understanding Bipolar Disorder</h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn about bipolar disorder, its symptoms, and ways to seek support for a balanced life.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 md:px-12">
        {/* What is Bipolar Disorder */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">What is Bipolar Disorder?</h2>
          <p className="text-gray-700 leading-relaxed">
            Bipolar disorder is a mental health condition characterized by extreme mood swings that include emotional highs 
            (mania or hypomania) and lows (depression). These episodes can affect energy levels, behavior, and the ability 
            to function in daily life.
          </p>
        </section>

        {/* Symptoms */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Common Symptoms</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-purple-700">Manic Episode Symptoms</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Increased energy or activity</li>
                <li>Racing thoughts or rapid speech</li>
                <li>Impulsiveness or risky behavior</li>
                <li>Decreased need for sleep</li>
                <li>Exaggerated self-confidence</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-purple-700">Depressive Episode Symptoms</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Prolonged feelings of sadness or hopelessness</li>
                <li>Loss of interest in activities</li>
                <li>Fatigue or lack of energy</li>
                <li>Difficulty concentrating</li>
                <li>Changes in appetite or sleep patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Treatment Options</h2>
          <p className="text-gray-700 leading-relaxed">
            While bipolar disorder is a lifelong condition, it can be effectively managed with treatment. 
            Common approaches include:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Medication, such as mood stabilizers or antipsychotics</li>
            <li>Psychotherapy, including cognitive behavioral therapy (CBT)</li>
            <li>Regular routines for sleep and daily activities</li>
            <li>Support groups or family therapy</li>
          </ul>
        </section>

        {/* Getting Support */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Getting Support</h2>
          <p className="text-gray-700 leading-relaxed">
            If you or someone you know is experiencing symptoms of bipolar disorder, it’s important to seek help. 
            Early diagnosis and treatment can make a significant difference. Reach out to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Mental health professionals for an evaluation</li>
            <li>Support hotlines or crisis centers</li>
            <li>Friends and family for emotional support</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Remember, understanding and managing bipolar disorder is a journey. Help is available, and you are not alone.
          </p>
        </div>
      </footer>
    </div>

 
    <div className="mt-7">
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

export default BipolarDisorder;
