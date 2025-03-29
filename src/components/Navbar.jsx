import React from "react";
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.svg"; // Import the SVG logo
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative w-full">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        FREE STANDARD SHIPPING ON ALL ORDERS OVER $99
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center py-4 px-10 border-b shadow-sm">
        {/* Logo */}
        <div className="w-40 h-auto flex justify-center items-center">
          <img src={Logo} alt="BlueFly Logo" className="w-full h-auto" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md border-b border-gray-500 flex items-center">
          <FaSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 outline-none bg-transparent"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-6">
          <Link to="/login">
            <FaUser className="text-xl cursor-pointer hover:text-gray-700" />
          </Link>
          <Link to="/cart">
            <FaShoppingBag className="text-xl cursor-pointer hover:text-gray-700" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
