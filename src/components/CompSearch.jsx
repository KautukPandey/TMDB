const CompSearch=()=>{

    return(
        <>
            <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full sm:w-[60%] md:w-[40%] lg:w-[30%] border border-gray-300">
                    <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="flex-1 px-4 py-2 text-lg text-gray-800 focus:outline-none"
                    />
                    <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-6 py-2 font-semibold">
                    Search
                    </button>
                </div>
        </>
    )
}
export default CompSearch