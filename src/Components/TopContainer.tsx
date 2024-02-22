import React from "react";
import img from "../Images/Logo-stor.png";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { BsArrowDown } from "react-icons/bs";

export default function Logo() {
  const navigate = useNavigate();
  const [language, setLanguage] = useRecoilState(recoilLanguage);

  const handleLanguageChange = (lang: string) => {
    const newLanguage = lang === "ENG";
    setLanguage(newLanguage);
    localStorage.setItem("language", JSON.stringify(newLanguage));
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLanguage(JSON.parse(lang));
    }
  }, [setLanguage]);

  return (
    <div
      // className="logo-container"
      className="h-[24vh] flex
      text-[#002338] 
      text-center text-[15px] justify-evenly items-center "
    >
      <img
        className="h-[10vh]"
        src={img}
        alt="mf-logo"
        onClick={() => navigate("/")}
      />
      <Navbar />
      <div
        className="flex flex-row hover:underline cursor-pointer"
        onClick={() => handleLanguageChange(language ? "NOR" : "ENG")}
      >
        <p>{language ? "ENG" : "NOR"}</p>
        <BsArrowDown className=" m-1" />
      </div>
    </div>
  );
}
