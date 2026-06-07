import React, { useState } from "react";
import axios from "axios";
import "./MarksForm.css"; // Import the updated CSS file
const subjectRanges = {
  FirstYear: [
    "CM_101",
    "CM_102",
    "CM_103",
    "CM_104",
    "CM_105",
    "CM_106",
    "CM_107",
    "CM_108",
    "CM_109",
    "CM_110",
    "CM_111",
  ],
  "3SEM": [
    "CM_301",
    "CM_302",
    "CM_303",
    "CM_304",
    "CM_305",
    "CM_306",
    "CM_307",
    "CM_308",
    "CM_309",
  ],
  "4SEM": [
    "CM_401",
    "CM_402",
    "CM_403",
    "CM_404",
    "CM_405",
    "CM_406",
    "CM_407",
    "CM_408",
    "CM_409",
  ],
  "5SEM": [
    "CM_501",
    "CM_502",
    "CM_503",
    "CM_504",
    "CM_505",
    "CM_506",
    "CM_507",
    "CM_508",
    "CM_509",
  ],
};

const MarksForm = () => {
  const [pinNumber, setPinNumber] = useState("");
  const [year, setYear] = useState("SelectAll"); // Default to "SelectAll" for displaying all subjects
  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState({ externalMarks: {}, internalMarks: {} });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePinNumberChange = (event) => setPinNumber(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    let url = "";
    let url1 = "";

    if (year === "FirstYear") {
      url = `http://localhost:8080/api/marks/firstyear/pin/${pinNumber}`; // External marks URL
      url1 = `http://localhost:8080/api/internalmarks/firstyear/pin/${pinNumber}`; // Internal marks URL
    } else if (year === "3SEM") {
      url = `http://localhost:8080/api/marks/thirdsem/pin/${pinNumber}`;
      url1 = `http://localhost:8080/api/internalmarks/thirdsem/pin/${pinNumber}`;
    } else if (year === "4SEM") {
      url = `http://localhost:8080/api/marks/fourthsem/pin/${pinNumber}`;
      url1 = `http://localhost:8080/api/internalmarks/fourthsem/pin/${pinNumber}`;
    } else if (year === "5SEM") {
      url = `http://localhost:8080/api/marks/fifthsem/pin/${pinNumber}`;
      url1 = `http://localhost:8080/api/internalmarks/fifthsem/pin/${pinNumber}`;
    }

    try {
      const studentResponse = await axios.get(
        `http://localhost:8080/student/api/getbypin/${pinNumber}`
      );
      setStudent(studentResponse.data);

      const externalMarksResponse = await axios.get(url);
      const internalMarksResponse = await axios.get(url1);

      setMarks({
        externalMarks: externalMarksResponse.data,
        internalMarks: internalMarksResponse.data,
      });
      if(externalMarksResponse.data==null)
      {
        setError("No student found");
      }
      setLoading(false);
    } catch (error) {
      setError("Error fetching student marks or data.");
      setLoading(false);
    }
  };

  const getSubjectsForYear = (selectedYear) => {
    if (selectedYear === "SelectAll") {
      return [
        ...subjectRanges.FirstYear,
        ...subjectRanges["3SEM"],
        ...subjectRanges["4SEM"],
        ...subjectRanges["5SEM"],
      ];
    }
    return subjectRanges[selectedYear] || [];
  };
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div> {/* Display the spinner */}
      </div>
    );
  }


  return (
    <div className="viewMarksPage marksForm">
      <h2 className="viewheading">View Marks</h2>
      <div className="selectForm">
        <div>
          <label>Pin Number:</label>
          <input
            type="text"
            value={pinNumber}
            onChange={handlePinNumberChange}
            placeholder="Enter Pin Number"
          />
        </div>
        <div>
          <label>Year:</label>
          <select value={year} onChange={handleYearChange}>
            <option value="SelectAll">Select All</option>
            <option value="FirstYear">First Year</option>
            <option value="3SEM">3rd Semester</option>
            <option value="4SEM">4th Semester</option>
            <option value="5SEM">5th Semester</option>
          </select>
        </div>
        <button onClick={handleSubmit}>View Marks</button>
      </div>

      {error && <div className="error">{error}</div>}

      {student && marks.externalMarks && marks.internalMarks && (
        <div>
          <div className="viewprofile">
            <img
              className="imageprofile"
              src={`data:image/jpeg;base64,${student.image}`}
              alt="User Image"
            />
            <div className="">
              <b>Pin Number: </b>
              {pinNumber}
            </div>
            <div className="">
              <b>Name : </b>
              {student.name}
            </div>
          </div>

          <table className="marksTable">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal Marks</th>
                <th>External Marks</th>
              </tr>
            </thead>
            <tbody>
              {getSubjectsForYear(year).map((subject) => {
                const subjectCode = subject.toLowerCase();
                return (
                  <tr key={subject}>
                    <td>{subject}</td>
                    <td>
                      {marks.internalMarks[subjectCode] || 0}
                    </td>
                    <td>
                      {marks.externalMarks[subjectCode] || 0}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MarksForm;
