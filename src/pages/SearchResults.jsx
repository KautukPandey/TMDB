import axios from "axios"
import { useEffect, useState } from "react"

const Searchresults=({query})=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetch=async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1`,
                {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                        language: "en-US",
                        query,
                        region: "IN",
                    },
                }
            )
            setData(res.data.results);
        }
        fetch()
    },[query])

}
export default Searchresults