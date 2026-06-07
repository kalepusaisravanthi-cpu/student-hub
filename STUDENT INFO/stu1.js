
import './stu1.css';
import React, { useState } from 'react'
import axios from "axios"
import Swal from "sweetalert2";
//  import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [studentData, setStudentData] = useState({
    name: ' ',
    email: '',
    mobileNumber: '',
    dob: '',
    gender: '',
    aadhar: '',
    fatherName: '',
    motherName: '',
    guardianName: '',
    guardianMobile: '',
    fatherAadhar: '',
    motherAadhar: '',
    fatherMobileNumber: '',
    motherMobileNumber: '',
    caste: '',
    village: '',
    mandal: '',
    district: '',
    pincode: '',
    state: '',
    hallTicketNumber: '',
    sscMarks: '',
    sscPercentage: '',
    schoolName: '',
    schoolAddress: '',
    collegeName: '',
    branch: '',
    year: '',
    //semester: '',
    shift: '',
    pinNumber: '',
    polycetHallTicketNumber: '',
    polycetRank: '',
    joiningDate: '',
    collegeAddress: '',
    collegeDistrict: '',
    collegePincode: ''
  });


    const [file, setFile] = useState(null);
   // const [responseMessage, setResponseMessage] = useState('');

  //  const Nav = useNavigate();
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };
    
  
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all  fields and file are provided
    if (!file) {
      alert('Please provide an image.');
      return;
    }

    // Create a FormData object to handle multipart form data
    const formData = new FormData();
    formData.append('student', JSON.stringify(studentData)); // Convert the student data to a JSON string
    formData.append('file', file);

    try {
      // Send POST request to backend
      const res = await 
        axios.post('http://localhost:8080/student/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set the response message
     // setResponseMessage(`Success: ${response.data}`);
     
     if (res.status === 200) {
      Swal.fire({
        title: "Student login successfully!",
        text: "Good job!",
        icon: "success"
      }); //setVal(val + 1);
    }
    } catch (error) {
     // setResponseMessage(`Error: ${error.response ? error.response.data : error.message}`);
     Swal.fire(
              'Oops!',
              'Sorry,something went wrong.',
              'warning'
            );
    }
  };
    

  return (
    <>
      <br /><div id="stu1" style={{ display: "flex", gap: "0px", marginLeft: "-60px", marginTop: "-90px" }}>
        <div>
          <img class="im" src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="." />
        </div>
        <div className='form-container'>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
          <form  onSubmit={handleSubmit} >
            <fieldset class="form-fieldset">
              <center>
                <legend class="form-legend"> STUDENT INFORMATION FORM</legend>
              </center>
             
              <label htmlFor="file" ><h3 style={{marginLeft:"220px"}}>Upload Image:</h3></label>
     
      <input
            type="file"
            id="file"
            style={{marginLeft:"200px"}}
            accept="image/*"
           
            onChange={(e) => setFile(e.target.files[0])}
          />
        
        <br/><br/>
              <div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>
                &nbsp;<input type="text" name="name" placeholder="name" class="form-input"  onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label><i class="fa-regular fa-envelope"></i></label> &nbsp;
                <input type="email" name="email" placeholder=" email" class="form-input"  onChange={handleInputChange} /><br /><br /><br />
              </div> &nbsp;<div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa fa-phone-square" aria-hidden="true"></i></label> &nbsp;
                <input type='number' name="mobileNumber" placeholder='mobileNumber no.' class="form-input" onChange={handleInputChange} />
                &nbsp; &nbsp; &nbsp;
                <label class="label-dob"><i class="fa-regular fa-calendar"></i></label> &nbsp;
                <input type='date' name="dob" class="form-input" placeholder='dob' onChange={handleInputChange} /><br /><br /><br />
              </div>&nbsp;<div style={{ display: "flex" }}>&nbsp;&nbsp;<label class="label-gender"><i class="fa-solid fa-users-between-lines"></i></label>
                &nbsp;&nbsp;<select name="gender" class="form-input" onChange={handleInputChange}>
                  <option>select gender</option>
                  <option value={"male"}>male</option>
                  <option value={"female"}>female</option>
                  <option value={"others"}>others</option>
                </select> &nbsp; &nbsp; &nbsp;
                <label><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;
                <input type='number' name="aadhar" placeholder='aadhar no.' class="form-input" onChange={handleInputChange} /><br /><br /><br />
              </div><br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-regular fa-user"></i></label>  &nbsp;
                <input type='text' name="fatherName" class="form-input" placeholder='fatherName' onChange={handleInputChange} />
                &nbsp;&nbsp;  &nbsp; &nbsp;
                <label><i class="fa-solid fa-user"></i></label>
                &nbsp;
                <input type='text' name="motherName" placeholder=' motherName' class="form-input" onChange={handleInputChange} /><br /><br /><br />
              </div>&nbsp;<div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;<label><i class="fa-solid fa-circle-user"></i></label>   &nbsp;
                <input type='text' name="guardianName" class="form-input" placeholder='guardianName' onChange={handleInputChange} />
                &nbsp;  &nbsp;  &nbsp;
                <label><i class="fa fa-phone-square" aria-hidden="true"></i></label>
                &nbsp;
                <input type='number' name="guardianMobile" placeholder=' guardian mobileNumber ' class="form-input" onChange={handleInputChange} /><br /><br /><br />
              </div>

              <br />
              <button class="next-button">
                <a class="next-button-link" href="#stu2">NEXT</a>
              </button>

            </fieldset>
          </form>
        </div>

      </div>



      <br /><br /><br /><br /><br /><br /><br /><br />
      <div id="stu2" className="maindiv" style={{ display: "flex", gap: "0px", marginLeft: "-60px", marginTop: "-90px" }} >
        <div >
          <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
        </div>

        <div className='form-container2'>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
          <form  onSubmit={handleSubmit} >
            <fieldset class="form-fieldset2">
              <center>
                <br /><br />
                <legend><div className="hedng">PERSONAL DETAILS</div></legend>
              </center>
              <br /><br />
              <br />
              <div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;
                <label className="mobileNumber-label"><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;
                <input className="inp" type="number" name="fatherAadhar" placeholder="father aadhar no." onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <label className="mobileNumber-label"><i class="fa fa-list-ol" aria-hidden="true"></i></label> &nbsp;&nbsp;
                <input className="inp" type="number" name="motherAadhar" placeholder="mother aadhar no." onChange={handleInputChange} /><br /><br />
              </div><br /> <br /><div style={{ display: "flex" }}>
                &nbsp; &nbsp; &nbsp;
                <label className="phone-label"><i className="fa-solid fa-phone-volume"></i></label> &nbsp;
                <input className="inp" type="number" name="fatherMobileNumber" placeholder="father mobileNumber no." onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <label className="phone-label"><i className="fa-solid fa-phone"></i></label> &nbsp;&nbsp;
                <input className="inp" type="number" name="motherMobileNumber" placeholder="mother mobileNumber no." onChange={handleInputChange} /><br /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>&nbsp; &nbsp;&nbsp;
                <label><i className="fa-regular fa-file"></i></label>
                &nbsp;
                <select className="inp" name="caste" onChange={handleInputChange}>
                  <option>select category</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
                &nbsp; &nbsp; &nbsp;&nbsp;
                <label><i className="fa-solid fa-place-of-worship"></i></label> &nbsp;
                <input className="inp" type="text" name="village" placeholder="village"  onChange={handleInputChange} /><br /><br /><br />
              </div><br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp; <label><i className="fa-regular fa-map"></i></label>
                <input className="inp" type="text" name="mandal" placeholder="mandal name" onChange={handleInputChange} /> &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;&nbsp;<label className="location-label"><i className="fa-solid fa-location-dot"></i></label> &nbsp;&nbsp;
                <select className="inp" name="district" onChange={handleInputChange}>
                  &nbsp;<option>district name</option>
                  <option value="srikakulam">SRIKAKULAM</option>
                  <option value="viziagnaram">VIZIANAGARAM</option>
                  <option value="vizag">VIZAG</option>
                  <option value="east godavari">EAST GODAVARI</option>
                  <option value="west godavari">WEST GODAVARI</option>
                  <option value="krishna">KRISHNA</option>
                  <option value="guntur">GUNTUR</option>
                  <option value="ongole">ONGOLE</option>
                  <option value="prakasam">PRAKASAM</option>
                  <option value="nellore">NELLORE</option>
                  <option value="kadapa">KADAPA</option>
                  <option value="chittoor">CHITTOOR</option>
                  <option value="anantapur">ANANTAPUR</option>
                  <option value="kurnool">KURNOOL</option>
                </select></div>
              &nbsp;&nbsp;&nbsp;&nbsp;<br /> &nbsp;

              <div style={{ display: "flex" }}> &nbsp; &nbsp;&nbsp;  <label className="location-pincode-label"><i class="fa fa-map-pin" aria-hidden="true"></i></label> &nbsp;
                <input type="text" name="pincode" className="inp" placeholder="pincode" onChange={handleInputChange} />
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label className="clone-label"><i className="fa-solid fa-clone"></i></label>
                <select name="state" className="inp" onChange={handleInputChange}>
                  <option>state name</option>
                  <option value="andhra pradesh">ANDHRA PRADESH</option>
                  <option value="telangana">TELENGANA</option>
                  <option value="tamilnadu">TAMILNADU</option>
                  <option value="kerala">KERALA</option>
                </select></div>

              <br /><br /><br /><br /><br />
              <div style={{ display: "flex" }}>
                <button id="bu">
                  <a style={{ color: "white", textDecoration: "none" }} href="#stu1">BACK</a>
                </button>
                <button className='next-btn'>
                  <a style={{ color: "white", textDecoration: "none" }} href="#stu3">NEXT</a>
                </button>
              </div>
            </fieldset>
          </form>
        </div>

      </div>

      <br /><br /><br /><br />



      <div id="stu3" style={{ display: "flex", gap: "0px", marginLeft: "-60px" }}>
        <div>
          <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
        </div>

        <div className='form-container2'>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
          <form  onSubmit={handleSubmit} >
            <fieldset class="form-fieldset2">
              <center>
                <br /><br />
                <legend><div className="hedng">SCHOOL DETAILS</div></legend>
              </center>
              <br /><br />
              <br /><div style={{ display: "flex" }}>&nbsp; &nbsp;&nbsp; &nbsp;
                <label className="icon-label"><i className="fa-solid fa-pen-to-square"></i></label> &nbsp;
                <input className="inp" type="number" name="hallTicketNumber" placeholder="ssc hall hallTicketNumber." onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; <label className="icon-label"><i className="fa-solid fa-signal"></i></label> &nbsp;&nbsp;
                <input className="inp" type="number" name="sscMarks" placeholder="ssc sscMarks" onChange={handleInputChange} /><br /><br />
              </div> <br /><br /><div style={{ display: "flex" }}>&nbsp; &nbsp;&nbsp; &nbsp;
                <label className="icon-label"><i className="fa-solid fa-percent"></i></label> &nbsp;
                <input className="inp" type="number" name="sscPercentage" placeholder="percentage of ssc" onChange={handleInputChange} />
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<label className="icon-label"><i className="fa-solid fa-place-of-worship"></i></label>
                <input className="inp" type="text" name="schoolName" placeholder="school name" onChange={handleInputChange} /><br /><br /><br />
              </div><br /><div style={{ display: "flex" }}>&nbsp;&nbsp; &nbsp;
                <label className="icon-label"><i className="fa-solid fa-chart-area"></i></label>
                &nbsp;&nbsp;<input className="inp" type="text" name="schoolAddress" placeholder="school address"  onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; &nbsp; <label className="icon-label"><i className="fa-solid fa-droplet"></i></label> &nbsp;
                <input className="inp" type="number" name="schoolPincode" placeholder="pincode"  onChange={handleInputChange} /><br /><br /><br />
              </div> <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br />
              <div className="buttons">
                <button className="back-btn">
                  <a href="#stu2">BACK</a>
                </button>
                <button className="next-btn">
                  <a href="#stu4">NEXT</a>
                </button>
              </div>
            </fieldset>
          </form>
        </div>

      </div>

      <br /><br /><br />

      <div id="stu4" style={{ display: "flex", gap: "0px", marginLeft: "-60px" }}>
        <div>
          <img className="im" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="." />
        </div>

        <div className='form-container2'>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
          <form  onSubmit={handleSubmit} >
            <fieldset  class="form-fieldset2">
              <center>
                <br /><br />
                <legend><div className="hedng">COLLEGE DETAILS</div></legend>
              </center><br />
              <br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="icon-label"><i className="fa-solid fa-house"></i></label> &nbsp;
                <input className="inp" type="text" name="collegeName" placeholder="college name" onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; &nbsp;<label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
                <select className="inp" name="branch" onChange={handleInputChange}>
                  <option>branch</option>
                  <option value="CME">Computers</option>
                  <option value="ECE">Electronics & communication</option>
                  <option value="EEE">Electrical & Electronics</option>
                  <option value="ME">Mechanical</option>
                  <option value="AA">Architecture</option>
                  <option value="AE">Automobile</option>
                  <option value="CE">Civil</option>
                </select></div><br />
              <br /><div style={{ display: "flex" }}>&nbsp;&nbsp; &nbsp;&nbsp;
                <label className="icon-label"><i className="fa-regular fa-calendar-minus"></i></label> &nbsp;
                <input className="inp" type="text" name="year" placeholder="year" onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                &nbsp;  <label className="icon-label"><i className="fa-solid fa-layer-group"></i></label> &nbsp;
                <select className="inp" name="semester" onChange={handleInputChange}>
                  <option>semester</option>
                  <option value="sem1">Sem 1</option>
                  <option value="sem2">Sem 2</option>
                  <option value="sem3">Sem 3</option>
                  <option value="sem4">Sem 4</option>
                  <option value="sem5">Sem 5</option>
                  <option value="sem6">Sem 6</option>
                </select></div><br />
              <br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp; &nbsp;
                <label className="icon-label"><i className="fa-solid fa-layer-group"></i></label>&nbsp;
                <select className="inp" name="shift" onChange={handleInputChange}>
                  <option>shift</option>
                  <option value="1">Shift 1</option>
                  <option value="2">Shift 2</option>
                </select>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label className="icon-label"><i className="fa-regular fa-calendar-minus"></i></label> &nbsp;
                <input className="inp" type="number" name="pinNumber" placeholder="pincode no" onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <br />
              <br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="icon-label"><i className="fa-solid fa-file"></i></label> &nbsp;
                <input className="inp" type="number" name="polycetHallTicketNumber" placeholder="polycet hall hallTicketNumber" onChange={handleInputChange} />
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<label className="icon-label"><i className="fa-regular fa-calendar-days"></i></label>
                &nbsp;<input className="inp" type="number" name="polycetRank" placeholder="polycet polycetRank" onChange={handleInputChange} /><br /><br /><br />
              </div><br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="icon-label"><i className="fa-regular fa-calendar"></i></label> &nbsp;
                <input className="inp" type="date" name="joiningDate" placeholder="dob of join"  onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; <label className="icon-label"><i className="fa-regular fa-envelope"></i></label> &nbsp;
                <input className="inp" type="text" name="collegeAddress" placeholder="address of college"  onChange={handleInputChange} /><br /><br /><br />
              </div><br /><div style={{ display: "flex" }}>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="icon-label"><i className="fa-solid fa-location-crosshairs"></i></label> &nbsp;
                <select className="inp" name="collegeDistrict" onChange={handleInputChange}>
                  <option>district name</option>
                  <option value="srikakulam">SRIKAKULAM</option>
                  <option value="viziagnaram">VIZIANAGARAM</option>
                  <option value="vizag">VIZAG</option>
                  <option value="east godavari">EAST GODAVARI</option>
                  <option value="west godavari">WEST GODAVARI</option>
                  <option value="krishna">KRISHNA</option>
                  <option value="guntur">GUNTUR</option>
                  <option value="ongole">ONGOLE</option>
                  <option value="prakasam">PRAKASAM</option>
                  <option value="nellore">NELLORE</option>
                  <option value="kadapa">KADAPA</option>
                  <option value="chittoor">CHITTOOR</option>
                  <option value="anantapur">ANANTAPUR</option>
                  <option value="kurnool">KURNOOL</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp; <label className="icon-label"><i className="fa-solid fa-location-dot"></i></label> &nbsp;
                <input className="inp" type="number" name="collegePincode" placeholder="pincode" onChange={handleInputChange} />
                &nbsp;&nbsp;&nbsp;</div>

              <div className="buttons">
                <button className="back-btn"><a href="#stu3">BACK</a></button>
                <button type='submit' className="submit-btn">SUBMIT</button>
              </div>
            </fieldset>
          </form>
        
   
        </div>

      </div>

    </>
  );
}




