"use client";
import React from "react";
import styles from "./aboutHero.module.css";
import Image from "next/image";
import heroImg1 from "../../../public/Hero/about/bg1.jpeg";
import heroImg2 from "../../../public/Hero/about/bg2.jpeg";
import { useTranslations } from "next-intl";

function AboutHero() {
  const t = useTranslations("aboutHero");
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg1}>
          <Image src={heroImg1} alt="heroImg1" />
        </div>
        <div className={styles.heroImg2}>
          <Image src={heroImg2} alt="heroImg1" />
        </div>
        <div className={styles.bgShade}></div>
        <div className={styles.heroContent}>
          <h4>{t("sectionLable")}</h4>
          <h2>
            {t("sectionTitleW1")} <span>{t("sectionTitleB1")}</span>{" "}
            {t("sectionTitleW2")} <span>{t("sectionTitleB2")}</span>.
          </h2>
          <p>
            {t("description")}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
