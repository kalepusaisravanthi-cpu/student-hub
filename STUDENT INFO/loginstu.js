import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const LLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState(null);  // Add state to track the role
  const Nav = useNavigate();

  // Send OTP to the provided email
  const sendOtp = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const response = await axios.post('http://localhost:8080/api/otp/send', null, {
        params: { email },
      });
      setMessage(response.data);
      setIsOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify the OTP entered by the user
  const verifyOtp = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      console.log("Email: ", email);
  
      // Fetch the role and log it
      const role = await getRole(email);
      setRole(role);
      console.log("Fetched Role:", role); // Log fetched role in console
  
      if (!role) {
        setError('Email is not registered as a student or lecturer.');
        setLoading(false);
        return;
      }
  
      const response = await axios.post('http://localhost:8080/api/otp/verify', null, {
        params: { email, otp },
      });
  
      console.log('OTP Verification Response:', response.data);
  
      if (response.data === 'OTP verified successfully!') {
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        console.log('Role saved in local storage:', role);
  
        if (email === 'kalepusaisravanthi@gmail.com') {
          console.log('Navigating to /headmenu');
          Nav('/headmenu');
        } else if (role === 'Lecturer') {
          console.log('Navigating to /lecturemenu');
          Nav('/lecturemenu');
        } else if (role === 'Student') {
          console.log('Navigating to /stumenu');
          Nav('/stumenu');
        } else {
          Swal.fire({
            title: 'Error',
            text: 'No Email Found!',
            icon: 'error',
          });
        }
  
        Swal.fire({
          title: `Login successfully!`,
          text: 'Good job!',
          icon: 'success',
        });
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Get role based on email (Student or Lecturer)
  const getRole = async (email) => {
    try {
      const studentResponse = await axios.get(`http://localhost:8080/student/api/getByEmail/${email}`);
      if (studentResponse.status === 200) {
        console.log("User Role: Student"); // Log role in console
        return 'Student';
      }
    } catch (err) {
      console.log('Student not found, checking for lecturer...');
    }
  
    try {
      const lecturerResponse = await axios.get(`http://localhost:8080/lecturers/email/${email}`);
      if (lecturerResponse.status === 200) {
        console.log("User Role: Lecturer"); // Log role in console
        return 'Lecturer';
      }
    } catch (err) {
      console.log('Lecturer not found');
    }
  
    console.log("User Role: Not Found"); // Log if no role is found
    return null;
  };

  return (
    <div >
     <video id="video" style={{marginLeft:"-10px"}}controls muted loop autoPlay src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_large.mp4" />
    
    <img style={{position :" fixed",zIndex :"-1" ,height:"820px",width:"1550px",opacity:"75%" }} src="https://wallpaperaccess.com/full/1564642.jpg" alt="."/>
    <br/><br/><br/><br/><br/><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
      
         <b></b>   <b></b>   <b></b>  <div id="a" style={{  borderRadius:"20px",borderStyle:"solid",backgroundColor:" rgba(0, 0, 0, 0.3)", height: "450px",paddingLeft:"20px" , width: "450px", boxShadow: "5px 5px 5px rgb(35, 232, 236)",marginLeft:"530px",marginTop:"50px"}}>
                <i><h1 style={{marginLeft:"170px",color:"white" }}><center>LOGIN</center></h1></i>
              <br></br> <br></br><br></br> <br></br><br></br>

      
      <div style={{marginTop:"-30px"}}>
        <label style={{color:"white"}}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isOtpSent}
          required
          style={{borderStyle:"none",height:"50px",width:"300px", boxShadow: "3px 3px 3px rgb(35, 232, 236)",fontSize:"20px",marginLeft:"55px" }} />
      </div>

      {isOtpSent && (
        <div><br/>
          <label style={{color:"white"}}>Enter OTP:</label>
          <input
           style={{borderStyle:"none",height:"50px",width:"300px", boxShadow: "3px 3px 3px rgb(35, 232, 236)",fontSize:"20px",marginLeft:"55px" }} 
       
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required/>
           
        </div>
      )}

      <div><br/>
        {isOtpSent ? (
          
          <button onClick={verifyOtp} disabled={loading} style={{ width: '100%', padding: '10px', marginTop: '10px',marginLeft:"-10px",backgroundColor:"rgb(85, 131, 167)" }}>
            {loading ? 'Verifying OTP...' : 'Verify OTP'}
          </button>
        ) : (
          <button onClick={sendOtp} disabled={loading}  style={{ width: '100%', padding: '10px', marginTop: '10px',marginLeft:"-10px",backgroundColor:"rgb(85, 131, 167)" }}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        )}
      </div>

      {message && <p style={{ color: 'white', marginTop: '10px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div></div>
  );
}

export default LLogin;
