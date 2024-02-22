import React from "react";
import "./Navbar.css";
import Typography from "@mui/material/Typography";
import { recoilLanguage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import HamburgerLinks from "./HamburgerLinks";


export default function Navbar() {
  const [language] = useRecoilState(recoilLanguage);

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
  }

  return (
    <div className=" h-[10vh] w-[40vw] text-center text-[15px] justify-evenly items-center hidden lg:flex">

      <a
        className=" hover:font-bold "
        onClick={() => setActivePage("home")}
        href="/"
      >
        {language ? "HOME" : "HJEM"} {}
      </a>

      <a
        className=" hover:underline"
        onClick={() => setActivePage("services")}
        href="services"
      >
        {language ? "SERVICES" : "TJENESTER"}
      </a>

      <a
        className=" hover:underline"
        onClick={() => setActivePage("about")}
        href="about"
      >
        {language ? "ABOUT" : "OM OSS"}
      </a>

      <a
        className=" hover:underline"
        onClick={() => setActivePage("contact")}
        href="contact"
      >
        {language ? "CONTACT" : "KONTAKT"}
      </a>
      {/* <HamburgerLinks show={showHidden} /> */}
    </div>
  );
}
