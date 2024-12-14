"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
// import mobileGrp from "../../../../public/Hero/mobileGrp.svg";
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
function Hero() {
  const { isMobile, isTablet } = ScreenBreakpoints();
  const t = useTranslations("homeHero");
  return (
    <>
      <div className={styles.heroBg}>
        <div className={styles.heroHeader}>
          <h1>
            {t("header1")} <span>€10,000</span> {t("header2")}
          </h1>
          {/* <h1>
            {t("header1")}
          </h1>
          <h1>
           <span>€10,000</span>
          </h1>
          <h1>
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
        {isTablet || isMobile ? (
          <div className={styles.combinedFloatingImg}>
            <Image
              src={combinedUsers}
              alt="combinedUsers"
              className={styles.combinedUsers}
            />
          </div>
        ) : (
          <div className={styles.floatingImg}>
            <Image src={user1} alt="user1" className={styles.user1} />
            <Image src={user2} alt="user2" className={styles.user2} />
            <Image src={user3} alt="user3" className={styles.user3} />
            <Image src={user4} alt="user4" className={styles.user4} />
            <Image src={user5} alt="user5" className={styles.user5} />
            <Image src={user6} alt="used6" className={styles.user6} />
            <Image src={user7} alt="used7" className={styles.user7} />
            <Image src={user8} alt="used8" className={styles.user8} />
          </div>
        )}
        <div className={styles.mobileGrp}>
          <Image src={mobileGrp} alt="mobileGrp" />
        </div>
      </div>
    </>
  );
}

export default Hero;
