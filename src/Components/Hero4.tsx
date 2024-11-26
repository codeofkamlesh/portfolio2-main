import React from 'react';
import styles from '../styles/hero4.module.css';

const Hero2: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Use as</h1>
        <h1 className={styles.heading}>Extension</h1>
        <p className={styles.description}>
          Use the web clipper extension, available on Chrome and Firefox, to save Web Pages or task screenshots as notes.
        </p>
        <button className={styles.button}>Lets Go</button>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Hero2;
