import React from "react";
import "./Services.css";
import Typography from "@mui/material/Typography";
import Projects from "../Components/Projects";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";

export default function Services() {
  const [language] = useRecoilState(recoilLanguage);
  return (
    <div className="service-container">
      <Typography
        variant="h3"
        component="p"
        sx={{
          marginTop: "10vh",
          marginBottom: "10vh",
        }}
      >
        {language ? "PROJECTS" : "PROSJEKTER"}
      </Typography>
      <Projects />
    </div>
  );
}
