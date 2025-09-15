// components/SigninForm.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Signin:", data);
    // Handle API call here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-8 w-96 max-w-full">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Sign In</h2>

      <label className="block mb-4">
        <span className="text-sm font-medium text-blue-600">Email</span>
        <input
          {...register("email")}
          type="email"
          placeholder="email@example.com"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </label>

      <label className="block mb-6">
        <span className="text-sm font-medium text-blue-600">Password</span>
        <input
          {...register("password")}
          type="password"
          placeholder="********"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </label>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
        Sign In
      </button>

      <p
        onClick={() => navigate("/signup")}
        className="text-pink-500 text-sm text-center mt-4 cursor-pointer"
      >
        Create a new account
      </p>
    </form>
  );
};

export default SigninForm;
