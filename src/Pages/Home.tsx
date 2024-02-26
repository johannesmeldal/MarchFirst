import React from "react";
// import "./Home.css";
import Intro from "../Components/HomeComponents.tsx/Intro";
import WhoAreWeIntro from "../Components/HomeComponents.tsx/WhoAreWeIntro";
import Partners from "../Components/HomeComponents.tsx/Partners";
import ServicesIntro from "../Components/HomeComponents.tsx/ServicesIntro";
import Consulting from "../Components/HomeComponents.tsx/Consulting";

export default function Home() {
  return (
    <>
      <Intro />
      <WhoAreWeIntro />
      <Partners />
      <ServicesIntro />
      <Consulting />
    </>
  );
}
