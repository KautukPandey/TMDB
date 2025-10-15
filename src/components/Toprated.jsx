import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState,useEffect } from "react";
const Toprated=({ type = "movie" })=>{
    const [data,setData] = useState([]);
    const fetch=async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc`,{
            params: {
                api_key: import.meta.env.VITE_API_KEY,
                language: "en-US",
                region: "IN",
            },
            headers: {
                accept: "application/json",
            },
        })
        setData(res.data.results);
    }
    useEffect(() => {
        fetch();
    }, []);
    
    return(
        <>
            <div className="w-full px-4 py-7 ">
                <h1 className="text-xl font-bold text-black mb-3">Top Rated {type}</h1>
            {data.length>0 && 
            <Swiper 
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={9}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
                }}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>
                        <div className="relative group cursor-pointer">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
                                alt={item.title || item.name}
                                className="rounded-lg object-cover h-[250px] w-[200px] group-hover:opacity-80 transition"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 text-xs text-white text-center opacity-0 group-hover:opacity-100 transition">
                            {item.title || item.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            }
            </div>
        </>
    )
}
export default Toprated;