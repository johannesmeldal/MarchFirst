import React from "react";
import "./Footer.css";
import img from "../Images/MF_letter.png";
import Typography from "@mui/material/Typography";
import GoogleMaps from "./GoogleMaps";

export default function Footer() {
  return (
    <div className="foot">
      {/* <img className="the-m" src={img} alt="M" /> */}
      <img className="the-m" src={img} alt="M" />
      <div className="foot-grid-container">
        <div className="grid-item1">
          <span>
            <ul>
              <li>
                <Typography variant="h6">Marchfirst Norway AS</Typography>
              </li>
              <li>
                <Typography variant="body1">Org.nr: 980 705 617</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Telefon: +47 22 83 40 00
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Besøksadresse:
                  <br />
                  <span>Drammensveien 130, 0277 Oslo</span>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Postadresse:
                  <br />
                  <span>Skjellestadåsen 16, 1389 Heggedal</span>
                </Typography>
              </li>
            </ul>
          </span>
        </div>
        <div className="grid-item2">
          <ul className="link-list">
            <li>
              <Typography className="link" component="a" href="/">
                HOME
              </Typography>
            </li>
            <li>
              <Typography className="link" component="a" href="services">
                SERVICES
              </Typography>
            </li>
            <li>
              <Typography className="link" component="a" href="aboutus">
                ABOUT US
              </Typography>
            </li>
            <li>
              <Typography className="link" component="a" href="contact">
                CONTACT
              </Typography>{" "}
            </li>
          </ul>
        </div>
        <div className="grid-item3">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}
