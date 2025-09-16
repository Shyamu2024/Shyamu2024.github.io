import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElement.css';

const FloatingElement = ({ size, delay, duration }) => {
  const getRandomPosition = () => ({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100),
  });

  const [position] = React.useState(getRandomPosition);

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'floating-small';
      case 'medium': return 'floating-medium';
      case 'large': return 'floating-large';
      default: return 'floating-small';
    }
  };

  const getAnimationVariants = () => {
    const baseVariants = {
      initial: {
        x: position.x,
        y: position.y,
        opacity: 0,
        scale: 0,
      },
      animate: {
        opacity: [0, 0.6, 0.3, 0.6, 0],
        scale: [0, 1, 0.8, 1, 0],
        y: [position.y, position.y - 50, position.y + 30, position.y - 20, position.y],
        x: [position.x, position.x + 30, position.x - 20, position.x + 10, position.x],
        rotate: [0, 180, 360],
      },
    };

    return baseVariants;
  };

  const getShape = () => {
    const shapes = ['circle', 'triangle', 'square', 'hexagon'];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  return (
    <motion.div
      className={`floating-element ${getSizeClass()} ${getShape()}`}
      variants={getAnimationVariants()}
      initial="initial"
      animate="animate"
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default FloatingElement;
