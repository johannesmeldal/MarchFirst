import React from "react";
import "./Contact.css";
import petter from "../../Images/Petter_svarthvit.jpg";
import alex from "../../Images/Alex_sorthvit.jpg";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { useEffect, useState } from "react";

export default function PartnerCards() {
  const [language] = useRecoilState(recoilLanguage);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div></div>
  )
}
