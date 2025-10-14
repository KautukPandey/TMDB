import Navbar from "../components/Navbar"
import Popular from "../components/Popular"
import Trending from "../components/Trending"
const Movies =() =>{
    return(
        <>
            <Navbar/>
            <div className="flex gap-2 mx-4 my-3">
                <input type="text" className="bg-white rounded-3xl text-xl text-black  w-[20vw] border-2  p-2" 
                placeholder="   Search for a movie  "/>
                <button className="bg-cyan-600 rounded-3xl py-2 px-4">Search </button>
            </div>
            <Trending/>
            <Popular/>
        </>
        
    )
}
export default Movies