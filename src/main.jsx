import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider, { Context } from "./contexts/Context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);
