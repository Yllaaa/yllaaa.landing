/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import style from "./cardMarquee2.module.css";
import Marquee from "react-fast-marquee";
import { StaticImageData } from "next/image";
import SmallCard from "./newCard/SmallCard";

type Props = {
  people?: {
    name: string;
    img: string | StaticImageData | any;
    role: string;
  }[];
  direction?: "left" | "right" | "up" | "down";
};
function CardMarquee(props: Props) {
  const { direction, people } = props;
  return (
    <>
      <div className={style.cardMarquee}>
        <Marquee
          speed={50}
          autoFill={true}
          style={{ overflow: "hidden" }}
          direction={direction ? direction : "left"}
        >
          {people?.map((person, index) => (
            <div
              key={index}
              style={{ margin: "auto 30px", overflow: "hidden" }}
            >
              <SmallCard
                name={person.name}
                image={person.img}
                description={person.role}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default CardMarquee;
