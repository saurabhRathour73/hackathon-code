import React from "react";

const AnxietyPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-100 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://nhahealth.com/neuro/wp-content/uploads/2019/06/WhoWeTreat_Anxiety.png')", // <-- replace with your image path
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl md:text-3xl text-black font-semibold text-center uppercase">
          Anxiety (Symptoms of High Arousal)
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sahaay Anxiety Specialist
          </h2>
          <p className="text-gray-700">
            Mild anxiety is a normal reaction to stress. However, in some people anxiety can become excessive. There are many varieties of anxiety that include post-traumatic stress disorder, obsessive-compulsive disorder, and panic disorder. When grouped all together these disorders are among the most common psychological disorders.
          </p>
          <p className="italic text-gray-600">
            An estimated 31.1% of U.S. adults experience any anxiety disorder at
            some time in their lives.
          </p>
          <p className="text-gray-700">
            Several different parts of the brain are key in the production of
            fear and anxiety. Brain wave patterns play a significant role in
            many anxiety disorders. For instance, many other patients with
            anxiety have excessive fast-frequency brain waves that make it
            difficult to relax.
          </p>
          <p className="font-semibold text-gray-800">
            Schedule a Consultation with an Sahaay, IL Anxiety Specialist
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

export default AnxietyPage;
