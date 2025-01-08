import React, { Suspense, lazy } from "react";
import styles from "./forBusiness.module.css";
import Head from "next/head";

import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2 from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";
import people4 from "../../../../public/marquee/icons/people/img4.svg";
import people5 from "../../../../public/marquee/icons/people/img5.svg";
import people6 from "../../../../public/marquee/icons/people/img6.svg";
import people7 from "../../../../public/marquee/icons/people/img7.svg";
import bigLogo from "../../../../public/icons/bigLogo.svg";

import figma from "../../../../public/missionIcons/figma.svg";
import git from "../../../../public/missionIcons/git.svg";
import triangle from "../../../../public/missionIcons/triangle.svg";
import reactIcon from "../../../../public/missionIcons/react.svg";

import Image from "next/image";
import { getTranslations } from "next-intl/server";
const Mission = lazy(() => import("@/components/mission/Mission"));
const Build = lazy(() => import("../../../components/build/Build"));
const Hiring = lazy(() => import("@/components/hiring/Hiring"));
const ForHero = lazy(() => import("@/components/forHero/new/ForHero"));
const Process = lazy(() => import("@/components/process/process/Process"));
const Cost = lazy(() => import("@/components/cost/Cost"));

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
        url: "https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png",
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
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"],
  },
};

async function forBusiness() {
  const tp = getTranslations("proccess");
  const tb = getTranslations("business");
  const tt = getTranslations("forHero");
  const people = [
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people1,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people2,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people3,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people4,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people5,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people6,
    },
    {
      name: "Ahmed Abdelmohsen",
      role: "Founder & CEO",
      img: people7,
    },
  ];

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
      <Suspense fallback={<div>Loading...</div>}>
        <section style={{ overflowX: "hidden" }}>
          <div className={styles.heroContainer}>
            <ForHero title={(await tt)("buisiness")} people={people} />
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
          <div className={styles.hiringContainer}>
            <Hiring />
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
          <div className={styles.buildContainer}>
            <Build />
          </div>
          <div className={styles.teamSection}>
            <Cost />
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default forBusiness;
