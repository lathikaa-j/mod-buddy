import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./game";
// @ts-ignore: allow importing CSS without type declarations
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);