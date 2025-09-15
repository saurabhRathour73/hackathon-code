// File: Navbar.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate=  useNavigate();
  return (
    <nav className="bg-[#002928] text-white px-6 md:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Sah<span className="text-[#feb05d]">aay</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 items-center text-lg">
        <a href="#home" className="px-4 py-2 rounded-full hover:text-black hover:bg-[#feb05d] transition">
          Home
        </a>
        <a href="#services" className= "px-4 py-2 rounded-full hover:text-black hover:bg-[#feb05d] transition">
          Services
        </a>
        <a href="#AboutUs" className="px-4 py-2 rounded-full hover:text-black hover:bg-[#feb05d] transition">
          About Us
        </a>
        <a href="#footer" className="px-4 py-2 rounded-full hover:text-black hover:bg-[#feb05d] transition">
          Contact
        </a>

        {/* Schedule Button */}
        <a
          href="#"
          onClick={()=>navigate('SingupSigningPage')}
          className="hover:bg-[#feb05d] text-white font-medium px-4 py-2 rounded-full hover:text-black transition"
        >
          SignUp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
