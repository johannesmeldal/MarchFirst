import React from "react";
import "./Contact.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import petter from "../../Images/Petter_svarthvit.jpg";
import alex from "../../Images/Alex_sorthvit.jpg";
import CardActionArea from "@mui/material/CardActionArea";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { useEffect, useState } from "react";

export default function PartnerCards() {
  const [language] = useRecoilState(recoilLanguage);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="partner-div">
      <Card
        elevation={10}
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <CardActionArea>
          <img
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
            src={petter}
            alt="person"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Petter Mannsverk Andresen
            </Typography>
            <Typography variant="subtitle1">FOUNDING PARTNER</Typography>
            <Typography variant="body2">
              <br />
              {language ? "Phone:" : "Telefon:"} +47 951 46 999
              <br /> <br />
              {language ? "E-mail:" : "E-post:"} pma@marchfirst.no
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        elevation={10}
        sx={{
          width: width > 600 ? "fit-content" : "100vw",
          bgcolor: "primary.dark",
        }}
      >
        <CardActionArea>
          <img
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
            src={alex}
            alt="person"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Alexander Åbyholm
            </Typography>
            <Typography variant="subtitle1">MANAGING PARTNER</Typography>
            <Typography variant="body2">
              <br />
              {language ? "Phone:" : "Telefon:"} +47 995 44 421 <br />
              <br />
              {language ? "E-mail:" : "E-post:"} aa@marchfirst.no
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
