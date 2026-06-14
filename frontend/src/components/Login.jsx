
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user data
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/account");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans antialiased text-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side */}
        <div className="relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden">
          <img
            src="/ladki.jpg"
            alt="Fashion Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between bg-white px-5 py-8 sm:px-10 sm:py-12 lg:px-20 lg:py-16">

          <div className="w-full max-w-md mx-auto my-auto">
            <header className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#111111] mb-2">
                Welcome Back
              </h1>

              <p className="text-sm text-gray-500">
                Please enter your details to access your account.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-300"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">

                  <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
                    Password
                  </label>

                  <Link
                    to="/forgot"
                    className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-black"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 pr-16 text-sm focus:outline-none focus:border-black placeholder-gray-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-gray-500 hover:text-black"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-zinc-800 transition"
              >
                Sign In
              </button>
            </form>

            {/* Social Login */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-[10px] tracking-widest uppercase"
              >
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-[10px] tracking-widest uppercase"
              >
                Apple
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-black"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Footer */}
          <footer className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[9px] tracking-widest uppercase text-gray-400 mt-8">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Cookies</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;