import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 100 }} // Start slightly below
      animate={{ opacity: 1, y: 0 }} // Move up into place
      transition={{
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
        delay: 0,
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Rahsan Lewis. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
