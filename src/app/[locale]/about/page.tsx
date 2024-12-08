import WordMarquee from "@/components/marquee/words/WordMarquee";
import React from "react";
import styles from "./aboutPage.module.css";
import Process from "@/components/process/process/Process";
import Team from "@/components/team/Team";
import AboutUs from "@/components/aboutUs/AboutUs";
import AboutHero from "@/components/heroAbout/AboutHero";
import { getTranslations } from "next-intl/server";
async function aboutPage() {
  const tp = getTranslations("proccess");
  return (
    <>
      <section>
        <div className={styles.heroContainer}>
          <AboutHero />
        </div>
        <div className={styles.aboutUsContainer}>
          <AboutUs />
        </div>
        <div className={styles.marqueeContainer}>
          <WordMarquee />
        </div>
        <div className={styles.teamSection}>
          <Team />
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
      </section>
    </>
  );
}

export default aboutPage;
