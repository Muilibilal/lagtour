import React from "react";
import { Hero, Places } from "../../components";
import { lagosImg } from "../../assets";

const Home = () => {
  return (
    <div>
      <Hero
        image={lagosImg}
        heading="Explore lagos anywhere"
        subhead="Lagos, Nigeria’s largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon. Victoria Island, the financial center of the metropolis, is known for its beach resorts, boutiques and nightlife. To the north, Lagos Island is home to the National Museum Lagos, displaying cultural artifacts and craftworks. Nearby is Freedom Park, once a colonial-era prison and now a major venue for concerts and public events."
      />
      <Places />
    </div>
  );
};

export default Home;
