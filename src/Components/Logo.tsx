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
      <Typography className="logo-text" component="h1" variant="h5">
        M&F
      </Typography>
    </div>
  );
}
