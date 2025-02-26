import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./ProjectsPage.css"; // Import CSS

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    category: "React",
    date: "2024-02-15",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    category: "JavaScript",
    date: "2023-12-10",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    category: "React",
    date: "2023-11-05",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    category: "Node.js",
    date: "2024-01-22",
  },
];

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // 🔍 Filter projects based on search input & technology filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // 🔄 Sort projects based on selection
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortOrder === "a-z") return a.title.localeCompare(b.title);
    if (sortOrder === "z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Projects
      </motion.h1>

      {/* 🔹 Search, Filter & Sort */}
      <motion.div 
        className="search-filter-sort"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* 🔄 Filter by Technology */}
        <select
          className="project-filter"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="All">All Technologies</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node.js">Node.js</option>
        </select>

        {/* 🔄 Sort Projects */}
        <select
          className="project-sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
        </select>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          className="project-search"
          placeholder="Search by name or technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* 🔹 Projects Grid */}
      <motion.div 
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-category">
                <strong>Technology:</strong> {project.category}
              </p>
              <p className="project-date">
                <strong>Date:</strong>{" "}
                {new Date(project.date).toLocaleDateString()}
              </p>
            </motion.div>
          ))
        ) : (
          <motion.p 
            className="no-results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No projects found.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
