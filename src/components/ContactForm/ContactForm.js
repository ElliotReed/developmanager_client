import React, { useState } from "react";

import LoadingSpinner from "../common/LoadingSpinner";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    setSubmitted(true);
    e.preventDefault();
    const response = await sendEmail("https://keithbkelly.com/email/contact", {
      name: name,
      email: email,
      message: message,
    });

    if (response.mail === "success") {
      setSuccess(true);
    }
  }

  async function sendEmail(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  return (
    <section className={styles.formWrapper}>
      <h1>Contact</h1>
      <hr></hr>
      {submitted && !success && (
        <>
          <div>Sending...</div>
          <LoadingSpinner />
        </>
      )}
      {submitted && success && <div>Your message has been sent!</div>}
      {!submitted && !success && (
        <>
          <p>Send me a message!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <span>Name</span>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="message">
              <span>Message</span>
              <textarea
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <input type="submit" value="Send Message" />
          </form>
        </>
      )}
    </section>
  );
};

export default ContactForm;
