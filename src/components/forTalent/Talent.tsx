"use client";
import React from "react";
import styles from "./talent.module.css";
import talent from "../../../public/forTalent/talent.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

function Talent() {
  const route = useRouter();
  const locale = useLocale();
  const t = useTranslations("talent");
  return (
    <>
      <div className={styles.talentContainer}>
        <div className={styles.talentImage}>
          <Image src={talent} alt="Talent" />
        </div>
        <div className={styles.talentContent}>
          <div className={styles.talentContentTop}>
            <h6>{t("sectionLabel")}</h6>
            <h2>{t("sectionTitle")}</h2>
            <p>
              {t("description")}
            </p>
          </div>
          <div className={styles.talentContentBottom}>
            <div className={styles.talentContentBottomText}>
              <span>
                {t("text1")}
              </span>
              <span>{t("text2")}</span>
              <span>{t("text3")}</span>
            </div>
            <div
              onClick={() => {
                route.push(`${locale}/contact`);
              }}
              className={styles.talentContentBottomBtn}
            >
              {t("buttonText")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Talent;
