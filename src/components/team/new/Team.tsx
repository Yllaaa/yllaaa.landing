/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./team.module.css";

import mohamedAbdelkader from "../../../../public/team/new/mohamedAbdelkader.png";
import mohamedYasser from "../../../../public/team/new/mohamedYasser.png";
import Moustafa from "../../../../public/team/new/moustafaAdel.png";
import ziadSaleh from "../../../../public/team/new/ziadSaleh.png";
import youssefAhmed from "../../../../public/team/new/youssefAhmed.png";
import shaimaElfouly from "../../../../public/team/new/shaimaElfouly.png";
import yehiaAbdelhamed from "../../../../public/team/new/yehiaAbdelhamed.png";
import wiamOuafi from "../../../../public/team/new/wiamOuafi.png";
import MohAshraf from "../../../../public/team/new/mohamedAshraf.png";
import Vittorio from "../../../../public/team/new/vittorio.png";
import karma from "../../../../public/team/new/karma.png";
import ahmed from "../../../../public/team/new/ahmed.png";
import linkedInIcon from "../../../../public/icons/linkedInTeam.svg";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ButtonFlip from "@/components/aaabutton/ButtonFlip";
import { usePathname, useRouter } from "next/navigation";

function Team() {
  const t = useTranslations("team");
  const router = useRouter();
  const locale = useLocale();
  const members = [
    {
      name: t("mohamedAbdelkader1"),
      name2: t("mohamedAbdelkader2"),
      position: `🚀 ${t("positionMohamed")}`,
      breif: t("breifMohamed"),
      image: mohamedAbdelkader,
      linkedin: "https://www.linkedin.com/in/mohamed-abdelkader-353bb3159/",
    },
    {
      name: t("zeyadSaleh1"),
      name2: t("zeyadSaleh2"),
      position: `👔 ${t("positionZeyad")}`,
      breif: t("breifZeyad"),
      image: ziadSaleh,
      linkedin: "https://www.linkedin.com/in/zeyad-saleh-612ab7124/",
    },
    {
      name: t("vittorio1"),
      name2: t("vittorio2"),
      position: `📦 ${t("positionVittorio")}`,
      breif: t("breifVittorio"),
      image: Vittorio,
      linkedin: "#",
    },
    {
      name: t("wiamMouafi1"),
      name2: t("wiamMouafi2"),
      position: `💡 ${t("positionWiam")}`,
      breif: t("breifWiam"),
      image: wiamOuafi,
      linkedin: "https://www.linkedin.com/in/mohamed-abdelkader-353bb3159/",
    },
    {
      name: t("mohamedAshraf1"),
      name2: t("mohamedAshraf2"),
      position: `📝 ${t("positionMohamedAshraf")}`,
      breif: t("breifMohamedAshraf"),
      image: MohAshraf,
      linkedin: "https://www.linkedin.com/in/mohamedashrafmarc/",
    },
    {
      name: t("shaymaElFouly1"),
      name2: t("shaymaElFouly2"),
      position: `🎨 ${t("positionShayma")}`,
      breif: t("breifShayma"),
      image: shaimaElfouly,
      linkedin: "https://www.linkedin.com/in/shaimaa-elfoly-94a822192/",
    },
    {
      name: t("yehia1"),
      name2: t("yehia2"),
      position: `🎨 ${t("positionYehia")}`,
      breif: t("breifYehia"),
      image: yehiaAbdelhamed,
      linkedin: "https://www.linkedin.com/in/yehia-abdelhamed-2768a528a/",
    },
    {
      name: t("mohamedYasser1"),
      name2: t("mohamedYasser2"),
      position: `💻 ${t("positionMohamedYasser")}`,
      breif: t("breifMohamedYasser"),
      image: mohamedYasser,
      linkedin: "https://www.linkedin.com/in/mohamedyasser14",
    },
    {
      name: t("youssef1"),
      name2: t("youssef2"),
      position: `💻 ${t("positionYoussef")}`,
      breif: t("breifYoussef"),
      image: youssefAhmed,
      linkedin: "www.linkedin.com/in/youssef-ahmed-aa483b206",
    },
    {
      name: t("Moustafa1"),
      name2: t("Moustafa2"),

      position: `💻 ${t("positionMoustafa")}`,
      breif: t("breifMoustafa"),
      image: Moustafa,
      linkedin: "https://www.linkedin.com/in/moustafa-adel-714616299/",
    },
    {
      name: t("karma1"),
      name2: t("karma2"),

      position: `💻 ${t("positionKarma")}`,
      breif: t("breifKarma"),
      image: karma,
      linkedin: "https://www.linkedin.com/in/karma-ahmed/",
    },
    {
      name: t("ahmed1"),
      name2: t("ahmed2"),

      position: `💻 ${t("positionAhmed")}`,
      breif: t("breifAhmed"),
      image: ahmed,
      linkedin: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,

    breakpoints: {
      "(min-width: 430px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 21,
        },
      },
      "(min-width: 1025px)": {
        slides: {
          perView: 3.07,
          spacing: 25,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  // Function to start auto-slide
  const startAutoSlide = () => {
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 2500);
  };

  const stopAutoSlide = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  React.useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  const pathname = usePathname();

  return (
    <>
      <div className={styles.teamContainer}>
        <div className={styles.teamHeaderContent}>
          <div className={styles.teamHeaderContentLine}>
            <h2>{t("sectionTitle")}</h2>
            <p>{t("description")}</p>
          </div>
          {pathname.includes("about") || (
            <div
              onClick={() => router.push(`/${locale}/about`)}
              className={styles.teamHeaderContentBtn}
            >
              <ButtonFlip lable={t("buttonText")} />
            </div>
          )}
        </div>
        <div className={`${styles.navigation_wrapper}`}>
          <div
            onMouseEnter={stopAutoSlide} // Stop auto-slide on hover
            onMouseLeave={startAutoSlide} // Resume auto-slide when mouse leaves
            ref={sliderRef}
            className={`${styles.keenSlider} keen-slider`}
          >
            {members.map((member, index) => (
              <div
                key={index}
                className={`keen-slider__slide ${styles.numberSlide}`}
              >
                <div>
                  {/* image */}
                  <div className={styles.image}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt="image"
                        width={1000}
                        height={1000}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* top content */}
                  <div className={styles.topContent}>
                    <div className={styles.position}>
                      <p>{member.position}</p>
                    </div>
                    <div className={styles.linkedin}>
                      <Link href={member.linkedin}>
                        <Image src={linkedInIcon} alt="linkedin" />
                      </Link>
                    </div>
                  </div>
                  {/* bottom content */}
                  <div className={styles.bottomContent}>
                    <h3>{member.name}</h3>
                    <h3>{member.name2}</h3>
                    <p>{member.breif}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className={styles.dots}>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`
                    ${styles.dot} ${currentSlide === idx ? styles.active : ""}
                    `}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default Team;
