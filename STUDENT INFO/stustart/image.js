import React from "react";
import screenshot from "./screenshot.png";
import "./Img.css"; // Import CSS for styling
import Header from "../header";

export default function Img() {
    return (
     
        <div className="image-container">
           <div style={{marginRight:"0px",width:"1580px"}}>  <Header/></div>
           <center> <img src={screenshot} alt="DCME" /></center>
        </div>
    );
}
