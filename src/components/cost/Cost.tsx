"use client";
import React, { useEffect } from "react";
import styles from "./cost.module.css";

import Image from "next/image";
import costbg from "../../../public/cost/coastbg.svg";
import card from "../../../public/cost/card.png";
import Link from "next/link";
import arrow from "../../../public/icons/arrowBtnBlack.svg";
import { useLocale, useTranslations } from "next-intl";
import { AOSInit } from "@/Utils/aos/aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

function Cost() {
  const locale = useLocale();
  const t = useTranslations("cost");
  const pathname = usePathname();
  useEffect(() => {
    AOSInit(2000);
  }, []);
  return (
    <>
      <div data-aos="fade-up" className={styles.container}>
        <div className={styles.bgImage}>
          <Image src={costbg} alt="costbg" className={styles.bgImagerotate} />
        </div>
        <div data-aos="fade-down" className={styles.header}>
          <h6 data-aos="fade-left">{t("title")}</h6>
          <h4 data-aos="fade-left">
            {t("header")} <span>{t("headerEasy")}</span> {t("headerAnd")}{" "}
            <span>{t("headerAffordable")}</span>
          </h4>
          <p data-aos="fade-right">{t("description")}</p>
          {pathname.includes("for_freelancers") ||
            pathname.includes("for_business") ||
            pathname.includes("for_managers") || (
              <Link
                data-aos="fade-up"
                href={`${locale}/for_business`}
                className={styles.button}
              >
                <span className={styles.buttonText}>{t("buttonText")}</span>
                <span>
                  <Image src={arrow} alt="arrow" />
                </span>
              </Link>
            )}
        </div>
        <div className={styles.image}>
          <Image src={card} alt="card" />
        </div>
      </div>
    </>
  );
}

export default Cost;
