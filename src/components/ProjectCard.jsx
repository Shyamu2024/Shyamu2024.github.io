import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext.jsx";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
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
    <motion.div
      className={`project-card ${isDarkMode ? "dark" : "light"} ${
        project.featured ? "featured" : ""
      }`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://picsum.photos/800/600?random=${encodeURIComponent(
              project.title
            )}`;
          }}
        />
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.liveUrl}
              className="project-link live-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🌐 Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="project-link github-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              📁 GitHub
            </motion.a>
          </div>
        </div>
        {project.featured && <div className="featured-badge">⭐ Featured</div>}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
