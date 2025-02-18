import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation.json";
import "./Hero.css";

/* ------------------------------------ */
/* 🔹 SMOOTH SCROLL FUNCTION */
/* ------------------------------------ */
/* Scrolls smoothly to the Skills section when the button is clicked */
const scrollToSkills = () => {
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: "smooth" });
  }
};

/* ------------------------------------ */
/* 🔹 FRAMER MOTION ANIMATION VARIANTS */
/* ------------------------------------ */

/* Container animation - Fades in with staggered child animations */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/* Individual item animation - Moves up while fading in */
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Arrow animation - Bounces up and down infinitely */
const arrowVariants = {
  initial: { y: 0 },
  hover: { y: -5 },
  animate: {
    y: [0, 10, 0],
    transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
  },
};

/* ------------------------------------ */
/* 🎭 HERO COMPONENT */
/* ------------------------------------ */

const Hero = () => {
  return (
    <section className="hero">
      {/* 🔹 HERO CONTENT (Title, Subtitle, Description, Scroll Button) */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 🔹 NAME */}
        <motion.h1 className="hero-title" variants={itemVariants}>
          Rahsan Lewis
        </motion.h1>

        {/* 🔹 JOB TITLE */}
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Full Stack Developer
        </motion.h2>

        {/* 🔹 SHORT BIO */}
        <motion.p className="hero-description" variants={itemVariants}>
          I design, develop, and deploy full-stack applications—from elegant
          frontend interfaces to powerful backend APIs & databases. Whether it's
          React, Node.js, or cloud deployments, I bring ideas to life with
          clean, efficient code.
        </motion.p>

        {/* 🔹 SCROLL BUTTON (Takes user to Skills section) */}
        <motion.button
          className="scroll-button"
          onClick={scrollToSkills}
          whileHover="hover"
        >
          <span className="scroll-text">View My Skills</span>
        </motion.button>
      </motion.div>

      {/* 🔹 LOTTIE ANIMATION (Visual element beside hero content) */}
      <Lottie
        animationData={HeroAnimation}
        loop={true}
        autoPlay={true}
        style={{ width: 500, height: 560 }}
      />
    </section>
  );
};

export default Hero;
