"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./aboutUs.module.css";
import laptop from "../../../public/aboutUs/laptop.svg";
import laptopM from "../../../public/aboutUs/laptopM.svg";
import Image from "next/image";
import ButtonFlip from "../aaabutton/ButtonFlip";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import { useLocale } from "next-intl";

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
            <h2>About us</h2>
            <p>Your Startup’s Partner for Talent, Growth, and Success</p>
          </div>
          <div className={styles.aboutBodyText}>
            <p>
              At Yllaaa, we believe in empowering startups to succeed by
              connecting them with the right talent and resources. Our platform
              goes beyond traditional freelancing by offering dedicated support
              through experienced account managers, a seamless matching process,
              and a focus on collaboration. We’re here to help you build and
              grow with confidence, every step of the way.
            </p>
          </div>
          <div className={styles.aboutBtn}>
            <ButtonFlip lable="More About Us" pathname={`${locale}/contact`} />
          </div>
          <div className={styles.aboutImg}>
            <Image
              src={isMobile ? laptopM : laptop}
              alt="laptop"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.aboutAnalatical}>
            <div className={styles.aboutAnalaticalRow}>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>15+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  Operated Years
                </p>
              </div>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>598+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className={styles.aboutAnalaticalRow}>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>359+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  Professionals
                </p>
              </div>
              <div className={styles.aboutAnalaticalRowItem}>
                <p className={styles.aboutAnalaticalRowItemNum}>650+</p>
                <p className={styles.aboutAnalaticalRowItemText}>
                  Projects Done
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
