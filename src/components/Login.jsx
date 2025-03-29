import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-serif font-semibold mb-8 text-gray-900">
        LOG IN
      </h1>

      <form className="w-80">
        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            EMAIL
          </label>
          <input
            type="email"
            className="w-full border-b border-gray-700 focus:outline-none py-2"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            PASSWORD
          </label>
          <input
            type="password"
            className="w-full border-b border-gray-700 focus:outline-none py-2"
            required
          />
        </div>

        {/* Forgot Password Link */}
        <p className="text-sm text-gray-500 cursor-pointer hover:underline mb-6">
          FORGOT YOUR PASSWORD?
        </p>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-800">
          SIGN IN
        </button>
      </form>

      {/* Create Account Link */}
      <p className="mt-6 text-sm text-gray-700 cursor-pointer hover:underline">
        CREATE ACCOUNT
      </p>
    </div>
  );
};

export default Login;
