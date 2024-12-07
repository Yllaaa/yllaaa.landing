import React from "react";
import styles from "./teamCard.module.css";
import Image from "next/image";
import linkedInIcon from "../../../../../public/icons/linkedInTeam.svg";

type Props = {
  name: string;
  position: string;
  breif?:string;
  image: string;
};
function TeamCard(props: Props) {
  const { name, position, breif, image } = props;
  return (
    <>
      <div className={styles.teamCardContainer}>
        <div className={styles.teamCardIcon}>
          <Image src={linkedInIcon} alt="linkedInIcon" />
        </div>
        <div className={styles.teamCardHeader}>
          <div className={styles.teamCardHeaderImage}>
            <Image src={image} alt="johnDoe" />
          </div>
          <div className={styles.teamCardHeaderText}>
            <h4 className={styles.teamCardName}>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
        <div className={styles.teamCardBody}>
          <p>
            {breif}
          </p>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
