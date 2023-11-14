import React from "react";
import "./Navbar.css";
import Typography from "@mui/material/Typography";
import { recoilLanguage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import HamburgerLinks from "./HamburgerLinks";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [language] = useRecoilState(recoilLanguage);
  const [hasShadow, setHasShadow] = useState(false);
  const [showHidden, setShowHidden] = useState(false);

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

  const [isWindowSmaller, setIsWindowSmaller] = useState(
    window.innerWidth < 1000
  );

  // Add an event listener to track window width changes
  useEffect(() => {
    function handleResize() {
      setIsWindowSmaller(window.innerWidth > 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getPage() {
    const url = window.location.href;
    const urlArray = url.split("/");
    if (urlArray[urlArray.length - 1] === "") {
      return "home";
    }
    const page = urlArray[urlArray.length - 1];

    return page;
  }

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
    // setPage(p);
  }

  useEffect(() => {
    if (isWindowSmaller) {
      setShowHidden(false);
    }
  }, [isWindowSmaller]);

  return (
    <div
      className="nav-container"
      style={{
        boxShadow: hasShadow ? "0 0 10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="nav-show-btn">
        <Hamburger
          color="#b4daed"
          toggled={showHidden}
          toggle={setShowHidden}
        />
      </div>

      <Typography
className="nav-child"
        onClick={() => setActivePage("home")}
        component="a"
        href="/"
        sx={{
          color: "secondary.light",
          textDecoration: getPage() === "home" ? "underline" : "none",
          textDecorationColor: "#00aeef",
          fontWeight: "bold",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {language ? "HOME" : "HJEM"} {}
      </Typography>

      <Typography
className="nav-child"
        onClick={() => setActivePage("services")}
        component="a"
        href="services"
        sx={{
          color: "secondary.light",
          textDecoration: getPage() === "services" ? "underline" : "none",
          textDecorationColor: "#00aeef",
          fontWeight: "bold",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {language ? "SERVICES" : "TJENESTER"}
      </Typography>

      <Typography
className="nav-child"
        onClick={() => setActivePage("about")}
        component="a"
        href="about"
        sx={{
          color: "secondary.light",
          textDecoration: getPage() === "about" ? "underline" : "none",
          textDecorationColor: "#00aeef",
          fontWeight: "bold",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {language ? "ABOUT" : "OM OSS"}
      </Typography>

      <Typography
className="nav-child"
        onClick={() => setActivePage("contact")}
        component="a"
        href="contact"
        sx={{
          color: "secondary.light",
          textDecoration: getPage() === "contact" ? "underline" : "none",
          textDecorationColor: "#00aeef",
          fontWeight: "bold",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {language ? "CONTACT" : "KONTAKT"}
      </Typography>
      <HamburgerLinks show={showHidden} />
    </div>
  );
}
