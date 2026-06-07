import React, { useState } from "react";
import "./App.css";
import { useNavigate } from 'react-router-dom'
const Menu = () => {
  const [activeTab, setActiveTab] = useState("home");
  const Nav = useNavigate();
  const renderContent = () => {
    switch (activeTab) {
      case "personal details":
        return    Nav('/stu1');
      case "lecturerss":
        return <p>View and Manage Lecturer details here.</p>;
      case "lecturers":
        return <p>Manage Lecturer Registration here.</p>;
      case "students":
        return <p>View and manage Student Details here.</p>;
      case "Logout":
        return <p>This is an example of a sidebar layout with tabs.</p>;
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
      <div id="d" style={{backgroundColor:"#4f4f51"}} >
      <div style={{display:"flex"}}><img  id="im" src="https://tse1.mm.bing.net/th?id=OIP.Rb6bHyViAEzJNzPHqwl0UgAAAA&pid=Api&P=0&h=180" alt="no img" /><div style={{marginLeft:"500px", marginTop:"25px",color:"white", textShadow:"2px 2px 2px black", height:"5px",fontSize:"50px", fontFamily:"Imprint MT Shadow"}}>STUDENT INFO</div></div>
        </div>    
        </header>

      <div className="content-layout">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <ul>
            <li
              className={activeTab === "personal details" ? "active" : ""}
              onClick={() => setActiveTab("personal details")}
            >
              personal
            </li>
            <li
              className={activeTab === "lecturers" ? "active" : ""}
              onClick={() => setActiveTab("lecturers")}
            >
              Lecturer Registration
            </li>
            <li
              className={activeTab === "students" ? "active" : ""}
              onClick={() => setActiveTab("students")}
            >
              Student Details
            </li>
            <li
              className={activeTab === "lecturerss" ? "active" : ""}
              onClick={() => setActiveTab("lecturerss")}
            >
              Lecturer Details
            </li>
            <li
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
            Logout
            
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <main className="main-content">
          <h2>Observe the changes below</h2>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Menu;