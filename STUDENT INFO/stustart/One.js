import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
//import Campus from "./Campus";
//import Gallery from "./Gallery";
//import Contact from "./Contact";
//import About from "./About";
import "./One.css";

function One() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <Campus /> */}
        {/* <Gallery /> */}
        {/* <Contact /> */}
        {/* <About /> */}
      </div>
    </div>
  );
}

export default One;
