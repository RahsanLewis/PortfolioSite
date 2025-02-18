import React from "react";
import Lottie from "lottie-react";
import ProjectAnimation from "./ProjectAnimation.json";
import "./Projects.css";

/* ------------------------------------ */
/* 🔹 FEATURED PROJECT DATA */
/* ------------------------------------ */
const featuredProject = {
  id: 1,
  title: "Portfolio Website",
  description: "A fully responsive personal portfolio built with React.js.",
  link: "https://yourportfolio.com",
};

/* ------------------------------------ */
/* 🎭 PROJECTS COMPONENT */
/* ------------------------------------ */
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      
      {/* 🔹 Left Side: Lottie Animation */}
      <div className="projects-lottie">
        <Lottie 
          animationData={ProjectAnimation} 
          loop={true} 
          autoPlay={true}
          style={{ width: 500, height: 600 }}
        />
      </div>

      {/* 🔹 Right Side: Featured Project Section */}
      <div className="projects-content">
        <h2>Featured Project</h2>

        {/* 🔹 Featured Project Card */}
        <div className="featured-project-card">
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
        </div>

        {/* 🔹 Buttons BELOW the project card */}
        <div className="project-buttons">
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
            View Project
          </a>
          <a href="/projects" className="see-all-btn">See All Projects</a>
        </div>
      </div>

    </section>
  );
};

export default Projects;
