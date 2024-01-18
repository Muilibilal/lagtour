import React from "react";

import Place from "./Place";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import styles from "./places.module.css";
import globalStyle from "../../app.module.css";
import { Link } from "react-router-dom";

const Places = () => {
  return (
    <>
      <div className={styles["places"]}>
        <span>destinations</span>
        <h3 className={globalStyle["heading"]}>
          Our most popular destinations
        </h3>
        <Link to="/destination">
          <ArrowRightIcon
            className={`h-6 w-6 text-gray-500 ${styles["destinations-link"]}`}
          />
          <p>View all destinations</p>
        </Link>
      </div>
      <Place first={"true"} digit={1} place="Ojo, Lagos" />
      <Place digit={2} place="Oyo, Ibadan" />
      <Place digit={3} place="Lasu, Ojo" />
    </>
  );
};

export default Places;
