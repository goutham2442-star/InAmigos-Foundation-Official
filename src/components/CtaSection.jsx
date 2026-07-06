import React, { useContext } from 'react';
import styles from './CtaSection.module.css';
import { motion } from 'framer-motion';
import { ModalContext } from '../App';

const CtaSection = () => {
  const { setIsModalOpen, setModalContent } = useContext(ModalContext);

  const handleVolunteerClick = (e) => {
    e.preventDefault();
    setModalContent({
      title: 'Join Our Volunteer Program',
      content: (
        <div>
          <p>We are always looking for passionate individuals to join our on-ground campaigns and remote internship programs.</p>
          <p>Email your resume and area of interest to: <strong>hr@inamigosfoundation.org.in</strong></p>
        </div>
      )
    });
    setIsModalOpen(true);
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setModalContent({
      title: 'Make a Difference Today',
      content: (
        <div>
          <p style={{ marginBottom: '16px' }}>Your contribution directly supports our grassroots initiatives across 28 states.</p>
          <p><strong>Bank Details:</strong><br />InAmigos Foundation<br />Acct: 1234567890<br />IFSC: INAM000123</p>
        </div>
      )
    });
    setIsModalOpen(true);
  };

  return (
    <section id="donate" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Be the Change You Wish to See</h2>
          <p>
            Whether you want to volunteer on the ground, join our remote internship program, or support our campaigns financially, there is a place for you in the InAmigos family.
          </p>
          <div className={styles.buttons}>
            <a href="https://inamigosfoundation.org.in/became-volunteer" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none', padding: '12px 32px' }}>
              Join as Volunteer
            </a>
            <a href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)', textDecoration: 'none', padding: '12px 32px' }}>
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
