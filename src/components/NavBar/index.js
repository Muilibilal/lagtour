<<<<<<< HEAD
import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import styles from "./nav.module.css";
import Search from "../Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles["nav--container"]}>
      <nav className={styles.nav}>
        <Link to="/">
          <h3 className={`${styles["nav-icon"]}`}>lagtour.</h3>
        </Link>
        <Search />
        <Bars3BottomLeftIcon
=======
import React from 'react';
// import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import styles from './nav.module.css';
import Search from '../Search';

const NavBar = () => {
	return (
		<div className={styles['nav--container']}>
			<nav className={styles.nav}>
				<h3 className={`${styles['nav-icon']}`}>lagtour.</h3>
				<Search />
				{/* <Bars3BottomLeftIcon
>>>>>>> 946a4cf9268056181914a4613a5d9441c5847a2a
          className={`h-6 w-6 text-gray-500 ${styles.bars}`}
        /> */}
			</nav>
		</div>
	);
};

export default NavBar;
