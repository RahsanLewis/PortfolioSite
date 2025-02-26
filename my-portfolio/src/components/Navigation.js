import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navigation.css";

/* 🎭 ANIMATION VARIANTS */
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2, delay: 0.5 }
  }
};


const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
};

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      className="navigation"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="navigation-text" variants={buttonVariants}>
        What brings you here today?
      </motion.p>

      {/* 🔹 Buttons with Motion Effects */}
      <motion.div className="navigation-buttons">
        <motion.button
          className="nav-button"
          onClick={() => navigate("/contact")}
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaEnvelope className="nav-icon" /> I'm Hiring a Developer
        </motion.button>

        <motion.button
          className="nav-button"
          onClick={() => navigate("/services")}
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaCode className="nav-icon" /> I Need a Custom Website
        </motion.button>

        <motion.button
          className="nav-button"
          onClick={() => navigate("/projects")}
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaBriefcase className="nav-icon" /> I Want to See Your Work
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
