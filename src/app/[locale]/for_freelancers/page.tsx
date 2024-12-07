import React from "react";
import styles from "./forFreelancers.module.css";
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
import Image from "next/image";


import people1 from "../../../../public/marquee/icons/devs/ai.svg";
import people2 from "../../../../public/marquee/icons/devs/cloud.svg";
import people3 from "../../../../public/marquee/icons/devs/css.svg";
import people4 from "../../../../public/marquee/icons/devs/html.svg";
import people5 from "../../../../public/marquee/icons/devs/figma.svg";
import people6 from "../../../../public/marquee/icons/devs/js.svg";
import people7 from "../../../../public/marquee/icons/devs/paython.svg";
import people8 from "../../../../public/marquee/icons/devs/photoshop.svg";
import bigLogo from "../../../../public/icons/bigLogo.svg";
import dev1 from "../../../../public/marquee/appDevTeam/dev1.png";
import dev2 from "../../../../public/marquee/appDevTeam/dev2.png";
import dev3 from "../../../../public/marquee/appDevTeam/dev3.png";
import web1 from "../../../../public/marquee/webTeam/web1.png";
import web2 from "../../../../public/marquee/webTeam/web2.png";
import web3 from "../../../../public/marquee/webTeam/web3.png";
import market1 from "../../../../public/marquee/marketingTeam/market1.png";
import market2 from "../../../../public/marquee/marketingTeam/market2.png";
import market3 from "../../../../public/marquee/marketingTeam/market3.png";
import Mission from "@/components/mission/Mission";
import Talent from "@/components/forTalent/Talent";

import figma from "../../../../public/freelancersIcons/love.svg";
import git from "../../../../public/missionIcons/git.svg";
import triangle from "../../../../public/freelancersIcons/airplane.svg";
import reactIcon from "../../../../public/freelancersIcons/black.svg";
function forFreelancers() {
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
            header={"For Freelancers"}
            subHeader={"The house of "}
            specialSubHeader={"Freelancing"}
            paragraph={
              "Find projects that match your talent. We are the first freeworker community that puts talent first."
            }
            button="Start now"
          />
        </div>
        <div className={styles.marqueeContainer}>
          <CardMarquee
            card1Header={"APP DEVELOPMENT"}
            card1SubHeader={"skills: Flutter developer"}
            card1Img1={dev1}
            card1Img2={dev2}
            card1Img3={dev3}
            card2Header={"marketing campaign"}
            card2SubHeader={"skills: digital marketing"}
            card2Img1={market1}
            card2Img2={market2}
            card2Img3={market3}
            card3Header={"WEB DESIGN"}
            card3SubHeader={"skills: UX/UI Design"}
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
            title="Find Your Ideal Way to Work and Grow with"
            titleSpecialWord="Yllaaa"
            description=" YLLAA embraces a dynamic and flexible process, prioritizing collaboration and tailored solutions for every client."
            card1Number="01"
            card1Title="Freelancer"
            card1Description="Empowering freelancers to connect with high-impact projects and reputable clients. Get personalized support from dedicated account managers who guide you in project management and client communication."
            card2Number="02"
            card2Title="Support from managers"
            card2Description="Get guidance from experienced managers at every step. From project planning to final delivery, our managers are here to help you succeed."
            card3Number="03"
            card3Title="New to Freelancing?"
            card3Description="Embark on your freelancing journey with ease. Yllaaa helps you navigate the process, providing a steady flow of quality projects and professional growth resources."
            card4Number="04"
            card4Title="Client Partnerships"
            card4Description="Our platform connects you with clients ready to invest in your expertise. With account managers on standby, Yllaaa enhances client relationships, giving you more time to focus on delivering excellence."
          />
        </div>

        <div className={styles.forClientsContainer}>
          <Talent />
        </div>
      </section>
    </>
  );
}

export default forFreelancers;
