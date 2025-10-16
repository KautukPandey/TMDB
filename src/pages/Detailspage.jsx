import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const DetailsPage = ({ type }) => {
    const [data,setData] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetch=async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`,{
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                    region: "IN",
                },
            })
            setData(res.data);
        }
        fetch()
    },[id,type])
    console.log(data)



    console.log(type, id);
    
    return (
        <>
        {data && (
            <div className="relative">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}
                ></div>
                <div className="relative flex flex-col lg:flex-row gap-6 p-6 text-white z-10">
                    <div className="flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title || data.name}
                        className="rounded-lg shadow-lg"
                    />
                    </div>
                    <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{data.title || data.name}</h1>
                    <p className="text-gray-300 mb-2">{data.tagline}</p>
                    <p className="mb-4">{data.overview}</p>
                    <p className="mb-2"><span className="font-semibold">Release:</span> {data.release_date || data.first_air_date}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {data.vote_average}</p>
                    <p className="mb-2"><span className="font-semibold">Genres:</span> {data.genres?.map(g => g.name).join(", ")}</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-500 transition">Watch Trailer</button>
                        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition">Add to Favorites</button>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-max"
                            >
                            ← Back
                        </button>
                    </div>
                    </div>

                </div>
            </div>


            )}
        </>
    )
};
export default DetailsPage;