import React from "react";
// import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import styles from "./nav.module.css";
import Search from "../Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles["nav--container"]}>
      <nav className={styles.nav}>
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
          <h3 className={`${styles["nav-icon"]}`}>lagtour.</h3>
        </Link>
        <Search />
        {/* <Bars3BottomLeftIcon
          className={`h-6 w-6 text-gray-500 ${styles.bars}`}
        /> */}
      </nav>
    </div>
  );
};

export default NavBar;
