"use client";
import React, { useEffect } from "react";
import styles from "./forHero.module.css";
// import dynamic from "next/dynamic";
import background from "../../../../public/forHero/background16.png";
import logo from "../../../../public/forHero/logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AOSInit } from "@/Utils/aos/aos";

import CardMarquee2 from "@/components/marquee/cards/CardMarquee2";
import "aos/dist/aos.css";

type Props = {
  people?: {
    name: string;
    img: string;
    role: string;
  }[];
  title?: string;
  desc?: string;
};

function ForHero(props: Props) {
  const people = props.people;
  const title = props.title;
  const desc = props.desc;
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
              {t("the")}
              <Image src={logo} alt="logo" />
              {t("header2")}
            </span>{" "}
          </h2>
          <p data-aos="fade-up">{desc}</p>
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
