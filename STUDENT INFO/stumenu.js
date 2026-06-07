
import React, { useState } from "react";
import Swal from "sweetalert2"; 
import { useNavigate } from 'react-router-dom'
import Table from "./timetable";
import Projectmain from "./projectmain";
import OneStu from "./loggedinstudent";
import Attendenceview from "./AttendenceModule/Attendenceview";
import MarksForm from "./MarksForm";
import './App.css'
const Menu = () => {
  const [activeTab, setActiveTab] = useState("home");
  const Nav = useNavigate();
  const renderContent = () => {
    switch (activeTab) {
      case "student":
        return <p><OneStu/></p>;
       case "Table":
        return   <Table/>;
      case "project":
        return <p><Projectmain/></p>;
         case "assignments":
        return <p><Table/></p>;
        case "viewatt":
          return <Attendenceview/>;
          case "viewmarks":
            return <MarksForm/>;
        
        case "logout":
        return           <div>
        {handleLogout()}
      </div>;
      default:
        return <p><OneStu/></p>;
    }
  };
  const handleLogout = () => {
   
        Swal.fire(
          'Oops!',
          'You logged out successfully.',
          'warning'
        );
        localStorage.clear();
       
        Nav('/stustart/One');
        
      }
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header" style={{backgroundColor:"#04032C",width:"1472px"}}>
        <div  style={{display:"flex"}}>
          <img id="im" src="https://tse1.mm.bing.net/th?id=OIP.Rb6bHyViAEzJNzPHqwl0UgAAAA&pid=Api&P=0&h=180" alt="Logo" className="logo" />
         <h1 style={{marginTop:"39px",marginLeft:"-250px", fontFamily:"Imprint MT Shadow" ,fontSize:"50px",color:"white"}}>STUDENT HUB</h1>
        </div>
      </header>

      <div className="content-layout">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <ul>
          <li
              className={activeTab === "student" ? "active" : ""}
              onClick={() => setActiveTab("student")}
            >
              View Self
              </li>
           
          
              <li
                  className={activeTab === "viewatt" ? "active" : ""}
                  onClick={() => setActiveTab("viewatt")}
                >
                  View Attendence
                </li><li
                  className={activeTab === "viewmarks" ? "active" : ""}
                  onClick={() => setActiveTab("viewmarks")}
                >
                  View Marks
                </li>
               
            <li
              className={activeTab === "project" ? "active" : ""}
              onClick={() => setActiveTab("project")}
            >
              Previous Projects
            </li>
           
            <li
              className={activeTab === "Table" ? "active" : ""}
              onClick={() => setActiveTab("Table")}
            >
              Time Table
            </li>
           
           
           
            <li
              className={activeTab === "logout" ? "active" : ""}
              onClick={() => setActiveTab("logout")}
            >
           Logout
            
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <main className="main-content">
         {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Menu;