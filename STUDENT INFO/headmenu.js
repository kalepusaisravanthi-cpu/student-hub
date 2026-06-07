import React, { useEffect,useState } from "react";
import Swal from "sweetalert2";  // Import SweetAlert2
import "./App.css";
import { useNavigate } from "react-router-dom";
import Saai from './stuget';
import Lecget from "./lecget";
import HHome from './headhome';
import Lecf from "./Lectureform";
import LectureDetails from "./LectureDetails";
import Download from "./Downloadlists";
import StudentDetails from "./stubymail";
import ExportAttendance from "./AttendenceModule/downloadattendence";
import Attendence from "./AttendenceModule/attendence";
import Attendenceview from "./AttendenceModule/Attendenceview";
import FacultyProfile from "./headhome";
import StudentTable from "./marks/addmarks";
import { useLocation } from "react-router-dom";

const HeadMenu = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLectureInfoClicked, setIsLectureInfoClicked] = useState(false);
  const [isStudentInfoClicked, setIsStudentInfoClicked] = useState(false);
  const Nav = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <HHome />;
      case "single":
        return <StudentDetails />;
      case "lecturedetails":
        return <LectureDetails />;
      case "lectureform":
        return <Lecf />;
      case "project":
        return <Lecget />;
      case "Registration":
        return <Lecf />;
      case "students":
        return <Saai />;
      case "attend":
        return <Attendence />;
      case "downatt":
        return <ExportAttendance />;
      case "viewatt":
        return <Attendenceview />;
      case "viewmarks":
        return <StudentTable />;
      case "down":
        return <Download />;
      case "logout":
        return (
          <div>
            {handleLogout()}
          </div>
        );
      default:
        return <p><FacultyProfile /></p>;
    }
  };

  // Handle logout with SweetAlert
  const handleLogout = () => {
    Swal.fire(
      'Oops!',
      'You logged out successfully.',
      'warning'
    );
    localStorage.clear();
    Nav('/stustart/One');
  }
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location, setActiveTab]);

  
  const handleLectureInfoClick = () => {
    setIsLectureInfoClicked(!isLectureInfoClicked);
    setActiveTab(isLectureInfoClicked ? "Home" : "lectureinfo");
  };

  const handleStudentInfoClick = () => {
    setIsStudentInfoClicked(!isStudentInfoClicked);
    setActiveTab(isStudentInfoClicked ? "Home" : "students");
  };

  return (
    <div className="app-container">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <header className="header" style={{ backgroundColor: "#04032C", width: "1475px" }}>
        <div style={{ display: "flex" }}>
          <img
            id="im"
            src="https://tse1.mm.bing.net/th?id=OIP.Rb6bHyViAEzJNzPHqwl0UgAAAA&pid=Api&P=0&h=180"
            alt="Logo"
            className="logo"
            marginTop="-40px"
          />
          <h1
            style={{
              marginTop: "39px",
              marginLeft: "-250px",
              fontSize: "50px",
              color: 'white'
            }}
          >
            STUDENT HUB
          </h1>
        </div>
      </header>

      <div className="content-layout">
        <aside className="sidebar">
          <ul>
            <li
              className={activeTab === "Home" ? "active" : ""}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </li>

            <li
              className={activeTab === "lectureinfo" ? "active" : ""}
              onClick={handleLectureInfoClick}
            >
              Lecture Info 
            </li>
<div >
            {isLectureInfoClicked && (
              <ul className="submenu">
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "lectureform" ? "active" : ""}
                  onClick={() => setActiveTab("lectureform")}
                >
                  Registration
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "lecturedetails" ? "active" : ""}
                  onClick={() => setActiveTab("lecturedetails")}
                >
                  View All
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "project" ? "active" : ""}
                  onClick={() => setActiveTab("project")}
                >
                  Update
                </li>
              </ul>
            )}</div>

            <li
              className={activeTab === "students" ? "active" : ""}
              onClick={handleStudentInfoClick}
            >
              Student Info 
            </li>

            {isStudentInfoClicked && (
              <ul className="submenu" >
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "students" ? "active" : ""}
                  onClick={() => setActiveTab("students")}
                >
                  View All
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "attend" ? "active" : ""}
                  onClick={() => setActiveTab("attend")}
                >
                  Add Attendance
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "downatt" ? "active" : ""}
                  onClick={() => setActiveTab("downatt")}
                >
                  Download Attendance
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "viewatt" ? "active" : ""}
                  onClick={() => setActiveTab("viewatt")}
                >
                  View Attendance
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "viewmarks" ? "active" : ""}
                  onClick={() => setActiveTab("viewmarks")}
                >
                  Add Marks
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "single" ? "active" : ""}
                  onClick={() => setActiveTab("single")}
                >
                  Get Student
                </li>
                <li style={{marginLeft:"10px",width:"220px"}}
                  className={activeTab === "down" ? "active" : ""}
                  onClick={() => setActiveTab("down")}
                >
                  Download
                </li>
              </ul>
            )}

            <li
              className={activeTab === "logout" ? "active" : ""}
              onClick={() => setActiveTab("logout")}
            >
              Logout
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default HeadMenu;
