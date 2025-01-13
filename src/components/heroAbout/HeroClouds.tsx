"use client";
import React from "react";
import styles from "./heroClouds.module.css";
import Image from "next/image";
// import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Loading from "@/app/[locale]/loading";
// async
function HeroClouds() {
  const t = useTranslations("cloudHero");
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {/* {!loaded && <Loading />} */}

      <div className={styles.container}>
        <div
          className={`${styles.cloudsSection} ${
            loaded && styles.cloudsSectionAnimation
          } `}
        >
          <Image
            className={styles.cloud1}
            src={`https://yllaaa.s3.ca-central-1.amazonaws.com/Clouds.png`}
            alt="clouds"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            onWaiting={(e) => e.preventDefault()}
            onLoadingComplete={() => setLoaded(true)}
          />
          {loaded && (
            <Image
              className={styles.cloud2}
              src={`https://yllaaa.s3.ca-central-1.amazonaws.com/clouds01.png`}
              alt="clouds"
              width={1000}
              height={1000}
              loading="lazy"
              decoding="async"
              onWaiting={(e) => e.preventDefault()}
            />
          )}
          {loaded && (
            <Image
              className={styles.cloud3}
              src={`https://yllaaa.s3.ca-central-1.amazonaws.com/clouds02.png`}
              alt="clouds"
              width={1000}
              height={1000}
              loading="lazy"
              decoding="async"
              onWaiting={(e) => e.preventDefault()}
            />
          )}
        </div>
        {!loaded ? (
          <Loading />
        ) : (
          <>
            <div className={styles.pyramidsSection}>
              <Image
                src={`https://yllaaa.s3.ca-central-1.amazonaws.com/pyramids.jpeg`}
                alt="pyramids"
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.textSection}>
              <h6>{t("yllaaa")}</h6>
              <h4>{t("title")}</h4>
              <p>{t("description")}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HeroClouds;
