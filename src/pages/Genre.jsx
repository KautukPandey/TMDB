import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const Genre=({type})=>{
    const [data,setData]=useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const {genreId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetch=async()=>{
            setLoading(true);
            const res = await axios.get(`https://api.themoviedb.org/3/discover/${type}`,
                {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                        with_genres: genreId,
                        language: "en-US",
                        region: "IN",
                        page,
                    },

                }
            )
            setData(prev=> [...prev,...res.data.results])
            setLoading(false);
        }
        fetch()
    },[page])

    return(
        <>
            <Navbar/>
          
            <div className="p-6 m-15">
            
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {data.map(movie => (
                    <div key={movie.id} className="relative group cursor-pointer" onClick={()=> navigate(`/${type}/${movie.id}`)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                                alt={movie.title || movie.name}
                                className="rounded-lg object-cover h-[300px] w-full group-hover:opacity-80 transition"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 text-xs text-white text-center opacity-0 group-hover:opacity-100 transition">
                            {movie.title || movie.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                    onClick={() => setPage(prev => prev + 1)}
                    className="bg-cyan-600 px-4 py-2 rounded text-white font-semibold"
                    disabled={loading}
                    >
                    {loading ? "Loading..." : "Load More"}
                    </button>
                    <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-700 text-white px-4 py-2 mx-2 rounded hover:bg-gray-600 transition w-max"
                    >
                                ← Back
                    </button>
                </div>
            </div>
        </>
    )
}
export default Genre