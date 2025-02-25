/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
import ButtonFlip from "../aaabutton/ButtonFlip";
import styles from "./mission.module.css";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
type Props = {
  row1?: string;
  row2?: string;
  logo?: string | any;
  btnLable?: string;
};
function Mission(props: Props) {
  const router = useRouter();
  const locale = useLocale();
  const { row1, row2, logo, btnLable } = props;
  return (
    <>
      <div className={styles.missionContainer}>
        <div className={styles.row}>
          <h4>{row1}</h4>
        </div>
        <div className={styles.row}>
          <h4>{row2}</h4>
        </div>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div onClick={() => router.push(`/${locale}/contact`)} className={styles.btn}>
          <ButtonFlip lable={`${btnLable}`} />
        </div>
      </div>
    </>
  );
}

export default Mission;
