import React, { useEffect, useState } from "react";

const StudentDetailsPrint = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student details from API (replace URL with your actual API endpoint)
    fetch("http://localhost:8080/student/api/get/123206709016")
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error("Error fetching student details:", error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!student) {
    return <p>Loading student details...</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Student Details</h2>
      {student.image && (
        <img src={`data:image/jpeg;base64,${student.image}`} alt="Student" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
      )}
      <p><strong>Full Name:</strong> {student.fullName}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <h3>Academic Details</h3>
      <p><strong>Enrollment Number:</strong> {student.enrollmentNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>CGPA:</strong> {student.cgpa}</p>
      <h3>College Details</h3>
      <p><strong>College Name:</strong> {student.collegeName}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Roll Number:</strong> {student.rollNumber}</p>
      <button onClick={handlePrint} style={{ padding: "10px 20px", marginTop: "20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Print
      </button>
    </div>
  );
};

export default StudentDetailsPrint;