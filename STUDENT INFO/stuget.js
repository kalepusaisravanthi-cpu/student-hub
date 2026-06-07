import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Saai() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    axios.get("http://localhost:8080/student/api/getall")
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          console.log("data error");
        }
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  // Filter data based on search query (email)
  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  const Del = (email) => {
    console.log("Attempting to delete student with email:", email); // Check if the correct email is being passed
    
    axios.delete(`http://localhost:8080/student/api/${email}`)
    .then((res) => {
        console.log("Delete response status:", res.status); // Log the status code
        console.log("Response data:", res.data); // Log the response body (could be useful for debugging)
        if (res.status === 200 || res.status === 204) {
          alert('Record deleted successfully');
          setData(prevData => prevData.filter(item => item.email !== email));
        } else {
          alert('Failed to delete record');
        }
      })
      .catch((err) => {
        console.error('Error deleting student:', err); // Log any errors
        alert('Error deleting student');
      });
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div style={{ height: "100px", width: "1400px", backgroundColor: "white", marginLeft: "0px", marginTop: "10px" }}>
        <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
          <div style={{ color: '#4c7766', fontWeight: 'bold', padding: '30px', fontFamily: "Imprint MT Shadow", fontSize: "40px" }}>STUDENT DETAILS</div>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "300px" }}>
            <i className="fa-solid fa-magnifying-glass" style={{ marginRight: "10px", marginTop: "0px" ,color:"black"}}></i>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              style={{
                borderRadius: "5px",
                height: "35px",
                width: "150px",
                boxShadow: "2px 2px 1px rgb(70, 155, 150)",
                background: "#ece7e2",
                marginTop: "0px",
                fontSize: "15px",
                paddingLeft: "10px", // Add some padding to give space from the icon
                textDecoration: "none",
                color: "black",
              }}
            />
          </div>
        </div>
        <hr />
        <br />
        <div style={{ marginLeft: "10px" }}></div>

        <center id="scrl" style={{ height: "fit-content", width: "1200px", overflow: "scroll", color: "#0b5e57", marginLeft: "10px" }}>
          <table id="ro" borderColor="#4c7766" cellPadding="5px" cellSpacing="2px">
            <thead>
              <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Student name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Gender</th>
                <th>Student Aadhar</th>
                <th>Father name</th>
                <th>Mother name</th>
                <th>Guardian</th>
                <th>Guardian mobile</th>
                <th>Father Aadhar</th>
                <th>Mother Aadhar</th>
                <th>Father mobile</th>
                <th>Mother mobile</th>
                <th>Category</th>
                <th>Village</th>
                <th>Mandal</th>
                <th>District</th>
                <th>Pincode</th>
                <th>State</th>
                <th>10th hall ticket</th>
                <th>Marks</th>
                <th>SSC percentage</th>
                <th>School name</th>
                <th>School address</th>
                <th>School Pincode</th>
                <th>College name</th>
                <th>Pin no</th>
                <th>Branch</th>
                <th>Poly ticket</th>
                <th>Rank</th>
                <th>Date of join</th>
                <th>College address</th>
                <th>College District</th>
                <th>College Pincode</th>
                <th>Year</th>
                <th colSpan={2}>UPDATE STUDENT</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(item => (
                  <tr key={item.email}>
                    {/* Image is rendered here */}
                    <td>
  {item.image ? (
    <img src={`data:image/jpeg;base64,${item.image}`} alt="Student" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
     
  ) : (
    <img
      src="path/to/default-image.jpg" // A default image to show when there's no student image
      alt="No Image"
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
    />
  )}
</td>

                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.aadhar}</td>
                    <td>{item.fatherName}</td>
                    <td>{item.motherName}</td>
                    <td>{item.guardianName}</td>
                    <td>{item.guardianMobile}</td>
                    <td>{item.fatherAadhar}</td>
                    <td>{item.motherAadhar}</td>
                    <td>{item.fatherMobileNumber}</td>
                    <td>{item.motherMobileNumber}</td>
                    <td>{item.caste}</td>
                    <td>{item.village}</td>
                    <td>{item.mandal}</td>
                    <td>{item.district}</td>
                    <td>{item.pincode}</td>
                    <td>{item.state}</td>
                    <td>{item.hallTicketNumber}</td>
                    <td>{item.sscMarks}</td>
                    <td>{item.sscPercentage}</td>
                    <td>{item.schoolName}</td>
                    <td>{item.schoolAddress}</td>
                    <td>{item.schoolPincode}</td>
                    <td>{item.collegeName}</td>
                    <td>{item.pinNumber}</td>
                    <td>{item.branch}</td>
                    <td>{item.polycetHallTicketNumber}</td>
                    <td>{item.polycetRank}</td>
                    <td>{item.joiningDate}</td>
                    <td>{item.collegeAddress}</td>
                    <td>{item.collegeDistrict}</td>
                    <td>{item.collegePincode}</td>
                    <td>{item.year}</td>
                    <td><button style={{ backgroundColor: "#adacac", marginRight: "15px" }}><Link to={`/stuupdate/${item.aadhar}`}>edit</Link></button></td>
                    <td><button style={{ backgroundColor: "#adacac" }} onClick={() => Del(item.email)}>delete</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="38">No student found</td>
                </tr>
              )}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}
