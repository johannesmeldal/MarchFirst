import React from "react";
import { Text } from "../../TextDatabase/TextObj";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { recoilShowYear } from "../../Recoil/atoms";

function Grid() {
  const [language] = useRecoilState(recoilLanguage);
  const [showYear] = useRecoilState(recoilShowYear);

  return (
    <div className="flex py-[5vh] flex-wrap gap-10 bg-opacity-30 bg-black justify-center min-w-[100vw] min-h-[50vh]">
      {Text.projects.map((project) => {
        if (project.year === String(showYear) || showYear === 0)
          return (
            <div className="w-[70vw] h-[30vh] bg-[#FAFAFA] flex flex-col justify-center items-center rounded-md lg:w-[40vw] xl:w-[30vw] lg:rounded-lg xl:rounded-xl">
              <p className="text-[#002338] border-b-2 text-xl ">
                {project.name}
              </p>
              <p className="mb-5">{project.year}</p>
              <p className="w-auto mx-10 text-center text-lg">
                {language
                  ? project.description.english
                  : project.description.norwegian}
              </p>
              <p className="mt-5 text-[#728DA8]">
                {language ? project.role.english : project.role.norwegian}
              </p>
            </div>
          );
        else return null;
      })}
    </div>
  );
}

export default Grid;
