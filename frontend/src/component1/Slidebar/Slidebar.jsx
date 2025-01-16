import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets copy/assets";
const Slidebar = () => {
    const [extented,setextented]=useState(false)
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setextented(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extented?<p>New Chat</p>:null}
        </div>
        {extented
        ?<div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react...</p>
          </div>
        </div>
        :null
    }    
      </div>
      <div className="bottom">
      <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {extented?<p>Help</p>:null}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {extented?<p>Activty</p>:null}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assets.send_icon} alt="" />
       {extented?<p>Setting</p>:null}
      </div>
    </div>
    </div>
  );
};

export default Slidebar;
