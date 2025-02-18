import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsPage from "./pages/ProjectsPage"; // Import new projects page
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Trigger animation 100px before element is visible
      once: true, // Animations play only once
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        
        {/* Dedicated Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
