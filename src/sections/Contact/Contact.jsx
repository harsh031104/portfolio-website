import styles from './ContactStyles.module.css';
import { motion } from 'framer-motion';

function Contact() {
  const cardVariantsUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjusted duration for smoother animations
        ease: 'easeInOut',
        type: 'tween',
        stiffness: 50,
      },
    },
  };

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2,ease: "easeInOut", type: 'spring', stiffness: 100 } },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        type: 'tween',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contact" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        variants={window.innerWidth <= 768 ? cardVariantsUp : inputVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Contact
      </motion.h1>
      <form action="">
        <motion.div
          className="formGroup"
          variants={window.innerWidth <= 768 ? cardVariantsUp : inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </motion.div>
        <motion.div
          className="formGroup"
          variants={window.innerWidth <= 768 ? cardVariantsUp : inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </motion.div>
        <motion.div
          className="formGroup"
          variants={window.innerWidth <= 768 ? cardVariantsUp : inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </motion.div>
        <motion.input
          className="hover btn"
          type="submit"
          value="Submit"
          variants={window.innerWidth <= 768 ? cardVariantsLeft : inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        />
      </form>
    </section>
  );
}

export default Contact;
