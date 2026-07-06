import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const backgroundImages = [
  "https://inamigosfoundation.org.in/public/storage/events/1738238109.jpg",
  "https://inamigosfoundation.org.in/public/storage/events/1738135259.jpeg",
  "https://inamigosfoundation.org.in/public/storage/events/1738134836.jpeg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051382.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Slider Background */}
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Hero Background"
            className={styles.slideImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className={styles.overlay} />
        
        {/* Floating Animated Shapes */}
        <motion.div 
          className={styles.shape1}
          animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.shape2}
          animate={{ y: [0, -50, 0], x: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.shape3}
          animate={{ y: [0, -30, 0], scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Official Awareness Campaign
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Empowering Communities Through <span>Youth Action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We are a certified Section 8 Non-Profit transforming lives across India. Discover our projects and see how you can make an impact today.
          </motion.p>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <MagneticButton href="#projects" className="btn-primary">Our Projects</MagneticButton>
            <MagneticButton href="https://inamigosfoundation.org.in/became-volunteer" target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>Join as Volunteer</MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
