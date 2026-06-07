import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loggedinlecturer.css'; // Import the CSS file

const OneLecturer = () => {
  const [lecturerDetails, setLecturerDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  useEffect(() => {
    const email = localStorage.getItem('email'); // Get email from localStorage
    console.log('Email from localStorage:', email); // Log email for debugging
        
    if (email) {
      // Fetch lecturer details from the backend using the email
      axios
        .get(`http://localhost:8080/lecturers/email/${email}`)
        .then((response) => {
          console.log('API Response:', response.data); // Log the API response for debugging
          setLecturerDetails(response.data); // Assuming response contains lecturer details
          setLoading(false); // Stop loading when data is fetched
        })
        .catch((err) => {
          console.error('Error fetching lecturer details:', err); // Log the error for debugging
          setError('Failed to fetch lecturer details.');
          setLoading(false); // Stop loading even if there's an error
        });
    } else {
      setError('No lecturer email found.');
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

  // If lecturer details are available, display them
  return (
    <div className="one-lecturer-container">
      <h2>Lecturer Information</h2>
      {lecturerDetails ? (
        <>
          <div style={{color:"black"}} className="lecturer-detail"><strong>ID:</strong> {lecturerDetails.id || 'N/A'}</div>
          <div style={{color:"black"}} className="lecturer-detail"><strong>Name:</strong> {lecturerDetails.name || 'N/A'}</div>
          <div style={{color:"black"}} className="lecturer-detail"><strong>Email:</strong> {lecturerDetails.email || 'N/A'}</div>
          <div style={{color:"black"}}  className="lecturer-detail"><strong>Mobile Number:</strong> {lecturerDetails.phoneNumber || 'N/A'}</div>
          <div style={{color:"black"}} className="lecturer-detail"><strong>Department:</strong> {lecturerDetails.department || 'N/A'}</div>
          <div style={{color:"black"}} className="lecturer-detail"><strong>Experience:</strong> {lecturerDetails.experience || 'N/A'}</div>
          <div style={{color:"black"}} className="lecturer-detail"><strong>Qualification:</strong> {lecturerDetails.educationalQualification || 'N/A'}</div>
          {/* You can add more fields here based on the response you get from the API */}
        </>
      ) : (
        <p>No lecturer details available.</p>
      )}
    </div>
  );
};

export default OneLecturer;
