import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChartBar } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

import './SocialLinks.css';

const SocialLinks = ({ className = '' }) => {
  const links = [
    { icon: <FaGithub />, url: 'https://github.com/tharundev0411', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/tharun', name: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:kit28.24bam060@gmail.com ', name: 'Email' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/tharundev04/', name: 'LeetCode' },
    { icon: <SiCodechef />, url: 'https://www.codechef.com/users/kit28aiml060', name: 'CodeChef' },
    { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/tharundev4', name: 'Codeforces' },
    { icon: <FaChartBar />, url: 'https://codolio.com/profile/tharundev04 ', name: 'Codolio' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.div
      className={`social-links ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon group"
          variants={itemVariants}
          aria-label={link.name}
        >
          {link.icon}
          <span className="tooltip">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
