"use client";
import React, { useEffect } from "react";
import styles from "./hero.module.css";
import mockup from "../../../../public/Hero/Mockup.png";
import curve from "../../../../public/Hero/heroBg.svg";
import playStore from "../../../../public/Hero/playStoreBtn.svg";
import appStore from "../../../../public/Hero/appStoreBtn.svg";
import Image from "next/image";
import { AOSInit } from "@/Utils/aos/aos";
// import combined from "../../../../public/Hero/combinedUsers.svg";
import "aos/dist/aos.css";
import Link from "next/link";
import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2 from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";

function Hero() {
  useEffect(() => {
    AOSInit(1500);
  }, []);
  const text = "Scroll down . Scroll down . Scroll down . ";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.elipse}></div>
        <Image src={curve} alt="curve" className={styles.curve} />
        <Image src={mockup} alt="mockup" className={styles.mockup} />
        <div className={styles.circle}>
          <div className={styles.circleText}>
            {text.split("").map((char, index) => (
              <span
                key={index}
                style={{ transform: `rotate(${index * 9}deg)` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h1 className={styles.title}>
              Bring your ideas to life with success
            </h1>
          </div>
          <div className={styles.storeBtns}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.yllaaa"
              target="_blank"
            >
              <Image src={playStore} alt="google" className={styles.storeBtn} />
            </Link>
            <Link href="https://www.apple.com/app-store/" target="_blank">
              <Image src={appStore} alt="apple" className={styles.storeBtn} />
            </Link>
          </div>
          <div className={styles.contentDescription}>
            <p className={styles.description}>
              Turn your idea into successful product
            </p>
          </div>
          <div className={styles.combined}>
            <div className={styles.combinedTop}>
              <div className={styles.combinedUsers}>
                <div className={styles.combinedUser1}>
                  <Image src={people1} alt="people1" />
                </div>
                <div className={styles.combinedUser1}>
                  <Image src={people2} alt="people1" />
                </div>
                <div className={styles.combinedUser1}>
                  <Image src={people3} alt="people1" />
                </div>
              </div>
              <div className={styles.combinedText}>
                <p>+10K</p>
              </div>
            </div>
            <div className={styles.combinedBottom}>
              <div className={styles.combinedDot}></div>
              <div className={styles.combinedText}>
                <p>Your Next Freelancer is Here</p>
              </div>
            </div>
            {/* <Image src={combined} alt="combined" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
