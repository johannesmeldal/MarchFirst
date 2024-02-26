import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import TopContainer from "./Components/TopContainer";
import HamburgerLinks from "./Components/HamburgerLinks";


const App = () => {
  return (
    <>
      <TopContainer />
      <HamburgerLinks />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
