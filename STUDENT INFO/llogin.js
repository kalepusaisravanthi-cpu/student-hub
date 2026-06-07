/*import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle sending OTP
  const sendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      if (response.data.success) {
        setIsOtpSent(true);
      }
    } catch (err) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { email, otp });
      if (response.data.success) {
        alert('Login successful!');
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login with OTP</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isOtpSent}
        />
      </div>

      {isOtpSent && (
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      )}

      <div>
        {isOtpSent ? (
          <button onClick={verifyOtp} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        ) : (
          <button onClick={sendOtp} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        )}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
*/










import axios from "axios";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import Swal from "sweetalert2";
import './trial.css';

export default function LLogin() {
    
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle sending OTP
  const sendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      if (response.data.success) {
        setIsOtpSent(true);
      }
    } catch (err) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { email, otp });
      if (response.data.success) {
        alert('Login successful!');
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

   
  /*  const [data, setData] = useState({ name: '', email: '' })
   //const [val, setVal] = useState([])

   const Nav = useNavigate();

    const handler = (e) => {
        const { name, value } = e.target

        setData((prevstate) =>
            ({ ...prevstate, [name]: value }))
    }
    

    

    const login = (e) => {
        e.preventDefault();

        const details = { name: data.name, email: data.email,Role:data.Role}

        axios.post('http://localhost:7000/HODalrt', details).then((res) => {
            if (res && res.data && res.data.length > 0) {

            localStorage.setItem('name', res.data[0].name);
           localStorage.setItem('Role', res.data[0].Role);
           
                if (res.data[0].role === 'head') {
                Swal.fire({
                    title: "admin login successfully!",
                    text: "Good job!",
                    icon: "success"
                });
               
               Nav('/dashboard');
               

            } else {
                alert("wrong credentials");
                console.log('Please check your credentials');

            }
        }})

       
    axios.post('http://localhost:7000/lecturealrt', details).then((res) => {
        if (res && res.data && res.data.length > 0) {

        localStorage.setItem('name', res.data[0].name);
           if (res.data[0].Role === 'lecture') {
                Swal.fire({
                    title: "employee login successfully!",
                    text: "Good job!",
                    icon: "success"
                });
               
                 Nav('/getemp');
            
            }
        }} 
        
    )
        axios.post('http://localhost:7000/studentalrt', details).then((res) => {
            if (res && res.data && res.data.length > 0) {
                localStorage.setItem('role', res.data[0].Role);
           
            localStorage.setItem('name', res.data[0].name);
               if (res.data[0].Role === 'student') {
                    Swal.fire({
                        title: "manager login successfully!",
                        text: "Good job!",
                        icon: "success"
                    });
                  
                    Nav('/dashboard');
                
                }
            } 
    })
    }
    

*/


   
    return (
        <> 
         <video id="video" controls muted loop autoPlay src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_large.mp4" />
    
        <img style={{position :" fixed",zIndex :"-1" ,height:"800px",width:"1550px",opacity:"75%" }} src="https://wallpaperaccess.com/full/1564642.jpg" alt="."/>
        <br/><br/><br/><br/><br/><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
          
             <b></b>   <b></b>   <b></b>  <center><div id="a" style={{  borderRadius:"20px",borderStyle:"solid",backgroundColor:" rgba(0, 0, 0, 0.3)", height: "450px",paddingLeft:"20px" , width: "450px", boxShadow: "5px 5px 5px rgb(35, 232, 236)" }}>
                    <i><h1 style={{marginLeft:"170px",color:"white" }}><center>LOGIN</center></h1></i>
                  <br></br> <br></br><br></br> <br></br><br></br>

                    <label style={{color:"white"}} ><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text"   style={{borderStyle:"none",height:"50px",width:"300px", boxShadow: "3px 3px 3px rgb(35, 232, 236)",fontSize:"20px" }}placeholder="             enter your email" name="email"   value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isOtpSent} />
                    <br></br><br></br><br></br> <br/> 
                    {isOtpSent && (
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>)}

 
        <div>
        {isOtpSent ? (
          <button onClick={verifyOtp} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        ) : (
          <button onClick={sendOtp} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        )}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
   

                   </div>
                </center>

           
   
   </>     ) 
}