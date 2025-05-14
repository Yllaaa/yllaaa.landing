"use client"
import React from "react"
import styles from "./about.module.css"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { useInView } from "react-intersection-observer"
import { usePathname } from "next/navigation"

function About() {
  const locale = useLocale()
  const t = useTranslations("about")
  const pathname = usePathname()

  // start counter
  const { ref, inView } = useInView({
    threshold: 0.6,
  })

  const [counter6, setCounter6] = React.useState(0)
  const [counter14, setCounter14] = React.useState(0)
  const [counter20, setCounter20] = React.useState(0)

  React.useEffect(() => {
    if (!inView) {
      setCounter6(0)
    }
    if (counter6 < 1 && inView) {
      const timer = setInterval(() => {
        setCounter6(prevCount => prevCount + 1)
      }, 100)
      return () => clearInterval(timer)
    }
  }, [counter6, inView])

  React.useEffect(() => {
    if (!inView) {
      setCounter14(0)
    }
    if (counter14 < 14 && inView) {
      const timer = setInterval(() => {
        setCounter14(prevCount => prevCount + 1)
      }, 100)
      return () => clearInterval(timer)
    }
  }, [counter14, inView])

  React.useEffect(() => {
    if (!inView) {
      setCounter20(0)
    }
    if (counter20 < 29 && inView) {
      const timer = setInterval(() => {
        setCounter20(prevCount => prevCount + 1)
      }, 100)
      return () => clearInterval(timer)
    }
  }, [counter20, inView])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.numberbg}>
          <h2>01</h2>
        </div>
        <div className={styles.sectionTitle}>
          <h6>{t("title")}</h6>
        </div>
        <div className={styles.sectionHeader}>
          <h4>
            {t("header")} <span>{t("header2")}</span>
          </h4>
        </div>
        <div className={styles.sectionDescription}>
          <p>{t("description")}</p>
        </div>
        {pathname.includes("about") || (
          <div className={styles.sectionBtn}>
            <Link href={`/${locale}/about`}>
              <span>{t("buttonText")}</span>
              <div className={styles.arrow}></div>
            </Link>
          </div>
        )}
        <div ref={ref} className={styles.sectionCards}>
          <div className={`${styles.sectionCard} ${styles.card1}`}>
            <p className={counter6 === 1 ? styles.notNata : ""}>
              {inView ? `+${counter6}` : 0}
            </p>
            <h6>{t("lableCard1")}</h6>
          </div>
          <div className={`${styles.sectionCard} ${styles.card2}`}>
            <p className={counter14 === 14 ? styles.notNata : ""}>
              {inView ? `+${counter14}` : 0}
            </p>
            <h6>{t("lableCard2")}</h6>
          </div>
          <div className={`${styles.sectionCard} ${styles.card1}`}>
            <p className={counter20 === 20 ? styles.notNata : ""}>
              {inView ? `+${counter20}` : 0}
            </p>
            <h6>{t("lableCard3")}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
