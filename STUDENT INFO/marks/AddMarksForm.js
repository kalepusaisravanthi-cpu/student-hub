import React, { useState, useEffect } from "react"; // Import Link for navigation
import axios from "axios"; // Import axios for making API requests
import { useParams, useNavigate } from "react-router-dom";
import './AddMarksForm.css'
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

const AddMarksPage = () => {
  const { pinNumber } = useParams(); // Get the student's pin number from URL
  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState({}); // External marks state
  const [internalmarks, setInternalMarks] = useState({}); // Internal marks state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For navigation after form submission

  useEffect(() => {
    // Fetch student data by pinNumber
    axios
      .get(`http://localhost:8080/student/api/getbypin/${pinNumber}`)
      .then((response) => {
        setStudent(response.data);
        setMarks({ pinNumber: response.data.pinNumber }); // Initialize external marks with student's pin number
        setInternalMarks({ pinNumber: response.data.pinNumber }); // Initialize internal marks with student's pin number
        setLoading(false); // Data fetched, set loading to false
      })
      .catch((error) => {
        setError("Error fetching student data");
        setLoading(false); // Set loading to false even if error occurs
        console.log(error);
      });
  }, [pinNumber]);

  const handleMarkChange = (subject, value) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: value, // Update external marks for the subject
    }));
  };

  const handleInternalMarkChange = (subject, value) => {
    setInternalMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: value, // Update internal marks for the subject
    }));
  };

  const handleSubmitMarks = () => {
    // Check if any internal or external marks are missing for any subject
    let isValid = true;

    // Loop through all subjects and check if marks are provided for both internal and external
    subjectRanges[student.year]?.forEach((subject) => {
      // Convert subject name to lowercase to match keys in internalmarks and marks
      const subjectKey = subject.toLowerCase();

      // If either internal or external marks are empty, set isValid to false
      if (!internalmarks[subjectKey] || !marks[subjectKey]) {
        isValid = false;
      }
    });

    // If not valid, show an alert and stop form submission
    if (!isValid) {
      alert("Please enter marks for all subjects.");
      return;
    }

    // Initialize URL based on student year
    let url = "";
    let url1 = "";

    if (student.year === "FirstYear") {
      url = "http://localhost:8080/api/marks/firstyear/post"; // External marks URL
      url1 = "http://localhost:8080/api/internalmarks/firstyear/post"; // Internal marks URL
    } else if (student.year === "3SEM") {
      url = "http://localhost:8080/api/marks/thirdsem/post";
      url1 = "http://localhost:8080/api/internalmarks/thirdsem/post";
    } else if (student.year === "4SEM") {
      url = "http://localhost:8080/api/marks/fourthsem/post";
      url1 = "http://localhost:8080/api/internalmarks/fourthsem/post";
    } else if (student.year === "5SEM") {
      url = "http://localhost:8080/api/marks/fifthsem/post";
      url1 = "http://localhost:8080/api/internalmarks/fifthsem/post";
    }

    // Post external marks and internal marks together
    Promise.all([axios.post(url, marks), axios.post(url1, internalmarks)])
      .then(([marksResponse, internalMarksResponse]) => {
        alert("Marks submitted successfully!");
        navigate("/"); // Redirect to the home page after submitting
      })
      .catch((error) => {
        setError("Error submitting marks");
        console.error("Error: ", error);
        alert("Error submitting marks", error);
      });
  };

  // Show loading message if fetching data
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div> {/* Display the spinner */}
      </div>
    );
  }

  // Show error if there is an error fetching student data
  if (error) {
    return <div>{error}</div>;
  }

  // If student data is not found, show a message
  if (!student) {
    return <div>No student found with this pin number.</div>;
  }

  return (
  
    <div className="marks-form">  <br/>  <br/>
  
  <div className="profile-container">
  <img
    className="student-image"
    src={`data:image/jpeg;base64,${student.image}`}
    alt="User Image"
  />
  <div className="student-info">
    <div className="student-name"><b>Name:</b> {student.name}</div>
    <div className="pin-number"><b>Pin Number:</b> {pinNumber}</div>
  </div>
</div>

      <div className="student-info">Add Marks for {student.name}</div>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Internal Marks</th>
            <th>External Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjectRanges[student.year]?.map((subject) => (
            <tr key={subject}>
              <td>{subject}</td>
              <td>
                <input
                  className="marks-input"
                  type="number"
                  required
                  value={internalmarks[subject.toLowerCase()] || ""}
                  onChange={(e) =>
                    handleInternalMarkChange(
                      subject.toLowerCase(),
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  required
                  className="marks-input"
                  value={marks[subject.toLowerCase()] || ""}
                  onChange={(e) =>
                    handleMarkChange(subject.toLowerCase(), e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button" onClick={handleSubmitMarks}>
        Submit Marks
      </button>
    </div>
  );
};

export default AddMarksPage;