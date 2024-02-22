import React, { useCallback, useEffect, useState } from "react";
import { recoilLanguage, recoilPage, recoilShowHidden } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Squash as Hamburger } from "hamburger-react";

export default function HamburgerLinks() {
  const [language] = useRecoilState(recoilLanguage);
  const [showHidden, setShowHidden] = useRecoilState(recoilShowHidden);

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
  }

  const [isWindowSmaller, setIsWindowSmaller] = useState(
    window.innerWidth < 1000
  );

  useCallback(() => {
    if (window.innerWidth > 1000) {
      setShowHidden(false);
    }
  }
  , [setShowHidden]);

  // Add an event listener to track window width changes
  useEffect(() => {
    function handleResize() {
      setIsWindowSmaller(window.innerWidth > 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="lg:hidden w-full h-auto flex justify-evenly items-center text-[15px] text-[#002338]"
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3vh",
      }}
    >
      <Hamburger color="#b4daed" toggled={showHidden} toggle={setShowHidden} />
      {showHidden && (
        <>
          <a onClick={() => setActivePage("home")} href="/">
            {language ? "HOME" : "HJEM"}
          </a>

          <a onClick={() => setActivePage("services")} href="services">
            {language ? "SERVICES" : "TJENESTER"}
          </a>

          <a onClick={() => setActivePage("about")} href="about">
            {language ? "ABOUT" : "OM OSS"}
          </a>

          <a onClick={() => setActivePage("contact")} href="contact">
            {language ? "CONTACT" : "KONTAKT"}
          </a>
        </>
      )}
    </div>
  );
}
