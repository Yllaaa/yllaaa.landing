/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./imageCard.module.css";
import Image from "next/image";

type Props = {
  lable?: string;
  subLable?: string;
  bgImg?: string | any;
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
};
function ImageCard(props: Props) {
  const { lable, subLable, bgImg, img1, img2, img3 } = props;
  return (
    <>
      <div className={styles.imageCard}>
        <div className={styles.imageCardBg}>
          <Image src={bgImg} alt="pyramids" />
          <div className={styles.bgShade}></div>
        </div>
        <div className={styles.imageCardContent}>
          <div className={styles.imageCardContentText}>
            <h5>{lable}</h5>
            <p>{subLable}</p>
            {img1 && (
              <div className={styles.imageCardContentTextMarkets}>
                <Image src={img1} alt="market1" />
                <Image src={img2} alt="market2" />
                <Image src={img3} alt="market3" />
              </div>
            )}
          </div>
          <div className={styles.imageCardContentBtn}>
            <div className={styles.startNow}>Start now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
