"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/hero1.module.css"; // Importing the CSS module

const Hero1: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Get More Done with</h1>
        <h1 className={styles.heading}>Whitepace</h1>
        <p className={styles.description}>
          Project Management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks
        </p>
        <button className={styles.tryButton}>
          Try Writepace Free <FaArrowRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Hero1;
