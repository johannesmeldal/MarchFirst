import "./Intro.css";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";
import { Text } from "../TextDatabase/TextObj";
import img from "../Images/Munkedamsveien.png";

export default function Intro() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="bg-[#04243c] flex h-[50vh] tex">
      <img
        style={{ objectFit: "cover" }}
        src={img}
        alt="Munkedamsveien"
        className="w-[50vw] h-[50vh] object-cover"
      />
      <div className=" w-6/12 items-center flex flex-col justify-evenly">
        <p className="w-6/12 text-lg lg:text-2xl ">
          {Text.home.introText.text.norwegian}
        </p>
      </div>
    </div>
  );

  // function getPage() {
  //   const url = window.location.href;
  //   const urlArray = url.split("/");
  //   if (urlArray[urlArray.length - 1] === "") {
  //     return "home";
  //   }
  //   const page = urlArray[urlArray.length - 1];

  //   return page;
  // }

  // function getHeader() {
  //   if (getPage() === "home") {
  //     return language
  //       ? Text.home.introText.header.english
  //       : Text.home.introText.header.norwegian;
  //   }
  //   if (getPage() === "services") {
  //     return language
  //       ? Text.services.introText.header.english
  //       : Text.services.introText.header.norwegian;
  //   }
  //   if (getPage() === "about") {
  //     return language
  //       ? Text.aboutUs.introText.header.english
  //       : Text.aboutUs.introText.header.norwegian;
  //   }
  //   if (getPage() === "contact") {
  //     return language
  //       ? Text.contact.introText.header.english
  //       : Text.contact.introText.header.norwegian;
  //   }
  // }

  // function getText() {
  //   if (getPage() === "home") {
  //     return language
  //       ? Text.home.introText.text.english
  //       : Text.home.introText.text.norwegian;
  //   }
  //   if (getPage() === "services") {
  //     return language
  //       ? Text.services.introText.text.english
  //       : Text.services.introText.text.norwegian;
  //   }
  //   if (getPage() === "about") {
  //     return language
  //       ? Text.aboutUs.introText.text.english
  //       : Text.aboutUs.introText.text.norwegian;
  //   }
  //   if (getPage() === "contact") {
  //     return language
  //       ? Text.contact.introText.text.english
  //       : Text.contact.introText.text.norwegian;
  //   }
  // }
}
