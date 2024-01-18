import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import styles from "./map.module.css";

const Map = ({ position: defaultPosition }) => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (defaultPosition === "") return;

    setPosition(defaultPosition);

    if (map) {
      map.flyTo(defaultPosition);
    }
  }, [defaultPosition, map]);

  return (
    <div className={styles.map}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={styles["map-container"]}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
