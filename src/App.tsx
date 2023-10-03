import React from "react";
import { Container, Button } from "@mui/material";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import Home from "./Components/Home";
import "./App.css";
import Footer from "./Components/Footer";

interface Props {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

const App = ({ darkmode, setDarkmode }: Props) => {
  const handleDarkmode = (props: Props) => {
    darkmode ? setDarkmode(false) : setDarkmode(true);
  };

  return (
    <div>
      <Home />
      <Footer/>
    </div>
  );
};

export default App;

{
  /* <Button fullWidth variant="contained" onClick={
        () => handleDarkmode({darkmode, setDarkmode}) //handleDarkmode må ha med props for å kunne endre på darkmode
        }>
        {darkmode ? <MdOutlineDarkMode/> : <MdLightMode/>}
</Button> */
}
