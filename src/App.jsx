import React, { useState, useEffect, createContext } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ImpactSection from './components/ImpactSection';
import GallerySection from './components/GallerySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Modal from './components/Modal';

export const ModalContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: null });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Simulate loading for premium reveal effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ModalContext.Provider value={{ setIsModalOpen, setModalContent }}>
      <CustomCursor />
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalContent.title}
        content={modalContent.content}
      />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'var(--bg-main)',
              zIndex: 99999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <motion.img 
              src="https://inamigosfoundation.org.in/public/storage/settings/1744214680.jpg"
              alt="Loading"
              style={{ width: '120px', borderRadius: '50%' }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--warm-highlight)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      <div className="app" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease-in' }}>
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ImpactSection />
          <GallerySection />
          <CtaSection />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-blue)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 999,
              border: 'none'
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--warm-highlight)', color: 'var(--heading-text)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export default App;
