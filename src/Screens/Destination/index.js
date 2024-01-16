import React from "react";

import styles from "./destination.module.css";
import generalStyle from "../../app.module.css";

const Destination = ({ image, heading, subhead }) => {
  return (
    <section className={styles["dest--card"]}>
      <div className={styles.card}>
        {<img src={image} alt="people" />}

        <span className={styles["card--text"]}>
          <h1 className={generalStyle["small--heading"]}>{heading}</h1>
          <p>{subhead}</p>
        </span>
      </div>
    </section>
  );
};

export default Destination;
