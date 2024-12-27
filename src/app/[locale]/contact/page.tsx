import ContactUs from "@/components/contactUs/ContactUs";
import React from "react";
import styles from "./contact.module.css";
import Head from "next/head";

export const metadata = {
  title: "YLLAAA – Contact us",
  description:
    "Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed.",
  openGraph: {
    title: "Connect with YLLAAA Today",
    description:
      "Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed.",
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
    title: "Connect with YLLAAA Today",
    description:
      "Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed.",
    images: ["https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"], // Replace with actual S3 image URL
  },
};

function ContactPage() {
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>YLLAAA - Connect with YLLAAA Today</title>
        <meta
          name="description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Connect with YLLAAA Today" />
        <meta
          property="og:description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
        />
        <meta property="og:url" content="https://yllaaa.com" />
        <meta
          property="og:image"
          content="https://yllaaa.s3.ca-central-1.amazonaws.com/yllaaa.png"
        />
        <meta property="og:site_name" content="YLLAAA" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Connect with YLLAAA Today" />
        <meta
          name="twitter:description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
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
        <meta property="og:title" content="Connect with YLLAAA Today" />
        <meta
          property="og:description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
        />
        {/* Slack */}
        <meta property="og:title" content="Connect with YLLAAA Today" />
        <meta
          property="og:description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
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

        <meta name="title" content="Connect with YLLAAA Today" />
        <meta
          name="description"
          content="Have questions or need support? Contact YLLAAA for inquiries, partnerships, or assistance. We’re here to help you succeed."
        />
      </Head>
      <section className={styles.section} style={{}}>
        <div className={styles.bgShade}></div>
        <div className={styles.contactUs}>
          <div className={styles.form}>
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
