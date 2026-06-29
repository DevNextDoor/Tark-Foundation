import React from 'react';
import { motion } from 'framer-motion';
export const Loader = ({ onComplete }: {onComplete: () => void;}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-tark-navy"
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: 0
      }}
      transition={{
        duration: 0.8,
        delay: 1.5,
        ease: 'easeInOut'
      }}
      onAnimationComplete={onComplete}>
      
      <motion.img
        src="/logo.png"
        alt="TARK Logo"
        className="w-32 h-auto"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} />
      
    </motion.div>);

};