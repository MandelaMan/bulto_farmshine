import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
import "pure-react-carousel/dist/react-carousel.es.css";
import "leaflet/dist/leaflet.css";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
