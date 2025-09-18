import { useState } from "react";
import {
  Grid,             // New Dashboard icon
  CalendarCheck,    // New Appointment icon
  Users,
  Moon,
  LogOut,
  Menu,
  BookOpen          // Resource Hub icon
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`
        ${open ? "w-60" : "w-16"} 
        ${darkMode ? "bg-gray-800 text-white" : "bg-[#002928] text-white"} 
        h-screen p-3 pt-5 flex flex-col justify-between transition-all duration-300 
        rounded-tr-3xl rounded-br-3xl shadow-[0_4px_6px_rgba(0,0,0,0.5)]
      `}
    >
      <div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="p-2 bg-[#feb05d] rounded-full">
            <Menu className="text-black" size={20} />
          </div>
          {open && <h1 className="text-xl font-bold">Sah<span className="text-[#feb05d]">aay</span></h1>}
        </div>

        <ul className="mt-8 space-y-5">
          {/* Dashboard */}
          <li onClick={() => navigate("/app/dashboard")} className="flex items-center gap-3 cursor-pointer hover:text-[#feb05d]">
            <Grid size={20} />
            {open && <Link>Dashboard</Link>}
          </li>

          {/* Booking Appointment */}
          <li onClick={() => navigate("/app/appointment")} className="flex items-center gap-3 cursor-pointer relative hover:text-[#feb05d]">
            <CalendarCheck size={20} />
            {open && <Link>Booking Appointment</Link>}
          </li>

          {/* Users */}
          <li onClick={() => navigate("/app/userProfile")} className="flex items-center gap-3 cursor-pointer hover:text-[#feb05d]">
            <Users size={20} />
            {open && <span>Users</span>}
          </li>

          {/* Resource Hub */}
          <li onClick={() => navigate("/app/resourcehub")} className="flex items-center gap-3 cursor-pointer hover:text-[#feb05d]">
            <BookOpen size={20} />
            {open && <span>Resource Hub</span>}
          </li>
        </ul>
      </div>

      <div className="space-y-5">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <Moon size={20} />
          {open && (
            <div className="flex items-center gap-2">
              <span>Dark Mode</span>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${darkMode ? "bg-blue-500" : "bg-gray-400"
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-5" : ""
                    }`}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div onClick={() => {
          navigate('/')
          toast.success('Logout successfully!');
        }} className="flex items-center gap-3 cursor-pointer hover:text-red-500">
          <LogOut size={20} />
          {open && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
}
