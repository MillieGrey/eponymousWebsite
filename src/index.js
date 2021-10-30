import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/bootstrap/bootstrap.min.css";
import "./css/style.css";
import App from "./App";
import ParticlesBackground from "./components/ParticlesBackground";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
    <ParticlesBackground />
  </React.StrictMode>,
  document.getElementById("root")
);
