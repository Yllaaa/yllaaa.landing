"use client";
import React from "react";
import styles from "./partners.module.css";
import { useTranslations } from "next-intl";
import european from "@/../public/partners/european.png";
import gbsb from "@/../public/partners/gbsb.png";
import catalania from "@/../public/partners/catalania.png";
import activa from "@/../public/partners/activa.png";
import Image from "next/image";

function Partners() {
  const t = useTranslations("world");
  return (
    <>
        <div className={styles.bg}></div>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.text}>
          <h6 data-aos="fade-down">{t("yllaaa")}</h6>
          <h3 data-aos="fade-right">{t("powered")}</h3>
        </div>
        <div className={styles.logosMarquee}>
          <div className={styles.marqueeContent}>
            {/*  */}
            <div className={`${styles.logoItem} ${styles.activa}`}>
              <Image src={activa} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.gbsb}`}>
              <Image src={gbsb} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.european}`}>
              <Image src={european} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.catalania}`}>
              <Image src={catalania} alt="yllaaaLogo" />
            </div>
            {/*  */}
            {/*  */}
            <div className={`${styles.logoItem} ${styles.activa}`}>
              <Image src={activa} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.gbsb}`}>
              <Image src={gbsb} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.european}`}>
              <Image src={european} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.catalania}`}>
              <Image src={catalania} alt="yllaaaLogo" />
            </div>
            {/*  */}
            {/*  */}
            <div className={`${styles.logoItem} ${styles.activa}`}>
              <Image src={activa} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.gbsb}`}>
              <Image src={gbsb} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.european}`}>
              <Image src={european} alt="yllaaaLogo" />
            </div>
            <div className={`${styles.logoItem} ${styles.catalania}`}>
              <Image src={catalania} alt="yllaaaLogo" />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
