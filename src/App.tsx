import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./Components/Logo";
import BottomNav from "./Components/BottomNav";
import Intro from "./Components/Intro";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Logo />
        <Navbar />
        <Intro />
        <Outlet />
        <BottomNav />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
