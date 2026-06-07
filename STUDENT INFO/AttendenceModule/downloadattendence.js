import React, { useState } from "react";
import axios from "axios";
import "./ExportAttendance.css";

const ExportAttendance = () => {
  const [selectedFields, setSelectedFields] = useState({
    name: true,
    "pin number": true,
    january: false,
    february: false,
    march: false,
    april: false,
    may: false,
    june: false,
    july: false,
    august: false,
    september: false,
    october: false,
    november: false,
    december: false,
  });

  const [selectedSem, setSelectedSem] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const handleFieldChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFields((prevFields) => ({
      ...prevFields,
      [name]: checked,
    }));
  };

  const handleSemChange = (e) => {
    setSelectedSem(e.target.value);
  };

  const handleSelectAll = () => {
    const newSelection = !selectAll;
    setSelectAll(newSelection);
    const updatedFields = Object.keys(selectedFields).reduce((acc, field) => {
      acc[field] = newSelection;
      return acc;
    }, {});
    setSelectedFields(updatedFields);
  };

  const handleExport = () => {
    if (!selectedSem) {
      alert("Please select a semester!");
      return;
    }

    const fieldsToExport = Object.keys(selectedFields).filter(
      (field) => selectedFields[field]
    );

    const apiUrls = {
      FirstYear: "http://localhost:8080/api/firstyear/export",
      "3SEM": "http://localhost:8080/api/thirdsem/export",
      "4SEM": "http://localhost:8080/api/fourthsem/export",
      "5SEM": "http://localhost:8080/api/fifthsem/export",
    };

    const apiUrl = apiUrls[selectedSem];

    axios
      .post(apiUrl, fieldsToExport, { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `attendance_${selectedSem}.xlsx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error exporting data", error);
      });
  };

  return (
    <div className="export-container">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
     
      <h3 style={{fontFamily:"cursive",marginLeft:"50px"}}>Select Semester:</h3>
      <select className="select-dropdown" value={selectedSem} onChange={handleSemChange}>
        <option value="">-- Select Semester --</option>
        <option value="FirstYear">First Year</option>
        <option value="3SEM">3rd Semester</option>
        <option value="4SEM">4th Semester</option>
        <option value="5SEM">5th Semester</option>
      </select>

      <h3 style={{fontFamily:"cursive",marginLeft:"40px"}}>Select Fields to Export:</h3><br/>
      <button  style={{backgroundColor:"#07044C",width:"90px"}} className="select-all-button" onClick={handleSelectAll}>
        {selectAll ? "Deselect All" : "Select All"}
      </button><br/><br/>
      <div className="checkbox-group">
        {Object.keys(selectedFields).map((field, index) => (
          <label key={field} className="checkbox-label">
            <input
              type="checkbox"
              name={field}
              checked={selectedFields[field]}
              onChange={handleFieldChange}
            />
            {field}
          </label>
        ))}
      </div>

      <button style={{backgroundColor:"#07044C",width:"290px"}} className="export-button" onClick={handleExport} disabled={!selectedSem}><i class="fa-solid fa-download"></i>
        Export Attendance to Excel
      </button>
    </div>
  );
};

export default ExportAttendance;
