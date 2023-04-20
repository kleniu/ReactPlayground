import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalContextProvider } from "./state/global-data";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
