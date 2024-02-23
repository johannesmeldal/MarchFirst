import React from "react";
import { recoilLanguage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { BsArrow90DegDown } from "react-icons/bs";

function WhoAreWeIntro() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="h-[20vh] w-full flex items-center text-[#04243c] text-2xl lg:text-4xl uppercase tracking-widest">
      <BsArrow90DegDown className="ml-28 mr-5 mt-5" />
      <p>{language ? "Who are we?" : "Hvem er vi?"}</p>
    </div>
  );
}

export default WhoAreWeIntro;
