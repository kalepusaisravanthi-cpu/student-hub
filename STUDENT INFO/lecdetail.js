import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
/**/ 
// Modal Component
const Modal = ({ name, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Details of Lecturer: {name}</h3>
        
        <div className='Model-div'>
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div></div>
    </div>
  );
};

const LectureDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lecturerName, setLecturerName] = useState('');

  const handleLecturerClick = (name) => {
    setLecturerName(name);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="ld-container">
      <br/><br/><br/>
      <div className="ld-button-container">
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Anil')}>
            <div className='ld-user'><FaUser /></div>
            <div>Anil</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Nikhil')}>
            <div className='ld-user'><FaUser /></div>
            <div>Nikhil</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Prabhas')}>
            <div className='ld-user'><FaUser /></div>
            <div>Prabhas</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Ravi')}>
            <div className='ld-user'><FaUser /></div>
            <div>Ravi</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Suresh')}>
            <div className='ld-user'><FaUser /></div>
            <div>Suresh</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('Kumar')}>
            <div className='ld-user'><FaUser /></div>
            <div>Kumar</div>
          </button>
        </div>
      </div>

      {isModalOpen && <Modal name={lecturerName} closeModal={closeModal} />}
    </div>
  );
};

export default LectureDetails;






















/* */