const Navbar = () =>{
    return(
        <>
            <div className="w-[100vw] bg-gray-800 flex justify-around h-[7vh] border-b-2 border-b-white"> 
                <div className="text-3xl text-white font-bold mt-2">TMDB</div>

                <div className="flex mt-3">
                    <ul className="flex gap-3 text-xl text-white font-semibold font-serif">
                        <li>Home</li>
                        <li>Movies</li>
                        <li>TV Shows</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;