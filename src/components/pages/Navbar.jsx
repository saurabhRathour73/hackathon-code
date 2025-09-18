import React from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../../languageSupport/LanguageSelector";
import ConditionButton from "../../condition-Addressed/ConditionButton"
import WhyUsButton from "../../WhyUs/WhyUsButton";
import ForClientsButton from "../../ForClients/ForClientsButton";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#002928] text-white px-6 md:px-20 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        Sah<span className="text-[#feb05d]">aay</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 items-center text-lg">

        <a
        onClick={()=>{navigate("/")}}
          href="#services"
          className="px-4 py-2 rounded-full text-sm font-medium  hover:bg-teal-700 transition"
        >
          Home
        </a>

        {/* 👇 Home ki jagah ConditionButton */}
       
       
       <WhyUsButton/>
        <ConditionButton />
        <ForClientsButton/>

         <LanguageSelector />

        <a
          href="#"
          onClick={() => navigate("/SingupSigningPage")}
          className="hover:bg-teal-700 text-white text-sm  font-medium px-4 py-2 rounded-full  transition"
        >
          SignUp
        </a>

        {/* Language Selector on right side */}
       
      </div>
    </nav>
  );
};

export default Navbar;
