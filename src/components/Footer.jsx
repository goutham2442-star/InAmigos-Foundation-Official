import React from 'react';
import styles from './Footer.module.css';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.brandInfo}>
          <img src="./logo.jpg" alt="InAmigos Foundation" className={styles.logo} />
          <p className={styles.description}>
            A Section 8 Non-Profit Organization dedicated to community development, women empowerment, education, and environmental sustainability. Registered under 80G, 12A, CSR-1, and ISO 9001:2015.
          </p>
          <div className={styles.socials}>
            <a href="https://twitter.com/InamigosF" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com/inamigos/" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/inamigos-foundation/" target="_blank" rel="noreferrer"><FaLinkedinIn size={20} /></a>
            <a href="https://www.facebook.com/inamigos.inamigos" target="_blank" rel="noreferrer"><FaFacebookF size={20} /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Our Projects</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} style={{ flexShrink: 0 }} />
              <span>Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur. Chhattisgarh Pin-Code: 495555</span>
            </li>
            <li>
              <Mail size={18} style={{ flexShrink: 0 }} />
              <span>support@inamigosfoundation.org.in</span>
            </li>
            <li>
              <Phone size={18} style={{ flexShrink: 0 }} />
              <span>+91 626 730 9902</span>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p>&copy; {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
