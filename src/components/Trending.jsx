import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useState,useEffect } from "react";
const Trending = () =>{
    const [trendAll, settrendALL] = useState([]);

    const fetchD = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/trending/all/week?language=en-US", {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
                language: "en-US",
                region: "IN",
            },
            headers: {
                accept: "application/json",
            },
        });
        settrendALL(response.data.results);
    };
    useEffect(()=>{
        fetchD();
    },[])

    return(
        <>
            <div className="w-full px-4 py-7 ">
                <h1 className="text-xl font-bold text-black mb-3">Trending</h1>
            {trendAll.length>0 && 
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
                {trendAll.map((item)=>(
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
export default Trending;