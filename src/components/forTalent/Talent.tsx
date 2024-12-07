"use client";
import React from "react";
import styles from "./talent.module.css";
import talent from "../../../public/forTalent/talent.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

function Talent() {
  const route = useRouter();
  const locale = useLocale();
  return (
    <>
      <div className={styles.talentContainer}>
        <div className={styles.talentImage}>
          <Image src={talent} alt="Talent" />
        </div>
        <div className={styles.talentContent}>
          <div className={styles.talentContentTop}>
            <h6>For Talent</h6>
            <h2>Find a great worker</h2>
            <p>
              Meet clients you’re excited to work with and take your career or
              to new heights.
            </p>
          </div>
          <div className={styles.talentContentBottom}>
            <div className={styles.talentContentBottomText}>
              <span>
                Find opportunities for every stage of your freelance career
              </span>
              <span>Control when, where, and how you work</span>
              <span>Explore different ways to earn</span>
            </div>
            <div
              onClick={() => {
                route.push(`${locale}/contact`);
              }}
              className={styles.talentContentBottomBtn}
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Talent;
