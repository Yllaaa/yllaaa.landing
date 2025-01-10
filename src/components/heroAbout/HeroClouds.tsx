"use client";
import React from "react";
import styles from "./heroClouds.module.css";
import Image from "next/image";
// import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
// async
function HeroClouds() {
  const t = useTranslations("cloudHero");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cloudsSection}>
          <Image
            className={styles.cloud1}
            src={`https://yllaaa.s3.ca-central-1.amazonaws.com/Clouds.png`}
            alt="clouds"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            onWaiting={(e) => e.preventDefault()}
          />
          <Image
            className={styles.cloud2}
            src={`https://yllaaa.s3.ca-central-1.amazonaws.com/clouds01.png`}
            alt="clouds"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            onWaiting={(e) => e.preventDefault()}
          />
          <Image
            className={styles.cloud3}
            src={`https://yllaaa.s3.ca-central-1.amazonaws.com/clouds02.png`}
            alt="clouds"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            onWaiting={(e) => e.preventDefault()}
          />
        </div>
        <div className={styles.pyramidsSection}>
          <Image
            src={`https://yllaaa.s3.ca-central-1.amazonaws.com/pyramids.jpeg`}
            alt="pyramids"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.textSection}>
          <h6>{t("yllaaa")}</h6>
          <h4>{t("title")}</h4>
          <p>{t("description")}</p>
        </div>
      </div>
    </>
  );
}

export default HeroClouds;
