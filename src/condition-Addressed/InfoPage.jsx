import React from "react";

const EmotionalOverReactions = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://nhahealth.com/neuro/wp-content/uploads/2019/06/whowetreat-emotional.png"
          alt="Emotional Over-Reactions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className=" text-2xl text-black md:text-3xl font-semibold uppercase tracking-wide">
            Emotional Over-Reactions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sahaay Emotional Over-Reaction Treatment Specialist
          </h2>

          <h3 className="text-xl font-semibold">
            Reactivity Problems: Tantrums and emotional overreactions
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Tantrums are one of the most common forms of “problem behavior” in
            young children but tend to decrease in frequency and intensity as
            the child grows older. They are not the results of inadequate
            parenting. For the toddler, tantrums are normal. As the child (and
            their brain) evolve over time, reactivity should diminish in a
            fairly consistent manner. Over-reactivity can cause problems with
            “giving up too easily,” can have a negative impact of family and
            friend relationships, and eventually become a source of self-esteem
            issues. Sensory and motivation issues can also co-occur with
            reactivity problems. Many adults will also feel like they are too
            reactive to frustration and stress, which can also be associated
            with anxiety or lack of joy.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold">
            Schedule a Consultation with an Sahaay,  Emotional Over-Reaction Treatment Specialist
          </p>

         
        </div>

        {/* Right Contact Form */}
        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Contact Us Today</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Comments"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700 transition"
            >
              LET'S TALK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmotionalOverReactions;
