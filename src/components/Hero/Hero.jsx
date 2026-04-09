import React from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket } from 'lucide-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Hero.css';
import profileImg from '../../assets/pfp/Tharunpfp.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="name text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Tharun Dev U
          </motion.h1>
          <motion.h2
            className="role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            AI & Machine Learning <br />
            <span className="text-muted-xl">Aspiring AI Engineer</span>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about Artificial Intelligence, Machine Learning, and building modern, intelligent solutions that solve real-world problems.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="/resume/Tharundev_resume.pdf" download className="btn btn-primary group">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline group">
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8"
          >
            <SocialLinks className="hero-social-links" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-img-wrapper glow-effect">
            <img
              src={profileImg}
              alt="Tharun"
              className="profile-img"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
