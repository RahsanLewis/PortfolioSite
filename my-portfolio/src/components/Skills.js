import React from "react";
import "./Skills.css"; // Importing the CSS file for styles
import {
  FaLaptopCode, FaServer, FaDatabase, FaTools, FaShieldAlt
} from "react-icons/fa"; // Importing Font Awesome icons for visual enhancement

/* ------------------------------------ */
/* 🎭 SKILLS COMPONENT */
/* ------------------------------------ */

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* 🔹 Section Title */}
      <h2>My Skills</h2>

      {/* 🔹 SKILLS GRID (Displays all skill categories) */}
      <div className="skills-grid">

        {/* 🔹 FRONTEND DEVELOPMENT */}
        <div className="skill-card">
          <FaLaptopCode className="skill-icon" />
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Tailwind CSS</li>
            <li>Responsive Design & Performance Optimization</li>
          </ul>
        </div>

        {/* 🔹 BACKEND DEVELOPMENT */}
        <div className="skill-card">
          <FaServer className="skill-icon" />
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js, Python (Django), Java (Spring Boot)</li>
            <li>REST & GraphQL APIs</li>
            <li>Authentication (JWT, OAuth)</li>
          </ul>
        </div>

        {/* 🔹 DATABASE MANAGEMENT */}
        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <h3>Database Management</h3>
          <ul>
            <li>MySQL, PostgreSQL</li>
            <li>MongoDB, Firebase</li>
            <li>Database Design & Query Optimization</li>
          </ul>
        </div>

        {/* 🔹 DEVOPS & DEPLOYMENT */}
        <div className="skill-card">
          <FaTools className="skill-icon" />
          <h3>DevOps & Deployment</h3>
          <ul>
            <li>Git, Docker</li>
            <li>AWS, Heroku, Netlify</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>

        {/* 🔹 ADDITIONAL SKILLS */}
        <div className="skill-card">
          <FaShieldAlt className="skill-icon" />
          <h3>Additional Skills</h3>
          <ul>
            <li>Testing: Jest, Cypress</li>
            <li>Web Security: XSS, CSRF, SQL Injection Prevention</li>
            <li>Team Collaboration & Agile Methodologies</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
