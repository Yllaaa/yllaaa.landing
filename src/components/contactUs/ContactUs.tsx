/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./contactUs.module.css";
import { useTranslations } from "next-intl";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_jodg9zg", // Replace with your EmailJS Service ID
        "template_xvb35th", // Replace with your EmailJS Template ID
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        "lTzlwWWUa0erxJSnA" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };
  const t = useTranslations("contact");

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p className={styles.header}>{t("header")}</p>
            <p className={styles.subHeader}>{t("subHeader")}</p>
          </div>
          <div className={styles.inputs}>
            <div className={styles.name}>
              <div className={styles.feild}>
                <input
                  id="firstName"
                  type="text"
                  placeholder={t("firstName")}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className={styles.error}>{t("firstNameError")}</span>
                )}
              </div>
              <div className={styles.feild}>
                <input
                  id="lastName"
                  type="text"
                  placeholder={t("lastName")}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className={styles.error}>{t("lastNameError")}</span>
                )}
              </div>
            </div>
            {/* <label htmlFor="email">Email*</label> */}
            <input
              id="email"
              type="email"
              placeholder={t("email")}
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("invalidEmailError"),
                },
              })}
            />
            {errors.email && (
              <span className={styles.error}>{t("emailError")}</span>
            )}
            <input
              id="phone"
              type="tel"
              placeholder={t("phone")}
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className={styles.error}>{t("phoneError")}</span>
            )}

            <textarea
              rows={5}
              id="message"
              placeholder={t("message")}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className={styles.error}>{t("messageError")}</span>
            )}
          </div>
        </div>
        <button type="submit">{t("btn")}</button>
      </form>
    </>
  );
}

export default ContactUs;
