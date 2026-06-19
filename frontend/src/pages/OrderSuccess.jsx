import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFECF5]">

      <h1 className="text-4xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>

      <p className="mt-3 text-gray-500">
        Thank you for shopping with us.
      </p>

      <Link
        to="/"
        className="mt-6 bg-[#722F6A] text-white px-8 py-3 rounded-lg"
      >
       Go To Home
      </Link>

    </div>
  );
};

export default OrderSuccess;
