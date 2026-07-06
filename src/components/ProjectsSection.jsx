import React, { useContext } from 'react';
import styles from './ProjectsSection.module.css';
import { motion } from 'framer-motion';
import { ModalContext } from '../App';

const projectData = [
  {
    title: "Project Udaan",
    description: "Women's empowerment initiative focusing on skill development, education, leadership training, and financial independence for marginalized women.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Women Empowerment", "Skills"]
  },
  {
    title: "Project SEVA",
    description: "Dedicated to hunger relief and poverty alleviation. Distributing vital meals, clothing, and essential supplies to the most vulnerable families.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Hunger Relief", "Community"]
  },
  {
    title: "Project Jeev",
    description: "Animal welfare initiative focused on the rescue, feeding, medical treatment, and protection of stray animals led by compassionate youth volunteers.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Animal Welfare", "Rescue"]
  },
  {
    title: "Project Prakriti",
    description: "Promoting environmental sustainability with massive tree plantation drives, conservation awareness, and clean-up campaigns across India.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Environment", "Sustainability"]
  },
  {
    title: "Project Bachpanshala",
    description: "Ensuring quality education, mentorship, and life skill development for underprivileged children in rural and underserved areas.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Education", "Children"]
  },
  {
    title: "Project Vikas",
    description: "Enhancing youth employability through dedicated internships, career counseling, and training in modern digital skills.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Youth", "Employment"]
  }
];

const ProjectsSection = () => {
  const { setIsModalOpen, setModalContent } = useContext(ModalContext);

  const handleLearnMore = (e, project) => {
    e.preventDefault();
    setModalContent({
      title: project.title,
      content: (
        <div>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', objectFit: 'cover', height: '200px' }} 
          />
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{ background: 'rgba(26,50,99,0.1)', color: '#1A3263', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                {tag}
              </span>
            ))}
          </div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>{project.description}</p>
          <p style={{ lineHeight: '1.6' }}>
            This initiative is a core part of the InAmigos Foundation's mission to drive grassroots change. 
            Through the dedication of our youth volunteers and partners, we are making a tangible difference 
            in communities across India every single day.
          </p>
        </div>
      )
    });
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Our Major Initiatives</h2>
        <p className="section-subtitle">
          From organizing health camps to empowering women and youth, we tackle critical issues head-on to foster long-term community resilience.
        </p>

        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -10, boxShadow: '0 25px 50px rgba(26,50,99,0.15)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className={styles.content}>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className={styles.link} onClick={(e) => handleLearnMore(e, project)}>Learn More &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
