import React from "react";
import ReactDOM from "react-dom/client";
import DSPToolkitApp from "./DSPToolkitApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
      <DSPToolkitApp />
    </div>
  </React.StrictMode>
);
