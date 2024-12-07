import React from "react";
import styles from "./forBusiness.module.css";
import Process from "@/components/process/process/Process";
import Team from "@/components/team/Team";
import ForClients from "@/components/forClients/ForClients";
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
import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2 from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";
import people4 from "../../../../public/marquee/icons/people/img4.svg";
import people5 from "../../../../public/marquee/icons/people/img5.svg";
import people6 from "../../../../public/marquee/icons/people/img6.svg";
import people7 from "../../../../public/marquee/icons/people/img7.svg";
import bigLogo from "../../../../public/icons/bigLogo.svg";
import Mission from "@/components/mission/Mission";

import dev1 from "../../../../public/marquee/appDevTeam/dev1.png";
import dev2 from "../../../../public/marquee/appDevTeam/dev2.png";
import dev3 from "../../../../public/marquee/appDevTeam/dev3.png";
import web1 from "../../../../public/marquee/webTeam/web1.png";
import web2 from "../../../../public/marquee/webTeam/web2.png";
import web3 from "../../../../public/marquee/webTeam/web3.png";
import market1 from "../../../../public/marquee/marketingTeam/market1.png";
import market2 from "../../../../public/marquee/marketingTeam/market2.png";
import market3 from "../../../../public/marquee/marketingTeam/market3.png";

import figma from "../../../../public/missionIcons/figma.svg";
import git from "../../../../public/missionIcons/git.svg";
import triangle from "../../../../public/missionIcons/triangle.svg";
import reactIcon from "../../../../public/missionIcons/react.svg";
import Image from "next/image";
function forBusiness() {
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
            header={"For Business"}
            subHeader={"Boost your projects with "}
            specialSubHeader={"Freeworkers"}
            paragraph={
              " Start working with the best software, design and marketing freelancers. Save on fixed costs and make your growth more flexible."
            }
            button="Start now"
          />
        </div>
        <div className={styles.marqueeContainer}>
          <CardMarquee
            card1Header={"APP DEVELOPMENT"}
            card1SubHeader={"within 6-8 weeks"}
            card1Img1={dev1}
            card1Img2={dev2}
            card1Img3={dev3}
            card2Header={"marketing campaign"}
            card2SubHeader={"within 3-5 weeks"}
            card2Img1={market1}
            card2Img2={market2}
            card2Img3={market3}
            card3Header={"WEB DESIGN"}
            card3SubHeader={"within 6-8 weeks"}
            card3Img1={web1}
            card3Img2={web2}
            card3Img3={web3}
          />
        </div>
        <div className={styles.missionContainer}>
          <div className={styles.missionIcons}>
            <Image src={figma} alt="figma" className={styles.icon1} />
            <Image src={reactIcon} alt="figma" className={styles.icon2} />
            <Image src={git} alt="figma" className={styles.icon3} />
            <Image src={triangle} alt="figma" className={styles.icon4} />
          </div>
          <Mission
            row1="THE BEST TECH"
            row2="TALENT IS AT"
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
        <div className={styles.teamSection}>
          <Team />
        </div>
        <div className={styles.forClientsContainer}>
          <ForClients />
        </div>
      </section>
    </>
  );
}

export default forBusiness;
