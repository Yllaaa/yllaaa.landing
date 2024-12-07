/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./forHero.module.css";
import Image from "next/image";
import pyramids from "../../../public/marquee/imageCardBgs/pyramids.png";
import ButtonFlip from "../aaabutton/ButtonFlip";
import IconMarquee from "../marquee/icons/IconMarquee";
import { useLocale } from "next-intl";


type Props = {
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
  img4?: string | any;
  img5?: string | any;
  img6?: string | any;
  img7?: string | any;
  img8?: string | any;
  header?: string;
  subHeader?: string;
  specialSubHeader?: string;
  paragraph?: string;
  button?: string;
};
function ForHero(props: Props) {
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    header,
    subHeader,
    specialSubHeader,
    paragraph,
    button,
  } = props;
  const locale = useLocale();
  return (
    <>
      <div className={styles.forHeroContainer}>
        <div className={styles.forShadow}>
          <Image src={pyramids} alt="pyramids" />
        </div>
        <div className={styles.forTexts}>
          <h4>{header}</h4>
          <h2>
            {subHeader}
            {""}
            <span>{specialSubHeader}</span>.
          </h2>
          <p>{paragraph}</p>
        </div>
        <div className={styles.forMarquee}>
          <IconMarquee
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
          />
        </div>
        <div className={styles.forBtn}>
          <ButtonFlip lable={`${button}`} pathname={`/${locale}/contact`} />
        </div>
      </div>
    </>
  );
}

export default ForHero;
