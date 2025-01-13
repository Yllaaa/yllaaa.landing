"use client";
import React, { useEffect } from "react";
import styles from "./hero.module.css";
import mockup from "../../../../public/Hero/Mockup.png";
import curve from "../../../../public/Hero/heroBg.svg";
import playStore from "../../../../public/Hero/playStoreBtn.svg";
import appStore from "../../../../public/Hero/appStoreBtn.svg";
import Image from "next/image";
import { AOSInit } from "@/Utils/aos/aos";
import "aos/dist/aos.css";
import Link from "next/link";
import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2 from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";

function Hero() {
  const t = useTranslations("homeHero");
  useEffect(() => {
    AOSInit(1500);
  }, []);
  const text = t("roundText");
  const locale = useLocale();
  const [counter, setCounter] = React.useState(0);
  const [mockupLoaded, setMockupLoaded] = React.useState(false);
  const [curveLoaded, setCurveLoaded] = React.useState(false);
  useEffect(() => {
    if (counter < 10000) {
      const timer = setInterval(() => {
        setCounter((prevCount) => prevCount + 100);
      }, 0.1);
      return () => clearInterval(timer);
    }
  }, [counter]);

  return (
    <>
      <div className={styles.container}>
        {mockupLoaded && curveLoaded && <div className={styles.elipse}></div>}
        <Image
          src={curve}
          alt="curve"
          className={styles.curve}
          onLoadingComplete={() => setCurveLoaded(true)}
        />
        <Image
          src={mockup}
          alt="mockup"
          className={styles.mockup}
          loading="lazy"
          decoding="async"
          onWaiting={(e) => e.preventDefault()}
          onLoadingComplete={() => setMockupLoaded(true)}
        />
        {mockupLoaded && curveLoaded && (
          <div className={styles.circle}>
            {locale === "en" && (
              <div className={styles.circleText}>
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    style={{
                      transform: `rotate(${
                        (index * text.length) / 4.66667
                      }deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {mockupLoaded && curveLoaded && (
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <h1 className={styles.title}>{t("title")}</h1>
            </div>
            <div className={styles.storeBtns}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.yllaaa"
                target="_blank"
              >
                <Image
                  src={playStore}
                  alt="google"
                  className={styles.storeBtn}
                />
              </Link>
              <Link href="https://www.apple.com/app-store/" target="_blank">
                <Image src={appStore} alt="apple" className={styles.storeBtn} />
              </Link>
            </div>
            <div className={styles.contentDescription}>
              <p className={styles.description}>{t("subTitle")}</p>
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
                  <p> {counter < 10000 ? counter : "+10K"}</p>
                </div>
              </div>
              <div className={styles.combinedBottom}>
                <div className={styles.combinedDot}></div>
                <div className={styles.combinedText}>
                  <p>{t("next")}</p>
                </div>
              </div>
              {/* <Image src={combined} alt="combined" /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
