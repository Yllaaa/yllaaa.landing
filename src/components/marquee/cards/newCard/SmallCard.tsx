/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./smallCard.module.css";
import Image, { StaticImageData } from "next/image";

type Props = {
  name?: string;
  description?: string;
  image?: string | StaticImageData | any;
};
function SmallCard(props: Props) {
  const { name, description, image } = props;
  // const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      <div className={styles.smallCard}>
        <div className={styles.image}>
          <Image
            src={image}
            alt="image"
            width={100}
            height={100}
            loading="lazy"
            // onLoad={() => setLoaded(true)}
          />
        </div>
        {/* {loaded && ( */}
          <div className={styles.text}>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        {/* )} */}
      </div>
    </>
  );
}

export default SmallCard;
