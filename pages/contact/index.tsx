import React from "react";
import styles from "./Contact.module.css";
import { EnvelopeSimple, Coffee } from "phosphor-react";
const Contact = () => {
  return (
    <div className={styles.container}>
      <main className={styles.info}>
        <h1 className={styles.title}>Contact Me</h1>
        <EnvelopeSimple
          size={128}
          onClick={() => window?.open("mailto:cameronazimmerman@gmail.com")}
          className={styles.icon}
        />
        <p>
          I am interested in any feedback you have for me / my website, work
          inquiries, or friendly conversation.
        </p>
        <p>Click the mug to set up a coffee chat :)</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://calendly.com/cameronazimmerman/30min"
        >
          <Coffee size={64} className={styles.icon} />
        </a>
      </main>
    </div>
  );
};

export default Contact;
