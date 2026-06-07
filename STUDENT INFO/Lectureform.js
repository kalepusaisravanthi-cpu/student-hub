import React, { useState } from 'react';
import axios from 'axios';
import './Lectureform.css';
import Swal from 'sweetalert2';
import './App.css';
const Lecf = () => {
  const [val, setVal] = useState([]);
  const [Data, setData] = useState({
    id: '',
    name: '',
    dob: '',
    phoneNumber: '',
    gender: '',
    department: '',
    email: '',
    educationalQualification: '',
    experience: '',
    role: '',
    nationality: '',
    address: '',
  });

  // Handler to update the form data
  const handler = (e) => {
    const { name, value } = e.target;
    setData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  // Form Validation
  const validateForm = () => {
    const { name, dob, phoneNumber, email, department, educationalQualification } = Data;
    if (!name || !dob || !phoneNumber || !email || !department || !educationalQualification) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all the required fields!',
        icon: 'error',
      });
      return false;
    }
    return true;
  };

  // Submit handler to send data to the backend
  const submithandler = (e) => {
    e.preventDefault();

    // Validate form before sending the data
    if (!validateForm()) return;

    const details = {
      name: Data.name,
      dob: Data.dob,
      phoneNumber: Data.phoneNumber,
      gender: Data.gender,
      department: Data.department,
      email: Data.email,
      educationalQualification: Data.educationalQualification,
      experience: Data.experience,
      role: Data.role,
      nationality: Data.nationality,
      address: Data.address,
    };

    // Log the details object to the console to verify the form data
    console.log('Form data being sent:', details);

    // Send data to the backend (this part sends the data)
    axios
      .post('http://localhost:8080/lecturers/register', details)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: 'Lecturer registered successfully!',
            text: 'Good job!',
            icon: 'success',
          });
          setVal(val + 1); // This increments a value when the form is submitted successfully
        }
      })
      .catch((err) => {
        console.error('Error during submission:', err);
        Swal.fire({
          title: 'Error',
          text: 'There was an issue with the submission. Please try again.',
          icon: 'error',
        });
      });
  };

  return (
   
    <div className="lf-container">
      <div>
       
        <form onSubmit={submithandler} className="lf-form">
          <h1 className="lf-form-title" style={{ marginLeft: '10px' }}>
            Registration
          </h1>

          <label className="lf-label">Id:</label>
          <input
            type="number"
            name="id"
            value={Data.id}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Name:</label>
          <input
            type="text"
            name="name"
            value={Data.name}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={Data.dob}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Mobile Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={Data.phoneNumber}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Gender:</label>
          <select
            name="gender"
            value={Data.gender}
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
            type="text"
            name="department"
            value={Data.department}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Email:</label>
          <input
            type="email"
            name="email"
            value={Data.email}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Qualification:</label>
          <input
            type="text"
            name="educationalQualification"
            value={Data.educationalQualification}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Experience (in years):</label>
          <input
            type="number"
            name="experience"
            value={Data.experience}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Role:</label>
          <input
            type="text"
            name="role"
            value={Data.role}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={Data.nationality}
            onChange={handler}
            className="lf-input"
          />

          <label className="lf-label">Address:</label>
          <input
            type="text"
            name="address"
            value={Data.address}
            onChange={handler}
            className="lf-input"
          />

          <button type="submit" className="lf-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default Lecf;
