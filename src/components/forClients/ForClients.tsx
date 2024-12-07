"use client";
import React from "react";
import styles from "./forClients.module.css";
import Image from "next/image";
import arrowWhite from "../../../public/icons/arrowFreeWhite.svg";
import arrowPurple from "../../../public/icons/arrowFreePurple.svg";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

function ForClients() {
  const route = useRouter();
  const locale = useLocale();
  const t = useTranslations("clients");
  return (
    <>
      <div className={styles.forClients}>
        <div className={styles.forClientsContent}>
          <div className={styles.forClientsContentTitle}>
            <h4>{t("sectionLable")}</h4>
          </div>
          <div className={styles.forClientsContentBody}>
            <h2>{t("sectionTitle")}</h2>
            <p>{t("description")}</p>
          </div>
        </div>
        <div className={styles.forClientsBtns}>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnDark}`}
          >
            <h5>{t("buttonText1")}</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              {t("buttonSubtext1")}{" "}
              <span>
                <Image src={arrowWhite} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnDark}`}
          >
            <h5>{t("buttonText2")}</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              {t("buttonSubtext2")}{" "}
              <span>
                <Image src={arrowWhite} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnLight}`}
          >
            <h5>{t("buttonText3")}</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              {t("buttonSubtext3")}{" "}
              <span>
                <Image src={arrowPurple} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForClients;
