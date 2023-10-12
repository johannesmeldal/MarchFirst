import React from "react";
import Typography from "@mui/material/Typography";
import { recoilLanguage, recoilPage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";

interface props {
  show: boolean;
}

export default function HamburgerLinks({ show }: props) {
  const [language] = useRecoilState(recoilLanguage);
  const [page] = useRecoilState(recoilPage);

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
  }

  const style = {
    textDecoration: "none",
    textDecorationColor: "#00aeef",
    fontWeight: "bold",
    color: "#b4daed",
    "&:hover": {
      textDecoration: "underline",
      color: "#fff",
    },
  };

  return (
    <div
      className="hidden-nav-container"
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: show ? "flex" : "none",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
    >
      <Typography
        onClick={() => setActivePage("home")}
        component="a"
        href="/"
        sx={{
          ...style,
          textDecoration: page === "home" ? "underline" : "none",
        }}
      >
        {language ? "HOME" : "HJEM"}
      </Typography>

      <Typography
        onClick={() => setActivePage("services")}
        component="a"
        href="Services"
        sx={{
          ...style,
          textDecoration: page === "services" ? "underline" : "none",
        }}
      >
        {language ? "SERVICES" : "TJENESTER"}
      </Typography>

      <Typography
        onClick={() => setActivePage("about")}
        component="a"
        href="about"
        sx={{
          ...style,
          textDecoration: page === "about" ? "underline" : "none",
        }}
      >
        {language ? "ABOUT" : "OM OSS"}
      </Typography>

      <Typography
        onClick={() => setActivePage("contact")}
        component="a"
        href="contact"
        sx={{
          ...style,
          textDecoration: page === "contact" ? "underline" : "none",
        }}
      >
        {language ? "CONTACT" : "KONTAKT"}
      </Typography>
    </div>
  );
}
