import React from "react";
import "./Footer.css";
import the_m_img from "../Images/MF_letter.png";
import GoogleMaps from "./GoogleMaps";

export default function Footer() {
  return (
    <div className="foot">
      <img className="the-m" src={the_m_img} alt="M" />
      <div className="foot-grid-container">
        <div className="grid-item1">
          <span>
            <ul>
              <li>
                <p>Marchfirst Norway AS</p>
              </li>
              <li>
                <p>Org.nr: 980 705 617</p>
              </li>
              <li>
                <p>Telefon: +47 22 83 40 00</p>
              </li>
              <li>
                <p>
                  Besøksadresse:
                  <br />
                  <span>Drammensveien 130, 0277 Oslo</span>
                </p>
              </li>
              <li>
                <p>
                  Postadresse:
                  <br />
                  <span>Skjellestadåsen 16, 1389 Heggedal</span>
                </p>
              </li>
            </ul>
          </span>
        </div>
        <div className="grid-item2">
          <ul className="link-list">
            <li>
              <a className="link" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="link" href="services">
                SERVICES
              </a>
            </li>
            <li>
              <a className="link" href="about">
                ABOUT US
              </a>
            </li>
            <li>
              <a className="link" href="contact">
                CONTACT
              </a>{" "}
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
