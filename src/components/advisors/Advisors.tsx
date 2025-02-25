"use client";
import React from "react";
import styles from "./Advisors.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mohamed from "@/../public/advisors/mohamed.jpeg";
import jose from "@/../public/advisors/jose.jpeg";
import xaviar from "@/../public/advisors/xaviar.jpeg";
import linkedInIcon from "@/../public/advisors/linkedinIcon.svg";
import Link from "next/link";

function Advisors() {
  const t = useTranslations("advisor");
  const advisorsList = [
    {
      name: t("mohamedelsonbaty"),
      position: t("mohamedelsonbatyPosition"),
      linkedin: "https://www.linkedin.com/in/mohmmedelsonbaty/",
      img: mohamed,
    },
    {
      name: t("joseluis"),
      position: t("joseluisPosition"),
      linkedin: "https://www.linkedin.com/in/jlope/",
      img: jose,
    },
    {
      name: t("xavierarola"),
      position: t("xavierarolaPosition"),
      linkedin: "https://www.linkedin.com/in/xavierarola/",
      img: xaviar,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.headerText}>
          <h6 data-aos="fade-down">{t("yllaaa")}</h6>
          <h3 data-aos="fade-right">{t("header")}</h3>
          {/* <p data-aos="fade-left">{t("subheader")}</p> */}
        </div>
        <div data-aos="fade-up" className={styles.cards}>
          {advisorsList.map((advisor, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <Image src={advisor.img} alt={advisor.name} />
              </div>
              <div className={styles.text}>
                <h4>{advisor.name}</h4>
                <h5>{advisor.position}</h5>
                <Link href={advisor.linkedin}>
                  <Image src={linkedInIcon} alt="linkedin" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Advisors;
