import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import styles from '../styles/hero6.module.css';

const Hero6: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Plan</h1>
        <p className={styles.subtitle}>
          Whether you want to get organized, keep your personal life on track, or boost workspace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.planName}>Free</p>
          <p className={styles.planPrice}>$0</p>
          <p className={styles.planDescription}>Capture ideas and find them quickly</p>
          <div className={styles.features}>
            <p><CiCircleCheck className={styles.icon} /> Sync unlimited devices</p>
            <p><CiCircleCheck className={styles.icon} /> 10 GB monthly uploads</p>
            <p><CiCircleCheck className={styles.icon} /> 200 MB max note size</p>
            <p><CiCircleCheck className={styles.icon} /> Customize home dashboard and access extra</p>
            <p><CiCircleCheck className={styles.icon} /> Connect primary Google Calendar account</p>
            <p><CiCircleCheck className={styles.icon} /> Add due dates, reminders, and notifications to tasks</p>
          </div>
          <button className={styles.button}>Try Writepace Free</button>
        </div>
        <div className={styles.card}>
          <p className={styles.planName}>Free</p>
          <p className={styles.planPrice}>$0</p>
          <p className={styles.planDescription}>Capture ideas and find them quickly</p>
          <div className={styles.features}>
            <p><CiCircleCheck className={styles.icon} /> Sync unlimited devices</p>
            <p><CiCircleCheck className={styles.icon} /> 10 GB monthly uploads</p>
            <p><CiCircleCheck className={styles.icon} /> 200 MB max note size</p>
            <p><CiCircleCheck className={styles.icon} /> Customize home dashboard and access extra</p>
            <p><CiCircleCheck className={styles.icon} /> Connect primary Google Calendar account</p>
            <p><CiCircleCheck className={styles.icon} /> Add due dates, reminders, and notifications to tasks</p>
          </div>
          <button className={styles.button}>Try Writepace Free</button>
        </div>
        <div className={styles.card}>
          <p className={styles.planName}>Free</p>
          <p className={styles.planPrice}>$0</p>
          <p className={styles.planDescription}>Capture ideas and find them quickly</p>
          <div className={styles.features}>
            <p><CiCircleCheck className={styles.icon} /> Sync unlimited devices</p>
            <p><CiCircleCheck className={styles.icon} /> 10 GB monthly uploads</p>
            <p><CiCircleCheck className={styles.icon} /> 200 MB max note size</p>
            <p><CiCircleCheck className={styles.icon} /> Customize home dashboard and access extra</p>
            <p><CiCircleCheck className={styles.icon} /> Connect primary Google Calendar account</p>
            <p><CiCircleCheck className={styles.icon} /> Add due dates, reminders, and notifications to tasks</p>
          </div>
          <button className={styles.button}>Try Writepace Free</button>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
