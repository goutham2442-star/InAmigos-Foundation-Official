import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose}>&times;</button>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
              {content || (
                <p>Thank you for your interest! This feature is currently in development. Please contact us directly to proceed.</p>
              )}
            </div>
            <button className="btn-primary" onClick={onClose} style={{ marginTop: '24px', width: '100%' }}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
