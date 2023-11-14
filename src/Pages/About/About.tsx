import React from "react";
import "./AboutUs.css";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import PartnerInfo from "./PartnerInfo";

export default function AboutUs() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="about-container">
      <div
        style={{
          borderBottom: "1px solid #00aeef",
          marginTop: "10vh",
        }}
      >
        <Typography
          sx={{
            marginBottom: "1vh",
            marginTop: "5vh",
          }}
          variant="h3"
          component="p"
        >
          {language ? "THIS IS US:" : "DETTE ER OSS:"}
        </Typography>
      </div>
      <PartnerInfo />
    </div>
  );
}
