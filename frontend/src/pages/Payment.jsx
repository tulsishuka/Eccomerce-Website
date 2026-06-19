import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handleCOD = () => {
    navigate("/placeorder");
  };

  return (
 <div className="min-h-screen  py-12 px-4 bg-[#FFECF5]">
  <div className="max-w-2xl mx-auto">

    {/* Heading */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mt-10">
        Payment Method
      </h1>

      <p className="text-gray-500 mt-2">
        Select your preferred payment option
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">

   
      <div className=" ">
        <h2 className="text-white font-semibold text-xl">
          Available Payment Options
        </h2>
      </div>

      <div className="p-6">

        <label className="flex items-center justify-between border-2 border-purple-500 bg-purple-50 rounded-xl p-5 cursor-pointer transition">

          <div className="flex items-center gap-4">
            <input
              type="radio"
              checked
              readOnly
              className="w-5 h-5 accent-purple-600"
            />

            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Cash On Delivery
              </h3>

              <p className="text-sm text-gray-500">
                Pay when your order arrives at your doorstep
              </p>
            </div>
          </div>

          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Available
          </span>

        </label>

        <div className="mt-5 bg-gray-50 border rounded-xl p-4">
          <p className="text-sm text-gray-600">
            🔒 Your order is secure and will be processed immediately after confirmation.
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleCOD}
          className="w-full mt-6 bg-[#722F6A] hover:bg-[#722F6A] text-white font-semibold py-4 rounded-xl transition-all duration-300"
        >
          Continue to Place Order
        </button>

      </div>
    </div>

  </div>
</div>
  );
};

export default Payment;