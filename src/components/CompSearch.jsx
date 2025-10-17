import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CompSearch=()=>{
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };
    return(
        <>
            <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full sm:w-[60%] md:w-[40%] lg:w-[30%] border border-gray-300">
                    <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="flex-1 px-4 py-2 text-lg text-gray-800 focus:outline-none"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                    <button
                    className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-6 py-2 font-semibold"
                    onClick={handleSearch}
                    >
                    Search
                    </button>
                </div>
        </>
    )
}
export default CompSearch