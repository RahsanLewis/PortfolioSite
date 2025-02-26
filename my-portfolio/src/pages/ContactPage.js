import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This will be replaced with backend functionality)");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="contact-wrapper">
        {/* Left Side - Contact Info */}
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            Have a project in mind, or just want to chat? Feel free to reach out!
          </p>

          {/* Social & Contact Links */}
          <motion.div 
            className="contact-links"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="mailto:rahsanlewis@gmail.com">📧 Email Me</a>
            <a href="https://github.com/rahsanlewis" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            <a href="https://linkedin.com/in/rahsan-lewis" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="form-title">Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
