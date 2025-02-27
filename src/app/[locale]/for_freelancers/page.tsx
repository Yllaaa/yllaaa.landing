import React, { Suspense, lazy } from "react";
import styles from "./forFreelancers.module.css";

import Head from "next/head";

import Image from "next/image";
import { getTranslations } from "next-intl/server";

import people1 from "../../../../public/marquee/icons/people/img1.svg";
import people2F from "../../../../public/marquee/icons/people/img2.svg";
import people3 from "../../../../public/marquee/icons/people/img3.svg";
import people4F from "../../../../public/marquee/icons/people/img4.svg";
import people5F from "../../../../public/marquee/icons/people/img5.svg";
import people6F from "../../../../public/marquee/icons/people/img6.svg";
import people7 from "../../../../public/marquee/icons/people/img7.svg";
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

import figma from "../../../../public/freelancersIcons/love.svg";
import git from "../../../../public/missionIcons/git.svg";
import triangle from "../../../../public/freelancersIcons/airplane.svg";
import reactIcon from "../../../../public/freelancersIcons/black.svg";

const Mission = lazy(() => import("@/components/mission/Mission"));
const Build = lazy(() => import("@/components/build/Build"));
const Process = lazy(() => import("@/components/process/process/Process"));
const ForHero = lazy(() => import("@/components/forHero/new/ForHero"));
const Earth = lazy(() => import("@/components/home/Earth/Earth"));
const CardMarquee = lazy(() =>
  import("@/components/marquee/cards/CardMarquee")
);

export const metadata = {
  title: "YLLAAA – For Freelancers",
  description:
    "Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace.",
  openGraph: {
    title: "Grow Your Freelance Career with YLLAAA",
    description:
      "Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace.",
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
    title: "Grow Your Freelance Career with YLLAAA",
    description:
      "Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};

async function forFreelancers() {
  const tp = getTranslations("proccessF");
  const tb = getTranslations("freelancer");
  const tt = getTranslations("forHero");
  const tbl = getTranslations("buildF");
  const people = [
    {
      name: "Khaled Mahmoud",
      role: "UI/UX Designer",
      img: people1,
    },
    {
      name: "Christtine Nasser",
      role: "Frontend Developer",
      img: people2F,
    },
    {
      name: "Mark Youssef",
      role: "Software Engineer",
      img: people3,
    },
    {
      name: "Fayrouz Sameh",
      role: "Graphic Designer",
      img: people4F,
    },
    {
      name: "Sara Ahmed",
      role: "Content Creator",
      img: people5F,
    },
    {
      name: "Noha Shokry",
      role: "Digital Marketer",
      img: people6F,
    },
    {
      name: "Fares Maarouf",
      role: "Backend Developer",
      img: people7,
    },
  ];
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Grow Your Freelance Career with YLLAAA</title>
        <meta
          name="description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Grow Your Freelance Career with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
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
          content="Grow Your Freelance Career with YLLAAA"
        />
        <meta
          name="twitter:description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
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
          content="Grow Your Freelance Career with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
        />
        {/* Slack */}
        <meta
          property="og:title"
          content="Grow Your Freelance Career with YLLAAA"
        />
        <meta
          property="og:description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
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

        <meta name="title" content="Grow Your Freelance Career with YLLAAA" />
        <meta
          name="description"
          content="Connect with European clients, earn in hard currencies, and work on exciting projects. Join our platform and work in an international marketplace."
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <section style={{ overflowX: "hidden" }}>
          <div className={styles.heroContainer}>
            <ForHero
              title={(await tt)("freelancer")}
              desc={(await tt)("descriptionF")}
              people={people}
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
          <div className={styles.barrier}>
            <Build
              title1={(await tbl)("submit")}
              desc1={(await tbl)("submitText")}
              title2={(await tbl)("analyze")}
              desc2={(await tbl)("analyzeText")}
              title3={(await tbl)("yllaaa")}
              desc3={(await tbl)("yllaaaText")}
              title4={(await tbl)("approve")}
              desc4={(await tbl)("approveText")}
              title5={(await tbl)("build")}
              desc5={(await tbl)("buildText")}
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
          <div className={styles.forClientsContainer}>
            <Earth />
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default forFreelancers;
