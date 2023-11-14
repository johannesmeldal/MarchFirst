import React from "react";
import { Text } from "../../TextDatabase/TextObj";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import alex from "../../Images/Alex_sorthvit.jpg";
import petter from "../../Images/Petter_svarthvit.jpg";

export default function PartnerInfo() {
  const [language] = useRecoilState(recoilLanguage);

  function getDescription(name: string) {
    if (name === "petter") {
      return language ? (
        <List>
          {Text.aboutUs.petter.english.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {Text.aboutUs.petter.norwegian.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      );
    }
    if (name === "alex") {
      return language ? (
        <List>
          {Text.aboutUs.alex.english.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {Text.aboutUs.alex.norwegian.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      );
    }
  }

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
      {getDescription("alex")}

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
      {getDescription("petter")}
    </div>
  );
}
