// File: FeaturesSection.jsx

import React from "react";

const features = [
  {
    title: "Online Appointment Booking",
    description:
      "Book appointments online with licensed professionals from the comfort of your home. No physical meetings required — enjoy secure and convenient virtual sessions at your preferred time.",
    image: "src/assets/online-apointment.png",
    reverse: false,
  },
  {
    title: "AI Chatbot Support",
    description:
      "Get 24×7 assistance with our intelligent AI chatbot. Enjoy free real-time chats, guaranteed data privacy, and instant responses to your mental health queries — anytime, anywhere.",
    image: "src/assets/ai-chatbot.png",
    reverse: true,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 px-6 md:px-16 lg:px-24 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0d2b36]">
        <span className="border-b-4 border-orange-400 pb-1">Features</span>
      </h2>

      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center mb-16 space-y-6 md:space-y-0 md:space-x-8`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-xl w-full object-cover shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-left space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
