import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import './Certificates.css';
import cybercert from "../../assets/certificates/cybercert.jpeg";
import reversecodingcert from "../../assets/certificates/reversecodingcert.jpeg";
import pythoness1 from "../../assets/certificates/pythoness1.jpeg";
import pythoness2 from "../../assets/certificates/pythoness2.jpeg";
import introtocyber from "../../assets/certificates/introtocyber.jpeg";
import simplilearnsql from "../../assets/certificates/simplilearnsql.jpeg";
import scalerosf from "../../assets/certificates/scalerosf.jpeg";
import scalersql from "../../assets/certificates/scalersql.jpeg";
import deloittedajs from "../../assets/certificates/deloittedajs.jpeg";
import ncsrchack from "../../assets/certificates/ncsrchack.jpeg";
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: 'Get Start with Python',
      issuer: 'COURSERA',
      image: pythoness1
    },
    {
      title: 'Basic of Data Structure and Algorithms',
      issuer: 'SIMPLILEARN',
      image: 'https://via.placeholder.com/800x600?text=Deep+Learning+Certificate'
    },
    {
      title: 'Python Essential 1 & 2',
      issuer: 'CISCO',
      image: pythoness2
    },
    {
      title: 'Introduction to cyber Security',
      issuer: 'CISCO',
      image: introtocyber
    },
    {
      title: 'Reverse Coding X (HACKATHON)',
      issuer: 'IMC & IIT Madras',
      image: reversecodingcert
    },
    {
      title: 'NCSRC',
      issuer: 'IIT Madras',
      image: ncsrchack
    },
    {
      title: 'Jaipur Cyberthon 2K25',
      issuer: 'Gyan Vihar University',
      image: cybercert
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte',
      image: deloittedajs
    },
    {
      title: 'Operating System Cource',
      issuer: 'Scaler',
      image: scalerosf
    },
    {
      title: 'SQL Cource',
      issuer: 'Scaler',
      image: scalersql
    },
    {
      title: 'Introduction to SQL',
      issuer: 'Simplilearn',
      image: simplilearnsql
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
