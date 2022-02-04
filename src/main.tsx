import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { WeatherContextProvider } from "./contexts/Weather";

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
