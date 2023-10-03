import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <div style={{ backgroundColor: "black", height: "100px" }}>heiii</div> */}
    <App />
  </React.StrictMode>
);
