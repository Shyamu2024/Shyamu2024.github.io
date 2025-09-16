import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext.jsx';
import './ProfileImage.css';

const ProfileImage = ({ 
  src, 
  alt, 
  size = 'large',
  showGlow = true,
  showPulse = true 
}) => {
  const { isDarkMode } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'profile-small';
      case 'medium': return 'profile-medium';
      case 'large': return 'profile-large';
      default: return 'profile-large';
    }
  };

  // Removed problematic pulse and glow animations that cause blinking

  return (
    <div className={`profile-image-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div
        className={`profile-image-container ${getSizeClass()}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        {/* Animated background rings */}
        <motion.div 
          className="profile-ring ring-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="profile-ring ring-2"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Simplified floating particles */}
        <div className="profile-particles">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [-15, -25, -15],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              style={{
                left: `${25 + i * 15}%`,
                top: `${15 + (i % 2) * 15}%`
              }}
            />
          ))}
        </div>

        <img
          src={src}
          alt={alt}
          className="profile-image"
          onLoad={() => setImageLoaded(true)}
          style={{ 
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="profile-placeholder">
            <motion.div 
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileImage;