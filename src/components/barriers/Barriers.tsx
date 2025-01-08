"use client";
import React, { useEffect } from "react";
import styles from "./barriers.module.css";
import Image from "next/image";
import visa from "../../../public/barrier/visa.svg";
import champion from "../../../public/barrier/champion.svg";
import earth from "../../../public/barrier/earth.svg";
import time from "../../../public/barrier/time.svg";
import mobile from "../../../public/barrier/mobile.png";
import { AOSInit } from "@/Utils/aos/aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

function Barriers() {
  useEffect(() => {
    AOSInit(2000);
  }, []);
  const t = useTranslations("barriers");
  return (
    <>
      <div className={styles.barriersContainer}>
        <div data-aos="fade-up" className={styles.barriersHeader}>
          <p>{t("yllaaa")}</p>
          <h2>{t("header")}</h2>
          <h2>{t("header2")}</h2>
        </div>
        <div className={styles.barriersBody}>
          <div data-aos="fade-right" className={styles.items1}>
            <div data-aos="fade-down-right" className={styles.item1}>
              <Image src={visa} alt="visa" />
              <h6>{t("secureH")}</h6>
              <p>{t("secureP")}</p>
            </div>
            <div data-aos="fade-up-right" className={styles.item1}>
              <Image src={champion} alt="visa" />
              <h6>{t("rewardH")}</h6>
              <p>{t("rewardP")}</p>
            </div>
          </div>

          <div data-aos="fade-left" className={styles.items2}>
            <div data-aos="fade-down-left" className={styles.item2}>
              <Image src={time} alt="visa" />
              <h6>{t("diveH")}</h6>
              <p>{t("diveP")}</p>
            </div>
            <div data-aos="fade-up-left" className={styles.item2}>
              <Image src={earth} alt="visa" />
              <h6>{t("globalH")}</h6>
              <p>{t("globalP")}</p>
            </div>
          </div>
        </div>
        <div className={styles.centerImage}>
          <Image src={mobile} alt="mobile" />
        </div>
      </div>
    </>
  );
}

export default Barriers;
