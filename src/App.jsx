import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-particles"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer glass-card">
        <p>© {new Date().getFullYear()} Tharun. All rights reserved.</p>
        <p className="footer-built">Built with React & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
