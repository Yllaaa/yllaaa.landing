"use client";
import React from "react";
import styles from "./hiring.module.css";
import { useTranslations } from "next-intl";

function Hiring() {
  // const t = getTranslations("hiring");
  const t = useTranslations("hiring");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hiring}>
          <h4>
            {t("title")} <span>{t("yllaaa")}</span>
          </h4>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>🚀</p>
            <h6>{t("scale")}</h6>
          </div>
          <div className={styles.card}>
            <p>🛡️</p>
            <h6>{t("safe")}</h6>
          </div>
          <div className={styles.card}>
            <p>⚡</p>
            <h6>{t("fast")}</h6>
          </div>
          <div className={styles.card}>
            <p>💵</p>
            <h6>{t("prices")}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
