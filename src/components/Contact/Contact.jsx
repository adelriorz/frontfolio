import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <div className={`${styles.text} ${styles.resumeMargin}`}>
          <a href="https://docs.google.com/document/d/1Xh_IGIIjUEPShePeIBNhkILgvKAEwQ0l/edit?usp=sharing&ouid=104983925405471367063&rtpof=true&sd=true" className={styles.resume}>Download my resume</a>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:adelriormz@gmail.com">adelriormz@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/adelriorz">linkedin.com/in/adelriorz</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/adelriorz">github.com/adelriorz</a>
        </li>
      </ul>
    </footer>
  );
};
