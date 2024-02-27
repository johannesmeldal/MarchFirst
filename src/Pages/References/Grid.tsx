import React from "react";
import { Text } from "../../TextDatabase/TextObj";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";

function Grid() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="flex flex-wrap w-[80vw] items-center justify-center">
      {Text.projects.map((project) => {
        return (
          <div className="w-[20vw] h-[20vh] bg-[#728DA8] m-5 flex flex-col justify-center items-center">
            <p className="text-[#FFFFFF] border-b-2 ">{project.name}</p>
            <p className="mb-5">{project.year}</p>
            <p>
              {language
                ? project.description.english
                : project.description.norwegian}
            </p>
            <p className="mt-5">{language ? project.role.english : project.role.norwegian}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
