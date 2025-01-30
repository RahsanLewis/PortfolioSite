import React from "react";
import "./Projects.css"; // Import CSS file for styling

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio built with React.js.",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A React-based weather app that fetches live weather data.",
    link: "https://yourweatherapp.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A simple task tracker to manage daily activities.",
    link: "https://yourtaskmanager.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
