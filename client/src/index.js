import React from "react";
import ReactDOM from "react-dom";
import Media from "./pages/MediaGif"
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Media />,
  document.getElementById("root")
);
registerServiceWorker();
