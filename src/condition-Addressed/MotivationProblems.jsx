import React from "react";

const MotivationProblems = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-100 bg-cover  flex items-center justify-center"
        style={{ backgroundImage: "url('https://nhahealth.com/neuro/wp-content/uploads/2019/06/WhoWeTreat_Motivation.png')" }} // apni image path lagao
      >
        <div className="absolute inset-0 "></div>
        <h1 className="relative text-black text-3xl md:text-4xl font-bold uppercase">
          Motivation Problems
        </h1>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sahaay Motivation Problems Treatment Specialist
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motivation and self-starting are very much brain related functions. 
            There are specific areas in our brain that allow us, when properly 
            activated, to put forth effort to cognitive tasks (e.g., homework, 
            tedious work, etc.) without it feeling like a lot of effort. When brain 
            networks responsible for self-starting are too sluggish, the person will 
            find that they cannot motivate themselves to do non-preferable tasks. 
            Obviously, this can lead to academic struggles, family conflicts, and 
            diminished self-esteem over time.
          </p>

         
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Contact Us Today</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Comments"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-700 transition"
            >
              LET'S TALK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MotivationProblems;
