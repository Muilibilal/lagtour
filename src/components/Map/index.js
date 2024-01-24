import React, { useEffect, useRef, useState } from "react";
import Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./map.module.css";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/";

const Map = ({ position: defaultPosition, popupText }) => {
  console.log(defaultPosition);
  const [position, setPosition] = useState([6.4342024, 3.4802805]);
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (defaultPosition === "") return;
    setPosition(defaultPosition);

    if (mapRef.current) {
      mapRef.current.flyTo(defaultPosition);
    }
  }, [defaultPosition, map]);

  return (
    <div className={styles.map}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className={styles["map-container"]}
        whenCreated={(map) => setMap(map)}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
