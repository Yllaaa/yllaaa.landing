"use client";
import React, { useEffect } from "react";
import styles from "./reason.module.css";
import { useTranslations } from "next-intl";
import star from "../../../public/reason/star.svg";
import heart from "../../../public/reason/heart.svg";
import sheild from "../../../public/reason/sheild.svg";
import graph from "../../../public/reason/graph.svg";
import Image from "next/image";
import "aos/dist/aos.css";
import { AOSInit } from "@/Utils/aos/aos";

function Reason() {
  const t = useTranslations("reason");
  useEffect(() => {
    AOSInit(2000);
  }, []);
  return (
    <>
      <div className={styles.reasonContainer}>
        <div className={styles.numberbg}>
          <h2>01</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <div data-aos="fade-down-right" className={styles.headerContent}>
              <h6>{t("title")}</h6>
              <h2>{t("header")}</h2>
              <p>{t("description")}</p>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.btn}>
            <button>{t("buttonText")}</button>
          </div>
          <div className={styles.images}>
            <div className={styles.imageRow1}>
              <div
                data-aos="fade-down-right"
                className={`${styles.imageFrame} ${styles.Frame11}`}
              >
                <h5>{t("lableSheild")}</h5>
                <Image src={sheild} alt="shield" className={styles.image} />
                <p>{t("descriptionSheild")}</p>
              </div>
              <div
                data-aos="fade-right"
                className={`${styles.imageFrame} ${styles.Frame12}`}
              >
                <h5>{t("lableHeart")}</h5>
                <Image src={heart} alt="heart" className={styles.image} />
                <p>{t("descriptionHeart")}</p>
              </div>
            </div>
            <div className={styles.imageRow2}>
              <div
                data-aos="fade-down-left"
                className={`${styles.imageFrame} ${styles.Frame21}`}
              >
                <h5>{t("lableGraph")}</h5>
                <div
                  className={styles.graph}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Image src={graph} alt="graph" />
                </div>
                <p>{t("descriptionGraph")}</p>
              </div>
              <div
                data-aos="fade-left"
                className={`${styles.imageFrame} ${styles.Frame22}`}
              >
                <h5>{t("lableStar")}</h5>
                <Image src={star} alt="star" className={styles.image} />
                <p>{t("descriptionStar")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reason;
