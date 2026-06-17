// import React from "react";

// const Checkout = () => {
//   const items =
//     JSON.parse(
//       localStorage.getItem("checkoutItems")
//     ) || [];

//   const total = items.reduce(
//     (sum, item) =>
//       sum +
//       item.product.price * item.quantity,
//     0
//   );

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-8">
//         Checkout
//       </h1>

//       {items.map((item) => (
//         <div
//           key={item.product._id}
//           className="border rounded-lg p-4 mb-4"
//         >
//           <h2>{item.product.name}</h2>

//           <p>
//             ₹{item.product.price}
//           </p>

//           <p>
//             Quantity: {item.quantity}
//           </p>
//         </div>
//       ))}

//       <h2 className="text-2xl font-bold mt-8">
//         Total: ₹{total}
//       </h2>

//       <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg">
//         Continue
//       </button>
//     </div>
//   );
// };

// export default Checkout;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Checkout = () => {
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
        setAddress(res.data.address);

        setFormData({
          fullName:
            res.data.address.fullName,
          phone:
            res.data.address.phone,
          addressLine:
            res.data.address.addressLine,
          city:
            res.data.address.city,
          state:
            res.data.address.state,
          pincode:
            res.data.address.pincode,
        });
      }
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
    <div className="max-w-5xl mx-auto py-10 px-4">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {/* PRODUCTS */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        {items.map((item) => (
          <div
            key={item.product._id}
            className="border-b py-4"
          >
            <h3 className="font-medium">
              {item.product.name}
            </h3>

            <p>
              ₹{item.product.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-6">
          Total: ₹{total}
        </h2>
      </div>

      {/* ADDRESS */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Delivery Address
          </h2>

          {address && !editMode && (
            <button
              onClick={() =>
                setEditMode(true)
              }
              className="text-purple-600"
            >
              Edit
            </button>
          )}
        </div>

        {address && !editMode ? (
          <div>
            <p>
              {address.fullName}
            </p>

            <p>
              {address.phone}
            </p>

            <p>
              {address.addressLine}
            </p>

            <p>
              {address.city},{" "}
              {address.state}
            </p>

            <p>
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
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="addressLine"
              placeholder="Address"
              value={formData.addressLine}
              onChange={handleChange}
              className="border p-3 rounded-lg md:col-span-2"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <button
              onClick={saveAddress}
              className="bg-black text-white py-3 rounded-lg md:col-span-2"
            >
              {address
                ? "Update Address"
                : "Save Address"}
            </button>
          </div>
        )}
      </div>

      {/* CONTINUE */}
      {address && !editMode && (
        <button
          className="mt-8 w-full bg-black text-white py-4 rounded-xl"
        >
          Continue To Payment
        </button>
      )}

    </div>
  );
};

export default Checkout;