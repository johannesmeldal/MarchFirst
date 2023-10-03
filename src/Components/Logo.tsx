import React from "react";
import img from "../Images/Logo-stor.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={img} alt="mf-logo" />
      <svg className="top-line">
        <line
          x1="2px" //start x
          y1="2px" //start y
          x2="200px" //end x
          y2="2px" //end y
          stroke="black"
          stroke-width="2px"
        />
        <line
          x1="2px"
          y1="2px"
          x2="2px"
          y2="42px"
          stroke="black"
          stroke-width="2px"
        />
      </svg>
      <svg className="bottom-line">
        <line
          x1="0px" //start x
          y1="40px" //start y
          x2="200px" //end x
          y2="40px" //end y
          stroke="black"
          stroke-width="2px"
        />
        <line
          x1="200px"
          y1="0px"
          x2="200px"
          y2="40px"
          stroke="black"
          stroke-width="2px"
        />
      </svg>
      <span>
        <p>
          MarchFirst Norway AS er et investerings- og rådgivningsselskap som
          fokuserer på verdiskapning i tilknyttede selskaper og for utvalgte
          klienter
        </p>
      </span>
    </div>
  );
}
