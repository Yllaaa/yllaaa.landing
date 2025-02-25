"use client";
import { AOSInit } from "@/Utils/aos/aos";
import React, { useEffect } from "react";
import styles from "./build.module.css";
import "aos/dist/aos.css";
import iphone from "../../../public/build/iphone.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  title1?: string;
  desc1?: string;
  title2?: string;
  desc2?: string;
  title3?: string;
  desc3?: string;
  title4?: string;
  desc4?: string;
  title5?: string;
  desc5?: string;
};
function Build(props: Props) {
  const {
    title1,
    desc1,
    title2,
    desc2,
    title3,
    desc3,
    title4,
    desc4,
    title5,
    desc5,
  } = props;
  useEffect(() => {
    AOSInit(2000);
  }, []);
  const t = useTranslations("build");
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-up" className={`${styles.card1} ${styles.card}`}>
          <h6>{t("01")}</h6>
          <h4>{title1}</h4>
          <p>{desc1}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card2} ${styles.card}`}>
          <h6>{t("02")}</h6>
          <h4>{title2}</h4>
          <p>{desc2}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card3} ${styles.card}`}>
          <h6>{t("03")}</h6>
          <h4>{title3}</h4>
          <p>{desc3}</p>
        </div>
        <div data-aos="fade-up" className={`${styles.card4} ${styles.card}`}>
          <h6>{t("04")}</h6>
          <h4>{title4}</h4>
          <p>{desc4}</p>
        </div>
        <div
          data-aos="fade-up"
          className={`${styles.card5} ${styles.largeCard}`}
        >
          <h6>{t("05")}</h6>
          <h4>{title5}</h4>
          <p>{desc5}</p>
          <Image src={iphone} alt="iphone" />
        </div>
      </div>
    </>
  );
}

export default Build;
