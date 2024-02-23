import React from "react";
import { recoilLanguage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";

export default function Navbar() {
  const [language] = useRecoilState(recoilLanguage);

  // function getPage() {
  //   const url = window.location.href;
  //   const urlArray = url.split("/");
  //   if (urlArray[urlArray.length - 1] === "") {
  //     return "home";
  //   }
  //   const page = urlArray[urlArray.length - 1];

  //   return page;
  // }

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
  }

  return (
    <div className="text-[#002338] h-[3.5vh] w-[40vw] text-center text-lg justify-evenly hidden lg:flex mt-16">
      <a
        className=" hover:border-b-4 hover:border-[#0174BD]"
        onClick={() => setActivePage("home")}
        href="/"
      >
        {language ? "HOME" : "HJEM"} {}
      </a>

      <a
        className=" hover:border-b-4 hover:border-[#0174BD]"
        onClick={() => setActivePage("services")}
        href="services"
      >
        {language ? "SERVICES" : "TJENESTER"}
      </a>

      <a
        className=" hover:border-b-4 hover:border-[#0174BD]"
        onClick={() => setActivePage("about")}
        href="about"
      >
        {language ? "ABOUT" : "OM OSS"}
      </a>

      <a
        className=" hover:border-b-4 hover:border-[#0174BD]"
        onClick={() => setActivePage("contact")}
        href="contact"
      >
        {language ? "CONTACT" : "KONTAKT"}
      </a>
    </div>
  );
}
