"use client";
import { AOSInit } from "@/Utils/aos/aos";
import React, { useEffect } from "react";
import styles from "./build.module.css";
import "aos/dist/aos.css";
import iphone from "../../../public/build/iphone.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Build() {
  useEffect(() => {
    AOSInit(2000);
  }, []);
  const t = useTranslations("build");
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-up" className={`${styles.card1} ${styles.card}`}>
          <h6>{t("01")}</h6>
          <h4>{t("submit")}</h4>
          <p>{t("submitText")}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card2} ${styles.card}`}>
          <h6>{t("02")}</h6>
          <h4>{t("analyze")}</h4>
          <p>{t("analyzeText")}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card3} ${styles.card}`}>
          <h6>{t("03")}</h6>
          <h4>{t("yllaaa")}</h4>
          <p>{t("yllaaaText")}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card4} ${styles.card}`}>
          <h6>{t("04")}</h6>
          <h4>{t("approve")}</h4>
          <p>{t("approveText")}</p>
        </div>
        <div
          data-aos="fade-up"
          className={`${styles.card5} ${styles.largeCard}`}
        >
          <h6>{t("05")}</h6>
          <h4>{t("build")}</h4>
          <p>{t("buildText")}</p>
          <Image src={iphone} alt="iphone" />
        </div>
      </div>
    </>
  );
}

export default Build;
