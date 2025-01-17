import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p className={styles.text}>
        &copy; 2025 Harsh Kumar. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
