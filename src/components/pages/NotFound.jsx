import React from "react";
import { FaFacebook, FaQuora, FaMedium, FaInstagram, FaReddit, FaTelegram } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center text-center px-6">
      {/* Small Text */}
      <p className="text-gray-700 text-sm mb-2">
        Oops! This page seems to have wandered off, much like a lost character.  
        Let’s get you back to the story!
      </p>

      {/* Star Icon */}
      <div className="text-4xl my-3">✦</div>

      {/* Main Title */}
      <h1 className="text-[80px] md:text-[130px] font-serif tracking-wide mb-6">
        NOT FOUND!
      </h1>

      {/* Link */}
      <a
        href="/"
        className="text-gray-800 underline hover:text-black transition mb-10"
      >
        ↩ Return to the start of the adventure
      </a>

      {/* Social Icons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaFacebook /> Facebook
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaQuora /> Quora
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaMedium /> Medium
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaInstagram /> Instagram
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaReddit /> Reddit
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <FaTelegram /> Telegram
        </a>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default NotFound;
