import React from "react";
import { motion } from "framer-motion";
import "./Skills.css"; // Importing the CSS file for styles
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiJest,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiGithubactions,
  SiTerraform,
  SiGraphql,
  SiSocketdotio,
} from "react-icons/si";

/* 🎭 Heading Animation */
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <motion.h2 variants={headingVariants} initial="hidden" animate="visible">
        My Tech Stack
      </motion.h2>

      {/* 🔹 Scrolling Container */}
      <div className="tech-stack-wrapper">
        <div className="tech-stack-scroll">
          {/* Duplicating icons to create an infinite loop effect */}
          {[...Array(10)].map((_, index) => (
            <div className="tech-stack-group" key={index}>
              <div className="tech-item">
                <SiGraphql className="tech-icon" color="#E10098" />
                <p>GraphQL</p>
              </div>
              <div className="tech-item">
                <SiSocketdotio className="tech-icon" color="#010101" />
                <p>WebSockets</p>
              </div>
              <div className="tech-item">
                <SiRedis className="tech-icon" color="#DC382D" />
                <p>Redis</p>
              </div>
              <div className="tech-item">
                <SiPrisma className="tech-icon" color="#2D3748" />
                <p>Prisma</p>
              </div>
              <div className="tech-item">
                <SiTerraform className="tech-icon" color="#623CE4" />
                <p>Terraform</p>
              </div>
              <div className="tech-item">
                <FaAws className="tech-icon" color="#FF9900" />
                <p>AWS</p>
              </div>
              <div className="tech-item">
                <SiGithubactions className="tech-icon" color="#2088FF" />
                <p>GitHub Actions</p>
              </div>
              <div className="tech-item">
                <FaDocker className="tech-icon" color="#2496ED" />
                <p>Docker</p>
              </div>
              <div className="tech-item">
                <SiPostgresql className="tech-icon" color="#336791" />
                <p>PostgreSQL</p>
              </div>
              <div className="tech-item">
                <FaNodeJs className="tech-icon" color="#83CD29" />
                <p>Node.js</p>
              </div>
              <div className="tech-item">
                <SiJest className="tech-icon" color="#C21325" />
                <p>Jest</p>
              </div>
              <div className="tech-item">
                <SiRedux className="tech-icon" color="#764ABC" />
                <p>Redux</p>
              </div>
              <div className="tech-item">
                <FaReact className="tech-icon" color="#61DBFB" />
                <p>React.js</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
