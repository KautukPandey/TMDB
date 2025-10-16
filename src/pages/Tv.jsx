import CompSearch from "../components/CompSearch"
import Genres from "../components/Genres"
import Navbar from "../components/Navbar"
import Popular from "../components/Popular"
import Toprated from "../components/Toprated"
import Trending from "../components/Trending"
import Up from "../components/Up"
const Tv =() =>{
    return(
        <>
            <Navbar/>
            <div className="flex flex-wrap items-center justify-center gap-4 mx-6 my-6">
                <CompSearch/>
                <Genres type="movie" />
            </div>
            <Up type="tv"/>
            <Trending type="tv"/>
            <Popular type="tv"/>
            <Toprated type="tv"/>
        </>
        
    )
}
export default Tv