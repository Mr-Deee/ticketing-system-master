import React from "react";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/cards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
};

export default Home;
