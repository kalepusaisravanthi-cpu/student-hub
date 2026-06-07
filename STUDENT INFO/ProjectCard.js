
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <div>{description}</div> {/* Render the description here */}
      </div>
    </div>
  );
};

export default ProjectCard;