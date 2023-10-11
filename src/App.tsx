import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./Components/Logo";

const App = () => {
  return (
    <>
      <Logo />
      <Navbar />
      {/* <div className="app-container"></div> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
