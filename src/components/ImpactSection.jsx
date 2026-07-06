import React from 'react';
import styles from './ImpactSection.module.css';
import { motion } from 'framer-motion';
import { Users, Map, HeartHandshake } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section id="impact" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Social Impact & Purpose</h2>
          <p>
            Every campaign we run aims to build a more inclusive, compassionate, and empowered society. 
            We believe in collective action—tackling interconnected issues simultaneously to create lasting grassroots change.
          </p>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.statItem}>
            <Users className={styles.featureIcon} size={48} color="white" />
            <span className={styles.number}>50,000+</span>
            <span className={styles.label}>Beneficiaries Reached</span>
          </div>
          <div className={styles.statItem}>
            <Map className={styles.featureIcon} size={48} color="white" />
            <span className={styles.number}>28</span>
            <span className={styles.label}>States Covered</span>
          </div>
          <div className={styles.statItem}>
            <HeartHandshake className={styles.featureIcon} size={48} color="white" />
            <span className={styles.number}>200+</span>
            <span className={styles.label}>Active Volunteers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
