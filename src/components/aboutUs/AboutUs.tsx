"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./aboutUs.module.css";
import laptop from "../../../public/aboutUs/laptop.svg";
import laptopM from "../../../public/aboutUs/laptopM.svg";
import Image from "next/image";
import ButtonFlip from "../aaabutton/ButtonFlip";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import { useLocale, useTranslations } from "next-intl";

function AboutUs() {
  // neon glow function
  const [neonWidth, setNeonWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      const componentHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight - rect.top - 150;

      if (scrollPosition >= 0 && scrollPosition <= componentHeight / 2) {
        // Map scroll progress to width (max width: 200px)
        const width = Math.min(
          (scrollPosition / (componentHeight / 2)) * 200,
          200
        );
        setNeonWidth(width);
      } else if (scrollPosition < 0) {
        setNeonWidth(0);
      } else if (scrollPosition > componentHeight / 2) {
        setNeonWidth(200);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // end neon glow function

  const { isMobile } = ScreenBreakpoints();
  const locale = useLocale();
  const t = useTranslations("aboutUs");

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {/* beoGlow ref */}
      <div ref={componentRef}>
        {/* start neon glow element */}
        <div
          className={styles.neonGlow}
          style={{
            width: `${neonWidth}px`,
            opacity: `${
              neonWidth > 0 ? `${neonWidth / 200}` : `${neonWidth / 200}`
            }`,
          }}
        ></div>
        {/* end neon glow element */}
        <div className={styles.content}>
          <div className={styles.aboutHeader}>
            <h2>{t("title")}</h2>
            <p>{t("subTitle")}</p>
          </div>
          <div className={styles.aboutBodyText}>
            <p>{t("paragraph")}</p>
          </div>
          <div className={styles.aboutBtn}>
            <ButtonFlip lable={t("buttonText")} pathname={`${locale}/about`} />
          </div>
          <div className={styles.aboutImg}>
            <Image
              src={mounted && isMobile ? laptopM : laptop}
              alt="laptop"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.aboutAnalatical}>
            <div className={styles.aboutAnalaticalRow}>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>6+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  {t("months")}
                </p>
              </div>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>14+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  {t("clients")}
                </p>
              </div>
            </div>
            <div className={styles.aboutAnalaticalRow}>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>20+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  {t("projects")}
                </p>
              </div>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>15+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  {t("profs")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
