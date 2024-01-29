import React from "react";

import styles from "./place.module.css";

const Place = ({ digit, place }) => {
  return (
    <div
      className={`${styles["place--container"]} ${
        digit === 1 ? styles["first-dest"] : ""
      }`}
    >
      <span className={styles["place-digit"]}>0{digit}</span>
      <h2
        className="app-large--heading"
        style={{ fontSize: "52px", padding: "1rem 0" }}
      >
        {place}
      </h2>
    </div>
  );
};

export default Place;
