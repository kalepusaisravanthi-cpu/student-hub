import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loggedinstudent.css'; // Import the CSS file

const OneStu = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  useEffect(() => {
    const email = localStorage.getItem('email'); // Get email from localStorage
    console.log('Email from localStorage:', email); // Log email for debugging
    
    if (email) {
      // Fetch student details from the backend using the email
      axios
        .get(`http://localhost:8080/student/api/getByEmail/${email}`)
        .then((response) => {
          console.log('API Response:', response.data); // Log the API response for debugging
          setStudentDetails(response.data); // Assuming response contains student details
          setLoading(false); // Stop loading when data is fetched
        })
        .catch((err) => {
          console.error('Error fetching student details:', err); // Log the error for debugging
          setError('Failed to fetch student details.');
          setLoading(false); // Stop loading even if there's an error
        });
    } else {
      setError('No student email found.');
      setLoading(false); // Stop loading if no email found
    }
  }, []); // Empty dependency array means this effect runs once on mount

  // If the data is still loading, show a loading message
  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  // Show error message if there's an error
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // If student details are available, display them
  return (
    
    <div className="one-stu-container">
      <div><h1 style={{marginLeft:"185px",fontFamily:"cursive"}}>Student Information</h1></div><br/>
      {studentDetails ? (
        <>
        <div>
  {studentDetails.image ? (
    <img src={`data:image/jpeg;base64,${studentDetails.image}`} alt="Student" style={{ width: "150px", height: "150px", borderRadius: "50%",marginLeft:"320px" }} />
     
  ) : (
    <img
      src="path/to/default-image.jpg" // A default image to show when there's no student image
      alt="No Image"
      style={{ width: "150px", height: "150px", objectFit: "cover" }}
    />
  )}
</div>
  <div className="student-details-wrapper">
  
      <div className="student-detail"><strong>ID:</strong> <span>{studentDetails.id || 'N/A'}</span></div>
      <div className="student-detail"><strong>Name:</strong> <span>{studentDetails.name || 'N/A'}</span></div>
      <div className="student-detail"><strong>Email:</strong> <span>{studentDetails.email || 'N/A'}</span></div>
      <div className="student-detail"><strong>Mobile Number:</strong> <span>{studentDetails.mobileNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>Date of Birth:</strong> <span>{studentDetails.dob || 'N/A'}</span></div>
      <div className="student-detail"><strong>Gender:</strong> <span>{studentDetails.gender || 'N/A'}</span></div>
      <div className="student-detail"><strong>Aadhar:</strong> <span>{studentDetails.aadhar || 'N/A'}</span></div>
      <div className="student-detail"><strong>Father's Name:</strong> <span>{studentDetails.fatherName || 'N/A'}</span></div>
      <div className="student-detail"><strong>Mother's Name:</strong> <span>{studentDetails.motherName || 'N/A'}</span></div>
      <div className="student-detail"><strong>Guardian's Name:</strong> <span>{studentDetails.guardianName || 'N/A'}</span></div>
      <div className="student-detail"><strong>Guardian's Mobile:</strong> <span>{studentDetails.guardianMobile || 'N/A'}</span></div>
      <div className="student-detail"><strong>Father's Aadhar:</strong> <span>{studentDetails.fatherAadhar || 'N/A'}</span></div>
      <div className="student-detail"><strong>Mother's Aadhar:</strong> <span>{studentDetails.motherAadhar || 'N/A'}</span></div>
      <div className="student-detail"><strong>Father's Mobile Number:</strong> <span>{studentDetails.fatherMobileNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>Mother's Mobile Number:</strong> <span>{studentDetails.motherMobileNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>Caste:</strong> <span>{studentDetails.caste || 'N/A'}</span></div>
      <div className="student-detail"><strong>Village:</strong> <span>{studentDetails.village || 'N/A'}</span></div>
      <div className="student-detail"><strong>Mandal:</strong> <span>{studentDetails.mandal || 'N/A'}</span></div>
      <div className="student-detail"><strong>District:</strong> <span>{studentDetails.district || 'N/A'}</span></div>
      <div className="student-detail"><strong>Pincode:</strong> <span>{studentDetails.pincode || 'N/A'}</span></div>
      <div className="student-detail"><strong>State:</strong> <span>{studentDetails.state || 'N/A'}</span></div>
      <div className="student-detail"><strong>Hall Ticket Number:</strong> <span>{studentDetails.hallTicketNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>SSC Marks:</strong> <span>{studentDetails.sscMarks || 'N/A'}</span></div>
      <div className="student-detail"><strong>SSC Percentage:</strong> <span>{studentDetails.sscPercentage || 'N/A'}</span></div>
      <div className="student-detail"><strong>School Name:</strong> <span>{studentDetails.schoolName || 'N/A'}</span></div>
      <div className="student-detail"><strong>School Address:</strong> <span>{studentDetails.schoolAddress || 'N/A'}</span></div>
      <div className="student-detail"><strong>School Pincode:</strong> <span>{studentDetails.schoolPincode || 'N/A'}</span></div>
      <div className="student-detail"><strong>College Name:</strong> <span>{studentDetails.collegeName || 'N/A'}</span></div>
      <div className="student-detail"><strong>Pin Number:</strong> <span>{studentDetails.pinNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>Branch:</strong> <span>{studentDetails.branch || 'N/A'}</span></div>
      <div className="student-detail"><strong>Polytechnic Hall Ticket Number:</strong> <span>{studentDetails.polycetHallTicketNumber || 'N/A'}</span></div>
      <div className="student-detail"><strong>Polytechnic Rank:</strong> <span>{studentDetails.polycetRank || 'N/A'}</span></div>
      <div className="student-detail"><strong>Joining Date:</strong> <span>{studentDetails.joiningDate || 'N/A'}</span></div>
      <div className="student-detail"><strong>College Address:</strong> <span>{studentDetails.collegeAddress || 'N/A'}</span></div>
      <div className="student-detail"><strong>College District:</strong> <span>{studentDetails.collegeDistrict || 'N/A'}</span></div>
      <div className="student-detail"><strong>College Pincode:</strong> <span>{studentDetails.collegePincode || 'N/A'}</span></div>
      <div className="student-detail"><strong>Year:</strong> <span>{studentDetails.year || 'N/A'}</span></div>
    </div> </>
      ) : (
        <p>No student details available.</p>
      )}
    </div>
  );
};

export default OneStu;
