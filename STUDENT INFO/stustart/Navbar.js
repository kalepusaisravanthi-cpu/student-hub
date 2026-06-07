import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import "./image.png";
import Swal from 'sweetalert2';
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // Handle dropdown toggle
  const handleDropdownToggle = (index, event) => {
    event.preventDefault();  // Prevent default navigation for dropdown
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const [showContact, setShowContact] = useState(false);
  const toggleContact = () => {
    setShowContact((prevState) => !prevState);
  };
 
 
  // Navigate to image page
  const Image23 = () => {
    navigate("/image");
  };

  
  const showTeam = () => {
    Swal.fire({
      title: '<i>Our Team:</i>',
      html: `
        <p style="font-family: monospace; font-size: 20px;color:black;"><i>Guide Name:</i> Mr. Veera Babu</p>
        <p style="font-family: monospace; font-size: 20px;color:black;"><i>Project Name:</i> STUDENT HUB</p>
        <p style="font-family: monospace; font-size: 20px;color:black;"><i>Group Members:</i></p>
        <ul style="font-family: monospace; font-size: 20px;">
          <li>22010-CM-052</li>
          <li>22010-CM-019</li>
          <li>22010-CM-001</li>
          <li>22010-CM-053</li>
          <li>22010-CM-048</li>
          <li>22010-CM-011</li>
          <li>22010-CM-003</li>
          <li>22010-CM-059</li>
        </ul>
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Okay'
    });
  };
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '530px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '100px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div className="main-container">
      <header style={{ backgroundColor:"rgb(0, 19, 46)",
  padding:" 10px 20px",
  width: "1470px",
  height: "110px"}} className="header">
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="http://themsss.com/wp-content/uploads/2016/02/student_hub_logo_small.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <ul className="menu">
            <li><Link to="/homemenu">Home</Link></li>
            <li className="dropdown">
            <Link to="/aboutus">AboutUs</Link>
            </li>
            <li className={`dropdown ${openDropdown === 1 ? 'open' : ''}`}>
              <a
                href="#"
                onClick={(event) => handleDropdownToggle(1, event)}
                className="dropdown-toggle"
              >
                Campus placements
              </a>
              {openDropdown === 1 && (
                <ul className="dropdown-menu">
                  <li><Link to="/stustart/image" onClick={Image23}>DCME</Link></li>
                </ul>
              )}
            </li>
            
            <li className={`dropdown ${openDropdown === 2 ? 'open' : ''}`}>
              <a
                href="#"
                onClick={(event) => handleDropdownToggle(2, event)}
                className="dropdown-toggle"
              >
                Gallery
              </a>
              {openDropdown === 2 && (
                <ul className="dropdown-menu">
                  <li><Link to="/stustart/photos">Photos</Link></li>
                  <li><Link to="/stustart/Video">Video</Link></li>
                    </ul>
              )}
            </li>
            <li><Link to="/stustart/oldstu">APTOSA</Link></li>
            <li style={{fontSize:"21px",marginRight:"-30px"}}>
            <Link to="/loginstu">Login</Link>
           
            </li>

           
          </ul>
        </nav>
      </header><br/>
      <div >
      <h1 style={{marginLeft:"180px",color:"navy"}} ><i>WELCOME TO YOUR ACADEMIC <br />DIGITAL WORLD</i></h1></div>
      
      <div style={containerStyle}>
      <img
        src="https://i.pinimg.com/originals/e5/c8/03/e5c803a1f390a8bfb5f45abd8a055ba5.jpg"
        alt="Image"
        style={imageStyle}
      />
      <div style={textOverlayStyle}><i>Student Hub</i></div>
    </div>
     
<br/>
      <footer className="dfooter">
        <div className="dfooter-content">
          <p>© 2025 Andhra Polytechnic College. All Rights Reserved.</p>
          <p>
            Andhra Polytechnic College is dedicated to empowering students with knowledge and skills to succeed in their careers. We offer a range of programs, fostering an environment of growth and innovation. Our alumni continue to make significant contributions to various fields.
          </p>
          <div className="dfooter-links">
            <Link to="/aboutus">About Us</Link> | 
            <Link to="#team" onClick={showTeam}>Our Team</Link> | 
            <Link to="#contact" onClick={toggleContact}>Contact Us</Link>
            {showContact && (
          <div className="contact-details">
            <p>For inquiries, please contact us at:</p>
            <p>Email: saisravanthisetti@gmail.com</p>
            <p>Phone: +91 9632584170</p>
            <p>Address: Andhra Polytechnic College, Yanam Road, Kakinada City, AP</p>
          </div>
        )}
        
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
