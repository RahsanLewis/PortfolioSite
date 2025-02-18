import React from "react";
import "./ProjectsPage.css"; // We'll style it later

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://via.placeholder.com/300", // Replace with actual image
    github: "https://github.com/yourusername/project-one",
    demo: "https://yourprojectdemo.com",
    category: "React",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/yourusername/project-two",
    demo: "https://yourprojectdemo.com",
    category: "JavaScript",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
