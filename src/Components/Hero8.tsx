import React from 'react';
import styles from '../styles/hero8.module.css';

const Hero2: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Project</h1>
        <h1 className={styles.title}>Management</h1>
        <p className={styles.description}>
          Image, videos, PDFs, and audio files are supported. Create math expressions and diagrams from the app. Take
          photos with your mobile and save them to a note.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Hero2;
