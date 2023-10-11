import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./Components/Logo";
import BottomNav from "./Components/BottomNav";
import Intro from "./Components/Intro";

const App = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Intro/>
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
};

export default App;
