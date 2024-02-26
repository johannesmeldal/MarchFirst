import React from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { Text } from "../../TextDatabase/TextObj";
import { BsArrowDown } from "react-icons/bs";

function ProcessIntro() {
  const [language] = useRecoilState(recoilLanguage);
  return (
    <div className="bg-[#002338] h-auto text-[#FAFAFA] flex flex-col gap-5">
      <p className="text-2xl ml-60 mt-10">
        {language ? Text.aboutUs.process.intro.header.english : Text.aboutUs.process.intro.header.norwegian }
      </p>
      <div className="flex flex-row w-[70vw] justify-evenly mx-auto mb-10">
        <p className="w-6/12 text-xl">
          {language
            ? Text.aboutUs.process.intro.text.english :
            Text.aboutUs.process.intro.text.norwegian}
        </p>
        <BsArrowDown className="text-[68px] text-[#728DA8]" />
      </div>
    </div>
  );
}

export default ProcessIntro;
