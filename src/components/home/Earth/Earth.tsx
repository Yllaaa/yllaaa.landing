"use client";
import React, { useEffect } from "react";
import earthPic from "../../../../public/earth/earthPic.png";
import stars from "../../../../public/earth/stars.jpeg";
import Image from "next/image";
import styles from "./earth.module.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import arrow from "../../../../public/icons/arrowBtnPurple.svg";
import "aos/dist/aos.css";
import { AOSInit } from "@/Utils/aos/aos";
import { usePathname } from "next/navigation";
function Earth() {
  const pathname = usePathname();
  console.log(pathname.includes("for_freelancers"));

  // const [scroll, setScroll] = React.useState(0);
  const t = useTranslations("earth");
  const locale = useLocale();
  useEffect(() => {
    AOSInit(2000);
  }, []);
  const earth = React.useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (window.scrollY > 6225 && window.scrollY < 7525) {
  //     window.addEventListener("scroll", () => {
  //       const scrollY = window.scrollY;
  //       setScroll(scrollY);
  //     });
  //   }
  // }, []);
  // console.log(scroll);

  return (
    <>
      <div ref={earth} className={styles.earthSection}>
        {/* stars */}
        <div className={styles.stars}>
          <Image src={stars} alt="stars" width={1000} height={1000} />
          <Image src={stars} alt="stars" width={1000} height={1000} />
          <Image src={stars} alt="stars" width={1000} height={1000} />
        </div>

        <div data-aos="fade-down-right" className={styles.content}>
          <h5
          // style={
          //   scroll >= 6525
          //     ? { transform: `translateY(${(scroll - 6525) * 0.3}px)` }
          //     : {}
          // }
          >
            {t("title")}
          </h5>
          <h3
          // style={
          //   scroll >= 6525
          //     ? { transform: `translateY(${(scroll - 6525) * 0.3}px)` }
          //     : {}
          // }
          >
            {t("header")}
            <span> {t("header2")}</span>
          </h3>
          <p
          // style={
          //   scroll >= 6525
          //     ? { transform: `translateY(${(scroll - 6525) * 0.3}px)` }
          //     : {}
          // }
          >
            {t("description")}
          </p>
          {pathname.includes("for_freelancers") ||
            pathname.includes("for_business") ||
            (pathname.includes("for_managers") || (
              <Link
                // style={
                //   scroll >= 6525
                //     ? { transform: `translateY(${(scroll - 6525) * 0.3}px)` }
                //     : {}
                // }
                href={`${locale}/about`}
                className={styles.button}
              >
                <span className={styles.buttonText}>{t("buttonText")}</span>
                <span>
                  <Image src={arrow} alt="arrow" />
                </span>
              </Link>
            ))}
        </div>
        {/* earth */}
        <div
          data-aos={"fade-down-left"}
          className={styles.earthContainerSection}
        >
          <div
            // style={
            //   scroll >= 6525
            //     ? { transform: `translateY(${(scroll - 6525) * 0.3}px)` }
            //     : {}
            // }
            className={styles.earthContainer}
          >
            <Image src={earthPic} alt="Earth" width={1000} height={1000} />
            <Image src={earthPic} alt="Earth" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Earth;
