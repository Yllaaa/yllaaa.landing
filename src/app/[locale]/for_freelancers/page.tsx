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
async function forFreelancers() {
  const tp = getTranslations("proccess");
  const tb = getTranslations("freelancer");
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
            card1Img1={dev1}
            card1Img2={dev2}
            card1Img3={dev3}
            card2Header={(await tb)("card2Header")}
            card2SubHeader={(await tb)("card2SubHeader")}
            card2Img1={market1}
            card2Img2={market2}
            card2Img3={market3}
            card3Header={(await tb)("card3Header")}
            card3SubHeader={(await tb)("card3SubHeader")}
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
            row1={(await tb)("row1")}
            row2={(await tb)("row2")}
            logo={bigLogo}
            btnLable={(await tb)("btnLable")}
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

export default forFreelancers;
