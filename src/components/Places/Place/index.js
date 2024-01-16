import React from "react";

import styles from "./place.module.css";
import globalStyle from "../../../app.module.css";

const Place = ({ first, digit, place }) => {
  return (
    <div
      className={`${styles["place--container"]} ${
        first === "true" ? styles["first-dest"] : ""
      }`}
    >
      <span className={styles["place-digit"]}>0{digit}</span>
      <h2 className={globalStyle["large--heading"]}>{place}</h2>
    </div>
  );
};

export default Place;
