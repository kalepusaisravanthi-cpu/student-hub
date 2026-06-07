import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Attendence.css";
//import { useNavigate } from 'react-router-dom'
const Attendence = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedShift, setSelectedShift] = useState("All");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState({});
//const nav = useNavigate();
  // Fetch data from the backend when the component loads
  useEffect(() => {
    const response = axios
      .get("http://localhost:8080/student/api/getall")
      .then((response) => {
        setAttendanceData(response.data);
        setFilteredData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching attendance data:", error);
        alert("Failed to load attendance data. Please try again.");
      });
    console.log(response);
  }, []);

  // Filter attendance data based on selected year and shift
  useEffect(() => {
    const filterData = () => {
      let filtered = [...attendanceData];

      if (selectedYear !== "All") {
        filtered = filtered.filter((student) => student.year === selectedYear);
      }

      if (selectedShift !== "All") {
        filtered = filtered.filter(
          (student) => String(student.shift) === selectedShift
        );
      }

      filtered.sort((a, b) => a.pinNumber.localeCompare(b.pinNumber));
      setFilteredData(filtered);
    };
    filterData();
  }, [attendanceData, selectedYear, selectedShift]);

  // Update attendance records
  const handleAttendanceChange = (pinNumber, days) => {
    const validDays = Math.min(Math.max(days, 0), numberOfDays || 0);
    setAttendanceRecords((prev) => ({
      ...prev,
      [pinNumber]: validDays,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedMonth || !numberOfDays) {
      alert("Please select a month and the number of working days!");
      return;
    }

    const transformedData = filteredData.map((student) => {
      const monthKey = selectedMonth.toLowerCase();
      return {
        name: student.name,
        pinNumber: student.pinNumber,
        [monthKey]: attendanceRecords[student.pinNumber] || 0,
      };
    });

    // Set working days for the selected month

    const workingDays = { sem: selectedYear };
    workingDays[selectedMonth.toLowerCase()] = numberOfDays;

    let apiUrl = "";
    switch (selectedYear) {
      case "FirstYear":
        apiUrl = "http://localhost:8080/api/firstyear/postlist";
        break;
      case "3SEM":
        apiUrl = "http://localhost:8080/api/thirdsem/postlist";
        break;
      case "4SEM":
        apiUrl = "http://localhost:8080/api/fourthsem/postlist";
        break;
      case "5SEM":
        apiUrl = "http://localhost:8080/api/fifthsem/postlist";
        break;
      default:
        alert("Please select a valid year.");
        return;
    }

    // Submit attendance data
    axios
      .put(apiUrl, transformedData)
      .then(() => {
        alert("Attendance submitted successfully!");
      
        setAttendanceRecords({});
      })
      .catch((error) => {
        console.error("Error submitting attendance:", error);
        alert("Failed to submit attendance. Please try again.");
      });

    // Submit working days for the selected semester
    axios
      .put("http://localhost:8080/api/workingdays", workingDays)
      .catch((error) => {
        console.error("Error submitting working days:", error);
      });
  };

  return (
    
    <div className="attendance-container">
       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div className="attendance-form">
        <div className="form-group">
          <label htmlFor="year-select">Year:</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="All">All</option>
            <option value="FirstYear">FirstYear</option>
            <option value="3SEM">3SEM</option>
            <option value="4SEM">4SEM</option>
            <option value="5SEM">5SEM</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="shift-select">Shift:</label>
          <select
            id="shift-select"
            value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)}
          >
            <option value="All">All</option>
            <option value="1">1Shift</option>
            <option value="2">2Shift</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="month-select">Month:</label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            required
          >
            <option value="">Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="days-select">Number of Working Days:</label>
          <select
            id="days-select"
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(e.target.value)}
          >
            <option value="">Select Days</option>
            {Array.from({ length: 31 }, (_, i) =>
              String(i + 1).padStart(2, "0")
            ).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
       </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th style={{color:"black"}}>Pin Number</th>
            <th style={{color:"black"}}>Name</th>
            <th style={{color:"black"}}>
              {selectedMonth} ({numberOfDays})
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student) => (
            <tr key={student.pinNumber}>
              <td style={{color:"black"}}>{student.pinNumber}</td>
              <td style={{color:"black"}}>{student.name}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max={numberOfDays}
                  value={attendanceRecords[student.pinNumber] || ""}
                  onChange={(e) =>
                    handleAttendanceChange(student.pinNumber, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button style={{width:"190px",backgroundColor:"#07044C",marginLeft:"500px"}} className="submit-button" onClick={handleSubmit}><i class="fa-solid fa-download"></i>
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendence;
