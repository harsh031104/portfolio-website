import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to section with an offset for the fixed navbar
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Smooth scroll with offset
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust 80px to match the height of your navbar
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
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
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
