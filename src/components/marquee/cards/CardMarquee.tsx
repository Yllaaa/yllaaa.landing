/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import style from "./cardMarquee.module.css";
import Marquee from "react-fast-marquee";
import PlainCard from "./plainCard/PlainCard";
import ImageCard from "./ImageCard/ImageCard";
import bg1 from "../../../../public/marquee/imageCardBgs/bg1.jpeg";

import bg2 from "../../../../public/marquee/imageCardBgs/bg2.jpeg";


type Props = {
  card1Header?: string;
  card1SubHeader?: string;
  card1Img1?: string | any;
  card1Img2?: string | any;
  card1Img3?: string | any;

  card2Header?: string;
  card2SubHeader?: string;
  card2Img1?: string | any;
  card2Img2?: string | any;
  card2Img3?: string | any;

  card3Header?: string;
  card3SubHeader?: string;
  card3Img1?: string | any;
  card3Img2?: string | any;
  card3Img3?: string | any;
};
function CardMarquee(props: Props) {
  const {
    card1Header,
    card1SubHeader,
    card1Img1,
    card1Img2,
    card1Img3,

    card2Header,
    card2SubHeader,
    card2Img1,
    card2Img2,
    card2Img3,

    card3Header,
    card3SubHeader,
    card3Img1,
    card3Img2,
    card3Img3,
  } = props;
  return (
    <>
      <div className={style.cardMarquee}>
        <Marquee speed={50} autoFill={true} style={{ overflow: "hidden" }}>
          <div style={{ margin: "auto 30px", overflow: "hidden" }}>
            <ImageCard
              lable={card1Header}
              subLable={card1SubHeader}
              bgImg={bg1}
              img1={card1Img1}
              img2={card1Img2}
              img3={card1Img3}
            />
          </div>
          <div style={{ margin: "auto 30px" }}>
            <PlainCard
              lable={card2Header}
              subLable={card2SubHeader}
              img1={card2Img1}
              img2={card2Img2}
              img3={card2Img3}
            />
          </div>
          <div style={{ margin: "auto 30px" }}>
            <ImageCard
              lable={card3Header}
              subLable={card3SubHeader}
              bgImg={bg2}
              img1={card3Img1}
              img2={card3Img2}
              img3={card3Img3}
            />
          </div>
          <div style={{ margin: "auto 30px" }}>
            <PlainCard
              lable={card2Header}
              subLable={card2SubHeader}
              img1={card2Img1}
              img2={card2Img2}
              img3={card2Img3}
            />
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default CardMarquee;
