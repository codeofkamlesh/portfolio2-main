import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Company Logo</div>
      <div className={styles.navLinks}>
        <div>Products</div>
        <div>Solutions</div>
        <div>Pricing</div>
        <div>Resources</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.tryButton}>
          Try Writepace Free <FaArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
