import React from "react";
import styles from "./homePage.module.css";
import cardImage from "../../../public/ourProcess/cardImg.svg";
import AboutUs from "@/components/aboutUs/AboutUs";
import ForClients from "@/components/forClients/ForClients";
import Team from "@/components/team/Team";
import Talent from "@/components/forTalent/Talent";
import Hero from "@/components/home/hero/Hero";
import Process from "@/components/process/process/Process";

function homePage() {
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
        <div className={styles.forClientsContainer}>
          <ForClients />
        </div>
        <div className={styles.teamSection}>
          <Team />
        </div>
        <div className={styles.processContainer}>
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
        </div>
        <div className={styles.forTalentContainer}>
          <Talent />
        </div>
      </section>
    </>
  );
}

export default homePage;
