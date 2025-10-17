import React from "react";
import bg from "../assets/bg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchHero=()=>{
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };
    return (
        <>
            <div className="relative h-[70vh] md:h-[60vh]">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
                        Welcome.
                    </h1>
                    <p className="text-lg md:text-2xl font-semibold mb-8 md:mb-12 max-w-4xl">
                        Millions of movies, TV shows, and people to discover. Explore now.
                    </p>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-[70%] justify-center">
                        <input
                            type="text"
                            className="flex-1 rounded-full p-3 text-white text-lg focus:outline-none"
                            placeholder="Search for a movie, TV show, or person..."
                            value={query}
                            onChange={(e)=>setQuery(e.target.value)}
                        />
                        <button 
                        className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white rounded-full py-3 px-6 text-lg font-semibold"
                        onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </  div>
            </div> 
        </>
    )
}
export default SearchHero;