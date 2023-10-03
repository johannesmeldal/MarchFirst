import React from "react";
import "./Footer.css";
import img from "../Images/MF_letter.png";

export default function Footer() {
  return (
    <div className="Foot">
      <img className="the-m" src={img} alt="M" />
      <div className="foot-grid-container">
        <div className="grid-item">
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
                  Besøksadresse: <br />
                  Drammensveien 130, 0277 Oslo
                </p>
              </li>
              <li>
                <p>
                  Postadresse <br />
                  Skjellestadåsen 16, 1389 Heggedal
                </p>
              </li>
            </ul>
          </span>
        </div>
        <div className="grid-item">
          <ul className="link-list">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}
