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
      {Text.projects.map((project, index) => (
        <Card sx={{ width: "100%" }}>
          <CardMedia />
          <CardContent>
            <Typography>{project.year}</Typography>
            <Typography>{project.name}</Typography>
            <Typography>
              {language
                ? project.description.english
                : project.description.norwegian}
            </Typography>
            <Typography>
              {language ? project.role.english : project.role.norwegian}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
