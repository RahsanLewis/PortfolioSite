import React from "react";
import "./Hero.css"; // Import CSS file for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name</h1>
        <h2>Frontend Developer | React Enthusiast</h2>
        <p>
          I specialize in building responsive and interactive websites using React.js.
        </p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
