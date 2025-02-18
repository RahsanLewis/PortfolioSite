import React, { useState } from "react";
import "./Contact.css"; // Importing CSS for styling

/* ------------------------------------ */
/* 🎭 CONTACT COMPONENT */
/* ------------------------------------ */
const Contact = () => {
  // 🔹 State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔹 State to track submission success
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Simulates form submission
  };

  return (
    <section id="contact" className="contact">
      {/* 🔹 Section Title */}
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or job opportunities!</p>
      
      {/* 🔹 Contact Info */}
      <div className="contact-info">
        <p>Email: <a href="mailto:rahsanlewis@gmail.com">rahsanlewis@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rahsan-lewis/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/RahsanLewis" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
      </div>

      {/* 🔹 Form Section */}
      <h3>Or send a Message</h3>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* 🔹 Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* 🔹 Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* 🔹 Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {/* 🔹 Submit Button */}
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
