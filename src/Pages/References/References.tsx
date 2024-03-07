import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import Grid from "./Grid";
import { Pagination } from "./Pagination";

export default function Services() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="flex flex-col min-h-[70vh]">
      <div className="flex flex-col my-[3vh]">
        <div className="mb-[10vh] flex flex-col gap-5 mx-[10vw]">
          <p className="text-xl lg:text-[40px] text-[#002338]">
            {language ? "Our projects" : "Våre prosjekter"}
          </p>
          <p className="ml-5">
            {language
              ? "Here you can see some of the projects we have worked on the past years"
              : "Her kan du se noen av prosjektene vi har jobbet med de siste årene"}
          </p>
        </div>
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
      <div className="flex justify-center">
        <Grid />
      </div>
    </div>
  );
}
