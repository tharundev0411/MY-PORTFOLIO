import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normal form submit would go here. No backend required for UI demonstration.
    alert("Thank you for your message! It's currently a UI demonstration.");
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Get In Touch</span>
      </motion.h2>

      <div className="contact-container glass-card">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Connect!</h3>
          <p className="contact-desc">
            Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-methods">
            <a href="mailto:email@example.com" className="email-link group">
              <Mail className="group-hover:text-primary transition-colors" />
              <span>email@example.com</span>
            </a>
          </div>

          <div className="contact-social">
            <p>Connect with me:</p>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Hi Tharun, I'd like to talk about..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
