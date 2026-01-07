import React from "react";
import {
  FaBell,
  FaUserCircle,
  FaEnvelope,
  FaChartBar,
  FaCog,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-lg px-6 py-4 md:py-5 sticky top-0 z-40 transition-all duration-300">
      {/* Left: Search Box */}
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search vehicles, drivers, reports..."
            className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base shadow-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base md:text-lg" />
        </div>
      </div>

      {/* Right: Icons + User */}
      <div className="flex items-center gap-3 md:gap-5 ml-6">
        {/* Quick Report Icon */}
        <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl md:text-2xl">
          <FaChartBar />
        </button>

        {/* Messages */}
        <button className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl md:text-2xl">
          <FaEnvelope />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 animate-pulse shadow">
            5
          </span>
        </button>

        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl md:text-2xl">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 animate-pulse shadow">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm text-sm md:text-base">
            <FaUserCircle className="text-2xl md:text-3xl text-gray-600" />
            <span className="hidden md:block font-medium text-gray-700">John Doe</span>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg transition-colors duration-300"
            >
              <FaUserCircle className="text-gray-400" /> Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              <FaCog className="text-gray-400" /> Settings
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 rounded-b-lg transition-colors duration-300"
            >
              <FaCog className="text-red-400" /> Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
