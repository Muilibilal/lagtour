import React from "react";
import { NavBar, Hero } from "../../components";
import { destinationImg } from "../../assets";
import styles from "./destinations.module.css";
import Destination from "../Destination";

const Destinations = () => {
  return (
    <div>
      <NavBar />
      <Hero
        image={false}
        heading="Destinations"
        subhead="Work and travel the world with a community of like-minded people."
      />

      <div className={styles["destination--wrapper"]}>
        <Destination
          image={destinationImg}
          heading="Ojo, Lagos"
          subhead="A city with wildlife"
        />
        <Destination
          image={destinationImg}
          heading="Ojo, Lagos"
          subhead="A city with wildlife"
        />
        <Destination
          image={destinationImg}
          heading="Ojo, Lagos"
          subhead="A city with wildlife"
        />
        <Destination
          image={destinationImg}
          heading="Ojo, Lagos"
          subhead="A city with wildlife"
        />
        <Destination
          image={destinationImg}
          heading="Ojo, Lagos"
          subhead="A city with wildlife"
        />
      </div>
    </div>
  );
};

export default Destinations;
