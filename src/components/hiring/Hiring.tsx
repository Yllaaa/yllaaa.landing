import React from "react";
import styles from "./hiring.module.css";

function Hiring() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hiring}>
          <h4>
            Benefits of hiring with <span>YLLAAA</span>
          </h4>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>🚀</p>
            <h6>Scale with flexibility</h6>
          </div>
          <div className={styles.card}>
            <p>🛡️</p>
            <h6>Ultra Safe</h6>
          </div>
          <div className={styles.card}>
            <p>⚡</p>
            <h6>Hire fast</h6>
          </div>
          <div className={styles.card}>
            <p>💵</p>
            <h6>Affordable prices</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
