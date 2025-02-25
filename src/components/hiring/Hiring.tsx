import React from "react";
import styles from "./hiring.module.css";
import { getTranslations } from "next-intl/server";

async function Hiring() {
  const t = getTranslations("hiring");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hiring}>
          <h4>
            {(await t)("title")} <span>{(await t)("yllaaa")}</span>
          </h4>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>🚀</p>
            <h6>{(await t)("scale")}</h6>
          </div>
          <div className={styles.card}>
            <p>🛡️</p>
            <h6>{(await t)("safe")}</h6>
          </div>
          <div className={styles.card}>
            <p>⚡</p>
            <h6>{(await t)("fast")}</h6>
          </div>
          <div className={styles.card}>
            <p>💵</p>
            <h6>{(await t)("prices")}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
