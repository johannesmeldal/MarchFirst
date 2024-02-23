import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import TopContainer from "./Components/TopContainer";
import Intro from "./Components/Intro";
import HamburgerLinks from "./Components/HamburgerLinks";
import WhoAreWeIntro from "./Components/WhoAreWeIntro";
import Partners from "./Components/Partners";
import ServicesIntro from "./Components/ServicesIntro";
import Consulting from "./Components/Consulting";

const App = () => {
  return (
    <>
      <TopContainer />
      <HamburgerLinks />
      <Intro />
      <WhoAreWeIntro />
      <Partners />
      <ServicesIntro />
      <Consulting />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
