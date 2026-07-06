import React from 'react';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            A legacy of transparency, compassion, and grassroots change.
          </p>
        </motion.div>

        <div className={styles.origins}>
          <motion.div 
            className={styles.originsImage}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="organic-mask">
              <img src="https://inamigosfoundation.org.in/public/storage/gallery/1738238755.JPG" alt="InAmigos Foundation Origins" />
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.originsText}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>Our Origins</h3>
            <p>
              InAmigos Foundation was founded on September 23, 2020 by Mr. Govind Shukla (Founder & CEO). It is a Section 8 registered non-profit organization, licensed by the Central Government, and headquartered in Chhattisgarh.
            </p>
            <p>
              The Foundation holds 80G & 12A certifications ensuring tax-exempt benefits for donors, is CSR-1 registered for corporate partnerships, listed with NITI Aayog, and holds the prestigious IAF ISO 9001:2015 certification.
            </p>
            <p>
              With six flagship projects addressing hunger, education, animal welfare, women's empowerment, environment, and youth skill development — every rupee creates real, measurable impact on the ground.
            </p>
            
            <div className={styles.credentialsBox} style={{ marginTop: '24px', padding: '24px', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', border: '1px solid rgba(26,50,99,0.1)' }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--primary-blue)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={24} color="var(--warm-highlight)" /> Our Credentials & Recognitions
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--warm-highlight)', marginTop: '2px' }}>✔</span>
                  <span><strong>Registered under Section 8</strong> – Licensed by the Central Government</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--warm-highlight)', marginTop: '2px' }}>✔</span>
                  <span><strong>80G & 12A Certified</strong> – Ensuring transparency, accountability, and tax exemptions for donors</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--warm-highlight)', marginTop: '2px' }}>✔</span>
                  <span><strong>CSR-1 Registered</strong> – Eligible for corporate CSR partnerships</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--warm-highlight)', marginTop: '2px' }}>✔</span>
                  <span><strong>NITI Aayog Registered</strong> – Aligning with national development goals</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--warm-highlight)', marginTop: '2px' }}>✔</span>
                  <span><strong>IAF ISO 9001:2015 Certified</strong> – Committed to maintaining high-quality standards</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.iconWrapper}>
              <ShieldCheck size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower marginalized communities by providing essential support, education, and resources. We strive to create sustainable solutions for poverty, hunger, and environmental conservation across India.
            </p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <Target size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              A compassionate and inclusive society where every individual, regardless of their background, has access to basic rights, quality education, and the opportunity to lead a dignified life.
            </p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <Users size={32} />
            </div>
            <h3>Youth-Driven Network</h3>
            <p>
              Founded by Mr. Govind Shukla, we hold 80G & 12A, CSR-1, and ISO 9001:2015 certifications. Our massive network of student volunteers and interns lead on-ground campaigns across 28 states.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
