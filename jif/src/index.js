import React from "react";
import ReactDOM from "react-dom";
import Media from "./pages/Media"
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Media />,
  document.getElementById("root")
);
registerServiceWorker();
