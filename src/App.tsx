import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import TopContainer from "./Components/TopContainer";
import HamburgerLinks from "./Components/HamburgerLinks";

const App = () => {
  return (
    <div className="bg-custom-gradient ">
      <TopContainer />
      <HamburgerLinks />
      <Outlet />
      <Footer />
    </div>
  );
};
// bg-[#C44404]
export default App;
