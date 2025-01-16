import React from "react";
import { Link } from "react-router-dom";
import stress from "../components/Stresss.png"
const PTSD = () => (
  
<div>
<div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-red-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Understanding PTSD</h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn about Post-Traumatic Stress Disorder, its symptoms, and steps to healing and recovery.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 md:px-12">
        {/* What is PTSD */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">What is PTSD?</h2>
          <p className="text-gray-700 leading-relaxed">
            PTSD, or Post-Traumatic Stress Disorder, is a mental health condition that can occur after experiencing or witnessing 
            a traumatic event. It can cause lasting emotional and psychological distress, affecting daily life and relationships.
          </p>
        </section>

        {/* Symptoms */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Common Symptoms</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-red-600">Re-Experiencing Symptoms</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Flashbacks or reliving the trauma</li>
                <li>Intrusive memories or thoughts</li>
                <li>Nightmares related to the event</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-red-600">Avoidance Symptoms</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Avoiding places, people, or situations that trigger memories</li>
                <li>Withdrawing from activities or relationships</li>
                <li>Numbing of emotions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-red-600">Hyperarousal Symptoms</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Feeling on edge or easily startled</li>
                <li>Difficulty sleeping or concentrating</li>
                <li>Outbursts of anger or irritability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Treatment Options</h2>
          <p className="text-gray-700 leading-relaxed">
            PTSD is treatable, and recovery is possible with the right support. Effective treatments include:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Trauma-focused therapy, such as EMDR or cognitive processing therapy</li>
            <li>Medications to manage symptoms, such as antidepressants</li>
            <li>Mindfulness and relaxation techniques</li>
            <li>Support groups with others who have experienced trauma</li>
          </ul>
        </section>

        {/* Finding Support */}
        <section className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Finding Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Seeking help is a crucial step toward healing. If you or someone you know is struggling with PTSD, consider these resources:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Reach out to a licensed therapist or counselor</li>
            <li>Contact local mental health hotlines or crisis centers</li>
            <li>Connect with friends, family, or community groups for emotional support</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Healing from trauma takes time and support. Remember, you are not alone on this journey.
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

export default PTSD;
