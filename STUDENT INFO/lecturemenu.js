import React, { useState } from "react";
import Swal from "sweetalert2"; 
import Saai from './stuget';
import Lectureform from './Lectureform'
import { useNavigate } from 'react-router-dom'
import LectureDetails from "./LectureDetails";
import Stu1 from "./stu1";
import Projectmain from "./projectmain";
import Download from "./Downloadlists";
import StudentDetails from "./stubymail";
import Table from "./timetable";
import OneLecturer from "./loggedinlecturer";
import Attendence from "./AttendenceModule/attendence";
import ExportAttendance from "./AttendenceModule/downloadattendence";
import Attendenceview from "./AttendenceModule/Attendenceview";
import StudentTable from "./marks/addmarks";
const LecMenu = () => {
  const [activeTab, setActiveTab] = useState("home");
    const [isProjectInfoClicked, setIsProjectInfoClicked] = useState(false); // New state to toggle the buttons
    const [isStudentInfoClicked, setIsStudentInfoClicked] = useState(false); // Manage student info state
  const Nav = useNavigate();
  const renderContent = () => {
    switch (activeTab) {
      case "h":
        return   <OneLecturer/>;
      case "project":
        return <p><Projectmain/></p>;
        case "projectreg":
          return <p><LectureDetails/></p>;
        case "assignments":
        return <p><Lectureform/></p>;
        case "studentr":
        return <p><Stu1/></p>;
        case "down":
          return <p><Download/></p>;
          case "single":
            return <p><StudentDetails/></p>;
            case "Table":
              return <p><Table/></p>;
              case "attend":
                return <p><Attendence/></p>;
                case "dowatt":
                  return <p><ExportAttendance/></p>;
                  case "dowmarks":
                  return <p><StudentTable/></p>;
                  case "viewatt":
                    return <Attendenceview/>;
                    case "viewmarks":
                    return <StudentTable/>;
                    case "studentdetails":
        return <p style={{marginLeft:"0px",marginTop:"10px"}}><Saai/></p>;
      case "logout":
        return  <div>
        {handleLogout()}
      </div>;
      default:
        return <p><OneLecturer/></p>;
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
  
  const handleProjectInfoClick = () => {
    setIsProjectInfoClicked(!isProjectInfoClicked); // Toggle visibility of buttons
    setActiveTab(isProjectInfoClicked ? "Home" : "lectureinfo");
  };

  const handleStudentInfoClick = () => {
    setIsStudentInfoClicked(!isStudentInfoClicked); // Toggle student info visibility
    setActiveTab(isStudentInfoClicked ? "Home" : "students");
  };

  return (
    <div className="app-container">
       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    
      {/* Header Section */}
      <header className="header"  style={{backgroundColor:"#04032C",width:"1486px"}}>
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
              className={activeTab === "h" ? "active" : ""}
              onClick={() => setActiveTab("h")}
            >
              Self Details
            </li>
            <li
              className={activeTab === "" ? "active" : ""}
              onClick={handleStudentInfoClick}
            >
              Student  </li>
              {isStudentInfoClicked && (
                <>
            <li style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "studentr" ? "active" : ""}
              onClick={() => setActiveTab("studentr")}
            >
              Registration</li>
            
            <li  style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "studentdetails" ? "active" : ""}
              onClick={() => setActiveTab("studentdetails")}
            >
              View All
            </li>
            <li  style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "down" ? "active" : "down"}
              onClick={() => setActiveTab("down")}
            >
            Download</li>
            <li  style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "single" ? "active" : ""}
              onClick={() => setActiveTab("single")}
            >
            Details By Pin</li>
            <li  style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "attend" ? "active" : ""}
              onClick={() => setActiveTab("attend")}
            >
            Add Attendence</li>
            <li  style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "dowatt" ? "active" : ""}
              onClick={() => setActiveTab("dowatt")}
            >
            Download Attendence</li>
            <li  style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "viewatt" ? "active" : ""}
                  onClick={() => setActiveTab("viewatt")}
                >
                  View Attendence
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "viewmarks" ? "active" : ""}
                  onClick={() => setActiveTab("viewmarks")}
                >
                  Add Marks
                </li>
           
               
           
          
           </>
          )}
            
            <li
              className={activeTab === "assignments" ? "active" : ""}
              onClick={handleProjectInfoClick}
            >
              Project  
            </li>
            {isProjectInfoClicked && (
              <>
           
            <li style={{marginLeft:"10px",width:"220px"}}
              className={activeTab === "project" ? "active" : ""}
              onClick={() => setActiveTab("project")}
            >
              New Projects
            </li>
           
            </>)}
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

export default LecMenu;