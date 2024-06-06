import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Errorpage from "./js/Errorpage";
import Contact from "./js/Contact";

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated code

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/error" element={<Errorpage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </HashRouter>
);
