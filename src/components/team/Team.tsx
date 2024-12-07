"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./team.module.css";
import ButtonFlip from "../aaabutton/ButtonFlip";
import TeamCard from "../aaacards/cardNoImg/TeamCard/TeamCard";
import mohamedAbdelkader from "../../../public/team/mohamedAbdelkader.svg";
import mohamedYasser from "../../../public/team/mohamedYasser.svg";
import Moustafa from "../../../public/team/moustafaAdel.svg";
import ziadSaleh from "../../../public/team/ziadSaleh.svg";
import youssefAhmed from "../../../public/team/youssefAhmed.svg";
import shaimaElfouly from "../../../public/team/shaimaElfouly.svg";
import yehiaAbdelhamed from "../../../public/team/yehiaAbdelhamed.svg";
import wiamOuafi from "../../../public/team/wiamOuafi.svg";
import { useTranslations } from "next-intl";
function Team() {
  // neon glow function
  const [neonWidth, setNeonWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      const componentHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight - rect.top - 150;

      if (scrollPosition >= 0 && scrollPosition <= componentHeight / 2) {
        // Map scroll progress to width (max width: 200px)
        const width = Math.min(
          (scrollPosition / (componentHeight / 2)) * 200,
          200
        );
        setNeonWidth(width);
      } else if (scrollPosition < 0) {
        setNeonWidth(0);
      } else if (scrollPosition > componentHeight / 2) {
        setNeonWidth(200);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // end neon glow function
  const team = [
    {
      name: "Mohamed Abdelkader",
      position: "CEO and CO-Founder",
      // breif:
      //   "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: mohamedAbdelkader,
    },
    {
      name: "Zeyad Saleh",
      position: "CTO and Co-Founder",
      // breif: `2+ years of experience in writing and editing ${(
      //   <br />
      // )} Skilled in creating compelling, SEO-optimized content for various industries`,
      image: ziadSaleh,
    },
    {
      name: "Wiam Ouafi",
      position: "Marketing Executive",
      // breif:
      //   "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: wiamOuafi,
    },
    {
      name: "Shaima Elfouly",
      position: "Designer",
      // breif:
      //   "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: shaimaElfouly,
    },
    {
      name: "Yehia Abdelhamed",
      position: "Designer",
      // breif: `2+ years of experience in writing and editing ${(
      //   <br />
      // )} Skilled in creating compelling, SEO-optimized content for various industries`,
      image: yehiaAbdelhamed,
    },
    {
      name: "Mohamed Yasser",
      position: "Back-End Developer",
      // breif:
      //   "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: mohamedYasser,
    },
    {
      name: "Youssef Ahmed",
      position: "Front-End Developer",
      // breif: `2+ years of experience in writing and editing ${(
      //   <br />
      // )} Skilled in creating compelling, SEO-optimized content for various industries`,
      image: youssefAhmed,
    },
    {
      name: "Mostafa Adel",
      position: "Front-End Developer",
      // breif:
      //   "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: Moustafa,
    },
    
    
    
    
    
  ];
  const t = useTranslations("team");
  return (
    <>
      {/* beoGlow ref */}
      <div ref={componentRef}>
        {/* start neon glow element */}
        <div
          className={styles.neonGlow}
          style={{
            width: `${neonWidth}px`,
            opacity: `${
              neonWidth > 0 ? `${neonWidth / 200}` : `${neonWidth / 200}`
            }`,
          }}
        ></div>
        {/* end neon glow element */}
        <div className={styles.teamContainer}>
          <div className={styles.teamHeaderContent}>
            <div className={styles.teamHeaderContentLine}>
              <h2>{t("sectionTitle")}</h2>
              <p>
                {t("description")}
              </p>
            </div>
            <div className={styles.teamHeaderContentBtn}>
              <ButtonFlip lable={t("buttonText")} />
            </div>
          </div>
          <div className={styles.teamCards}>
            {team.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                // breif={item.breif}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
