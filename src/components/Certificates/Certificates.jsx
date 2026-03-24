import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: 'Get Start with Python',
      issuer: 'COURSERA',
      image: 'https://via.placeholder.com/800x600?text=Machine+Learning+Certificate'
    },
    {
      title: 'Basic of Data Structure and Algorithms',
      issuer: 'SIMPLILEARN',
      image: 'https://via.placeholder.com/800x600?text=Deep+Learning+Certificate'
    },
    {
      title: 'Python Essential 1 & 2',
      issuer: 'CISCO',
      image: 'https://via.placeholder.com/800x600?text=Full+Stack+Certificate'
    },
    {
      title: 'Introduction to cyber Security',
      issuer: 'CISCO',
      image: 'https://via.placeholder.com/800x600?text=Full+Stack+Certificate'
    },
    {
      title: 'Reverse Coding X (HACKATHON)',
      issuer: 'IMC & IIT Madras',
      image: 'https://via.placeholder.com/800x600?text=Full+Stack+Certificate'
    },
    {
      title: 'Cyber',
      issuer: 'IIT Madras',
      image: 'https://via.placeholder.com/800x600?text=Full+Stack+Certificate'
    },
    {
      title: 'Jaipur Cyberthon 2K25',
      issuer: 'Gyan Vihar University',
      image: 'https://via.placeholder.com/800x600?text=Full+Stack+Certificate'
    }
  ];

  const containervariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemvariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="certificates" className="certificates-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Certifications</span>
      </motion.h2>

      <motion.div
        className="certificates-grid"
        variants={containervariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card glass-card"
            variants={itemvariants}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="cert-icon-wrapper">
              <Award size={40} className="text-accent" />
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="view-text">Click to view</span>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.5, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <h3 className="modal-title">{selectedCert.title}</h3>
              <p className="modal-issuer">{selectedCert.issuer}</p>
              <div className="modal-image-container">
                <img src={selectedCert.image} alt={selectedCert.title} className="modal-img" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
