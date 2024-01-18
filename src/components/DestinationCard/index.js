import React from "react";

import styles from "./destination.module.css";
import generalStyle from "../../app.module.css";
import { Link } from "react-router-dom";

const Destination = ({ item: { id, location_image, name, subhead } }) => {
  return (
    <Link to={`/destination/${id}`} className={styles["dest--card"]}>
      <div className={styles.card}>
        {<img src={location_image} alt="people" />}

        <span className={styles["card--text"]}>
          <h1 className={generalStyle["small--heading"]}>{name}</h1>
          <p>{subhead}</p>
        </span>
      </div>
    </Link>
  );
};

export default Destination;
