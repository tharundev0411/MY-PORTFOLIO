import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaMedal className="text-primary" />,
      title: 'Global Rank 473,808 in LeetCode Weekly Contest',
      description: 'Secured a top 473,808 rank out of 800,000+ participants globally by solving all 6 challenging algorithmic problems.',
    },
    {
      icon: <FaTrophy className="text-secondary" />,
      title: 'First Prize - National Hackathon',
      description: 'Built an AI-powered accessible platform for visually impaired students. Won the overall best project out of 50 teams.',
    },
    {
      icon: <FaStar className="text-accent" />,
      title: '2-Star Coder on CodeChef',
      description: 'Consistently performed well in coding contests to achieve Div 3 and maintain a 2-star rating on the platform.',
    }
  ];

  const containervariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemvariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="achievements" className="achievements-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Achievements</span>
      </motion.h2>

      <motion.div
        className="achievements-list"
        variants={containervariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievements.map((item, index) => (
          <motion.div key={index} className="achievement-item glass-card" variants={itemvariants}>
            <div className="achievement-icon">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
