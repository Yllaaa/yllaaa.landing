"use client";
import React, { useEffect } from "react";
import styles from "./forHero.module.css";
import dynamic from "next/dynamic";
import background from "../../../../public/forHero/background16.png";
// import logo from "../../../../public/forHero/logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AOSInit } from "@/Utils/aos/aos";
const CardMarquee2 = dynamic(
  () => import("@/components/marquee/cards/CardMarquee2"),
  {
    ssr: true,
  }
);
import "aos/dist/aos.css";

type Props = {
  people?: {
    name: string;
    img: string;
    role: string;
  }[];
  title: string;
};

function ForHero(props: Props) {
  const people = props.people;
  const title = props.title;
  const t = useTranslations("forHero");
  useEffect(() => {
    AOSInit(1500);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.lightBg1}></div>
        <div className={styles.lightBg2}></div>
        <div className={styles.lightBg3}></div>
        <div className={styles.hashBg}>
          <Image src={background} alt="background" width={1000} height={1000} />
        </div>
        <div className={styles.text}>
          <h5 data-aos="fade-up">{title}</h5>
          <h2 data-aos="fade-up">
            {t("header")}{" "}
            <span>
              <Image src={`https://yllaaa.s3.ca-central-1.amazonaws.com/logo.svg`} alt="logo" />
            </span>{" "}
            {t("header2")}
          </h2>
          <p data-aos="fade-up">{t("description")}</p>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.leftMarquee}>
            <CardMarquee2 people={people} direction="left" />
          </div>
          <div className={styles.rightMarquee}>
            <CardMarquee2 people={people} direction="right" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForHero;
