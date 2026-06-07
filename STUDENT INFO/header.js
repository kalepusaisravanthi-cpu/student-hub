import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./stustart/Navbar.css";
import "./stustart/image.png";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // Handle dropdown toggle
  const handleDropdownToggle = (index, event) => {
    event.preventDefault();  // Prevent default navigation for dropdown
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
 
  // Navigate to image page
  const Image23 = () => {
    navigate("/image");
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
          </div>
  );
};

export default Header;
