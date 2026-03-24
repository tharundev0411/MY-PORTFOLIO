import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Safe-Aura – Women Safety Monitoring System',
      description: 'Integrated real-time monitoring to enhance situational awareness and improve personal safety response.',
      status: 'Completed',
      github: 'https://github.com/tharun/ai-chat-assistant',
      tags: ['Python', 'Machine Learning', 'OpenCV', 'Flask']
    },
    {
      title: 'Cinema Ticket Booking Interface',
      description: 'Developed a responsive interface for seamless cinema ticket booking with real-time seat availability.',
      status: 'Completed',
      github: 'https://github.com/tharun/data-visualizer',
      tags: ['Java', 'Oops']
    },
    {
      title: 'Rice-grapevine-pistachio-cnn',
      description: 'Built a multi-class image classification model to identify rice strains, pistachio varieties, and grapevine leaves for agricultural optimization.',
      status: 'Completed',
      github: 'https://github.com/tharundev0411/rice-grapevine-pistachio-cnn',
      tags: ['Python', 'Machine Learning', 'YOLO v8', 'Flask']
    }
  ];

  const containervariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemvariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Featured Projects</span>
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={containervariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card glass-card group" variants={itemvariants}>
            <div className={`status-badge ${project.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}>
              <span>{project.status}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub size={20} />
              <span>Source Code</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
