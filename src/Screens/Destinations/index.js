import { useEffect, useState } from "react";
import { Hero } from "../../components";
import styles from "./destinations.module.css";
import DestinationCard from "../../components/DestinationCard";

const Destinations = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://seyiadet.pythonanywhere.com/api/all-locations/")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className={styles.load}>
        <span className={styles.loader}></span>
      </div>
    );
  }

  return (
    <div>
      <Hero
        image={false}
        heading="Destinations"
        subhead="While your travel bucket list may be long and ever-growing, here are some of the destinations that deserves a prominent spot on in Lagos"
      />

      <div className={styles["destination--wrapper"]}>
        {locations.map((item) => (
          <DestinationCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
