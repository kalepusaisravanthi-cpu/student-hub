import React, { useState, useEffect } from 'react'; // Import React and hooks
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import "./marksform.css";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [sortedStudents, setSortedStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios.get('http://localhost:8080/student/api/getall') // Replace with your API endpoint
      .then(response => {
        setStudents(response.data);
        setSortedStudents(response.data);
        setLoading(false); // Data fetched, set loading to false
      })
      .catch(error => {
        setError("Error fetching students");
        setLoading(false); // Set loading to false even if error occurs
        console.log(error);
      });
  }, []);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    if (year) {
      const sorted = students.filter(student => student.year === year);
      setSortedStudents(sorted);
    } else {
      setSortedStudents(students); // Show all students if no year is selected
    }
  };

  // Show loading message if fetching data
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div> {/* Display the spinner */}
      </div>
    );
  }

  // Show error if there is an error fetching data
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="student-table-container">
      <div className="year-select-container">
        <label htmlFor="yearSelect">Select Year: </label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          <option value="">All Students</option>
          <option value="FirstYear">First Year</option>
          <option value="3SEM">3rd SEM</option>
          <option value="4SEM">4th SEM</option>
          <option value="5SEM">5th SEM</option>
        </select>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Pin Number</th>
            <th>Name</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.pinNumber}>
              <td>{student.pinNumber}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>
                <Link to={`/add-marks/${student.pinNumber}`}>
                  <button className="action-button">Add Marks</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
