import React from 'react';
import styles from '../styles/Hero7.module.css';

const Hero7: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.heading}>Your work, Everywhere you are</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, omnis sapiente! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quos, omnis sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quos, omnis sapiente!
      </p>
      <button className={styles.button}>Button</button>
    </div>
  );
};

export default Hero7;
