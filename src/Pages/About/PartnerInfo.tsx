import React from "react";
// import { Text } from "../../TextDatabase/TextObj";
// import { useRecoilState } from "recoil";
// import { recoilLanguage } from "../../Recoil/atoms";
import alex from "../../Images/Alex_sorthvit.jpg";
import petter from "../../Images/Petter_svarthvit.jpg";

export default function PartnerInfo() {
  // const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="partner-info">
      <img
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
          borderRadius: "2%",
        }}
        src={alex}
        alt="person"
      />

      <img
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
          borderRadius: "2%",
        }}
        src={petter}
        alt="person"
      />
    </div>
  );
}
