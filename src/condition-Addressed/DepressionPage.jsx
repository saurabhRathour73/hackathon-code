import React from "react";

const DepressionPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-100 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://nhahealth.com/neuro/wp-content/uploads/2019/06/whowetreat-depression.png')", // <-- apna image path daalna
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-2xl md:text-3xl text-black font-semibold text-center uppercase">
          Depression
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sahaay Treatment Specialist
          </h2>
          <p className="text-gray-700">
            Mood and Stress-Related Dysregulation: Depression, irritability,
            anger, fatigue, and burnout
          </p>
          <p className="text-gray-700">
            When we think of mood dysregulation, we typically think of sadness,
            irritability, over-reactions to stress (anger, frustration),
            inability to experience a certain level of joy, difficulty letting
            things go and problems turning off our mind and our thoughts. Any or
            all of these can be related to a pattern of over or under-activity
            in key networks in the brain. This is why stress is more than just
            an inconvenience, it can have a lasting effect on brain networks
            that get “stuck” producing the same old pattern. Neurofeedback can
            directly address these stuck patterns of electronic activity by
            training the brain to produce more balance brain wave rhythms that
            the brain needs to have familiarity with producing for itself on a
            daily basis.
          </p>
          <p className="text-gray-700">
            These “neural” states are conducive to relaxation and recovery.
            Medication and counseling are still the first-line approaches.
          </p>
          <p className="font-semibold text-gray-800">
            Schedule a Consultation with an Sahaay,  Depression Specialist
          </p>
        
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 shadow-sm border">
          <h3 className="text-lg font-medium mb-4">Contact Us Today</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Comments"
              className="w-full border p-2 outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-medium py-2 hover:bg-teal-700 transition"
            >
              LET'S TALK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepressionPage;
