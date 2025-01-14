import styles from './SkillListStyles.module.css';

function SkillList({ imageSrc }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Skill logo" className={styles.skillImage} />
    </div>
  );
}

export default SkillList;
