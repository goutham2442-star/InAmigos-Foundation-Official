import React, { useState } from 'react';
import styles from './GallerySection.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_GALLERY_IMAGES = [
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1743051382.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738299164.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738238755.JPG",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738238744.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738238725.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738238698.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738054473.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738054458.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738054440.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1738048982.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908498.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908483.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908403.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908391.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908380.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908369.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908359.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908350.jpg",
  "https://inamigosfoundation.org.in/public/storage/gallery/1690908247.jpeg"
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Our Wall of Change</h2>
        <p className="section-subtitle">
          A glimpse into our on-ground efforts and the lives we touch across India.
        </p>

        <div className={styles.grid}>
          {ALL_GALLERY_IMAGES.map((url, index) => (
            <motion.div 
              key={index}
              className={styles.gridItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              onClick={() => setSelectedImage(url)}
            >
              <img src={url} alt={`Gallery Impact ${index + 1}`} loading="lazy" />
              <div className={styles.overlay}>
                <span>View Full</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeBtn}>&times;</button>
            <motion.img 
              src={selectedImage} 
              alt="Fullscreen" 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
