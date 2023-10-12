import React from "react";
import "./Navbar.css";
import Typography from "@mui/material/Typography";
import { recoilLanguage, recoilPage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";

export default function Navbar() {
  const [language] = useRecoilState(recoilLanguage);
  const [page, setPage] = useRecoilState(recoilPage);

  return (
    <div className="nav-container">
      <ul>
        <li>
          <Typography
            onClick={() => setPage("home")}
            className={page === "home" ? "active-page" : ""}
            component="a"
            href="/"
          >
            {language ? "HOME" : "HJEM"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setPage("services")}
            className={page === "services" ? "active-page" : ""}
            component="a"
            href="Services"
          >
            {language ? "SERVICES" : "TJENESTER"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setPage("about")}
            className={page === "about" ? "active-page" : ""}
            component="a"
            href="aboutus"
          >
            {language ? "ABOUT" : "OM OSS"}
          </Typography>
        </li>
        <li>
          <Typography
            onClick={() => setPage("contact")}
            className={page === "contact" ? "active-page" : ""}
            component="a"
            href="contact"
          >
            {language ? "CONTACT" : "KONTAKT"}
          </Typography>
        </li>
      </ul>
    </div>
  );
}
