import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className={styles.card}>
      <img className={styles.image} src={src} alt={`${h3} logo`} />
      <h3 className={styles.title}>{h3}</h3>
      <p className={styles.description}>{p}</p>
    </a>
  );
}

export default ProjectCard;
