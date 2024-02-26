import React from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { Text } from "../../TextDatabase/TextObj";
import { FaRegSquare } from "react-icons/fa";


function Process() {
  const [language] = useRecoilState(recoilLanguage);
  return (
    <div className="bg-[#FAFAFA] text-lg pt-10 pb-[20vh] flex flex-row gap-10 items-center justify-evenly">
      <div>
        <p className="w-[60vw]">
          {language
            ? Text.aboutUs.process.body.english
            : Text.aboutUs.process.body.norwegian}
        </p>
      </div>
      <div className="flex flex-wrap w-[10vw]">
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
        <FaRegSquare className="text-[50px]" />
      </div>
    </div>
  );
}

export default Process;
