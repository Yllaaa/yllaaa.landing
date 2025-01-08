"use client";
import React, { useEffect } from "react";
import styles from "./world.module.css";
import { AOSInit } from "@/Utils/aos/aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import world from "../../../public/world/world.png";

function World() {
  useEffect(() => {
    AOSInit(1500);
  }, []);
  const t = useTranslations("world");
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.text}>
          <h6 data-aos="fade-down">{t("yllaaa")}</h6>
          <h3 data-aos="fade-right">{t("text")}</h3>
          <p data-aos="fade-left">{t("paragraph")}</p>
        </div>
        <div data-aos="fade-up" className={styles.image}>
         <Image src={world} width={1000} height={1000} alt="world" />
        </div>
      </div>
    </>
  );
}

export default World;
