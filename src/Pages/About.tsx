import React from "react";
import "./AboutUs.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import petter from "../Images/Petter_svarthvit.jpg";
import alex from "../Images/Alex_sorthvit.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardActionArea from "@mui/material/CardActionArea";
import { Paper } from "@mui/material";
import { Text } from "../TextDatabase/TextObj";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";

export default function AboutUs() {
  const [language] = useRecoilState(recoilLanguage);
  const [person, setPerson] = React.useState("");

  function handleClick(name: string) {
    setPerson(name);
    if (name === "petter") {
    }
    if (name === "alex") {
    }
  }

  function getDescription(name: string) {
    if (name === "petter") {
      return language ? (
        <List sx={{ padding: "2%" }}>
          {Text.aboutUs.petter.english.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        <List sx={{ padding: "2%" }}>
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
        <List sx={{ padding: "2%" }}>
          {Text.aboutUs.alex.english.map((text, index) => (
            <ListItem key={index}>
              <Typography variant="h5" component="div">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        <List sx={{ padding: "2%" }}>
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
    <div className="about-container">
      <Typography variant="h4" component="p">
        DETTE ER OSS:
      </Typography>
      <hr />
      <div className="partner-div">
        <Card
          onClick={() => handleClick("petter")}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            maxWidth: "36%",
            boxShadow: person === "petter" ? "10" : "0",
            marginRight: "10vw",
            "&:hover": {
              bgcolor: "primary.dark",
              boxShadow: 15,
            },
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
              <Typography variant="subtitle1" color="textSecondary">
                FOUNDING PARTNER
              </Typography>
              <Typography variant="body2">
                <br />
                Telefon: +47 951 46 999
                <br /> <br />
                E-post: pma@marchfirst.no
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          onClick={() => handleClick("alex")}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            maxWidth: "36%",
            boxShadow: person === "alex" ? "10" : "0",
            "&:hover": {
              bgcolor: "primary.dark",
              boxShadow: 15,
            },
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
              <Typography variant="subtitle1" color="textSecondary">
                MANAGING PARTNER
              </Typography>
              <Typography variant="body2">
                <br />
                Telefon: +47 995 44 421 <br />
                <br />
                E-post: aa@marchfirst.no
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Paper
        elevation={3}
        className="description-div"
        sx={{ width: "60vw", marginTop: "2%" }}
      >
        {getDescription(person)}
      </Paper>
    </div>
  );
}
