import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./map.module.css";

const Map = ({ position: defaultPosition }) => {
  const [position, setPosition] = useState([6.4342024, 3.4802805]);
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
        zoom={15}
        scrollWheelZoom={false}
        className={styles["map-container"]}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Popup>Nike Art Gallery</Popup> */}
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
