import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../styles/hero5.module.css';

const Hero3: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Work</h1>
        <h1 className={styles.heading}>Together</h1>
        <p className={styles.description}>
          With White Space, share your notes with your colleagues on them. You can also publish a note to the internet and share the URL with others.
        </p>
        <button className={styles.button}>
          Lets Go <FaArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Hero3;
