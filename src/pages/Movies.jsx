import Navbar from "../components/Navbar"
import Popular from "../components/Popular"
import Toprated from "../components/Toprated"
import Trending from "../components/Trending"
import Up from "../components/Up"
const Movies =() =>{
    return(
        <>
            <Navbar/>
            <div className="flex gap-2 mx-4 my-3">
                <input type="text" className="bg-white rounded-3xl text-xl text-black  w-[20vw] border-2  p-2" 
                placeholder="   Search for a movie  "/>
                <button className="bg-cyan-600 rounded-3xl py-2 px-4">Search </button>
            </div>
            <Up/>
            <Trending type="movie"/>
            <Popular type="movie"/>
            <Toprated type="movie"/>
        </>
        
    )
}
export default Movies