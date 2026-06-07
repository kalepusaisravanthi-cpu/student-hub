import React, { useState } from 'react';
import './stubymail.css';

function StudentDetails() {
  const [studentPinNumber, setStudentPinNumber] = useState('');  // Updated state to hold pin number
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const loggedEmail = ''; // This should be retrieved from auth/session or JWT

  // Handle input change
  const handlePinChange = (e) => {
    setStudentPinNumber(e.target.value);
  };

  // Fetch student details
  const getStudentDetails = async () => {
    setError('');  // Clear previous error messages
    setStudent(null);  // Reset student details

    // Check if the pin number input is empty
    if (!studentPinNumber) {
      setError('Please enter a pin number.');
      return;
    }

    try {
      // Fetch student details by pin number
      const response = await fetch(`http://localhost:8080/student/api/getByPin/${studentPinNumber}`, {
        method: 'GET',
        headers: {
          'X-Logged-Email': loggedEmail,  // Send logged-in email in the header for authorization
        },
      });

      if (response.ok) {
        // If the request is successful, parse the student data
        const studentData = await response.json();
        setStudent(studentData);
      } else if (response.status === 401) {
        // Unauthorized response - email mismatch or not allowed
        const errorData = await response.json();
        setError(errorData.message || 'Unauthorized: Email mismatch');
      } else if (response.status === 404) {
        // Not found response - student doesn't exist
        const errorData = await response.json();
        setError(errorData.message || 'Student not found');
      } else {
        // Generic error handling for other status codes
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch student details. Please try again.');
    }
  };

  return (
    <div className="stucontainer">
      <div><h1 style={{ marginLeft: "350px" }}><i>Get Student Detail</i></h1></div>
      <br />
      <label htmlFor="student-pin" style={{marginLeft:"43px"}}>Enter Student Pin Number:</label>
      <br/>
      <input
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          marginLeft:"40px"
        }}
        type="text"
        id="student-pin"
        value={studentPinNumber}
        onChange={handlePinChange}
        placeholder="Student Pin Number"
        required
      />
      <br /><br />

      <button
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#120850",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "backgroundColor 0.3s ease",
          marginLeft: "0px"
        }}
        onClick={getStudentDetails}
      >
        Get Details
      </button>

      {/* Display error message if any */}
      {error && <div className="error">{error}</div>}

      {/* Display student details if found */}
      {student && !error && (
        <div className="stustudentdetails">
          <div>
            <h3 style={{ fontFamily: "cursive", marginLeft: "350px" }}>Student Details:</h3>
            <center>
              <div style={{ marginLeft: "380px" }}>
                {student.image ? (
                  <img
                    src={`data:image/jpeg;base64,${student.image}`}
                    alt="Student"
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                ) : (
                  <img
                    src="path/to/default-image.jpg" // A default image to show when there's no student image
                    alt="No Image"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                )}
              </div>
            </center>
          </div>

          {/* Student Details */}
          <div className="studentdetail"><strong>ID:</strong> {student.id || 'N/A'}</div>
          <div className="studentdetail"><strong>Name:</strong> {student.name || 'N/A'}</div>
          <div className="studentdetail"><strong>Email:</strong> {student.email || 'N/A'}</div>
          <div className="studentdetail"><strong>Mobile Number:</strong> {student.mobileNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>Date of Birth:</strong> {student.dob || 'N/A'}</div>
          <div className="studentdetail"><strong>Gender:</strong> {student.gender || 'N/A'}</div>
          <div className="studentdetail"><strong>Aadhar:</strong> {student.aadhar || 'N/A'}</div>
          <div className="studentdetail"><strong>Father's Name:</strong> {student.fatherName || 'N/A'}</div>
          <div className="studentdetail"><strong>Mother's Name:</strong> {student.motherName || 'N/A'}</div>
          <div className="studentdetail"><strong>Guardian's Name:</strong> {student.guardianName || 'N/A'}</div>
          <div className="studentdetail"><strong>Guardian's Mobile:</strong> {student.guardianMobile || 'N/A'}</div>
          <div className="studentdetail"><strong>Father's Aadhar:</strong> {student.fatherAadhar || 'N/A'}</div>
          <div className="studentdetail"><strong>Mother's Aadhar:</strong> {student.motherAadhar || 'N/A'}</div>
          <div className="studentdetail"><strong>Father's Mobile Number:</strong> {student.fatherMobileNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>Mother's Mobile Number:</strong> {student.motherMobileNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>Caste:</strong> {student.caste || 'N/A'}</div>
          <div className="studentdetail"><strong>Village:</strong> {student.village || 'N/A'}</div>
          <div className="studentdetail"><strong>Mandal:</strong> {student.mandal || 'N/A'}</div>
          <div className="studentdetail"><strong>District:</strong> {student.district || 'N/A'}</div>
          <div className="studentdetail"><strong>Pincode:</strong> {student.pincode || 'N/A'}</div>
          <div className="studentdetail"><strong>State:</strong> {student.state || 'N/A'}</div>
          <div className="studentdetail"><strong>Hall Ticket Number:</strong> {student.hallTicketNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>SSC Marks:</strong> {student.sscMarks || 'N/A'}</div>
          <div className="studentdetail"><strong>SSC Percentage:</strong> {student.sscPercentage || 'N/A'}</div>
          <div className="studentdetail"><strong>School Name:</strong> {student.schoolName || 'N/A'}</div>
          <div className="studentdetail"><strong>School Address:</strong> {student.schoolAddress || 'N/A'}</div>
          <div className="studentdetail"><strong>School Pincode:</strong> {student.schoolPincode || 'N/A'}</div>
          <div className="studentdetail"><strong>College Name:</strong> {student.collegeName || 'N/A'}</div>
          <div className="studentdetail"><strong>Pin Number:</strong> {student.pinNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>Branch:</strong> {student.branch || 'N/A'}</div>
          <div className="studentdetail"><strong>Polytechnic Hall Ticket Number:</strong> {student.polycetHallTicketNumber || 'N/A'}</div>
          <div className="studentdetail"><strong>Polytechnic Rank:</strong> {student.polycetRank || 'N/A'}</div>
          <div className="studentdetail"><strong>Joining Date:</strong> {student.joiningDate || 'N/A'}</div>
          <div className="studentdetail"><strong>College Address:</strong> {student.collegeAddress || 'N/A'}</div>
          <div className="studentdetail"><strong>College District:</strong> {student.collegeDistrict || 'N/A'}</div>
          <div className="studentdetail"><strong>College Pincode:</strong> {student.collegePincode || 'N/A'}</div>
          <div className="studentdetail"><strong>Year:</strong> {student.year || 'N/A'}</div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
