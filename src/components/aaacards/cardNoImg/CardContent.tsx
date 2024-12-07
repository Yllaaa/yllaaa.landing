import React from "react";
import styles from "./CardContent.module.css";
import Image from "next/image";

interface Props {
  image?: string;
  number?: string;
  title?: string;
  description?: string;
}
function CardContent(props: Props) {
  const { image, number, title, description } = props;
  return (
    <>
      <div className={styles.cardContent}>
        <div
          className={`${styles.cardContentBody} ${
            !image
              ? styles.cardContentBodyNoImage
              : styles.cardContentBodyWithImage
          }`}
        >
          <p className={styles.cardContentBodyNumber}>{number}</p>
          {image && <div className={styles.cardContentBodyImage}>
            <Image src={image} alt="image" width={100} height={100} />
            </div>}
          <div className={styles.cardContentBodyTextContainer}>
            <p className={styles.cardContentBodyHeader}>{title}</p>
            <p className={styles.cardContentBodyText}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardContent;
