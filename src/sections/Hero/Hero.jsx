import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navnnn.png';

import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import mailLight from '../../assets/mail-light.svg';
import mailDark from '../../assets/mail-dark.svg';
import HarshResume from '../../assets/HarshResume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from 'react';

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { theme, toggleTheme } = useTheme();
  const [blinkText, setBlinkText] = useState('Web Developer');

 
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const mailIcon = theme === 'light' ? mailLight : mailDark;

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkText((prevText) => (prevText === 'Web Developer' ? 'Python Developer' : 'Web Developer'));
    }, 1000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.section
      id="hero"
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Color Mode Section */}
      <motion.div
        className={styles.colorModeContainer}
        initial={{ x: '-100vw' }}
        animate={inView ? { x: 0 } : { x: '-100vw' }}
        transition={{ type: 'spring', stiffness: 10 }}
      >
        <div className={`${styles.heroContainer} ${theme === 'light' ? styles.borderBlack : ''}`}>
          <img src={heroImg} className={styles.hero} alt="Profile picture of Harsh Kumar" />
        </div>


        
      </motion.div>

      {/* Info Section */}
      <motion.div
        className={styles.info}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1>
          Harsh
          <br />
          Kumar
        </h1>
        <h2>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {blinkText}
          </motion.span>
        </h2>
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="mailto:himansh03112004@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Mail icon" />
          </a>
          <a href="https://x.com/HarshKumar0311" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-kumar-03abcd/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/harsh031104" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </motion.span>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          With a passion for learning and building web application
        </motion.p>
        <motion.a
          href={HarshResume}
          download
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
