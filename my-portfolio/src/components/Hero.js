import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

/* 🎭 ANIMATION VARIANTS */
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2, delay: 0.5 }
  }
};


const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

/* 🎭 HERO COMPONENT */
const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 🔹 LEFT SIDE - TEXT CONTENT */}
        <motion.div className="hero-content" variants={textVariants}>
          <h1 className="hero-title">Rahsan Lewis</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I design, develop, and deploy full-stack applications—from elegant
            frontend interfaces to powerful backend APIs & databases. Whether
            it's React, Node.js, or cloud deployments, I bring ideas to life
            with clean, efficient code.
          </p>
        </motion.div>

        {/* 🔹 RIGHT SIDE - PROFILE IMAGE (Placeholder) */}
        <motion.div
          className="hero-image"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="image-placeholder">Your Image Here</div>
          {/* Replace "image-placeholder" with an actual <img> tag when you have your picture */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
