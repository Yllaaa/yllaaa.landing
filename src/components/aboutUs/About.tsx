"use client";
import React from "react";
import styles from "./about.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function About() {
  const locale = useLocale();
  const t = useTranslations("about");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.numberbg}>
          <h2>02</h2>
        </div>
        <div className={styles.sectionTitle}>
          <h6>{t("title")}</h6>
        </div>
        <div className={styles.sectionHeader}>
          <h4>
            {t("header")} <span>{t("header2")}</span>
          </h4>
        </div>
        <div className={styles.sectionDescription}>
          <p>{t("description")}</p>
        </div>
        <div className={styles.sectionBtn}>
          <Link href={`/${locale}/about`}>
            <span>{t("buttonText")}</span>
            <div className={styles.arrow}></div>
          </Link>
        </div>
        <div className={styles.sectionCards}>
          <div className={`${styles.sectionCard} ${styles.card1}`}>
            <p>{t("numberCard1")}</p>
            <h6>{t("lableCard1")}</h6>
          </div>
          <div className={`${styles.sectionCard} ${styles.card2}`}>
            <p>{t("numberCard2")}</p>
            <h6>{t("lableCard2")}</h6>
          </div>
          <div className={`${styles.sectionCard} ${styles.card1}`}>
            <p>{t("numberCard3")}</p>
            <h6>{t("lableCard3")}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
