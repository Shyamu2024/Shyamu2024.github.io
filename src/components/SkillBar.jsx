import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext.jsx';
import './SkillBar.css';

const SkillBar = ({ 
  level, 
  showPercentage = true, 
  height = 'normal',
  animated = true,
  color = 'primary'
}) => {
  const { isDarkMode } = useTheme();

  const getHeightClass = () => {
    switch (height) {
      case 'thin': return 'skill-bar-thin';
      case 'thick': return 'skill-bar-thick';
      default: return 'skill-bar-normal';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'secondary': return 'skill-bar-secondary';
      case 'success': return 'skill-bar-success';
      case 'warning': return 'skill-bar-warning';
      default: return 'skill-bar-primary';
    }
  };

  return (
    <div className={`skill-bar-container ${isDarkMode ? 'dark' : 'light'} ${getHeightClass()}`}>
      <motion.div
        className={`skill-bar-fill ${getColorClass()}`}
        initial={animated ? { width: 0 } : { width: `${level}%` }}
        whileInView={animated ? { width: `${level}%` } : {}}
        transition={animated ? { duration: 1.5, ease: 'easeOut', delay: 0.2 } : {}}
        viewport={{ once: true }}
      />
      {showPercentage && (
        <motion.span 
          className="skill-percentage"
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          whileInView={animated ? { opacity: 1 } : {}}
          transition={animated ? { duration: 0.5, delay: 1.7 } : {}}
          viewport={{ once: true }}
        >
          {level}%
        </motion.span>
      )}
    </div>
  );
};

export default SkillBar;