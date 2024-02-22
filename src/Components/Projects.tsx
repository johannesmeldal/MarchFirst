import React from "react";
import { Text } from "../TextDatabase/TextObj";
import { Card, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";
import "./Projects.css";

export default function Projects() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="projects-container">
    </div>
  );
}
