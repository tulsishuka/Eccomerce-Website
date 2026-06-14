import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return toast.error("Please enter your name");
    }

    if (!formData.email.trim()) {
      return toast.error("Please enter your email");
    }

    if (!formData.password.trim()) {
      return toast.error("Please enter your password");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      toast.success("Account created successfully");

      console.log("SUCCESS:", res.data);

      const userEmail = formData.email;

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/verify", {
          state: { email: userEmail },
        });
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Account already exists or something went wrong"
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans antialiased text-[#1A1A1A]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Right Side Form */}
        <div className="order-1 lg:order-2 flex items-start lg:items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-20 bg-white">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md lg:max-w-[420px] flex flex-col space-y-5 lg:space-y-6 lg:-translate-y-8"
          >
            <header className="mb-4">
              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#111111] mb-2">
                Join Aura Luxe
              </h2>

              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Discover a new standard of luxury boutique
                <br className="hidden sm:block" />
                shopping.
              </p>
            </header>

            {/* Name */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="name"
                className="text-[10px] tracking-widest uppercase font-medium text-gray-400"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="email"
                className="text-[10px] tracking-widest uppercase font-medium text-gray-400"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="password"
                className="text-[10px] tracking-widest uppercase font-medium text-gray-400"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] tracking-wider focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 mt-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>
        </div>

        {/* Left Side Image */}
        <div className="order-2 lg:order-1 relative min-h-[50vh] lg:min-h-screen overflow-hidden">
          <img
            src="/model.jpg"
            alt="Fashion Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex h-full items-end p-6 sm:p-8 lg:p-10">
            <div className="max-w-lg text-white">
              <span className="font-serif text-[11px] tracking-[0.2em] uppercase font-light opacity-80 mb-3 block">
                THE CURATED LIFE
              </span>

              <h1 className="font-serif italic text-3xl sm:text-4xl lg:text-[38px] leading-tight mb-4">
                Elevate your everyday with
                <br />
                Aura Luxe.
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-white/80 font-light">
                Gain exclusive access to limited collections, editorial
                insights, and bespoke shopping experiences tailored to your
                refined taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;