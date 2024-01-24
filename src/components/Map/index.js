import React, { useEffect } from "react";
import Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import styles from "./map.module.css";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/";

//
const Map = ({ position, popupText }) => {
  return (
    <div className={styles.map}>
      <MapContainer
        center={position ? position : [6, 6]}
        zoom={17}
        scrollWheelZoom={false}
        className={styles["map-container"]}
      >
        <MapChild position={position} popupText={popupText} />
      </MapContainer>
    </div>
  );
};

export default Map;

const MapChild = ({ position, popupText }) => {
  const map = useMap();

  useEffect(() => {
    if (!position) return;

    map?.flyTo(position);
  }, [position, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>{popupText}</Popup>
      </Marker>
    </>
  );
};
