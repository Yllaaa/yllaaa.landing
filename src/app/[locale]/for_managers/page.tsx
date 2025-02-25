import React, { Suspense, lazy } from "react";
import styles from "./managers.module.css";
import Head from "next/head";

import { getTranslations } from "next-intl/server";

import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2F from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";
import people4F from "../../../../public/marquee/icons/people/img4.svg";
import people5F from "../../../../public/marquee/icons/people/img5.svg";
import people6F from "../../../../public/marquee/icons/people/img6.svg";
import people7 from "../../../../public/marquee/icons/people/img7.svg";
import bigLogo from "../../../../public/icons/bigLogo.svg";


const Process = lazy(() => import("@/components/process/process/Process"));
// const Build = lazy(() => import("@/components/build/Build"));
const Mission = lazy(() => import("@/components/mission/Mission"));
const ForHero = lazy(() => import("@/components/forHero/new/ForHero"));
const CardMarquee = lazy(() =>
  import("@/components/marquee/cards/CardMarquee")
);
const Earth = lazy(() => import("@/components/home/Earth/Earth"));

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
  const tp = getTranslations("proccessM");
  const tb = getTranslations("manager");
  const tt = getTranslations("forHero");
  const people = [
    {
      name: "Hossam Salah",
      role: "Account Manager",
      img: people1,
    },
    {
      name: "Asmaa Ezz",
      role: "Team Leader",
      img: people2F,
    },
    {
      name: "Nader Elsayed",
      role: "Account Manager",
      img: people3,
    },
    {
      name: "Mariem Taha",
      role: "Art Director",
      img: people4F,
    },
    {
      name: "Suzaan Hani",
      role: "Architectural Team Leader",
      img: people5F,
    },
    {
      name: "Salma Awad",
      role: "Business Manager",
      img: people6F,
    },
    {
      name: "Bassem Elsayed",
      role: "Floor Manager",
      img: people7,
    },
  ];
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

        <meta
          name="title"
          content="Connect European Clients with Egyptian Talent"
        />
        <meta
          name="description"
          content="Play a key role in linking startups with talented professionals. Connect European clients with skilled Egyptian freelancers via YLLAAA. Our platform helps you achieve project goals, earn in hard currencies, and promote cultural exchange."
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
      <section style={{ overflowX: "hidden" }}>
        <div className={styles.heroContainer}>
          <ForHero title={(await tt)("manager")} desc={(await tt)("descriptionM")} people={people} />
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
        <div className={styles.missionContainer}>
          <Mission
            row1={(await tb)("row1")}
            row2={(await tb)("row2")}
            btnLable={(await tb)("btnLable")}
            logo={bigLogo}
          />
        </div>
        {/* <div className={styles.forClientsContainer}>
          <Build />
        </div> */}
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
        <div className={styles.forClientsContainer}>
          <Earth />
        </div>
      </section>
      </Suspense>
    </>
  );
}

export default forManagers;
