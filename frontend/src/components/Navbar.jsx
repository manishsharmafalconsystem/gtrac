import React from "react";
import { FaBell, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-20 transition-all">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-gray-700 text-2xl hover:text-blue-600 transition-colors"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
        <div className="text-2xl font-bold text-gray-800">Fleet Dashboard</div>
      </div>

      {/* Middle: Search */}
      <div className="hidden md:flex items-center flex-1 mx-6 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <FaSearch className="absolute left-3 text-gray-400 text-lg" />
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600 transition-colors text-xl">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="hidden md:block font-medium text-gray-700">John Doe</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-10">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg transition-colors"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-red-500 hover:bg-gray-100 rounded-b-lg transition-colors"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
