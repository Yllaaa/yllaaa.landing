/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./plainCard.module.css";
import Image from "next/image";

import pyramids from "../../../../../public/marquee/imageCardBgs/pyramids.png";
type Props = {
  lable?: string;
  subLable?: string;
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
};

function PlainCard(props: Props) {
  const { lable, subLable, img1, img2, img3 } = props;
  return (
    <>
      <div className={styles.plainCard}>
        <Image src={pyramids} alt="pyramids" className={styles.plainCardBg} />
        <div className={styles.plainCardContent}>
          <div className={styles.plainCardContentText}>
            <h5>{lable}</h5>
            <p>{subLable}</p>
            {img1 && (
              <div className={styles.plainCardContentTextMarkets}>
                <Image src={img1} alt="market1" />
                <Image src={img2} alt="market2" />
                <Image src={img3} alt="market3" />
              </div>
            )}
          </div>
          <div className={styles.plainCardContentBtn}>
            <div className={styles.startNow}>Start now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlainCard;
