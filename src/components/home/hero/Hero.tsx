"use client";
import React, { memo } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
// import mobileGrp from "../../../../public/Hero/mobileGrp.svg";
import mobileGrp from "../../../../public/Hero/Mockup.png";

import combinedUsers from "../../../../public/Hero/combinedUsers.svg";
import playStoreBtn from "../../../../public/Hero/playStoreBtn.svg";
import appStoreBtn from "../../../../public/Hero/appStoreBtn.svg";
import { useTranslations } from "next-intl";
const Hero = memo(function Hero() {
  const { isMobile, isTablet } = ScreenBreakpoints();
  const t = useTranslations("homeHero");

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const usersImg = [
    "https://yllaaa.s3.ca-central-1.amazonaws.com/1.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/2.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/3.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/4.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/5.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/6.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/7.png",
    "https://yllaaa.s3.ca-central-1.amazonaws.com/8.png",
  ];
  return (
    <>
      <div className={styles.heroBg}>
        <div className={styles.heroHeader}>
          {/* <h1>
            {t("header1")} <span>€10,000</span> {t("header2")}
          </h1> */}
          <h1>{t("header1")}</h1>
          <h1>
            <span>{t("header2")}</span>
          </h1>
          {/* <h1>
            {t("header2")}
          </h1> */}
        </div>
        <div className={styles.heroApp}>
          <h4>{t("subHeader")}</h4>
          <div className={styles.heroAppDownload}>
            <a href="#" className={styles.heroAppDownloadLink}>
              <Image
                src={playStoreBtn}
                alt="playStoreBtn"
                className={styles.playStoreBtn}
              />
            </a>
            <a href="#" className={styles.heroAppDownloadLink}>
              <Image
                src={appStoreBtn}
                alt="appStoreBtn"
                className={styles.appStoreBtn}
              />
            </a>
          </div>
        </div>
        {(mounted && isTablet) || (mounted && isMobile) ? (
          <div className={styles.combinedFloatingImg}>
            {mounted && (
              <Image
                src={combinedUsers}
                alt="combinedUsers"
                className={styles.combinedUsers}
              />
            )}
          </div>
        ) : (
          <div className={styles.floatingImg}>
            {mounted &&
              usersImg.map((user, index) => (
                <div key={index} className={`${styles[`user${index + 1}`]}`}>
                  <Image
                    src={user}
                    width={100}
                    height={100}
                    alt="user1"
                    className={styles.userImg}
                    // priority
                    loading="lazy"
                    // placeholder="blur"
                  />
                </div>
              ))}
          </div>
        )}
        <div className={styles.mobileGrp}>
          <Image src={mobileGrp} alt="mobileGrp" />
        </div>
      </div>
    </>
  );
});

export default Hero;
