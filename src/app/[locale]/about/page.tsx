import WordMarquee from "@/components/marquee/words/WordMarquee";
import React from "react";
import styles from "./aboutPage.module.css";
import Process from "@/components/process/process/Process";
import Team from "@/components/team/Team";
import AboutUs from "@/components/aboutUs/AboutUs";
import AboutHero from "@/components/heroAbout/AboutHero";

function aboutPage() {
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
            sectionLable="OUR PROCESS"
            title="Our Process to Empower Your"
            titleSpecialWord="Vision"
            description=" Yalla embraces a dynamic and flexible process, prioritizing
              collaboration and tailored solutions for every client."
            card1Number="01"
            card1Title="Connect with business buddy"
            card1Description="Grab a virtual or real coffe with your account manager, we listen, we strategize, and we craft a planthat ressonate with your vision"
            card2Number="02"
            card2Title="Dive deep"
            card2Description="Grab a virtual or real coffe with your account manager, we listen, we strategize, and we craft a planthat ressonate with your vision"
            card3Number="03"
            card3Title="Unlock the perfect plan"
            card3Description="Ditch the guesswork,we present a tailored transparent plan with recommended budgets and stratgies"
            card4Number="04"
            card4Title="Perfection"
            card4Description="Finally, receive the polished results delivered with the highest standards of quality"
          />
        </div>
      </section>
    </>
  );
}

export default aboutPage;
