/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";

import styles from "./iconMarquee.module.css";

type Props = {
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
  img4?: string | any;
  img5?: string | any;
  img6?: string | any;
  img7?: string | any;
  img8?: string | any;
};
function IconMarquee(props: Props) {
  const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;

  return (
    <>
      <div className={styles.iconMarquee}>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem1}`}>
          <Image src={img1} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem2}`}>
          <Image src={img2} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem3}`}>
          <Image src={img3} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem4}`}>
          <Image src={img4} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem5}`}>
          <Image src={img5} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem6}`}>
          <Image src={img6} alt="1" />
        </div>
        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem7}`}>
          <Image src={img7} alt="1" />
        </div>

        <div className={`${styles.iconMarqueeItem} ${styles.iconMarqueeItem8}`}>
          <Image src={img8 ? img8 : img4} alt="1" />
        </div>
      </div>
    </>
  );
}

export default IconMarquee;
