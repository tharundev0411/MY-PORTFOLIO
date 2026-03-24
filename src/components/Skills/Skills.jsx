import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiTensorflow, SiPytorch, SiDocker } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'Java', icon: <FaJava color="#5382a1" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express', icon: <SiExpress color="#000000" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
        { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
      ]
    }
  ];

  const containervariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemvariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Technical Skills</span>
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <motion.div 
              className="skills-grid"
              variants={containervariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, idx) => (
                <motion.div key={idx} className="skill-item" variants={itemvariants}>
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
