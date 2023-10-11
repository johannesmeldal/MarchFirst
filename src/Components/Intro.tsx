import React from "react";
import "./Intro.css";
import Typography from "@mui/material/Typography";

export default function Intro() {
  return (
    <div className="intro-container">
      <div
        style={{
          maxWidth: "40vw",
          height: "15vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">OM OSS</Typography>
        <Typography variant="body1">
          MarchFirst Norway AS er et investerings- og rådgivningsselskap som
          fokuserer på verdiskapning i tilknyttede selskaper og for utvalgte
          klienter.
        </Typography>
      </div>
    </div>
  );
}
