import React, { useEffect, useState } from "react";
import { Hero } from "../../components";

import { destinationImg } from "../../assets";
import styles from "./destinations.module.css";
import DestinationCard from "../../components/DestinationCard";

const Destinations = () => {
  const [data, setData] = useState([]);

  const fetchDestination = async () => {
    try {
      const response = await fetch("/data.json", {
        headers: {
          accept: "application/json",
          "User-agent": "learning app",
        },
      });
      if (!response.ok) throw new Error(response.text);

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDestination();
  }, []);

  return (
    <div>
      <Hero
        image={false}
        heading="Destinations"
        subhead="Work and travel the world with a community of like-minded people."
      />

      <div className={styles["destination--wrapper"]}>
        {data.map((item) => (
          <DestinationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
