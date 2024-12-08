import React from "react";
import styles from "./managers.module.css";
import Process from "@/components/process/process/Process";
import dynamic from "next/dynamic";
const ForHero = dynamic(() => import("@/components/forHero/ForHero"), {
  ssr: true,
});
const CardMarquee = dynamic(
  () => import("@/components/marquee/cards/CardMarquee"),
  {
    ssr: true,
  }
);

import { getTranslations } from "next-intl/server";

import people1 from "../../../../public/marquee/icons/devs/ai.svg";
import people2 from "../../../../public/marquee/icons/devs/cloud.svg";
import people3 from "../../../../public/marquee/icons/devs/css.svg";
import people4 from "../../../../public/marquee/icons/devs/html.svg";
import people5 from "../../../../public/marquee/icons/devs/figma.svg";
import people6 from "../../../../public/marquee/icons/devs/js.svg";
import people7 from "../../../../public/marquee/icons/devs/paython.svg";
import people8 from "../../../../public/marquee/icons/devs/photoshop.svg";
import bigLogo from "../../../../public/icons/bigLogo.svg";
import Mission from "@/components/mission/Mission";
import Talent from "@/components/forTalent/Talent";
async function forManagers() {
  const tp = getTranslations("proccess");
  const tb = getTranslations("manager");

  return (
    <>
      <section style={{ overflowX: "hidden" }}>
        <div className={styles.heroContainer}>
          <ForHero
            img1={people1}
            img2={people2}
            img3={people3}
            img4={people4}
            img5={people5}
            img6={people6}
            img7={people7}
            img8={people8}
            header={(await tb)("sectionLable")}
            subHeader={(await tb)("subHeader")}
            specialSubHeader={(await tb)("specialSubHeader")}
            paragraph={(await tb)("paragraph")}
            button={(await tb)("button")}
          />
        </div>
        <div className={styles.marqueeContainer}>
          <CardMarquee
            card1Header={(await tb)("card1Header")}
            card1SubHeader={(await tb)("card1SubHeader")}
            card2Header={(await tb)("card2Header")}
            card2SubHeader={(await tb)("card2SubHeader")}
            card3Header={(await tb)("card3Header")}
            card3SubHeader={(await tb)("card3SubHeader")}
          />
        </div>
        <div className={styles.missionContainer}>
          <Mission
            row1={(await tb)("row1")}
            row2={(await tb)("row2")}
            btnLable={(await tb)("btnLable")}
            logo={bigLogo}
          />
        </div>
        <div className={styles.processContainer}>
          <Process
            sectionLable={(await tp)("sectionLable")}
            title={(await tp)("sectionTitle")}
            titleSpecialWord={(await tp)("sectionTitleSpecialWord")}
            description={(await tp)("description")}
            card1Number="01"
            card1Title={(await tp)("title1")}
            card1Description={(await tp)("paragraph1")}
            card2Number="02"
            card2Title={(await tp)("title2")}
            card2Description={(await tp)("paragraph2")}
            card3Number="03"
            card3Title={(await tp)("title3")}
            card3Description={(await tp)("paragraph3")}
            card4Number="04"
            card4Title={(await tp)("title4")}
            card4Description={(await tp)("paragraph4")}
          />
        </div>

        <div className={styles.forClientsContainer}>
          <Talent />
        </div>
      </section>
    </>
  );
}

export default forManagers;
