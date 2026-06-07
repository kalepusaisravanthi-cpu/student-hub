import React, { useState } from "react";
import axios from "axios";
import "./DownloadLists.css";

const headersList = [
  "name", "email", "mobile number", "dob", "gender", "aadhar", "father name",
  "mother name", "guardian name", "guardian mobile", "father aadhar",
  "mother aadhar", "father mobile number", "mother mobile number", "caste",
  "village", "mandal", "district", "pincode", "state", "hall ticket number",
  "ssc marks", "ssc percentage", "school name", "school address", "school pincode",
  "college name", "pin number", "branch", "polycet hall ticket number",
  "polycet rank", "joining date", "college address", "college district",
  "college pincode"
];

const Download = () => {
  const [selectedHeaders, setSelectedHeaders] = useState([]);

  // Handle checkbox selection
  const handleCheckboxChange = (header) => {
    setSelectedHeaders(prev =>
      prev.includes(header) ? prev.filter(item => item !== header) : [...prev, header]
    );
  };

  // Select all headers
  const handleSelectAll = () => {
    if (selectedHeaders.length === headersList.length) {
      setSelectedHeaders([]);
    } else {
      setSelectedHeaders([...headersList]);
    }
  };

  // Download Excel file
  const downloadExcel = async () => {
    try {
      if (selectedHeaders.length === 0) {
        alert("Please select at least one header!");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/student/api/export", 
        selectedHeaders, 
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "students.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
         
      <h3>Select Headers for Export</h3>
      <div className="checkbox-container">
        <label className="select-all">
          <input 
            type="checkbox" 
            checked={selectedHeaders.length === headersList.length}
            onChange={handleSelectAll} 
          />
          Select All
        </label>
        {headersList.map((header, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedHeaders.includes(header)}
              onChange={() => handleCheckboxChange(header)}
            />
            {header}
          </label>
        ))}
      </div>
      <button className="downbutton" style={{width:"190px",backgroundColor:"#021830" }} onClick={downloadExcel}><i class="fa-solid fa-download"></i>Download Excel</button>
    </div>
  );
};

export default Download;
