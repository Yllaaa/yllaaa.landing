import React, { Suspense, lazy } from "react";
import styles from "./homePage.module.css";
import Head from "next/head";
import Reason from "@/components/reason/Reason";
import Build from "@/components/build/Build";
import Cost from "@/components/cost/Cost";
import Loading from "./loading";
import Partners from "@/components/partners/Partners";
import Advisors from "@/components/advisors/Advisors";
const About = lazy(() => import("@/components/aboutUs/About"));
// const World = lazy(() => import("@/components/world/World"));
const Hero = lazy(() => import("@/components/home/hero2/Hero"));
const Earth = lazy(() => import("@/components/home/Earth/Earth"));
const Barriers = lazy(() => import("@/components/barriers/Barriers"));
const ForClients = lazy(() => import("@/components/forClients/ForClients"));
const Team = lazy(() => import("@/components/team/new/Team"));
export const metadata = {
  title: "YLLAAA",
  description: "Start your startup now",
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
        <meta property="og:title" content="YLLAAA" />
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
      <Suspense fallback={<Loading />}>
        <section className={styles.section}>
          <Suspense fallback={<Loading />}>
            <div className={styles.heroContainer}>
              <Hero />
            </div>
          </Suspense>
          <div className={styles.forClientsContainer}>
            <ForClients />
          </div>
          <div className={styles.teamSection}>
            <Build />
          </div>

          <div className={styles.aboutUsContainer}>
            <About />
          </div>
          <div className={styles.forTalentContainer}>
            <Barriers />
          </div>
          <div className={styles.forTalentContainer}>
            <Cost />
          </div>
          <div className={styles.earthContainer}>
            <Earth />
          </div>
          {/* <div className={styles.aboutUsContainer}>
            <World />
          </div> */}
          <div className={styles.forTalentContainer}>
            <Team />
          </div>
          <div className={styles.reasonContainer}>
            <Reason />
          </div>
          <div className={styles.reasonContainer}>
            <Advisors />
          </div>
          <div className={styles.reasonContainer}>
            <Partners />
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default homePage;
