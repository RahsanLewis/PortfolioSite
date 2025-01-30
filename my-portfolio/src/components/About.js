import React from "react";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate Frontend Developer with a strong focus on building interactive and responsive web applications using React.js.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
