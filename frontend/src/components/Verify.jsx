
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleVerify = async (e) => {
  //   e.preventDefault();

  //   if (!otp) {
  //     toast.error("Please enter OTP");
  //     return;
  //   }
  //   try {
  //     setLoading(true);

  //     const res = await axios.post(
  //       "http://localhost:3000/api/v1/auth/verify-otp",
  //       { email, otp }
  //     );

  //     toast.success(res.data.message || "Verified successfully ❤️");

  //     setTimeout(() => {
  //       navigate("/Home");
  //     }, 1000);

  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Invalid OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


const handleVerify = async (e) => {
  e.preventDefault();

  if (!otp.trim()) {
    toast.error("Please enter OTP");
    return;
  }

  if (!email) {
    toast.error("Email not found. Please login again.");
    navigate("/login");
    return;
  }

  try {
    setLoading(true);

    console.log("Sending:", {
      email,
      otp,
    });

    const res = await axios.post(
      "http://localhost:3000/api/v1/auth/verify-otp",
      {
        email,
        otp: otp.trim(),
      }
    );

    console.log("Response:", res.data);

    toast.success(
      res.data.message || "Verified successfully ❤️"
    );

    navigate("/");
  }
  
  // catch (error) {
  //   console.log(
  //     "VERIFY ERROR:",
  //     error.response?.data
  //   );

  //   toast.error(
  //     error.response?.data?.message ||
  //       "Verification failed"
  //   );
  // }
  catch (error) {
  console.log("VERIFY ERROR:", error.response?.data);

  toast.error(
    error.response?.data?.message ||
    "Verification failed"
  );
}
  finally {
    setLoading(false);
  }
};
  return (
  
    <div className="flex min-h-screen items-center justify-center bg-[#FDF4E3] p-4">
  <div className="w-full max-w-[480px] overflow-hidden rounded-[28px] bg-white shadow-lg">

    {/* Banner */}
    <div className="w-full">
      <img
        src="/register.webp"
        alt="Verify Account Banner"
        className="w-full object-cover"
      />
    </div>

    {/* Form */}
    <div className="p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-[#2d3748] mb-2">
        Verify Your Account
      </h2>

      <p className="text-sm text-gray-500 mb-1">
        Enter OTP sent to
      </p>

      <p className="text-sm font-semibold text-[#9c27b0] break-all mb-6">
        {email}
      </p>

      <form onSubmit={handleVerify} className="space-y-5">

        {/* OTP */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            OTP Code
          </label>

          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center tracking-[0.4em] text-lg focus:outline-none focus:border-[#9c27b0] transition"
          />
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#9c27b0] hover:bg-[#7b1fa2] text-white font-medium py-3 rounded-xl text-lg transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Helper Text */}
        <p className="text-center text-sm text-gray-500">
          Didn't receive the OTP?
          <span className="text-[#9c27b0] font-medium ml-1 cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>

      </form>
    </div>
  </div>
</div>
  );
};

export default Verify;