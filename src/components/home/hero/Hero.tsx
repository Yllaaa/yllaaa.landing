"use client";
import React, { memo, useState, useEffect } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import mobileGrp from "../../../../public/Hero/Mockup.png";
import user1 from "../../../../public/Hero/user1.svg";
import user2 from "../../../../public/Hero/user2.svg";
import user3 from "../../../../public/Hero/user3.svg";
import user4 from "../../../../public/Hero/user4.svg";
import user5 from "../../../../public/Hero/user5.svg";
import user6 from "../../../../public/Hero/user6.svg";
import user7 from "../../../../public/Hero/user7.svg";
import user8 from "../../../../public/Hero/user8.svg";
import combinedUsers from "../../../../public/Hero/combinedUsers.svg";
import playStoreBtn from "../../../../public/Hero/playStoreBtn.svg";
import appStoreBtn from "../../../../public/Hero/appStoreBtn.svg";
import { useTranslations } from "next-intl";

const Hero = memo(function Hero() {
  const { isMobile, isTablet } = ScreenBreakpoints();
  const t = useTranslations("homeHero");

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = 11; // Update with the total number of images

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedCount === totalImages) {
      setAllImagesLoaded(true);
    }
  }, [loadedCount]);

  return (
    <>
      {!allImagesLoaded ? (
        <p>Loading...</p> // Replace with a spinner or loader
      ) : (
        <div className={styles.heroBg}>
          <div className={styles.heroHeader}>
            <h1>{t("header1")}</h1>
            <h1>
              <span>{t("header2")}</span>
            </h1>
          </div>
          <div className={styles.heroApp}>
            <h4>{t("subHeader")}</h4>
            <div className={styles.heroAppDownload}>
              <a href="#" className={styles.heroAppDownloadLink}>
                <Image
                  src={playStoreBtn}
                  alt="playStoreBtn"
                  className={styles.playStoreBtn}
                  onLoad={handleImageLoad}
                />
              </a>
              <a href="#" className={styles.heroAppDownloadLink}>
                <Image
                  src={appStoreBtn}
                  alt="appStoreBtn"
                  className={styles.appStoreBtn}
                  onLoad={handleImageLoad}
                />
              </a>
            </div>
          </div>
          {(isTablet || isMobile) ? (
            <div className={styles.combinedFloatingImg}>
              <Image
                src={combinedUsers}
                alt="combinedUsers"
                className={styles.combinedUsers}
                onLoad={handleImageLoad}
              />
            </div>
          ) : (
            <div className={styles.floatingImg}>
              {[user1, user2, user3, user4, user5, user6, user7, user8].map(
                (user, index) => (
                  <Image
                    key={index}
                    src={user}
                    alt={`user${index + 1}`}
                    className={styles[`user${index + 1}`]}
                    onLoad={handleImageLoad}
                  />
                )
              )}
            </div>
          )}
          <div className={styles.mobileGrp}>
            <Image src={mobileGrp} alt="mobileGrp" onLoad={handleImageLoad} />
          </div>
        </div>
      )}
    </>
  );
});

export default Hero;
