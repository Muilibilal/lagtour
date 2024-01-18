import React, { useState } from "react";
import { Hero } from "../../components";
import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

import { nikeArt } from "../../assets";
import styles from "./placeinfo.module.css";
import generalStyle from "../../app.module.css";
import { useParams } from "react-router-dom";
import Map from "../../components/Map";

const PlaceInfo = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(false);
  const { id } = useParams();
  const data = {
    id: 1,
    name: "Nike Arts Gallery",
    coordinate_x: 6.4342024,
    coordinate_y: 3.4802805,
    location_image:
      "/media/images/3d-rendering-luxury-business-meeting-working-room-executive-office.jpg",
    is_popular: false,
    created_at: "2024-01-17T14:46:36.782723Z",
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (location) {
    return <h1>Couldn't find that location</h1>;
  }
  return (
    <div>
      <Hero
        image={nikeArt}
        heading="Nike Arts gallery"
        subhead="Founded in 2009 by Nike Okundaye"
      />
      <section className={styles.details}>
        <span className={styles["details--card"]}>
          <h3 className={generalStyle["small--heading"]}>Information</h3>
          <p>
            An art gallery in Lagos, Nigeria owned by Nike Davies-Okundaye. The
            gallery is one of the largest of its kind in West Africa, it boasts
            a collection of about 8,000 diverse artworks from various Nigerian
            artists like Chief Josephine Oboh Macleod
            <a
              href={"https://en.wikipedia.org/wiki/Nike_Art_Gallery"}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              read more from wikipedia
            </a>
          </p>
        </span>
        <div>
          <span className={styles["details--card"]}>
            <BuildingOfficeIcon
              className={`h-6 w-6 text-gray-500 ${styles.icon}`}
            />
            <p>Hours</p>
            <h3>10am - 5pm</h3>
          </span>
          <span className={styles["details--card"]}>
            <MapPinIcon className={`h-6 w-6 text-gray-500 ${styles.icon}`} />
            <p>Location</p>
            <h3>Lekki</h3>
          </span>
        </div>
      </section>
      {data?.coordinate_x && data?.coordinate_y ? (
        <Map position={[data.coordinate_x, data.coordinate_y]} />
      ) : null}
    </div>
  );
};

export default PlaceInfo;
