import React from "react";
import { Hero, Places } from "../../components";
import { beachImg } from "../../assets";

const Home = () => {
  return (
    <div>
      <Hero
        image={beachImg}
        heading="Explore lagos anywhere"
        subhead="Work remotely, explore various destinations, and make lasting memories
          with a community of digital nomads."
      />
      <Places />
    </div>
  );
};

export default Home;
