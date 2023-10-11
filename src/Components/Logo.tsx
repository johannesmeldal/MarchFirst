import React from "react";
import img from "../Images/Logo-stor.png";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import norwayflag from "../Images/flag_norway.png";
import ukflag from "../Images/flag_uk.png";

export default function Logo() {
  const navigate = useNavigate();

  const [language, setLanguage] = React.useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    setLanguage(language === "ENG" ? true : false);
  };

  return (
    <div className="logo-container">
      <img
        className="logo-image"
        src={img}
        alt="mf-logo"
        onClick={() => navigate("/")}
      />
      <div className="language-chooser">
        <div className={language ? "inactiveLang" : "activeLang"}>
          <img
            onClick={() => handleLanguageChange("NOR")}
            className="flag"
            src={norwayflag}
            alt="NOR"
            style={{
              filter: language ? "grayscale(100%)" : "grayscale(0%)",
            }}
          />
        </div>
        <div className={language ? "activeLang" : "inactiveLang"}>
          <img
            onClick={() => handleLanguageChange("ENG")}
            className="flag"
            src={ukflag}
            alt="ENG"
            style={{
              filter: language ? "grayscale(0%)" : "grayscale(100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
