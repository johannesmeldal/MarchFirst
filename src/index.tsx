import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./context/AppContext";
import Logo from "./Components/Logo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Logo />
    <App />
  </React.StrictMode>
);
