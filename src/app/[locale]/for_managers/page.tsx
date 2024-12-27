import React from "react";
import styles from "./managers.module.css";
import Process from "@/components/process/process/Process";
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

export const metadata = {
  title: "YLLAAA – For Managers",
  description:
    "Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange.",
  openGraph: {
    title: "Connect European Clients with Egyptian Talent",
    description:
      "Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange.",
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
    title: "Connect European Clients with Egyptian Talent",
    description:
      "Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};

async function forManagers() {
  const tp = getTranslations("proccess");
  const tb = getTranslations("manager");

  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Connect European Clients with Egyptian Talent</title>
        <meta
          name="description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Connect European Clients with Egyptian Talent"
        />
        <meta
          property="og:description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
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
          content="Connect European Clients with Egyptian Talent"
        />
        <meta
          name="twitter:description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
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
          content="Connect European Clients with Egyptian Talent"
        />
        <meta
          property="og:description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
        />
        {/* Slack */}
        <meta
          property="og:title"
          content="Connect European Clients with Egyptian Talent"
        />
        <meta
          property="og:description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
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

        <meta name="title" content="Connect European Clients with Egyptian Talent" />
        <meta
          name="description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
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
            card2Header={(await tb)("card2Header")}
            card2SubHeader={(await tb)("card2SubHeader")}
            card3Header={(await tb)("card3Header")}
            card3SubHeader={(await tb)("card3SubHeader")}
          />
        </div>
        <div className={styles.missionContainer}>
          <Mission
            row1={(await tb)("row1")}
            row2={(await tb)("row2")}
            btnLable={(await tb)("btnLable")}
            logo={bigLogo}
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

export default forManagers;
