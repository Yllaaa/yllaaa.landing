/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./contactUs.module.css";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

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
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              {...register("Email", { required: true, max: -3 })}
            />
            <label htmlFor="message">Message*</label>
            <textarea
              rows={5}
              id="message"
              {...register("message", { required: true })}
            />
          </div>
        </div>
        <button type="submit">Let’s talk!</button>
      </form>
    </>
  );
}

export default ContactUs;
