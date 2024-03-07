import React from "react";
// import { recoilLanguage } from "../../Recoil/atoms";
// import { useRecoilState } from "recoil";
import GoogleMaps from "../../Components/GoogleMaps";

export default function Contact() {
  // const [language] = useRecoilState(recoilLanguage);

  return (
    <div className=" flex justify-center items-center min-h-[55vh] py-10">
      <div className="bg-[#FAFAFA] w-[70vw] flex flex-col gap-10 lg:flex-row justify-evenly py-10 px-10 shadow-xl items-center">
        <div className="flex flex-col">
          <p>Marchfirst Norway AS</p>
          <p>Org.nr: 980 705 617</p>
          <p>Telefon: +47 22 83 40 00</p>
          <p>
            Besøksadresse:
            <br />
            <span>Drammensveien 130, 0277 Oslo</span>
          </p>
          <p>
            Postadresse:
            <br />
            <span>Skjellestadåsen 16, 1389 Heggedal</span>
          </p>
        </div>

        <div className="h-[30vh]">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}
