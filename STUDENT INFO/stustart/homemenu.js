import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import "./image.png";
import Swal from 'sweetalert2';
const Homemenu = () => {
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
            <li><Link to="#home">Home</Link></li>
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
      <h1 style={{marginLeft:"500px",color:"navy"}} ><i>WELCOME TO YOUR ACADEMIC <br />DIGITAL WORLD</i></h1></div>
      
      <div style={containerStyle}>
      <img
        src="https://i.pinimg.com/originals/e5/c8/03/e5c803a1f390a8bfb5f45abd8a055ba5.jpg"
        alt="Image"
        style={imageStyle}
      />
      <div style={textOverlayStyle}><i>Student Hub</i></div>
    </div>
      <br/><div style={{color:"navy"}}><br/>
      <i><b style={{marginLeft:"0px"}}>The name Student Hub works because it clearly communicates the central, student-focused nature of your project,
         emphasizing accessibility, community, and the ease of finding resources in one place. It signals a dynamic platform that evolves with the needs of students, 
         making it an ideal name for a project that aims to support and engage the student body effectively.
      The term "Student Hub" can refer to different types of platforms or physical spaces depending on the context, 
      but it generally serves as a central resource for students.
      A Student Information System (SIS) project is a software application or platform designed to manage and streamline various aspects of student-related data and processes.
       The purpose of an SIS is to help educational institutions efficiently handle and organize important student information.
      
        <br/><br/>
</b>
</i></div>
<div style={{display:"flex"}}>
  <i><br/> <h4 style={{color:"navy"}}> Student Data Management:</h4>
1.Storing Personal Information: Keeps track of students' personal details like name, contact information, date of birth, and family information.<br/>
2.Enrollment Records: Manages records of students' enrollment in different courses or programs.<br/>
3.Academic History: Tracks academic performance, including grades, transcripts, and academic progress.
<h4 style={{color:"navy"}}> Attendance Management:</h4>
1.Tracking Attendance: Keeps a record of student attendance in classes and generates reports on attendance patterns.
2.Attendance Alerts: Notifies students and parents if attendance falls below a certain threshold.
<br/><h4 style={{color:"navy"}}>Reporting and Analytics:</h4>
1.Data Analysis: Generates reports on student performance, class attendance, or financial aid status.
2.Institutional Insights: Provides administrators with analytics to help with decision-making, such as identifying students at risk of failing or dropping out.
</i>
      {/* Main content */}
      <div className="dcontent">
        <div className="dslider-container">
          <div className="dslider">
          <div className="dslide">
              <img
                src="https://i.ytimg.com/vi/iK0C-v57i84/maxresdefault.jpg"
                alt="Slide 2"
              />
            </div>
            <div className="dslide">
              <img
                src="https://th.bing.com/th/id/OIP.ZqaOnVirRtxsSwKL_BMUZAHaE8?rs=1&pid=ImgDetMain"
                alt="Slide 4"
              />
            </div>
           
            <div className="dslide">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.-hJLhmdUaPPrHp1QUSaBnQHaE8&pid=Api&P=0&h=180https://tse1.mm.bing.net/th?id=OIP.Dyfkpfza7EZFdCvuXT2WywHaDU&pid=Api&P=0&h=180"
                alt="Slide 3"
                
              />
            </div>
            <div className="dslide">
              <img
                src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11130/2019/1/11/Campus%20View%20of%20Andhra%20Polytechnic%20College%20Kakinada_Campus-View.jpg"
                alt="Slide 2"
              />
            </div>
            <div className="dslide">
              <img
                src="https://th.bing.com/th/id/OIP.xDQZQnSFJAK51H6GimVVCwHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Slide 1 (Duplicate)"
              />
            </div>
          </div>
        </div>
      </div></div>

      {/* Footer */}
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

export default Homemenu;
