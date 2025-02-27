"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import bgLogo from "../../../public/footer/bgLogo.svg";
import logoWhite from "../../../public/footer/logoWhite.svg";
import arrowCircle from "../../../public/icons/arrowWithCircle.svg";
import Link from "next/link";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";

import apple from "../../../public/icons/apple.svg";
import mail from "../../../public/icons/mail.svg";
import facebook from "../../../public/icons/facebook.svg";
import instagram from "../../../public/icons/instagram.svg";
import linkedIn from "../../../public/icons/linkedIn.svg";
import smallArrow from "../../../public/icons/smallArrow.svg";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function Footer() {
  const locale = useLocale();
  const router = useRouter();
  const [siteMapOpen, setSiteMapOpen] = React.useState(false);
  const { isDesktop } = ScreenBreakpoints();

  const t = useTranslations("headerFooter");
  const words = [
    `${t("text1")}`,
    `${t("text4")}`,
    `${t("text3")}`,
    `${t("text2")}`,
  ];

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* upper container */}
      <div className={styles.upperContainer}>
        <div className={styles.shaddow1}></div>
        <div className={styles.shaddow2}></div>
        <div className={styles.textAndLogo}>
          <div
            onClick={() => router.push(`/${locale}/`)}
            className={styles.logoContainer}
          >
            <Image src={bgLogo} alt="yllaaaLogo" />
          </div>
          <div className={styles.textContainer}>
            <h4>{t("footerText")}</h4>
            <div className={styles.wordCyclerContainer}>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={styles.word}
                  style={{
                    animationDelay: `${index * 1.5}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div
              onClick={() => router.push(`/${locale}/contact`)}
              className={styles.getStarted}
            >
              <span>{t("btn")}</span>
              <Image src={arrowCircle} alt="yllaaaLogo" />
            </div>
          </div>
        </div>
      </div>
      {/* lower container */}
      <div className={styles.lowerContainer}>
        {mounted && isDesktop ? (
          <>
            <div className={styles.shaddow3}></div>
            <div className={styles.lowerContainerLogo}>
              <Link href="/">
                <Image src={logoWhite} alt="yllaaaLogo" />
              </Link>
              <div className={styles.links}>
                <ul className={styles.linksList}>
                  <Link
                    href="/"
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("home")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("about")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_business`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("forBusiness")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_freelancers`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>{t("forFreelancers")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_managers`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>{t("forManagers")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>{t("contact")}</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className={styles.betweenLine}></div>
            <div className={styles.lowerContainerContact}>
              <div className={styles.download}>
                <p
                  onClick={() =>
                    window.open("https://apps.apple.com/app/id6740632183")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <Image src={apple} alt="yllaaaLogo" />
                  </span>{" "}
                  {t("download")}
                </p>
              </div>
              <div className={styles.email}>
                <p>
                  <span>
                    <Image src={mail} alt="yllaaaLogo" />
                  </span>{" "}
                  info@YLLAAA.com
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.lowerContainerLogo}>
              <Link href="/">
                <Image src={logoWhite} alt="yllaaaLogo" />
              </Link>
            </div>
            <div className={styles.betweenLine}></div>
            <div className={styles.siteMap}>
              <h5
                onClick={() => {
                  setSiteMapOpen(!siteMapOpen);
                }}
                style={{ cursor: "pointer" }}
              >
                SITE MAP{" "}
                <span
                  style={{
                    transform: siteMapOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "height 0.4s ease-in-out",
                  }}
                >
                  <Image src={smallArrow} alt="smallArrow" />
                </span>
              </h5>
              <div
                className={styles.responsiveFooter}
                style={{
                  height: siteMapOpen ? "122px" : "0",
                  minHeight: siteMapOpen ? "fit-content" : "0",
                  marginTop: siteMapOpen ? "16px" : "0",
                  transition: "height 0.4s ease-in-out",
                  width: "fit-content",
                  overflow: "hidden",
                }}
              >
                <ul className={styles.linksList}>
                  <Link
                    href="/"
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("Home")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("about")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_business`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>{t("forBusiness")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_freelancers`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>{t("forFreelancers")}</li>
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>{t("contact")}</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className={styles.betweenLine}></div>
            <div className={styles.lowerContainerSocial}>
              <Image src={facebook} alt="linkedInIcon" />
              <Image src={instagram} alt="linkedInIcon" />
              <Image src={linkedIn} alt="linkedInIcon" />
            </div>
            <div className={styles.responsiveLowerContainerEmail}>
              <p>info@YLLAAA.com</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Footer;
