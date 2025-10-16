import axios from "axios"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Genres=({type})=>{
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetch=async()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list`,
                    {
                        params: { api_key: import.meta.env.VITE_API_KEY, language: "en-US" }
                    }
                )
                setGenres(res.data.genres)
        }
        fetch()
    }, [type]);

    return (
        <>
        <select
            onChange={(e) => navigate(`/${type}/genre/${e.target.value}`)}
            className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 text-base cursor-pointer shadow-md hover:border-cyan-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
        >
            <option value="">🎬 Select Genre</option>
            {genres.map((g) => (
                <option key={g.id} value={g.id} className="bg-gray-800 text-white">
                {g.name}
                </option>
            ))}
        </select>
        </>
    )

}
export default Genres;