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
function forManagers() {
  return (
    <>
      <section style={{overflowX: "hidden"}}>
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
            header={"For Managers"}
            subHeader={"Your Strategic Project "}
            specialSubHeader={"Partner"}
            paragraph={
              "Maximize Efficiency. Deliver Success. Yalla's dedicated Account Managers ensure seamless project flow, so you can focus on growth"
            }
            button="Start Managing Now"
          />
        </div>
        <div className={styles.marqueeContainer}>
          <CardMarquee
            card1Header={"Digital Marketing Experts"}
            card1SubHeader={
              "Leverage data-driven strategies and targeted campaigns to maximize project visibility and user engagement"
            }
            card2Header={"Product Design"}
            card2SubHeader={
              "ransform concepts into user-centric designs that elevate product appeal and usability."
            }
            card3Header={"Software Development"}
            card3SubHeader={
              "Deliver scalable, reliable software solutions tailored to project requirements and user needs"
            }
          />
        </div>
        <div className={styles.missionContainer}>
          <Mission
            row1="Lead  projects and connect with"
            row2="top industry players at"
            logo={bigLogo}
            btnLable="Start now"
          />
        </div>
        <div className={styles.processContainer}>
          <Process
            sectionLable="OUR PROCESS"
            title="Our Process to Empower Your"
            titleSpecialWord="Vision"
            description=" Yalla embraces a dynamic and flexible process, prioritizing
              collaboration and tailored solutions for every client."
            card1Number="01"
            card1Title="Manage projects"
            card1Description="Effortlessly oversee all your projects in one place. Our platform helps you stay organized and in control from start to finish"
            card2Number="02"
            card2Title="select your expertise"
            card2Description="Showcase your unique skills and expertise, and let us match you with projects that suit your strengths"
            card3Number="03"
            card3Title="simple project tracking"
            card3Description="Track progress with ease. Keep tabs on every project detail to ensure smooth delivery and timely updates"
            card4Number="04"
            card4Title="increase your income"
            card4Description="Unlock more opportunities and boost your earnings by connecting with clients who need your expertise"
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
