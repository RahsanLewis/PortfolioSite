import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rahsan Lewis. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
