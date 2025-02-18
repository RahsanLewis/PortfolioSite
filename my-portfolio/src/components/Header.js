import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // 🔹 State to track if the header should shrink on scroll
  const [shrink, setShrink] = useState(false);

  // 🔹 Detect scroll position to toggle the "shrink" effect
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Header with dynamic "shrink" class when scrolled */}
      <header className={`header ${shrink ? "shrink" : ""}`}>
        {/* 🔹 LOGO (Now displays as "<Rahsan Lewis/>") */}
        <div className="logo">&lt;Rahsan Lewis /&gt;</div>

        {/* 🔹 NAVIGATION MENU (Center) */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* 🔹 RESUME BUTTON (Right) */}
        <div className="resume-button">
          <a
            href="/path/to/Your_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
