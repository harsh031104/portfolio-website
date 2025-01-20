import './App.css';
import React, { useState } from 'react';
import Navbar from './sections/Nav/Nav';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero id="profile" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
