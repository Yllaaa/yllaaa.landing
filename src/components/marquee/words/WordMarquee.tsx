"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import star from "../../../../public/marquee/word/star/star.svg";
import styles from "./wordMarrquee.module.css";

function WordMarquee() {
  return (
    <>
    <div className={styles.marqueeContainer}>
      <Marquee
        speed={50}
        autoFill={true}
        gradient={false}
      >
        <span
          className={styles.marqueeWord}
        >
          EMPOWER
        </span>
        <Image src={star} alt="arrow" className={styles.marqueeStar} />
        <span
          className={styles.marqueeWord}
        >
          CONNECT
        </span>
        <Image src={star} alt="arrow" className={styles.marqueeStar} />
        <span
          className={styles.marqueeWord}
        >
          BUILD
        </span>
        <Image src={star} alt="arrow" className={styles.marqueeStar} />
        <span
          className={styles.marqueeWord}
        >
          ACHIEVE
        </span>
        <Image src={star} alt="arrow" className={styles.marqueeStar} />
      </Marquee>
      </div>
    </>
  );
}

export default WordMarquee;
