/* eslint-disable @typescript-eslint/no-explicit-any */
import { NeonGradientCard } from "@/components/ui/NeonGradientCard";
import { useForm } from "react-hook-form"; // Assuming you're using React Hook Form
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Forgot Password Data:", data);
  };

  return (
    <div className="flex items-center justify-center pt-20 md:pt-44 p-4">
      <NeonGradientCard className="w-full max-w-md bg-whitep-6 rounded-2xl shadow-lg">
        <div className="w-full max-w-md bg-background border-t-4 border-blue-600 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Section */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Submit Button Section */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          {/* Optional: Add a link back to login */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline hover:text-blue-500"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </NeonGradientCard>
    </div>
  );
};

export default ForgotPassword;
