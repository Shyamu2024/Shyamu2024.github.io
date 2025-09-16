import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Django and React. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://picsum.photos/seed/ecommerce-1/800/600",
      technologies: ["Django", "React", "PostgreSQL", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Bullet News",
      description:
        "A collaborative News application with real-time updates, Audio Feature and Sumarized News.",
      image: "https://picsum.photos/seed/bullet-news-2/800/600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with modern animations and dark/light mode toggle. Built with React and Framer Motion.",
      image: "https://picsum.photos/seed/portfolio-3/800/600",
      technologies: ["React", "Framer Motion", "CSS3", "Responsive Design"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "REST API Service",
      description:
        "A robust REST API built with Django REST Framework. Includes authentication, rate limiting, and comprehensive documentation.",
      image: "https://picsum.photos/seed/api-4/800/600",
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://picsum.photos/seed/weather-5/800/600",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Blog CMS",
      description:
        "A content management system for blogs with rich text editor, image uploads, and SEO optimization features.",
      image: "https://picsum.photos/seed/blog-6/800/600",
      technologies: ["Django", "Jinja2", "PostgreSQL", "AWS S3"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const filteredProjects = projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className={`projects ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Category filter removed */}

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
