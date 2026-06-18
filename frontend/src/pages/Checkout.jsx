
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const items =
    JSON.parse(
      localStorage.getItem("checkoutItems")
    ) || [];

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.product.price * item.quantity,
    0
  );

  const [address, setAddress] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [editMode, setEditMode] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      phone: "",
      addressLine: "",
      city: "",
      state: "",
      pincode: "",
    });

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3000/api/v1/address",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      
      );


      if (res.data.address) {
  console.log(
    "ADDRESS FROM BACKEND =>",
    res.data.address
  );

  setAddress(res.data.address);

  localStorage.setItem(
    "address",
    JSON.stringify(res.data.address)
  );

  setFormData({
    fullName: res.data.address.fullName,
    phone: res.data.address.phone,
    addressLine: res.data.address.addressLine,
    city: res.data.address.city,
    state: res.data.address.state,
    pincode: res.data.address.pincode,
  });
}
      setAddress(res.data.address);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const saveAddress = async () => {
    try {
      const token =
        localStorage.getItem("token");

      if (address) {
        await axios.put(
          "http://localhost:3000/api/v1/address",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Address updated"
        );
      } else {
        await axios.post(
          "http://localhost:3000/api/v1/address",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Address saved"
        );
      }

      fetchAddress();
      setEditMode(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "Failed to save address"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (

<div className="max-w-6xl mx-auto py-10 px-4  min-h-screen">

  {/* Heading */}
  <div className="mb-8">
    <h1 className="text-4xl font-bold text-gray-800 mt-10">
      Checkout
    </h1>

    <p className="text-gray-500 mt-2">
      Review your items and delivery details before proceeding.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* LEFT SIDE */}
    <div className="lg:col-span-2 space-y-6">

      {/* Order Summary */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-2xl font-semibold mb-6">
       Order Summary
        </h2>

        {items.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between items-center border-b py-4 last:border-none"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Quantity: {item.quantity}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-lg">
                ₹{item.product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Address */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
           Delivery Address
          </h2>

          {address && !editMode && (
            <button
              onClick={() =>
                setEditMode(true)
              }
              className="text-zinc-700 font-medium hover:text-purple-800"
            >
              Edit
            </button>
          )}
        </div>

        {address && !editMode ? (
          <div className="bg-gray-50 border rounded-xl p-5">
            <h3 className="font-semibold text-lg">
              {address.fullName}
            </h3>

            <p className="text-gray-600 mt-1">
              {address.phone}
            </p>

            <p className="text-gray-600 mt-2">
              {address.addressLine}
            </p>

            <p className="text-gray-600">
              {address.city}, {address.state}
            </p>

            <p className="text-gray-600">
              {address.pincode}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="addressLine"
              placeholder="Address"
              value={formData.addressLine}
              onChange={handleChange}
              className="border p-3 rounded-xl md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={saveAddress}
              className="bg-zinc-600  text-white py-3 rounded-xl md:col-span-2 font-medium transition"
            >
              {address
                ? "Update Address"
                : "Save Address"}
            </button>
          </div>
        )}
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div>

      <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">

        <h2 className="text-2xl font-semibold mb-5">
          Price Details
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{items.length}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">
              FREE
            </span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>

        {address && !editMode && (
          <button
            onClick={() => {
              localStorage.setItem(
                "address",
                JSON.stringify(address)
              );

              navigate("/payment");
            }}
            className="w-full mt-6 bg-zinc-600 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold transition"
          >
            Continue To Payment →
          </button>
        )}

      </div>

    </div>

  </div>

</div>
  );
};

export default Checkout;