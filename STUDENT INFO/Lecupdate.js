import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Lectureform.css';
import Swal from "sweetalert2";
import { useNavigate,useParams } from 'react-router-dom';

const Lecu = () => {
  const [data, setdata] = useState({
    name: '',
    dob: '',
    phoneNumber: '',
    gender: '',
    department: '',
    email: '',
    educationalQualification: '',
    experience: '',
   
    nationality: '',
    address: ''
  });
 const nav=useNavigate();
  const { email } = useParams();

  // Fetch data when component mounts
  useEffect(() => {
    axios.get(`http://localhost:8080/lecturers/email/${email}`)
      .then((res) => {
        // Update state with fetched data
        if (res.data  && res.data.name) {
       
        setdata({
          id:res.data.id ||'',
          name: res.data.name || '',
          dob: res.data.dob || '',
          phoneNumber: res.data.phoneNumber || '',
          gender: res.data.gender || '',
          department: res.data.department|| '',
          email: res.data.email|| '',
          educationalQualification: res.data.educationalQualification|| '',
          experience: res.data.experience|| '',
          nationality: res.data.nationality|| '',
          address: res.data.address || '',
        });
      }
  })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, [email]);

  const handler = (e) => {
    const { name, value } = e.target;
    setdata((prevstate) => ({ ...prevstate, [name]: value }));
  };

  // Submit handler to send data to the backend
  const submithandler = (e) => {
    e.preventDefault();
    const details = {
      id:data.id,
      name: data.name,
      dob: data.dob,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      department: data.department,
      email: data.email,
      educationalQualification: data.educationalQualification,
      experience: data.experience,
      nationality: data.nationality,
      address: data.address
    };

    axios.put(`http://localhost:8080/lecturers/email/${email}`, details)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Lecturer Update successful!",
            text: "Good job!",
            icon: "success"
          });
          nav('/headmenu?tab=project');
        } else {
          console.log('Error:', res);
        }
      })
      .catch((err) => {
        console.error('Error submitting data:', err);
      });
  };

  return (
    <div className="lf-container">
      <div>
        <form method="post" onSubmit={submithandler} className="lf-form">
          <h1 className="lf-form-title" style={{ marginLeft: "100px" }}>Update</h1>
        

          <label className="lf-label">Id:</label>
          <input
           
            name="id"
            value={data.id}  // ID field should be handled carefully since it's usually generated automatically by backend
            onChange={handler}
            className="lf-input"
            readOnly
          />

          <label className="lf-label">Name:</label>
          <input
         
            name="name"
            value={data.name}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Date of Birth:</label>
          <input
            
            name="dob"
            value={data.dob}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Mobile Number:</label>
          <input
           
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Gender:</label>
          <select
            name="gender"
            value={data.gender}
            onChange={handler}
            className="lf-inputs"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label className="lf-label">Department:</label>
          <input
          
            name="department"
            value={data.department}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Email:</label>
          <input
            
            name="email"
            value={data.email}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Qualification:</label>
          <input
           
            name="educationalQualification"
            value={data.educationalQualification}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Experience (in years):</label>
          <input
           
            name="experience"
            value={data.experience}
            onChange={handler}
            className="lf-input"
          />

         

          <label className="lf-label">Nationality:</label>
          <input
           
            name="nationality"
            value={data.nationality}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Address:</label>
          <input
       
            name="address"
            value={data.address}
            onChange={handler}
            className="lf-input"
          />

          <button type="submit" className="lf-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Lecu;
