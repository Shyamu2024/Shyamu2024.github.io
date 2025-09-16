import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext.jsx";
import FloatingElement from "./FloatingElement.jsx";
import "./Home.css";

const Home = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingElements = [
    { id: 1, size: "small", delay: 0, duration: 3 },
    { id: 2, size: "medium", delay: 0.5, duration: 4 },
    { id: 3, size: "large", delay: 1, duration: 5 },
    { id: 4, size: "small", delay: 1.5, duration: 3.5 },
    { id: 5, size: "medium", delay: 2, duration: 4.5 },
    { id: 6, size: "small", delay: 2.5, duration: 3.2 },
  ];

  return (
    <section id="home" className={`home ${isDarkMode ? "dark" : "light"}`}>
      <div className="floating-container">
        {floatingElements.map((element) => (
          <FloatingElement
            key={element.id}
            size={element.size}
            delay={element.delay}
            duration={element.duration}
          />
        ))}
      </div>

      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-layout">
          <motion.div className="profile-section" variants={itemVariants}>
            <motion.div
              className="profile-image-container"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/profile-image.jpg"
                alt="Shyam Sundar Wagle - Full Stack Developer"
                className="profile-image"
              />
            </motion.div>
          </motion.div>

          <motion.div className="intro-text" variants={itemVariants}>
            <motion.h1
              className="main-title"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hi, I'm{" "}
              <motion.span
                className="highlight"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Shyam Sundar Wagle
              </motion.span>
            </motion.h1>

            <motion.h2
              className="subtitle"
              variants={itemVariants}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="description"
              variants={itemVariants}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create beautiful, responsive web applications with modern
              technologies. Passionate about clean code and user experience.
            </motion.p>

            <motion.div
              className="cta-buttons"
              variants={itemVariants}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Project
              </motion.button>



              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact With Me
              </motion.button>
              <motion.div
                className="scroll-arrow-between"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  display: "inline-block",
                  margin: "0 16px",
                  fontSize: "1.5rem",
                  color: "#8b9cff",
                }}
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Removed scroll indicator below buttons */}
      </motion.div>
      
    </section>
  );
};

export default Home;
