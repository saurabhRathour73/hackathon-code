import React from "react";

const LearningDisorders = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="relative h-100 bg-cover  flex items-center justify-center"
        style={{ backgroundImage: "url('https://nhahealth.com/neuro/wp-content/uploads/2019/06/WhoWeTreat_LearningDisorders.jpg')" }} // apni image ka path yahan daalein
      >
        <div className="absolute inset-0  "></div>
        <h1 className="relative text-black text-2xl md:text-4xl font-bold uppercase">
          Learning Disorders
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sahaay Learning Disorders Treatment Specialist
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Children with auditory, visual, sensory, social-emotional, reading
            and mathematical disorders can struggle to learn at the same level
            as their peers.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The Neurohealth evaluation method specifically tests for these
            conditions to pinpoint the underlying mechanisms that cause these
            difficulties, via both cognitive testing and sophisticated brain
            mapping techniques.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The most common disorders in this category include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                Auditory processing disorder
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500 hover:underline">
                Visual processing disorder
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                Reading disorders and dyslexia
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500 hover:underline">
                Social-emotional problems (Asperger’s disorder, Autistic
                spectrum disorder)
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                Sensory processing (“Sensory Amplification”) disorder
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500 hover:underline">
                Mathematics disorder
              </a>
            </li>
          </ul>

          <p className="font-semibold">
            Schedule a Consultation with an Sahaay,  Learning Disorders
            Treatment Specialist
          </p>

         
        </div>

        {/* Right Contact Form */}
        <div className="bg-gray-50 p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Contact Us Today</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-2"
            />
            <textarea
              placeholder="Comments"
              rows="4"
              className="w-full border border-gray-300 p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 font-semibold hover:bg-teal-700"
            >
              LET'S TALK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LearningDisorders;
