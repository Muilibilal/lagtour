import React, { useEffect, useState } from "react";
import { Hero } from "../../components";
import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

import styles from "./placeinfo.module.css";
import { useParams } from "react-router-dom";
import Map from "../../components/Map";
import "leaflet/dist/leaflet.css";

const PlaceInfo = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  const [location, setLocation] = useState();

  useEffect(() => {
    setLoading(true);

    fetch(`https://seyiadet.pythonanywhere.com/api/locations/${id}/`)
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div class={styles.load}>
        <span className={styles.loader}></span>
      </div>
    );
  } else if (isError) {
    return <h1>Couldn't find that location</h1>;
  }

  return (
    <div>
      <Hero
        image={`https://seyiadet.pythonanywhere.com/${location?.location_image}`}
        heading={location?.name}
        subhead={location?.subheading}
      />
      <section className={styles.details}>
        <span className={styles["details--card"]}>
          <h3 className="app-small--heading">Information</h3>
          <p>
            {location?.description}
            {location?.more_info_link ? (
              <a
                href={"https://en.wikipedia.org/wiki/Nike_Art_Gallery"}
                target="_blank"
                rel="noreferrer"
              >
                read more here
              </a>
            ) : null}
          </p>
        </span>
        <div>
          <span className={styles["details--card"]}>
            <BuildingOfficeIcon
              className={`h-6 w-6 text-gray-500 ${styles.icon}`}
            />
            <p>Hours</p>
            <h3>
              {location?.opening_time} - {location?.closing_time}
            </h3>
          </span>
          <span className={styles["details--card"]}>
            <MapPinIcon className={`h-6 w-6 text-gray-500 ${styles.icon}`} />
            <p>Location</p>
            <h3>{location?.location_area}</h3>
          </span>
        </div>
      </section>
      {location?.coordinate_x && location?.coordinate_y ? (
        <Map
          position={[
            parseFloat(location.coordinate_x),
            parseFloat(location.coordinate_y),
          ]}
        />
      ) : null}
    </div>
  );
};

export default PlaceInfo;
