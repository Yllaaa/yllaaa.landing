// "use client";
import React, { Suspense, lazy } from "react";
import styles from "./homePage.module.css";
// import cardImage from "../../../public/ourProcess/cardImg.svg";
import { getTranslations } from "next-intl/server";
import Head from "next/head";
const Barriers = lazy(() => import("@/components/barriers/Barriers"));
const AboutUs = lazy(() => import("@/components/aboutUs/AboutUs"));
const ForClients = lazy(() => import("@/components/forClients/ForClients"));
const Team = lazy(() => import("@/components/team/Team"));
const Talent = lazy(() => import("@/components/forTalent/Talent"));
const Hero = lazy(() => import("@/components/home/hero/Hero"));
const Process = lazy(() => import("@/components/process/process/Process"));

export const metadata = {
  title: "YLLAAA",
  description:
    "Start your startup now",
  openGraph: {
    title: "YLLAAA - Freelance now",
    description:
      "Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success.",
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
    title: "YLLAAA - Freelancing & Startup Management",
    description:
      "Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};

async function homePage() {
  const tp = getTranslations("proccess");
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Freelancing & Startup Management</title>
        <meta
          name="description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
        />

        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YLLAAA"
        />
        <meta
          property="og:description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
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
          content="YLLAAA - Freelancing & Startup Management"
        />
        <meta
          name="twitter:description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
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
          content="YLLAAA - Freelancing & Startup Management"
        />
        <meta
          property="og:description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
        />
        {/* Slack */}
        <meta
          property="og:title"
          content="YLLAAA - Freelancing & Startup Management"
        />
        <meta
          property="og:description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
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
          content="YLLAAA - Freelancing & Startup Management"
        />
        <meta
          name="description"
          content="Empowering freelancers and startups to thrive with YLLAAA, your ultimate platform for growth, collaboration, and success."
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={styles.section}>
          <div className={styles.heroContainer}>
            <Hero />
          </div>
          <div className={styles.aboutUsContainer}>
            <AboutUs />
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
            <ForClients />
          </div>
          <div className={styles.teamSection}>
            <Team />
          </div>
          <div className={styles.aboutUsContainer}>
            <Barriers />
          </div>
          {/* <div className={styles.processContainer}>
          <Process
            sectionLable="OUR PROCESS"
            title="Our Process to Empower Your"
            titleSpecialWord="Vision"
            description=" A simple four-step journey to bring your vision to life"
            card1Number="01"
            card1Image={cardImage}
            card1Title="Select Your Expert"
            card1Description="Choose a manager who understands your unique goals"
            card2Number="02"
            card2Image={cardImage}
            card2Title="Define Your Goals"
            card2Description="We develop a strategy that outlines the design approach, user experience, and key features of the project."
            card3Number="03"
            card3Image={cardImage}
            card3Title="Collaborate and Customize"
            card3Description="Work directly with your expert to tailor every detail to your needs"
            card4Number="04"
            card4Image={cardImage}
            card4Title="Launch and Track Progress"
            card4Description="Monitor progress and stay connected every step"
          />
        </div> */}
          <div className={styles.forTalentContainer}>
            <Talent />
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default homePage;
