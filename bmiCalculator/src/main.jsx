import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import BmiCalculator from "./components/BmiCalculator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BmiCalculator />
  </React.StrictMode>
);
