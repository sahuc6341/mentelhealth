import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open("https://wa.me/9399547130?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20service.",
    "_blank");
  };

  const helplineIcon=()=>{
    const helpClick=()=>{
        window.open("tel:+18001234567", "_self")
    }
  }

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="3x"
        color="#25D366"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      />
      
    </div>


  );
};

export default WhatsAppIcon;
