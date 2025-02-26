/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import style from "./cardMarquee2.module.css";
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
  const {direction, people } = props;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className={style.cardMarquee}>
        {mounted && people && (
          <div className={style.logosMarquee}>
            <div className={direction === "right" ? style.marqueeContentRight : style.marqueeContentLeft}>
              {people &&
                people?.map((person, index) => (
                  <div
                    key={index}
                    style={{
                      margin: "auto 30px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <SmallCard
                      name={person.name}
                      image={person.img}
                      description={person.role}
                    />
                  </div>
                ))}
              {people &&
                people?.map((person, index) => (
                  <div
                    key={index}
                    style={{
                      margin: "auto 30px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <SmallCard
                      name={person.name}
                      image={person.img}
                      description={person.role}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardMarquee;
