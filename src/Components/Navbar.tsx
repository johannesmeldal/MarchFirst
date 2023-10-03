import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <ul>
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
  );
}
