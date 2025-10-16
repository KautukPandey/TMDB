import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.png";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import SearchHero from "../components/SearchHero"
const Home = () => {
  return (
    <>
      <Navbar />
      <SearchHero/>
      <div className="mt-12">
        <Trending type="movie" />
      </div>
      <div className="mt-8">
        <Popular />
      </div>
    </>
  );
};

export default Home;
