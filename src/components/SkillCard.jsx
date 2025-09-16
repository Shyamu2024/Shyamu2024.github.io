import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext.jsx';
import SkillBar from './SkillBar.jsx';
import './SkillCard.css';

const SkillCard = ({ skill, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className={`skill-card ${isDarkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="skill-header">
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-category">{skill.category}</span>
        </div>
        <div className="skill-percentage-badge">
          {skill.level}%
        </div>
      </div>
      <SkillBar level={skill.level} showPercentage={false} />
      <div className="skill-level-text">
        {skill.level >= 90 ? 'Expert' : 
         skill.level >= 75 ? 'Advanced' : 
         skill.level >= 60 ? 'Intermediate' : 'Beginner'}
      </div>
    </motion.div>
  );
};

export default SkillCard;