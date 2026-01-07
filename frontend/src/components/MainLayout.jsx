import React from "react";
import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaSearch,
  FaEnvelope,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-4 md:px-6 py-3 sticky top-0 z-30 transition-all duration-300">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <FaBars />
        </button>

        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Fleet Dashboard
        </div>
      </div>

      {/* Middle: Compact Search (150px) */}
      <div className="hidden md:flex items-center flex-1 mx-4 relative max-w-37.5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-1 pl-7 pr-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
        />
        <FaSearch className="absolute left-2 text-gray-400 text-sm" />
      </div>

      {/* Right: Icons + User */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Quick Report Icon */}
        <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg md:text-xl">
          <FaChartBar />
        </button>

        {/* Messages */}
        <button className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg md:text-xl">
          <FaEnvelope />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 animate-pulse shadow">
            5
          </span>
        </button>

        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg md:text-xl">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 animate-pulse shadow">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 md:gap-2 bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm text-sm md:text-base">
            <FaUserCircle className="text-xl md:text-2xl text-gray-600" />
            <span className="hidden md:block font-medium text-gray-700">John Doe</span>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
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
              <FaBars className="text-red-400" /> Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
