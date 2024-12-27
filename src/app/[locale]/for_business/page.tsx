import React from "react";
import styles from "./forBusiness.module.css";
import Process from "@/components/process/process/Process";
import Team from "@/components/team/Team";
import ForClients from "@/components/forClients/ForClients";
import dynamic from "next/dynamic";
import Head from "next/head";
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

export const metadata = {
  title: "YLLAAA – For Business",
  description:
    "Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively.",
  openGraph: {
    title: "Streamline Your Workforce with YLLAAA",
    description:
      "Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively.",
    url: "https://yllaaa.com",
    siteName: "YLLAAA",
    images: [
      {
        url: "https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png", // Replace with actual S3 image URL
        width: 1200,
        height: 630,
        alt: "YLLAAA - Freelancing & Startup Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline Your Workforce with YLLAAA",
    description:
      "Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};

async function forBusiness() {
  const tp = getTranslations("proccess");
  const tb = getTranslations("business");
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Streamline Your Workforce with YLLAAA</title>
        <meta
          name="description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Streamline Your Workforce with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />
        <meta property="og:url" content="https://yllaaa.com" />
        <meta
          property="og:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />
        <meta property="og:site_name" content="YLLAAA" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Streamline Your Workforce with YLLAAA"
        />
        <meta
          name="twitter:description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />
        <meta
          name="twitter:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />

        {/* Snapchat & Instagram */}

        <meta
          property="og:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />
        <meta
          property="og:title"
          content="Streamline Your Workforce with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />
        {/* Slack */}
        <meta
          property="og:title"
          content="Streamline Your Workforce with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />
        <meta
          property="og:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />
        {/* WhatsApp */}
        <meta
          property="og:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />
        {/* Google (Search Engines)
         */}

        <meta name="title" content="Streamline Your Workforce with YLLAAA" />
        <meta
          name="description"
          content="Connect with the Top 1% of Egyptian talent for your startup. YLLAAA connects you with skilled freelancers to meet your goals efficiently and cost-effectively."
        />
      </Head>
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
