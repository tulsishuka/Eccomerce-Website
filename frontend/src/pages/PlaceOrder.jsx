

import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const items =
    JSON.parse(
      localStorage.getItem("checkoutItems")
    ) || [];

  const address =
    JSON.parse(
      localStorage.getItem("address")
    ) || {};

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.product.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      const token =
        localStorage.getItem("token");

      console.log(
        "CHECKOUT ITEMS =>",
        items
      );

      if (
        !address.fullName ||
        !address.phone
      ) {
        toast.error(
          "Address not found. Please complete checkout first."
        );

        navigate("/checkout");
        return;
      }

      const data = {
        total,

        firstName:
          address.fullName,

        phone:
          address.phone,

        email:
          user.email,

        itemDetail:
          items.map((item) => ({
            name:
              item.product.name,

            quantity:
              item.quantity,

            price:
              item.product.price,

            product:
              item.product._id,
          })),
      };

      console.log(
        "ORDER DATA =>",
        data
      );

      const response =
        await axios.post(
          "http://localhost:3000/api/v1/order",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      console.log(
        "ORDER RESPONSE =>",
        response.data
      );

      localStorage.removeItem(
        "checkoutItems"
      );

      toast.success(
        "Order Placed Successfully"
      );

      navigate("/ordersuccess");
    } catch (error) {
      console.log(
        "FULL ERROR =>",
        error
      );

      console.log(
        "BACKEND RESPONSE =>",
        error?.response?.data
      );

      toast.error(
        "Failed to place order"
      );
    }
  };

  return (
   <div className="min-h-screen bg-gray-50 py-12 px-4  ">
  <div className="max-w-2xl mx-auto">

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mt-10">
        Confirm Your Order
      </h1>

      <p className="text-gray-500 mt-2">
        Review your order and place it securely
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">

      {/* Total */}
      <div className="p-8">

        <div className="flex justify-between items-center border-b pb-6">
          <span className="text-gray-600 text-lg">
            Total Amount
          </span>

          <span className="text-3xl font-bold text-gray-900">
            ₹{total}
          </span>
        </div>

        <div className="mt-6 space-y-3">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Payment Method
            </span>

            <span className="font-medium">
              Cash On Delivery
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Order Status
            </span>

            <span className="text-green-600 font-medium">
              Ready to Place
            </span>
          </div>

        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-green-700 text-sm">
            🔒 Your order details are secure and will be processed immediately after confirmation.
          </p>
        </div>

        <button
          onClick={placeOrder}
          className="w-full mt-8 bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
        >
          Place Order
        </button>

      </div>
    </div>

  </div>
</div>
  );
};

export default PlaceOrder;