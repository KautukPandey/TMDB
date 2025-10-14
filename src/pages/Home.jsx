import React, { use } from "react";
import Navbar from "../components/Navbar";
import { useState , useEffect } from "react";
import axios from "axios";
import bg from "../assets/bg.png"
import Trending from "../components/Trending";
import Popular from "../components/Popular";
const Home = () => {
  // const [bgimage,setbgimg] = useState("");

  
  // useEffect ( () => {
  //   const giveImg = async() =>{
  //     const bgimgAPI = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  //     console.log(bgimgAPI);
  //   }

  // },[]);

  return (
    <>
      <Navbar></Navbar>
      {/* First Container */}
      <div>
        <div className="relative h-[50vh]">
          <div
            className="absolute inset-0 bg-black/50 z-10"
          ></div>

          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          ></div>
          <div className="relative z-20 text-white p-4 flex justify-center items-center h-[50vh]">
            <div >
              <h1 className="text-6xl font-black">Welcome.</h1>
              <h1 className="text-3xl font-black mb-14">Millions of movies, TV shows and people to discover. Explore now.</h1>
              <div className="flex gap-2 ">
                <input type="text" className="bg-white rounded-3xl text-xl text-black  w-[70vw] p-2"
                placeholder="   Search for a movie, tv show, person......" />
                <button className="bg-cyan-600 rounded-3xl py-2 px-4">Search </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trending/>
      <Popular/>
    </>
  );
};

export default Home;
