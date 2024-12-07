import ContactUs from "@/components/contactUs/ContactUs";
import React from "react";
import styles from "./contact.module.css";

function ContactPage() {
  return (
    <>
      <section className={styles.section} style={{}}>
        <div className={styles.bgShade}></div>
        <div className={styles.contactUs}>
          <div className={styles.form}>
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
