import React, { Suspense, lazy } from "react";
import styles from "./aboutPage.module.css";
import { getTranslations } from "next-intl/server";
import Head from "next/head";
// import About from "@/components/aboutUs/About";

const WordMarquee = lazy(() =>
  import("@/components/marquee/words/WordMarquee")
);
const Process = lazy(() => import("@/components/process/process/Process"));
const Team = lazy(() => import("@/components/team/new/Team"));
const About = lazy(() => import("@/components/aboutUs/About"));
const HeroClouds = lazy(() => import("@/components/heroAbout/HeroClouds"));
const AboutUs = lazy(() => import("@/components/heroAbout/AboutHero"));
const Reason = lazy(() => import("@/components/reason/Reason"));
const Barriers = lazy(() => import("@/components/barriers/Barriers"));
const World = lazy(() => import("@/components/world/World"));

export const metadata = {
  title: "YLLAAA – You Will Never Start Up Alone",
  description:
    "YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way.",
  openGraph: {
    title: "YLLAAA - Freelance now",
    description:
      "YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way.",
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
    title: "YLLAAA – You Will Never Start Up Alone",
    description:
      "YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};
async function aboutPage() {
  const tp = getTranslations("proccess");
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Freelancing & Startup Management</title>
        <meta
          name="description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YLLAAA" />
        <meta
          property="og:description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
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
          content="YLLAAA – You Will Never Start Up Alone"
        />
        <meta
          name="twitter:description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
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
          content="YLLAAA – You Will Never Start Up Alone"
        />
        <meta
          property="og:description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
        />
        {/* Slack */}
        <meta
          property="og:title"
          content="YLLAAA – You Will Never Start Up Alone"
        />
        <meta
          property="og:description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
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

        <meta name="title" content="YLLAAA – You Will Never Start Up Alone" />
        <meta
          name="description"
          content="YLLAAA is your trusted partner for building MVPs and scaling startups. We connect Egyptian freelancers with European clients to turn ideas into reality, empowering innovation and collaboration every step of the way."
        />
      </Head>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.heroContainer}>
            {/* <AboutHero /> */}
            <HeroClouds />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.marqueeContainer}>
            <WordMarquee />
          </div>
          <div className={styles.aboutUsContainer}>
            <Reason />
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
          <div className={styles.aboutUsContainer}>
            <About />
          </div>
          <div className={styles.aboutUsContainer}>
            <AboutUs />
          </div>
          <div className={styles.aboutUsContainer}>
            <Barriers />
          </div>
          <div className={styles.aboutUsContainer}>
            <World />
          </div>
          <div className={styles.teamSection}>
            <Team />
          </div>
        </Suspense>
      </section>
    </>
  );
}

export default aboutPage;
