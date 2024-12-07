import React from "react";
import styles from "./aboutHero.module.css";
import Image from "next/image";
import heroImg1 from "../../../public/Hero/about/bg1.jpeg";
import heroImg2 from "../../../public/Hero/about/bg2.jpeg";

function AboutHero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg1}>
          <Image src={heroImg1} alt="heroImg1" />
        </div>
        <div className={styles.heroImg2}>
          <Image src={heroImg2} alt="heroImg1" />
        </div>
        <div className={styles.bgShade}></div>
        <div className={styles.heroContent}>
          <h4>Mission</h4>
          <h2>
            Empowering Connections Between <span>Clients</span> and{" "}
            <span>Freelancers</span>.
          </h2>
          <p>
            At Yllaaa, we connect freelancers and businesses, supported by
            project managers, to foster collaboration, flexibility, and growth.
            Our platform creates an ecosystem where talent and opportunity meet,
            empowering both to thrive.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
