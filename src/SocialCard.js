import React from 'react';
import "./App.css";
import "./About.css";

function SocialCard({img, link, name}){

  return(
        <a className="batLink" href = {link}>
            <img className="batIcon" src = {img} alt = "sm_img" />
            <div>{name}</div>
        </a>
  );
}

export default SocialCard;