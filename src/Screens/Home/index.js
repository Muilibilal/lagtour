import React from "react";
import { NavBar, Hero, Places } from "../../components";
import { beachImg } from "../../assets";

const Home = () => {
  return (
    <div>
      <NavBar />
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
