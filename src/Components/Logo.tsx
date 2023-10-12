import React from "react";
import img from "../Images/Logo-stor.png";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import norwayflag from "../Images/flag_norway.png";
import ukflag from "../Images/flag_uk.png";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";

export default function Logo() {
  const navigate = useNavigate();

  const [language, setLanguage] = useRecoilState(recoilLanguage);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang === "ENG" ? true : false);
    if (lang === "ENG") {
      localStorage.setItem("language", JSON.stringify(true));
    } else {
      localStorage.setItem("language", JSON.stringify(false));
    }
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
