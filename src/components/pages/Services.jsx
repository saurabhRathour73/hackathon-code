// Services.jsx
import React from "react";

const services = [
  "Depression",
  "Anxiety Disorder",
  "Bipolar Disorder",
  "Substance Abuse",
  "Schizophrenia",
  "Eating Disorder",
  "Obsessive-Compulsive Disorder (OCD)",
  "Post Traumatic Stress Disorder (PTSD)",
  "Attention-Deficit/Hyperactivity Disorder (ADHD)",
];

const Services = () => {
  return (
    <div  className="py-12 bg-white w-full h-screen pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-gray-900 mb-8 border-b-2  border-[#feb05d] inline-block pb-4">
          Our Services and Specialties
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#002928] text-white px-6 py-6 relative rounded-tr-3xl rounded-bl-3xl border-b-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-r-4 border-orange-400 flex items-center justify-center h-28 text-center"
            >
              <p className="text-lg font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
