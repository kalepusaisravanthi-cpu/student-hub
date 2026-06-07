// src/App.js
import React from "react";
import ProjectsSection from "./ProjectsSection";
import "./Projectmain.css";

// Sample Project Data
const IndustrialProjects = [
  { 
    image: "https://th.bing.com/th/id/OIP.hgA5BlMj5k44kacAil_cdQHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    title: "COLOR DETECTION", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> SANTHOSH SIR</p>
        <p><strong>FRONTEND:</strong> PYTHON</p>
        <p><strong>BACKEND:</strong> OPEN CV2</p>
        <p><strong>PROJECT TYPE:</strong>COLOR DETECTION</p>
      </div>
    )
  },
  { 
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qHFHEnWS4kzx-wTIv22Vbg.png", 
    title: "DROWSY DRIVER DETECTION", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> SANTHOSH SIR</p>
        <p><strong>FRONTEND:</strong> PYTHON</p>
        <p><strong>BACKEND:</strong> OPEN CV2</p>
        <p><strong>PROJECT TYPE:</strong>DROWSY DRIVER </p>
      </div>
    )
  },
  { 
    image: "https://analyticsindiamag.com/wp-content/uploads/2020/06/google-translate-scaled.jpg", 
    title: "LANGUAGE TRANSLATOR", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> SANTHOSH SIR</p>
        <p><strong>FRONTEND:</strong> PYTHON</p>
        <p><strong>BACKEND:</strong> OPEN CV2</p>
        <p><strong>PROJECT TYPE:</strong>LANGUAGE TRANSLATOR</p>
      </div>
    )
  },
  { 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDyoYrjZVUIW_3IqufxsKYz7c219mKNL8hg&s", 
    title: "PLANT DISEASE", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> SANTHOSH SIR</p>
        <p><strong>FRONTEND:</strong> PYTHON</p>
        <p><strong>BACKEND:</strong> OPEN CV2</p>
        <p><strong>PROJECT TYPE:</strong>PLANT DISEASE</p>
      </div>
    )
  },
  {
     image: "https://th.bing.com/th/id/OIP.Zl6gByjik_Gh_A6HXuEUpwHaE8?rs=1&pid=ImgDetMain", 
     title: "EMPLOYEE MANAGEMENT", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> HEMANTH SIR</p>
        <p><strong>FRONTEND:</strong> REACT</p>
        <p><strong>BACKEND:</strong> NODE JS</p>
        <p><strong>PROJECT TYPE:</strong>EMPLOYEE MANAGEMENT</p>
      </div>
    )},
     ];

const labProjects = [
  { 
    image: "https://sumsapplication.com/wp-content/uploads/2023/04/college-management-2.png", 
    title: "STUDENT INFO", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> VEERE BABU</p>
        <p><strong>FRONTEND:</strong> REACT</p>
        <p><strong>BACKEND:</strong> Not specified</p>
        <p><strong>PROJECT TYPE:</strong> STUDENT CREDENTIALS</p>
      </div>
    )
  },  
  { 
    image: "https://5.imimg.com/data5/VD/TN/IY/SELLER-111358185/lab-management--500x500.jpg", 
    title: "LAB MANAGEMENT", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> PRAVALIKA MADAM</p>
        <p><strong>FRONTEND:</strong> REACT</p>
        <p><strong>BACKEND:</strong> NODE JS,XAMPP</p>
        <p><strong>PROJECT TYPE:</strong> LAB MANAGING SYSTEM</p>
      </div>
    )
  },  
  { 
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/5b5aa064650421.Y3JvcCw1MzQsNDE4LDU2MSw1OTQ.png", 
    title: "TOUR GUIDE", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> PAVANI MADAM</p>
        <p><strong>FRONTEND:</strong> REACT</p>
        <p><strong>BACKEND:</strong> Not specified</p>
        <p><strong>PROJECT TYPE:</strong> TOUR GUIDE</p>
      </div>
    )
  },  
  { 
    image: "https://www.shutterstock.com/shutterstock/photos/2370867591/display_1500/stock-vector-to-let-board-a-size-color-ready-to-print-mockup-vector-2370867591.jpg", 
    title: "TO-LET", 
    description: (
      <div>
        <p><strong>GUIDE:</strong> LAKSHMI DEVI MADAM</p>
        <p><strong>FRONTEND:</strong> REACT</p>
        <p><strong>BACKEND:</strong> Not specified</p>
        <p><strong>PROJECT TYPE:</strong> TO-LET BOARD</p>
      </div>
    )
  },
  { image: "https://www.expertrons.com/blog/wp-content/uploads/2022/02/Custom-Size-%E2%80%93-11-1.png",
     title: "CAMPUS PLACEMENT",
     description:    <div>
     <p><strong>GUIDE:</strong> PRATUSHA MADAM</p>
     <p><strong>FRONTEND:</strong> REACT</p>
     <p><strong>BACKEND:</strong> SPRING BOOT</p>
     <p><strong>PROJECT TYPE:</strong> CAMPUS</p>
   </div> },
 ];

function Projectmain() {
  return (
    <div className="app">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://www.pexels.com/video/silver-glitters-in-the-water-10296173/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 style={{marginLeft:"30px",fontFamily:"revert-layer"}}>Projects</h1>
      <div className="projects-container">
        <ProjectsSection title="Industrial Projects" projects={IndustrialProjects} />
        <ProjectsSection title="Lab Projects" projects={labProjects} />
      </div>
    </div>
  );
}

export default Projectmain;
