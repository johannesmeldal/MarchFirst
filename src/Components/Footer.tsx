import React from "react";
import "./Footer.css";
import { Paper, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Paper
      className="Foot"
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Typography>
        MarchFirst Norway AS er et investerings- og rådgivningsselskap som
        fokuserer på verdiskapning i tilknyttede selskaper og for utvalgte
        klienter
      </Typography>
    </Paper>
  );
}
