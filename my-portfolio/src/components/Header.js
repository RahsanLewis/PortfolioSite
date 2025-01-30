import React from "react";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Your Name</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
