import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {  toast } from "react-toastify";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !experience){toast.error("Please fill all fields before submitting!" );  return};

    const newFeedback = {
      id: Date.now(),
      name,
      rating,
      experience,
    };

    setFeedbacks([...feedbacks, newFeedback]);
      toast.success("🎉 Thank you for sharing your experience!");

    // Reset form
    setName("");
    setRating(0);
    setExperience("");
  };

  return (
    <div className="w-full flex flex-col items-center p-6">
      {/* Feedback Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Share Your Experience</h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Rating Input */}
        <div className="flex items-center gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={25}
              onClick={() => setRating(star)}
              className={`cursor-pointer ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Experience Textarea */}
        <textarea
          placeholder="Write your experience..."
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          rows="4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
        >
          Submit
        </button>
      </form>

      {/* Feedback List (Cards at Bottom) */}
      <div className="w-full mt-8">
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-start mb-4"
          >
            {/* Avatar (random emoji style) */}
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              {fb.name.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              {/* Stars */}
              <div className="flex text-yellow-500 mb-1">
                {Array(fb.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              {/* Name */}
              <h3 className="font-bold">{fb.name}</h3>
              {/* Experience */}
              <p className="text-gray-600">{fb.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
