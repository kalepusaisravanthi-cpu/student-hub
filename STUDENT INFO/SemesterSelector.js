import React from 'react';

const SemesterSelector = ({ onSelectSemester }) => {
  const semesters = ['firstyear', 'thirdsem', 'fourthsem', 'fifthsem'];

  return (
    <div>
      <h2>Select Semester</h2>
      <select onChange={(e) => onSelectSemester(e.target.value)}>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            {semester.charAt(0).toUpperCase() + semester.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelector;
