import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { WeatherContextProvider } from "./contexts/Weather";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
