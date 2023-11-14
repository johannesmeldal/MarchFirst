import React from "react";
import "./Contact.css";
import PartnerCards from "./PartnerCard";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div className="contact-container">
      <Typography
        variant="h3"
        sx={{
          marginTop: "10vh",
          marginBottom: "10vh",
        }}
      >
        Contact us!
      </Typography>
      <PartnerCards />
    </div>
  );
}
