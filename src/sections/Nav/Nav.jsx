import React, { useState } from 'react';
import { useTheme } from '../../common/ThemeContext'; // ✅ Import useTheme
import styles from './NavStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ✅ Now theme and toggleTheme are defined

  const themeIcon = theme === 'light' ? sun : moon; // ✅ Now theme is available

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to section with an offset for the fixed navbar
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Smooth scroll with offset
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust 80px to match navbar height
        behavior: 'smooth',
      });
    }
    
    // Close the mobile menu after selection
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#profile">Portfolio</a>
        </div>

        {/* ✅ Theme Toggle Button */}
        <img
          className={styles.themeToggle}
          src={themeIcon}
          alt="Theme toggle icon"
          onClick={toggleTheme}
        />

        {/* Mobile Menu Toggle Button */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Navbar Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a></li>
          <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>About</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
