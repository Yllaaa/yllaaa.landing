"use client";
import React from "react";
import styles from "./process.module.css";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import CardContent from "@/components/aaacards/cardNoImg/CardContent";
import { usePathname } from "next/navigation";

interface Props {
  sectionLable?: string;
  title?: string;
  titleSpecialWord?: string;
  description?: string;
  card1Number?: string;
  card1Title?: string;
  card1Description?: string;
  card1Image?: string;
  card2Number?: string;
  card2Title?: string;
  card2Description?: string;
  card2Image?: string;
  card3Number?: string;
  card3Title?: string;
  card3Description?: string;
  card3Image?: string;
  card4Number?: string;
  card4Title?: string;
  card4Description?: string;
  card4Image?: string;
}
function Process(props: Props) {
  const {
    sectionLable,
    title,
    titleSpecialWord,
    description,
    card1Number,
    card1Image,
    card1Title,
    card1Description,
    card2Number,
    card2Image,
    card2Title,
    card2Description,
    card3Number,
    card3Image,
    card3Title,
    card3Description,
    card4Number,
    card4Image,
    card4Title,
    card4Description,
  } = props;
  const { isDesktop } = ScreenBreakpoints();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  return (
    <>
      <div
        className={
          card1Image ? `${styles.processBgImg}` : `${styles.processBg}`
        }
      ></div>
      <div
        className={
          card1Image
            ? `${styles.secondProcessBgImg}`
            : `${styles.secondProcessBg}`
        }
      ></div>
      {mounted && isDesktop ? (
        <div className={styles.processTitle}>{sectionLable}</div>
      ) : null}
      {/* section body */}
      <div
        className={`${styles.processBody} ${
          card1Image ? styles.withImagePadding : ""
        }`}
      >
        <div className={styles.processBodyHeader}>
          <div className={styles.processBodyHeaderMain}>
            <h2>
              {title} <span>{titleSpecialWord}</span>
            </h2>
          </div>
          <div className={styles.processBodyHeaderSub}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.processBodyCards}>
          <div>
            <CardContent
              number={card1Number}
              image={card1Image}
              title={card1Title}
              description={card1Description}
            />
          </div>
          <div>
            <CardContent
              number={card2Number}
              image={card2Image}
              title={card2Title}
              description={card2Description}
            />
          </div>
          <div
            className={pathname.includes("for_managers") ? styles.card3 : ""}
          >
            <CardContent
              number={card3Number}
              image={card3Image}
              title={card3Title}
              description={card3Description}
            />
          </div>
          {pathname.includes("/for_managers") || (
            <div>
              <CardContent
                number={card4Number}
                image={card4Image}
                title={card4Title}
                description={card4Description}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Process;
