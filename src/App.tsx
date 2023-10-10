import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./Components/Logo";

const App = () => {
  return (
    <>
      <Navbar />
      <Logo />
      <div className="app-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
