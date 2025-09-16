import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext.jsx";
import SkillCard from "./SkillCard.jsx";
import "./About.css";

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: "Django", level: 70, category: "Backend" },
    { name: "Jinja2", level: 90, category: "Backend" },
    { name: "CSS", level: 95, category: "Frontend" },
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "UI/UX", level: 95, category: "Design" },
  ];

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
    <section id="about" className={`about ${isDarkMode ? "dark" : "light"}`}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate Full Stack Developer with expertise in modern web
              technologies
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="bio-section" variants={itemVariants}>
              <h3>My Story</h3>
              <p>
                I'm Shyam Sundar Wagle, a passionate Full Stack Developer with a
                strong foundation in both frontend and backend technologies.
                With expertise in Django, React, Jinja2, and modern web
                development practices, I create robust and scalable web
                applications that deliver exceptional user experiences.
              </p>
              <p>
                My journey in web development began with a fascination for
                creating interactive and beautiful user interfaces. Over time,
                I've developed a comprehensive skill set that spans from
                pixel-perfect frontend designs to robust backend architectures,
                with particular strength in CSS, HTML, and UI/UX design.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices in
                the industry. When I'm not coding, you can find me exploring new
                design trends, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div className="skills-section" variants={itemVariants}>
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="qualifications" variants={itemVariants}>
            <h3>Key Qualifications</h3>
            <div className="qualifications-grid">
              <motion.div
                className="qual-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="qual-icon">🎯</div>
                <h4>Problem Solving</h4>
                <p>
                  Expert at breaking down complex problems into manageable
                  solutions
                </p>
              </motion.div>

              <motion.div
                className="qual-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="qual-icon">🚀</div>
                <h4>Performance Optimization</h4>
                <p>
                  Skilled in optimizing applications for speed and efficiency
                </p>
              </motion.div>

              <motion.div
                className="qual-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="qual-icon">🎨</div>
                <h4>UI/UX Design</h4>
                <p>Strong eye for design and user experience principles</p>
              </motion.div>

              <motion.div
                className="qual-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="qual-icon">🔧</div>
                <h4>Full Stack Development</h4>
                <p>Proficient in both frontend and backend development</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
