import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Brain size={32} className="text-secondary" />,
      title: 'AI Enthusiast',
      description: 'Passionate about deep learning, machine learning, and natural language processing.'
    },
    {
      icon: <Code2 size={32} className="text-primary" />,
      title: 'Software Developer',
      description: 'Experienced in building scalable web applications with modern technologies.'
    },
    {
      icon: <Rocket size={32} className="text-accent" />,
      title: 'Problem Solver',
      description: 'Love tackling complex coding challenges on LeetCode and competitive programming platforms.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">About Me</span>
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hello! I'm <strong>Tharun Dev U</strong>, a highly motivated AI & Machine Learning student with a strong passion for innovation and technology. My journey in tech started with a curiosity about how artificial intelligence can transform our daily lives.
          </p>
          <p>
            Currently, I am focusing on expanding my knowledge in Machine Learning algorithms, Data Structures, and building responsive full-stack applications. I enjoy participating in coding competitions and continuously pushing my boundaries.
          </p>
        </motion.div>

        <motion.div
          className="about-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="feature-card glass-card" variants={itemVariants}>
              <div className="feature-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
