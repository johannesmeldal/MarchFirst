import React from "react";
import img from "../Images/Logo-stor.png";
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
        className=" h-20 flex flex-row hover:border-b-4 hover:border-[#0174BD] cursor-pointer gap-1"
        onClick={() => handleLanguageChange(language ? "NOR" : "ENG")}
      >
        <p className="text-2xl mt-12">{language ? "NOR" : "ENG"}</p>
        <BsArrowDown className=" mt-14" />
      </div>
    </div>
  );
}
