import React, { useState } from 'react';
import SemesterSelector from './SemesterSelector';
import MarksForm from './MarksForm';
import MarksList from './MarksList';
import axios from 'axios';

const SemesterCombo = () => {
  const [semester, setSemester] = useState('firstyear');

  const handleSave = (semester, marks) => {
    axios
      .post(`http://localhost:8080/api/marks/${semester}/post`, marks)
      .then((response) => {
        console.log('Marks saved:', response);
      })
      .catch((error) => {
        console.error('Error saving marks:', error);
      });
  };

  return (
    <div>
      <h1>Student Marks Management System</h1>
      <SemesterSelector onSelectSemester={setSemester} />
      <MarksForm semester={semester} onSave={handleSave} />
      <MarksList semester={semester} />
    </div>
  );
};

export default SemesterCombo;
