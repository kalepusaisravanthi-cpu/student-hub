import React from 'react';
import { motion ,useState} from 'framer-motion';
import './Aboutus.css';
import Header from './header'
import { useNavigate, Link } from "react-router-dom";
const AboutUs = () => {
   
  
  return (

  
   <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
     
      > <div style={{marginLeft:"-33px",marginTop:"-33px"}}> <Header/></div>
       
      <motion.div 
        className="about-content"
        whileHover={{ scale: 1.05 }}
      >
        
    <br/>
       <center> <h1 className="about-title">About Us</h1>
        <p className="about-text">
        Welcome to Student Hub, where we bring together technology and education to streamline the academic experience. Our mission is to provide students, faculty, and institutions with an intuitive platform for managing and accessing essential academic data.
        <h1 className="about-title">What We Offer:</h1>
        </p>
        <p className="about-text">
        Student Information Management: Easily access your marks, attendance, and academic history in one place.
        Real-time Updates: Stay on top of your performance with real-time tracking of grades and attendance.
        Downloadable Reports: Quickly download detailed reports for your marks, attendance, and other academic data whenever you need them.
        Lecturer Profiles: Connect with your faculty by accessing lecturer contact details and professional information.
        At Student Hub, we believe in empowering students and educators by providing a user-friendly, secure, and efficient platform. Whether you're a student monitoring your progress or a lecturer managing your courses, we're here to make your academic journey simpler and more organized.

        </p>
        <p className="about-text">
        Our platform is designed to enhance transparency, communication, and efficiency, making academic management easier for everyone.
        </p>
        </center>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
