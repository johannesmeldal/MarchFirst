import React from "react";
import "./Services.css";
import Projects from "../Components/Projects";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";

export default function Services() {
  const [language] = useRecoilState(recoilLanguage);
  return (
    <div className="service-container">
    </div>
  );
}
