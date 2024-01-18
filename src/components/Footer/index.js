import React from "react";

import styles from "./footer.module.css";
import { facebook, twitter, youtube, github, instagram } from "../../assets";

const Footer = () => {
  return (
    <section className={styles["footer--container"]}>
      <div className={styles.footer}>
        <span>
          &copy; 2024 <strong>lagtour, Inc.</strong> All rights reserved
        </span>
        <aside className={styles.links}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={github} alt="github" />
          <img src={youtube} alt="youtube" />
        </aside>
      </div>
    </section>
  );
};

export default Footer;
