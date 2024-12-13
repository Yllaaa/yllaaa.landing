/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./contactUs.module.css";

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

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>
              Have questions or need assistance?{" "}
              <span>
                We’re here to help. Reach out through any of the channels below,
                and our team will respond as soon as possible.
              </span>
            </p>
            <p>Let’s Connect</p>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              type="text"
              {...register("Name", { required: true })}
            />
            {errors.Name && <span className={styles.error}>Name is required</span>}

            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.Email && (
              <span className={styles.error}>Faild</span>
            )}

            <label htmlFor="message">Message*</label>
            <textarea
              rows={5}
              id="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className={styles.error}>Message is required</span>
            )}
          </div>
        </div>
        <button type="submit">Let’s talk!</button>
      </form>
    </>
  );
}

export default ContactUs;
