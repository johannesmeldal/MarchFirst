import "./Intro.css";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../Recoil/atoms";
import { Text } from "../TextDatabase/TextObj";
import munkedamsveien_img from "../Images/Munkedamsveien.png";

export default function Intro() {
  const [language] = useRecoilState(recoilLanguage);

  return (
    <div className="bg-[#04243c] flex flex-col h-auto justify-center gap-10 items-center lg:flex-row">
      <img
        style={{ objectFit: "cover" }}
        src={munkedamsveien_img}
        alt="Munkedamsveien"
        className="w-[100vw] h-[50vh] object-cover lg:w-6/12"
      />
      <div className="  items-center flex flex-col justify-evenly mb-10 lg:w-6/12 ">
        <p className="text-xl text-[#FAFAFA] w-[80vw] border-l-2 pl-5 border-[#C44404] lg:w-6/12 lg:text-2xl">
          {language
            ? Text.home.introText.text.english
            : Text.home.introText.text.norwegian}
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
