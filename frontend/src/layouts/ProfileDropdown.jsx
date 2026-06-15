
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Package,
  LogOut,
  User,
  LogIn,
} from "lucide-react";

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="absolute right-0 top-14 w-64 bg-white rounded-md shadow-xl border border-gray-200 z-50 overflow-hidden">

      {/* Header */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Hello {user?.name || "Guest"}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {user
            ? "Welcome back"
            : "To access your account"}
        </p>

        {!user && (
          <Link
            to="/register"
            className="mt-4 block w-full text-center bg-[#9F2089] hover:bg-[#861c74] text-white font-semibold py-2.5 rounded-md transition"
          >
            Sign Up
          </Link>
        )}
      </div>

      <hr />

      {/* Orders */}
      <Link
        to="/orders"
        className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
      >
        <Package className="h-5 w-5 text-gray-600" />
        <span className="font-medium text-gray-700">
          My Orders
        </span>
      </Link>

      <hr />

      {/* Login */}
      {!user ? (
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
        >
          <LogIn className="h-5 w-5 text-gray-600" />

          <span className="font-medium text-gray-700">
            Login
          </span>
        </Link>
      ) : (
        <>
          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
          >
            <User className="h-5 w-5 text-gray-600" />

            <span className="font-medium text-gray-700">
              My Profile
            </span>
          </Link>

          <hr />

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-4 hover:bg-red-50 transition text-left"
          >
            <LogOut className="h-5 w-5 text-red-500" />

            <span className="font-medium text-red-500">
              Logout
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;