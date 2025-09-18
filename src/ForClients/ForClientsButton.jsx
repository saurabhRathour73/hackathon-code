import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForClientsButton = () => {
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
        className="px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-teal-700"
      >
        For Clients
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-60 bg-white shadow-lg ring-1 ring-black ring-opacity-5   rounded-md z-10">
          <p
            onClick={() => navigate("/SingupSigningPage")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Book Appointment
          </p>
          <p
            onClick={() => handleNavigate("/multipage/feedback")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Share Your Experience
          </p>
          <p
            onClick={() => handleNavigate("/multipage/notfound")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Download App
          </p>
          <p
            onClick={() => handleNavigate("/multipage/notfound")}
            className="block px-4 py-2 text-gray-700  cursor-pointer"
          >
            Scheduling
          </p>
        </div>
      )}
    </div>
  );
};

export default ForClientsButton;
