// src/components/ProjectsSection.js
import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

const ProjectsSection = ({ title, projects }) => {
  return (
    <div className="projects-section">
      <h2>{title}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
