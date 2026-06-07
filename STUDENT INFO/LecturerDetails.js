import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";

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

const LecturerDetails = () => {
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
      <center><h2 className="ld-title">Lecturer Details</h2></center>
      <div className="ld-button-container">
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('A')}>
            <div className='ld-user'><FaUser /></div>
            <div>Anasuya</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('B')}>
            <div className='ld-user'><FaUser /></div>
            <div>Pravallika</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('c')}>
            <div className='ld-user'><FaUser /></div>
            <div>Pavani</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('D')}>
            <div className='ld-user'><FaUser /></div>
            <div>LakshmiDevi</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('E')}>
            <div className='ld-user'><FaUser /></div>
            <div>SandhyaRani</div>
          </button>
        </div>
        <div className="ld-button-wrapper">
          <button className="ld-button" onClick={() => handleLecturerClick('F')}>
            <div className='ld-user'><FaUser /></div>
            <div>Prathyusha</div>

            
            
          </button>
        </div>
      </div>

      {isModalOpen && <Modal name={lecturerName} closeModal={closeModal} />}
    </div>
  );
};

export default LecturerDetails;
