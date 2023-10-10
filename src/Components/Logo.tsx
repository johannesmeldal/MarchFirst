import React from "react";
import img from "../Images/Logo-stor.png";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="logo-container">
      <img
        className="logo-image"
        src={img}
        alt="mf-logo"
        onClick={() => navigate("/")}
      />
      <div className="intro">
        <svg className="top-line">
          <line
            x1="2" //start x
            y1="2" //start y
            x2="200" //end x
            y2="2" //end y
            stroke="black"
            stroke-width="2"
          />
          <line x1="2" y1="2" x2="2" y2="42" stroke="black" stroke-width="2" />
        </svg>
        <Typography
          sx={{
            width: "50%",
          }}
        >
          MarchFirst Norway AS er et investerings- og rådgivningsselskap som
          fokuserer på verdiskapning i tilknyttede selskaper og for utvalgte
          klienter
        </Typography>
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
      </div>
    </div>
  );
}
