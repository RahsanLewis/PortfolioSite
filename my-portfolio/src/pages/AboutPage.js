import React from "react";
import "./AboutPage.css"; // Import the CSS file

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>I'm Rahsan Lewis, a passionate developer creating interactive experiences.</p>
      </section>

      {/* Profile Section */}
      <section className="about-profile">
        <img src="https://via.placeholder.com/200" alt="Your Name" className="profile-pic" />
        <div className="profile-text">
          <h2>Who I Am</h2>
          <p>
            I specialize in front-end development, creating sleek UI/UX designs, and building seamless user experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>My Skills</h2>
        <ul>
          <li>React.js & JavaScript</li>
          <li>CSS & UI/UX Design</li>
          <li>Responsive Web Development</li>
          <li>API Integration</li>
          <li>Performance Optimization</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <h2>Experience</h2>
        <p>I've worked on multiple projects involving modern JavaScript frameworks and UI design.</p>
      </section>
    </div>
  );
};

export default AboutPage;
