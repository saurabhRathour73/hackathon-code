// File: WhyUs.jsx

import React from "react";

const features = [
  {
    number: 1,
    title: "Comprehensive and Personalized Support",
    description:
      "Our mental health platform offers a holistic and personalized approach to well-being, integrating a range of evidence-based therapeutic modalities, self-help tools, and community support to address various aspects of mental health.",
  },
  {
    number: 2,
    title: "Privacy and security",
    description:
      "We prioritize the confidentiality and security of user information. Our mental health platform adheres to the highest standards of data protection, ensuring a secure and private space for users to explore and address their mental health needs without concerns about the compromise of sensitive information.",
  },
  {
    number: 3,
    title: "Online And Offline Access",
    description:
      "Seamlessly connect with licensed mental health professionals anytime, anywhere – our platform offers both online and offline access to confidential and supportive consultations, ensuring flexible and accessible mental health care.",
  },
];

const WhyUs = () => {
  return (
    <div id="AboutUs" className="py-10 px-6 md:px-16 lg:px-24 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0d2b36] mb-10">
        <span className="border-b-4 border-orange-400 pb-1">Why us?</span>
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="flex-1 bg-gray-100 rounded-2xl p-6  shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-[#feb05d] text-3xl font-semibold mb-2">
              {feature.number}{" "}
              <span className="text-[2rem] text-[#feb05d] font-semibold">
                {feature.title}
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
