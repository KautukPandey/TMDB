import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white hover:scale-105 transition-transform cursor-pointer">
          TMDB
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 border-b-2 border-cyan-500 transition-all"
                  : "hover:text-cyan-500 transition-all"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 border-b-2 border-cyan-500 transition-all"
                  : "hover:text-cyan-500 transition-all"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 border-b-2 border-cyan-500 transition-all"
                  : "hover:text-cyan-500 transition-all"
              }
            >
              TV Shows
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu icon (optional) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
