
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      formData
    );

    // Not verified
    if (res.data.requiresVerification) {
      toast.error(
        "Please verify your email. New OTP sent."
      );

      navigate("/verify", {
        state: {
          email: res.data.email,
        },
      });

      return;
    }

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );
console.log(JSON.parse(localStorage.getItem("user")));
    toast.success("Login Successful");

    navigate("/");
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Login failed"
    );
  }
};




  return (

    <div className="flex min-h-screen items-center justify-center bg-[#FDF4E3] p-4">
  <div className="w-full max-w-[480px] overflow-hidden rounded-[28px] bg-white shadow-lg">

    {/* Banner */}
    <div className="w-full">
      <img
        src="/register.webp"
        alt="Login Banner"
        className="w-full object-cover"
      />
    </div>

    {/* Form */}
    <div className="p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-[#2d3748] mb-2">
        Welcome Back
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Sign in to access your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#9c27b0] transition"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>

            <Link
              to="/forgot"
              className="text-sm text-[#9c27b0] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-16 focus:outline-none focus:border-[#9c27b0] transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#9c27b0] font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#9c27b0] hover:bg-[#7b1fa2] text-white font-medium py-3 rounded-xl text-lg transition duration-200 shadow-md"
        >
          Sign In
        </button>
      </form>

      {/* Register Link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[#9c27b0] font-medium hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  </div>
</div>
  );
};

export default Login;