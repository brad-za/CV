import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./style/globals.scss";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
