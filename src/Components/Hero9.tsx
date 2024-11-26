import React from 'react';
import styles from '../styles/hero9.module.css';

const Hero9: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Our Sponsors</h1>
      </div>
      <div className={styles.sponsorsContainer}>
        <div className={styles.sponsorBox}>First</div>
        <div className={styles.sponsorBox}>Second</div>
        <div className={styles.sponsorBox}>Third</div>
        <div className={styles.sponsorBox}>Fourth</div>
      </div>
    </div>
  );
};

export default Hero9;
