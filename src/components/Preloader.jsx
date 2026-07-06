import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const line1 = "Small acts.";
const line2 = "Massive ripples.";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const charVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(10px)",
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
};

export default function Preloader({ onComplete }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for animation to finish then hide preloader
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // Give time for the exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div 
          className={styles.preloader}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className={styles.inner}>
            <motion.div 
              className={styles.line}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {line1.split('').map((char, index) => (
                <motion.span key={index} variants={charVariants} className={styles.char}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              className={styles.line}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {line2.split('').map((char, index) => (
                <motion.span key={index} variants={charVariants} className={styles.char}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              className={styles.tagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              InAmigos Foundation
            </motion.div>
          </div>
          
          <motion.div 
            className={`${styles.mask} ${styles.maskLeft}`}
            exit={{ scaleX: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          />
          <motion.div 
            className={`${styles.mask} ${styles.maskRight}`}
            exit={{ scaleX: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
