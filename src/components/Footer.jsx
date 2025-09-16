import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import "./Footer.css";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [animateName, setAnimateName] = useState(false);
  const year = new Date().getFullYear();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="footer"
      data-section="footer"
      role="contentinfo"
      className={`section footer ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className={`footer-name ${animateName ? "rgb-animate" : ""}`}>
              Shyam Sundar Wagle
            </span>
          </div>
          <p className="footer-tagline">
            Building modern, responsive web experiences.
          </p>
        </div>

        <nav className="footer-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="footer-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="footer-social">
          <a
            className="social-btn"
            href="https://github.com/shyamwagle"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <span>GitHub</span>
          </a>
          <a
            className="social-btn"
            href="https://linkedin.com/in/shyam-wagle"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a
            className="social-btn"
            href="mailto:shyamsundarwagle97@gmail.com"
            onClick={() => {
              setAnimateName(true);
              window.setTimeout(() => setAnimateName(false), 3000);
            }}
            aria-label="Email"
          >
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Shyam Sundar Wagle. All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;
