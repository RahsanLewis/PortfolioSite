import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

/* HEADER ANIMATION */
const headerVariants = {
  hidden: { opacity: 0, y: -70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
      delay: 0,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeOut" } },
};

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <motion.header
      className="header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 🔹 Navigation Container */}
      <nav className="nav-container">
        {/* Logo */}
        <motion.div className="nav-logo" variants={navItemVariants}>
          <NavLink to="/" className="logo">
            &lt;Rahsan Lewis /&gt;
          </NavLink>
        </motion.div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/">Home</NavLink>{" "}
          </motion.li>
          {["Projects", "Resume", "Contact", "Playground"].map((name, i) => (
            <motion.li key={i} variants={navItemVariants} whileHover="hover">
              <NavLink to={`/${name.toLowerCase()}`}>{name}</NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Dark Mode Toggle Switch */}
      <motion.div className="dark-mode-container" variants={navItemVariants}>
        <input
          type="checkbox"
          id="dark-mode-toggle"
          className="dark-mode-checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="dark-mode-toggle" className="dark-mode-label">
          <span className="dark-mode-icon">🌙</span>
          <span className="dark-mode-icon">☀️</span>
        </label>
      </motion.div>
    </motion.header>
  );
};

export default Header;
