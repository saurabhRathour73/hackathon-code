// HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const HeroSection = () => {
  const Navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <section  className="bg-[#002928] text-white flex flex-col md:flex-row w-full h-screen px-6 md:px-20 pt-10 md:pt-20 overflow-hidden">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 z-10 ">
        <h1 className="text-[2.5rem] md:text-[4rem] font-medium leading-tight">
         {t(' “Every Step Towards Healing Matters.”')}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 md:mt-6 max-w-md">
          Navigate your wellness journey with expert insights for support,
          resources, and a journey to mental betterment.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 mt-6 text-gray-300">
          <div className="flex flex-col items-start sm:items-center mb-4 sm:mb-0">
            <span className="font-semibold text-white text-lg md:text-xl">40+</span>
            <span className="text-sm md:text-base">Online Reviews</span>
          </div>
          <div className="hidden sm:block h-16 w-[1px] bg-white mx-4"></div>

          <div className="flex flex-col items-start sm:items-center mb-4 sm:mb-0">
            <span className="font-semibold text-white text-lg md:text-xl">200+</span>
            <span className="text-sm md:text-base">Lives Transformed</span>
          </div>
          <div className="hidden sm:block h-16 w-[1px] bg-white mx-4"></div>

          <div className="flex flex-col items-start sm:items-center">
            <span className="font-semibold text-white text-lg md:text-xl">18</span>
            <span className="text-sm md:text-base">Years experience</span>
          </div>
        </div>

        {/* Button */}
        <button onClick={()=>{Navigate('/SingupSigningPage')}} className="mt-6 bg-[#feb05d] text-black text-[1.2rem] px-10 py-3 rounded-full font-sans hover:bg-yellow-500 transition shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          Get Start
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative flex justify-center items-center mt-10 md:mt-0">
        {/* Background word cloud */}
        <img
          src='src/assets/text-image.png'
          alt="Mental Health Illustration"
          className="w-[28rem] md:w-[40rem] opacity-20 absolute -right-10 md:-right-20 -top-10"
        />

        {/* Foreground human brain illustration */}
        <div className="w-[30rem] md:w-[47.7rem] relative flex justify-end">
          <img
            src="src/assets/human-brain.png"
            alt="Mental Health Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
