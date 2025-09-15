import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupSignin = () => {
  const navigate=useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    navigate('/app/dashboard');
    toast.success('Login Successful!');
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-[#002928] rounded-b-3xl md:rounded-br-3xl md:rounded-bl-none flex flex-col items-center justify-center p-8 relative text-white">
        <img
          src="src/assets/doctor-image.png"
          alt="Doctor"
          className="rounded-full w-56 h-72 md:w-72 md:h-96 object-cover mb-8"
        />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-gray-50 rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl flex flex-col items-center justify-center p-8 md:p-16">
        {/* Tabs */}
        <div className="flex space-x-6 mb-8 text-2xl font-bold text-gray-700">
          <button
            className={`pb-2 ${isSignUp ? "text-[#feb05d]" : "border-transparent"}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={`pb-2 ${!isSignUp ? "text-[#feb05d]" : "border-transparent"}`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>

        {/* Form Box */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-md"
        >
          {isSignUp && (
            <div className="mb-5">
              <label className="block text-black text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="full name"
                {...register("fullName", { required: "Full Name is required" })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>
          )}

          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Aldrego@email.com"
              {...register("email", {
                required: "Email is required",
                
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-black text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-[#feb05d] text-white font-bold py-2 rounded-md hover:bg-[#002928] transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <p
            className="text-pink-500 text-center mt-4 cursor-pointer text-sm font-semibold"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "I have an Account ?" : "Create a new Account"}
          </p>
        </form>

        {/* Social + Contact */}
        <div className="flex space-x-6 mt-10 text-gray-400">
          {/* You can put social icons here if needed */}
        </div>

        <div className="flex space-x-6 mt-6 text-gray-400 text-sm">
          {/* Google */}
          <a href="#" className="hover:text-gray-700" title="Google">
            <svg
              className="w-6 h-6"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fbc02d"
                d="M43.6 20.5H42V20H24v8h11.3c-1.5 4.3-5.6 7-10.3 7-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.4l6.4-6.4C34.1 6.7 29.3 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21 21-9.4 21-21c0-1.9-.2-3.4-.4-5.5z"
              />
              <path
                fill="#e53935"
                d="M6.3 14.1l6.6 4.8C15 14.3 19.2 11 24 11c2.6 0 5 .9 6.9 2.4l6.4-6.4C34.1 6.7 29.3 5 24 5c-7.7 0-14.4 4-18 10.1z"
              />
              <path
                fill="#4caf50"
                d="M24 47c5.2 0 10-1.9 13.6-5l-6.3-5.2c-2 1.5-4.4 2.4-7.3 2.4-4.6 0-8.7-2.7-10.3-7l-6.6 5.1C9.5 43 16.3 47 24 47z"
              />
              <path
                fill="#1565c0"
                d="M43.6 20.5H42V20H24v8h11.3c-0.8 2.3-2.3 4.2-4.3 5.5l6.3 5.2c-0.4.4 6.7-4.9 6.7-14.2 0-1.9-.2-3.4-.4-5.5z"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:text-gray-700" title="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9h2.6v-2.2c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.5 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:text-gray-700" title="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM18 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupSignin;
