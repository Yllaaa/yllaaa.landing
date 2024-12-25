"use client";
import React from "react";
import styles from "./barriers.module.css";
import Image from "next/image";
import visa from "../../../public/barrier/visa.svg";
import mobile from "../../../public/barrier/mobile.png";

function Barriers() {
  return (
    <>
      <div className={styles.barriersContainer}>
        <div className={styles.barriersHeader}>
          <p>YLLAAA</p>
          <h2>No barriers to success.</h2>
          <h2> Just seamless collaboration.</h2>
        </div>
        <div className={styles.barriersBody}>
          <div className={styles.items1}>
            <div className={styles.item1}>
              <Image src={visa} alt="visa" />
              <h6>Secure Projects Instantly</h6>
              <p>
                Match with projects that align with your expertise and start
                collaborating in no time.
              </p>
            </div>
            <div className={styles.item1}>
              <Image src={visa} alt="visa" />
              <h6>Secure Projects Instantly</h6>
              <p>
                Match with projects that align with your expertise and start
                collaborating in no time.
              </p>
            </div>
          </div>

          <div className={styles.items2}>
            <div className={styles.item2}>
              <Image src={visa} alt="visa" />
              <h6>Secure Projects Instantly</h6>
              <p>
                Match with projects that align with your expertise and start
                collaborating in no time.
              </p>
            </div>
            <div className={styles.item2}>
              <Image src={visa} alt="visa" />
              <h6>Secure Projects Instantly</h6>
              <p>
                Match with projects that align with your expertise and start
                collaborating in no time.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.centerImage}>
          <Image src={mobile} alt="mobile" />
        </div>
      </div>
    </>
  );
}

export default Barriers;
