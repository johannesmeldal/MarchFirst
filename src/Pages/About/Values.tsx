import React from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { Text } from "../../TextDatabase/TextObj";

function Values() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div
      className="
    bg-[#728DA8] text-[#FAFAFA] flex justify-evenly gap-5 h-auto pb-10 pt-10 items-center"
    >
      <div className="flex flex-col">
        <p className="ml-[10vw] text-sm lg:text-xl">
          {language
            ? Text.aboutUs.values.header.english
            : Text.aboutUs.values.header.norwegian}
        </p>
        <ul className="ml-[15vw] text-lg lg:text-2xl">
          <li className="">
            {language
              ? Text.aboutUs.values.bullet1.english
              : Text.aboutUs.values.bullet1.norwegian}
          </li>
          <li className="ml-[5vw]">
            {language
              ? Text.aboutUs.values.bullet2.english
              : Text.aboutUs.values.bullet2.norwegian}
          </li>
          <li className="ml-[10vw]">
            {language
              ? Text.aboutUs.values.bullet3.english
              : Text.aboutUs.values.bullet3.norwegian}
          </li>
        </ul>
      </div>

      <p className="text-sm w-[30vw] border-l-2 border-[#002338] pl-5 lg:text-lg">
        {language
          ? Text.aboutUs.values.text.english
          : Text.aboutUs.values.text.norwegian}
      </p>
    </div>
  );
}

export default Values;
