import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
const info = () => {
  const mentalIllnesses = [
    { name: "Depression", path: "/depression" },
    { name: "Anxiety", path: "/anxiety" },
    { name: "PTSD", path: "/ptsd" },
    { name: "Bipolar Disorder", path: "/bipolar-disorder" },
  ];

  return (
    <div className="bg-green-200 p-4">
      <h1 className="text-4xl left-0 w-16 m-5"><span className="font-semibold text-7xl bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">Welcome</span> to Mental Health <span className="text-green-600">Awareness</span> </h1>
      <p className="m-5">Learn about common mental illnesses and how they can be managed.</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap",margin:"10px" }}>
        {mentalIllnesses.map((illness) => (
          <Link to={illness.path} key={illness.name} style={buttonStyle}>
            {illness.name}
          </Link>
        ))}
      </div>
      <img className="w-full absolute bottom-0 right-0 max-w-sm m-6 mb-28" src={assets.appointment_img} alt="" />
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "16px",
};

export default info;
