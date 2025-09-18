// File: Footer.jsx

import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer  className="bg-[#002822] text-white  py-10 px-6 md:px-20 rounded-t-3xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Left Section */}
                <div className="md:w-1/2 space-y-6">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-white">
                        Sah<span className="text-[#feb05d]">aay</span>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <p className="mb-3 text-lg">Sign up for our news letter</p>
                        <form className="flex flex-col sm:flex-row w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email-id"
                                className="px-4 py-2 flex-1 text-white border border-orange-300 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="mt-2 sm:mt-0 sm:ml-2 bg-[#feb05d] px-4 py-2 text-blck font-sans hover:bg-orange-500 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-6 mt-6 text-lg">
                        <a href="#" className="hover:text-orange-400">
                            Home
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            Services
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            Contact
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            About us
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 space-y-5">
                    <h3 className="text-2xl font-semibold">Contact</h3>

                    <div className="space-y-3 text-sm md:text-base">
                        <p className="flex items-start">
                            📍&nbsp;oriental institute of science and technology
                        </p>
                        <p className="flex items-center">📞&nbsp;+91 1234567891</p>
                        <p className="flex items-center">
                            📧&nbsp;saurabhs4343@gmail.com
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-5 mt-4 text-xl text-gray-200">
                        <a href="#">
                            <FaInstagram className="hover:text-orange-400" />
                        </a>
                        <a href="#">
                            <FaFacebookF className="hover:text-orange-400" />
                        </a>
                        <a href="#">
                            <FaYoutube className="hover:text-orange-400" />
                        </a>
                        <a href="#">
                            <FaTwitter className="hover:text-orange-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
