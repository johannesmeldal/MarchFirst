import React from "react";
import "./AboutUs.css";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import PartnerInfo from "./PartnerInfo";

export default function AboutUs() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="about-container">
    </div>
  );
}
