import React from "react";
import "./Navbar.css";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Typography component="a" href="Services">
            SERVICES
          </Typography>
        </li>
        <li>
          <Typography component="a" href="aboutus">
            ABOUT US
          </Typography>
        </li>
        <li>
          <Typography component="a" href="contact">
            CONTACT
          </Typography>
        </li>
      </ul>
    </div>
  );
}
