import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Grab the root div from public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App inside it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);