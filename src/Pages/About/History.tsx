import React from "react";
import { recoilLanguage } from "../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Text } from "../../TextDatabase/TextObj";
import { BsCircleFill, BsCircle } from "react-icons/bs";

function History() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="bg-[#FAFAFA] flex flex-row py-10 justify-evenly items-center gap-20">
      <div className="flex flex-col items-center mt-10 gap-5 lg:flex-row ml-10">
        <BsCircle className="text-[20px] lg:mt-40 text-[#C44404]" />
        <BsCircle className="text-[34px] lg:mt-24" />
        <BsCircle className="text-[55px] lg:mt-10" />
        <BsCircle className="text-[70px] lg:mt-20" />
        <BsCircle className="text-[95px] lg:mt-5" />
        <BsCircleFill className="text-[140px] lg:mb-20" />
      </div>
      <div className="w-auto flex flex-col gap-5 mr-10">
        <p className="text-xl ">
          {language
            ? Text.aboutUs.history.header.english
            : Text.aboutUs.history.header.norwegian}
        </p>
        <p className="text-lg">
          {language
            ? Text.aboutUs.history.body.english
            : Text.aboutUs.history.body.norwegian}
        </p>
      </div>
    </div>
  );
}

export default History;
