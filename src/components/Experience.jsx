import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext.jsx';
import './Experience.css';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Contributing to the development of scalable web applications using Django, React, and cloud services. Collaborating with cross-functional teams to deliver client solutions while handling both backend and frontend features.',
      achievements: [
        'Successfully delivered 10+ projects across diverse domains',
        'Improved application performance by 25%',
        'Developed reusable components for faster development',
        'Contributed to CI/CD automation'
      ],
      technologies: [
        'Django', 'React', 'PostgreSQL', 'AWS', 'Docker',
        'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git/GitHub'
      ]
    },
    {
      id: 2,
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2023 - 2024',
      location: 'Kathmandu, Nepal',
      description: 'Worked on real-world client projects as part of a small dev team. Learned industry best practices and built a solid foundation in modern web development.',
      achievements: [
        'Completed 5+ client and internal projects',
        'Enhanced code maintainability with clean architecture',
        'Strengthened debugging and testing practices',
        'Gained hands-on experience in React and Django stack'
      ],
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Django',
        'MySQL', 'Bootstrap', 'REST APIs', 'Jinja2', 'Figma (for UI collaboration)'
      ]
    }
  ];
  
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className={`experience ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="experience-header" variants={itemVariants}>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              My journey in web development and the milestones I've achieved
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content">
                  <div className="experience-header-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="job-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;