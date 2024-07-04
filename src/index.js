import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Note: The basename prop is used to specify the base URL for all locations.
// When you are on development change the basename to "/".
// When you are on production change the basename to "/car-rent-website".
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/car-rent-website">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
