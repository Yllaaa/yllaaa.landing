"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import bgLogo from "../../../public/footer/bgLogo.svg";
import logoWhite from "../../../public/footer/logoWhite.svg";
import arrowCircle from "../../../public/icons/arrowWithCircle.svg";
import Link from "next/link";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import message from "../../../public/icons/message.svg";
import mail from "../../../public/icons/mail.svg";
import facebook from "../../../public/icons/facebook.svg";
import instagram from "../../../public/icons/instagram.svg";
import linkedIn from "../../../public/icons/linkedIn.svg";
import smallArrow from "../../../public/icons/smallArrow.svg";
import { useLocale } from "next-intl";

function Footer() {
  const locale = useLocale();
  const words = ["IDEA", "VISION", "STARTUP", "PROJECT"];
  const [siteMapOpen, setSiteMapOpen] = React.useState(false);
  const { isDesktop } = ScreenBreakpoints();
  return (
    <>
      {/* upper container */}
      <div className={styles.upperContainer}>
        <div className={styles.shaddow1}></div>
        <div className={styles.shaddow2}></div>
        <div className={styles.textAndLogo}>
          <div className={styles.logoContainer}>
            <Image src={bgLogo} alt="yllaaaLogo" />
          </div>
          <div className={styles.textContainer}>
            <h4>LET US POWER YOUR</h4>
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
            <div className={styles.getStarted}>
              <span>GET STARTED</span>
              <Image src={arrowCircle} alt="yllaaaLogo" />
            </div>
          </div>
        </div>
      </div>
      {/* lower container */}
      <div className={styles.lowerContainer}>
        {isDesktop ? (
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
                    <li>HOME</li>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>About us</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_business`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>For business</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_freelancers`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>For freelancers</li>
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>Contact us</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className={styles.betweenLine}></div>
            <div className={styles.lowerContainerContact}>
              <div className={styles.download}>
                <p>
                  <span>
                    <Image src={message} alt="yllaaaLogo" />
                  </span>{" "}
                  Download the app
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
                    <li>Home</li>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>About us</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_business`}
                    className={`${styles.lightLink} ${styles.link}`}
                  >
                    <li>For business</li>
                  </Link>
                  <Link
                    href={`/${locale}/for_freelancers`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>For freelancers</li>
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className={`${styles.darkLink} ${styles.link}`}
                  >
                    <li>Contact us</li>
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

//   const words = ["Hello", "World", "React", "Next.js"];
//   const words2 = ["Hello", "World", "React", "Next.js"];

//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         setIsAnimating(false);
//       }, 500); // Animation duration (matches CSS)
//     }, 1500); // Change every 2 seconds

//     const interval2 = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words2.length);
//         setIsAnimating(false);
//       }, 500); // Animation duration (matches CSS)
//     }, 10000); // Change every 2 seconds
//     //   return () => clearInterval(interval2);
//     return () => {
//       clearInterval(interval);
//       clearInterval(interval2);
//     };
//   }, [words.length, words2.length]);

//   return (
//     <div className={styles.container}>
//       <div
//         className={`${styles.word_container} ${
//           isAnimating ? `${styles.animate}` : ""
//         }`}
//       >
//         {words[currentWordIndex]}
//         {words2[currentWordIndex]}

//       </div>
//     </div>
//   );
// }
