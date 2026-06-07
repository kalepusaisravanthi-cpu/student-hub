import React from "react";
import './Headhome.css';  // Updated the class names to be more unique

const FacultyProfile = () => {
  return (
    <center>
    <div className="faculty-container">
      {/* Long Navigation Bar */}
      <div className="faculty-header">
        <h2 className="faculty-header-title">DEPARTMENT OF COMPUTER ENGINEERING</h2>
      </div>
      
      <div className="faculty-content-wrapper">
        <div className="faculty-main-content">
          <div><h2 className="faculty-section-title">COMPUTERENGINEERINGSECTION</h2></div>
          <div className="faculty-profile-card">
            {/* Replace <img> with a div for background image */}
            <div className="faculty-profile-image"></div>
            <h3 className="faculty-profile-name">G. PARTHASARATHI</h3>
            <p className="faculty-profile-degree">M.TECH</p>
            <p className="faculty-profile-doj">
              <strong>D.O.J:</strong> 16-12-1976
            </p>
            <p className="faculty-profile-experience">
              <strong>Experience:</strong> 30 Years
            </p>
          </div>
        </div>
      </div>
    </div></center>
  );
};

export default FacultyProfile;
