import React from "react";
import "./Navbar.css";
import Typography from "@mui/material/Typography";
import { recoilLanguage, recoilPage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [language] = useRecoilState(recoilLanguage);
  const [page] = useRecoilState(recoilPage);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const scrollThreshold = window.innerHeight * 0.4;
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
  }

  return (
    <div
      className="nav-container"
      style={{
        boxShadow: hasShadow ? "0 0 10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <ul>
        <li>
          <Typography
            onClick={() => setActivePage("home")}
            component="a"
            href="/"
            style={{
              textDecoration: page === "home" ? "underline" : "none",
              textDecorationColor: "#00aeef",
            }}
          >
            {language ? "HOME" : "HJEM"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setActivePage("services")}
            component="a"
            href="Services"
            style={{
              textDecoration: page === "services" ? "underline" : "none",
              textDecorationColor: "#00aeef",
            }}
          >
            {language ? "SERVICES" : "TJENESTER"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setActivePage("about")}
            component="a"
            href="about"
            style={{
              textDecoration: page === "about" ? "underline" : "none",
              textDecorationColor: "#00aeef",
            }}
          >
            {language ? "ABOUT" : "OM OSS"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setActivePage("contact")}
            component="a"
            href="contact"
            style={{
              textDecoration: page === "contact" ? "underline" : "none",
              textDecorationColor: "#00aeef",
            }}
          >
            {language ? "CONTACT" : "KONTAKT"}
          </Typography>
        </li>
      </ul>
    </div>
  );
}
