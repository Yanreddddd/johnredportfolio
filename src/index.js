// instead of ReactDOM.render, I've imported the render function directly from react-dom for a cleaner code
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import "./index.css";

import { StateContext } from "./constants/StateContext";

const container = document.getElementById("root");
const root = createRoot(container)
const Strict = React.StrictMode;

root.render(
  <Strict>
    <StateContext>
      <App />
    </StateContext>
  </Strict>,
);
