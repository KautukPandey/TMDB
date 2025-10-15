import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return(
        <>
            <div className="w-[100vw] bg-gray-800 flex justify-around h-[7vh] border-b-2 border-b-white"> 
                <div className="text-3xl text-white font-bold mt-2">TMDB</div>
                <div className="flex mt-3">
                    <ul className="flex gap-3 text-xl text-white font-semibold font-serif">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-500 scale-105 transition" : "hover:text-cyan-500 transition"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className={({ isActive }) => isActive ? "text-cyan-500 scale-105 transition" : "hover:text-cyan-500 transition"}>
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv" className={({ isActive }) => isActive ? "text-cyan-500 scale-105 transition" : "hover:text-cyan-500 transition"}>
                                TV Shows
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbar;