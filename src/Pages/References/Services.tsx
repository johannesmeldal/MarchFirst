import React from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import Grid from "./Grid";

export default function Services() {
  const [language] = useRecoilState(recoilLanguage);
  return (
    <div>
      <p>Våre tidligere klienter</p>
      <div className="bg-[#002338] flex justify-center py-10">
        <Grid/>
      </div>
    </div>
  );
}
