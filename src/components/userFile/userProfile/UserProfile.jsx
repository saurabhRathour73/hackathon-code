import React from 'react';

const UserProfile = () => {
  const user = {
    name: "Saurabh Kumar",
    email: "saurabhs4343@gmail.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    contact: "+91 7321841202",
    problem: "Anxiety Disorder",
    appointment: {
      doctorName: "Dr. Priya Sharma",
      date: "2025-09-20",
      status: "Confirmed"
    },
    progress: 65, // Example: 65%
    improvementTips: [
      "Maintain a regular sleep schedule.",
      "Practice mindfulness meditation daily.",
      "Stay physically active to boost mood.",
      "Connect with friends and family regularly."
    ]
  };

  return (
    <div className="max-w-4xl  mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8">

      {/* 1️⃣ User Info Section */}
      <div className="flex items-center space-x-6">
        <img
          src={user.image}
          alt="User"
          className="w-24 h-24 rounded-full border-2 border-yellow-400"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">📞 {user.contact}</p>
        </div>
      </div>

      {/* 2️⃣ Problem & Appointment Section */}
      <div className="bg-gray-100 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-semibold">Medical Information</h3>
        <p><span className="font-medium">Problem:</span> {user.problem}</p>

        <h3 className="text-xl font-semibold mt-4">Appointment Details</h3>
        <p><span className="font-medium">Doctor Name:</span> {user.appointment.doctorName}</p>
        <p><span className="font-medium">Appointment Date:</span> {user.appointment.date}</p>
        <p><span className="font-medium">Status:</span> {user.appointment.status}</p>
      </div>

      {/* 3️⃣ Progress Section */}
      <div className="flex items-center space-x-6">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#feb05d"
              strokeWidth="10"
              fill="none"
              strokeDasharray="282.6"
              strokeDashoffset={282.6 - (282.6 * user.progress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
            {user.progress}%
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Health Progress</h3>
          <p className="text-gray-600">Track your mental health improvement over time.</p>
        </div>
      </div>

      {/* 4️⃣ Mental Health Improvement Section */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-2xl font-bold text-yellow-600">💡 Mental Health Improvement Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {user.improvementTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default UserProfile;
