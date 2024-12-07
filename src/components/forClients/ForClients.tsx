"use client";
import React from "react";
import styles from "./forClients.module.css";
import Image from "next/image";
import arrowWhite from "../../../public/icons/arrowFreeWhite.svg";
import arrowPurple from "../../../public/icons/arrowFreePurple.svg";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

function ForClients() {
  const route = useRouter();
  const locale = useLocale();
  return (
    <>
      <div className={styles.forClients}>
        <div className={styles.forClientsContent}>
          <div className={styles.forClientsContentTitle}>
            <h4>For Clients</h4>
          </div>
          <div className={styles.forClientsContentBody}>
            <h2>Empower Your Projects with Yllaaa</h2>
            <p>
              Connect with top talent effortlessly and take your projects to new
              heights. Yalla makes it easy to find, hire, and collaborate with
              skilled professionals tailored to your needs.
            </p>
          </div>
        </div>
        <div className={styles.forClientsBtns}>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnDark}`}
          >
            <h5>Connect with experts</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              Start Hiring{" "}
              <span>
                <Image src={arrowWhite} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnDark}`}
          >
            <h5>Hire Top Talent</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              Start Hiring{" "}
              <span>
                <Image src={arrowWhite} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
          <div
            className={`${styles.forClientsBtn} ${styles.forClientsBtnLight}`}
          >
            <h5>Get Project Support</h5>
            <p onClick={() => route.push(`${locale}/contact`)}>
              Start Hiring{" "}
              <span>
                <Image src={arrowPurple} alt="arrowRight" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForClients;
