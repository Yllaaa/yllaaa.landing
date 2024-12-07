"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./team.module.css";
import ButtonFlip from "../aaabutton/ButtonFlip";
import TeamCard from "../aaacards/cardNoImg/TeamCard/TeamCard";
import johnSmith from "../../../public/team/johnSmith.svg";
import janDoe from "../../../public/team/janDoe.svg";
import brianWilliams from "../../../public/team/brianWilliams.svg";
import micheal from "../../../public/team/michaelBrown.svg";
import sarahKim from "../../../public/team/sarahKim.svg";
import emily from "../../../public/team/emely.svg";
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
      name: "John Smith",
      position: "CEO and Founder",
      breif:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: johnSmith,
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      breif:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: janDoe,
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      breif:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: micheal,
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      breif:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: emily,
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      breif:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: brianWilliams,
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      breif: `2+ years of experience in writing and editing ${(
        <br />
      )} Skilled in creating compelling, SEO-optimized content for various industries`,
      image: sarahKim,
    },
  ];
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
              <h2>Team</h2>
              <p>
                Meet the skilled and experienced team behind our successful
                digital marketing strategies
              </p>
            </div>
            <div className={styles.teamHeaderContentBtn}>
              <ButtonFlip lable="Our Team" />
            </div>
          </div>
          <div className={styles.teamCards}>
            {team.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                breif={item.breif}
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
