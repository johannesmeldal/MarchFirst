import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import TopContainer from "./Components/TopContainer";
import Intro from "./Components/Intro";
import HamburgerLinks from "./Components/HamburgerLinks";

const App = () => {
  return (
    <>
      <TopContainer />
      <HamburgerLinks />
      <Intro />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
