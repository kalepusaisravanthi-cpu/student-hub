import React, { useState } from "react";
import axios from "axios";
import styles from "./Attendenceview.module.css";

const Attendenceview = () => {
  const [sem, setSem] = useState("All");
  const [pinNumber, setPinNumber] = useState("");
  const [attendanceData, setAttendanceData] = useState(null);
  const [error, setError] = useState("");

  // Function to handle the form submission and API call using axios
  const handleSubmit = () => {
    if (!pinNumber) {
      alert("Please enter a pin number.");
      return;
    }
    var url;
    if (sem === "All") {
      alert(" Please Select Year ");
    } else {
      if (sem === "FirstYear") {
        url = `http://localhost:8080/api/firstyear/get/${pinNumber}`;
      } else if (sem === "3SEM") {
        url = `http://localhost:8080/api/thirdsem/get/${pinNumber}`;
      } else if (sem === "4SEM") {
        url = `http://localhost:8080/api/fourthsem/get/${pinNumber}`;
      } else {
        url = `http://localhost:8080/api/fifthsem/get/${pinNumber}`;
      }
    }
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        if (data?.studentData && data?.workingDaysData) {
          setAttendanceData(data); // Store structured data
          setError("");
        } else {
          setAttendanceData(null);
          setError("No data found for the provided pin number.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setAttendanceData(null);
      });
  };

  // Function to create table rows for attendance
  const createRows = (studentData = {}) => {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return months.map((month, index) => {
      const attendedDays = studentData[month] || 0; // Default to 0 if undefined
      return (
        <td key={index}>
          <div>
            <strong>{attendedDays}</strong>
          </div>
        </td>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 style={{ textAlign: "center", color: "darkblue",marginLeft:"330px" }}>Attendance View</h1>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="sem">Select Semester: </label>
            <select
              id="sem"
              className={styles.inputField}
              value={sem}
              onChange={(e) => setSem(e.target.value)}
            >
              <option value="All">All</option>
              <option value="FirstYear">FirstYear</option>
              <option value="3SEM">3SEM</option>
              <option value="4SEM">4SEM</option>
              <option value="5SEM">5SEM</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="pinnumber">Enter Pin Number: </label>
            <input
              type="text"
              id="pinnumber"
              className={styles.inputField}
              value={pinNumber}
              onChange={(e) => setPinNumber(e.target.value)}
              placeholder="e.g. 22010-CM-052"
            />
          </div>

          <div className={styles.formGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}

      {/* Display the table only when attendance data is available */}
      {attendanceData &&
        attendanceData.studentData &&
        attendanceData.workingDaysData && (
          <table className={styles.attendanceDataTable}>
            <thead>
              <tr>
                <th>Month</th>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <th key={index}>
                    {month} (
                    {attendanceData?.workingDaysData?.[month.toLowerCase()] ||
                      0}
                    ){/* Show Working Days */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Attended Days</strong>
                </td>
                {createRows(attendanceData?.studentData)}
              </tr>
            </tbody>
          </table>
        )}
    </div>
  );
};

export default Attendenceview;
