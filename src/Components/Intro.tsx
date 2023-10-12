import "./Intro.css";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";
import { Text } from "../TextDatabase/TextObj";

export default function Intro() {
  const [language] = useRecoilState(recoilLanguage);

  function getPage() {
    const url = window.location.href;
    const urlArray = url.split("/");
    if (urlArray[urlArray.length - 1] === "") {
      return "home";
    }
    const page = urlArray[urlArray.length - 1];

    return page;
  }

  function getHeader() {
    if (getPage() === "home") {
      return language
        ? Text.home.introText.header.english
        : Text.home.introText.header.norwegian;
    }
    if (getPage() === "services") {
      return language
        ? Text.services.introText.header.english
        : Text.services.introText.header.norwegian;
    }
    if (getPage() === "about") {
      return language
        ? Text.aboutUs.introText.header.english
        : Text.aboutUs.introText.header.norwegian;
    }
    if (getPage() === "contact") {
      return language
        ? Text.contact.introText.header.english
        : Text.contact.introText.header.norwegian;
    }
  }

  function getText() {
    if (getPage() === "home") {
      return language
        ? Text.home.introText.text.english
        : Text.home.introText.text.norwegian;
    }
    if (getPage() === "services") {
      return language
        ? Text.services.introText.text.english
        : Text.services.introText.text.norwegian;
    }
    if (getPage() === "about") {
      return language
        ? Text.aboutUs.introText.text.english
        : Text.aboutUs.introText.text.norwegian;
    }
    if (getPage() === "contact") {
      return language
        ? Text.contact.introText.text.english
        : Text.contact.introText.text.norwegian;
    }
  }
  return (
    <div className="intro-container">
      <div
        style={{
          width: "50%",
          marginLeft: "5vw",
          marginTop: "5vh",
          marginBottom: "5vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{getHeader()}</Typography>
        <Typography variant="body1">{getText()}</Typography>
      </div>
    </div>
  );
}
