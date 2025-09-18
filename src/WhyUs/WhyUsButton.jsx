import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WhyUsButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // dropdown close after click
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 text-sm font-medium  text-white rounded-md hover:bg-teal-700"
      >
        Why Us
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 ring-1 ring-black ring-opacity-5 w-48 bg-white shadow-lg rounded-md z-10">
          <p
            onClick={() => handleNavigate("/multipage/notfound")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Our Team
          </p>
          <p
            onClick={() => handleNavigate("/multipage/notfound")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Our Success
          </p>
        </div>
      )}
    </div>
  );
};

export default WhyUsButton;
