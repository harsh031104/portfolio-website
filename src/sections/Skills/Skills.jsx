import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

import djangoLogo from '../../assets/django.png';
import flaskeLogo from '../../assets/flaske.png';
import htmlaLogo from '../../assets/htmla.png';
import csssLogo from '../../assets/csss.png';
import javascriptLogo from '../../assets/javascript.png';
import pythonLogo from '../../assets/python.png';
import reactLogo from '../../assets/react.png';
import mongoLogo from '../../assets/mongo.png';
import SQLiteLogo from '../../assets/SQLite.png';
import MYSQLLogo from '../../assets/mysql.png';
import cppLogo from '../../assets/cpp.png';
import alchemyyyLogo from '../../assets/alchemyyy.png';
import { motion } from 'framer-motion';

function Skills() {
  // Animation variants for desktop and mobile
  const cardVariantsUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,  // Increased the duration to 2 seconds for a slower animation
        ease: "easeInOut",
        type: 'spring',
        stiffness: 10,  // Reduced stiffness to make the animation slower and more fluid
      },
    },
  };

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2,ease: "easeInOut", type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Skills
      </motion.h1>

      <div className={styles.skillGrid}>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Ensures the animation triggers each time the element enters the viewport
        >
          <SkillList imageSrc={djangoLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={flaskeLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={htmlaLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={csssLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={javascriptLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={reactLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={pythonLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={cppLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={mongoLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={SQLiteLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={MYSQLLogo} />
        </motion.div>
        <motion.div
          className={styles.skillItem}
          variants={window.innerWidth <= 768 ? cardVariantsUp : cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <SkillList imageSrc={alchemyyyLogo} />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
