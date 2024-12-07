import React from "react";
import styles from "./homePage.module.css";
// import cardImage from "../../../public/ourProcess/cardImg.svg";
import AboutUs from "@/components/aboutUs/AboutUs";
import ForClients from "@/components/forClients/ForClients";
import Team from "@/components/team/Team";
import Talent from "@/components/forTalent/Talent";
import Hero from "@/components/home/hero/Hero";
import Process from "@/components/process/process/Process";
import { getTranslations } from "next-intl/server";

async function homePage() {
  const tp = getTranslations("proccess");
  return (
    <>
      <section className={styles.section}>
        <div className={styles.heroContainer}>
          <Hero />
        </div>
        <div className={styles.aboutUsContainer}>
          <AboutUs />
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
          <ForClients />
        </div>
        <div className={styles.teamSection}>
          <Team />
        </div>
        {/* <div className={styles.processContainer}>
          <Process
            sectionLable="OUR PROCESS"
            title="Our Process to Empower Your"
            titleSpecialWord="Vision"
            description=" A simple four-step journey to bring your vision to life"
            card1Number="01"
            card1Image={cardImage}
            card1Title="Select Your Expert"
            card1Description="Choose a manager who understands your unique goals"
            card2Number="02"
            card2Image={cardImage}
            card2Title="Define Your Goals"
            card2Description="We develop a strategy that outlines the design approach, user experience, and key features of the project."
            card3Number="03"
            card3Image={cardImage}
            card3Title="Collaborate and Customize"
            card3Description="Work directly with your expert to tailor every detail to your needs"
            card4Number="04"
            card4Image={cardImage}
            card4Title="Launch and Track Progress"
            card4Description="Monitor progress and stay connected every step"
          />
        </div> */}
        <div className={styles.forTalentContainer}>
          <Talent />
        </div>
      </section>
    </>
  );
}

export default homePage;
