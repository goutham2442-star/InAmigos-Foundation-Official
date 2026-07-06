import React, { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import { ModalContext } from '../App';
import MagneticButton from './MagneticButton';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { setIsModalOpen, setModalContent } = useContext(ModalContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'projects', 'impact', 'gallery', 'donate'];
      let current = '';
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img 
            src="./logo.jpg" 
            alt="InAmigos Foundation Logo" 
            className={styles.logoImg}
          />
        </div>
        
        <nav className={styles.nav}>
          <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <a href="#about" className={activeSection === 'about' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#projects" className={activeSection === 'projects' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Initiatives</a>
            <a href="#impact" className={activeSection === 'impact' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Impact</a>
            <a href="#gallery" className={activeSection === 'gallery' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="https://inamigosfoundation.org.in/became-volunteer" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>Join as Volunteer</a>
          </div>
        </nav>

        <div className={styles.actions}>
          <MagneticButton href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '10px 24px', textDecoration: 'none' }}>Donate Now</MagneticButton>
          <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
