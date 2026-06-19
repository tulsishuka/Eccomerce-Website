
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const navigate = useNavigate();

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

//   const [address, setAddress] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [editMode, setEditMode] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       fullName: "",
//       phone: "",
//       addressLine: "",
//       city: "",
//       state: "",
//       pincode: "",
//     });

//   useEffect(() => {
//     fetchAddress();
//   }, []);

//   const fetchAddress = async () => {
//     try {
//       const token =
//         localStorage.getItem("token");

//       const res = await axios.get(
//         "https://eccomerce-website-bali.onrender.com/api/v1/address",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
      
//       );


//       if (res.data.address) {
//   console.log(
//     "ADDRESS FROM BACKEND =>",
//     res.data.address
//   );

//   setAddress(res.data.address);

//   localStorage.setItem(
//     "address",
//     JSON.stringify(res.data.address)
//   );

//   setFormData({
//     fullName: res.data.address.fullName,
//     phone: res.data.address.phone,
//     addressLine: res.data.address.addressLine,
//     city: res.data.address.city,
//     state: res.data.address.state,
//     pincode: res.data.address.pincode,
//   });
// }
//       setAddress(res.data.address);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const saveAddress = async () => {
//     try {
//       const token =
//         localStorage.getItem("token");

//       if (address) {
//         await axios.put(
//           "https://eccomerce-website-bali.onrender.com/api/v1/address",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         toast.success(
//           "Address updated"
//         );
//       } else {
//         await axios.post(
//           "https://eccomerce-website-bali.onrender.com/api/v1/address",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         toast.success(
//           "Address saved"
//         );
//       }

//       fetchAddress();
//       setEditMode(false);
//     } catch (error) {
//       console.log(error);
//       toast.error(
//         "Failed to save address"
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         Loading...
//       </div>
//     );
//   }

//   return (

// <div className="max-w-6xl mx-auto py-10 px-4  min-h-screen">

//   {/* Heading */}
//   <div className="mb-8">
//     <h1 className="text-4xl font-bold text-gray-800 mt-10">
//       Checkout
//     </h1>

//     <p className="text-gray-500 mt-2">
//       Review your items and delivery details before proceeding.
//     </p>
//   </div>

//   <div className="grid lg:grid-cols-3 gap-8">

//     {/* LEFT SIDE */}
//     <div className="lg:col-span-2 space-y-6">

//       {/* Order Summary */}
//       <div className="bg-white rounded-2xl shadow-sm border p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//        Order Summary
//         </h2>

//         {items.map((item) => (
//           <div
//             key={item.product._id}
//             className="flex justify-between items-center border-b py-4 last:border-none"
//           >
//             <div>
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {item.product.name}
//               </h3>

//               <p className="text-gray-500 text-sm">
//                 Quantity: {item.quantity}
//               </p>
//             </div>

//             <div className="text-right">
//               <p className="font-bold text-lg">
//                 ₹{item.product.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Address */}
//       <div className="bg-white rounded-2xl shadow-sm border p-6">

//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-2xl font-semibold">
//            Delivery Address
//           </h2>

//           {address && !editMode && (
//             <button
//               onClick={() =>
//                 setEditMode(true)
//               }
//               className="text-zinc-700 font-medium hover:text-purple-800"
//             >
//               Edit
//             </button>
//           )}
//         </div>

//         {address && !editMode ? (
//           <div className="bg-gray-50 border rounded-xl p-5">
//             <h3 className="font-semibold text-lg">
//               {address.fullName}
//             </h3>

//             <p className="text-gray-600 mt-1">
//               {address.phone}
//             </p>

//             <p className="text-gray-600 mt-2">
//               {address.addressLine}
//             </p>

//             <p className="text-gray-600">
//               {address.city}, {address.state}
//             </p>

//             <p className="text-gray-600">
//               {address.pincode}
//             </p>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-4">

//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="addressLine"
//               placeholder="Address"
//               value={formData.addressLine}
//               onChange={handleChange}
//               className="border p-3 rounded-xl md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="pincode"
//               placeholder="Pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <button
//               onClick={saveAddress}
//               className="bg-zinc-600  text-white py-3 rounded-xl md:col-span-2 font-medium transition"
//             >
//               {address
//                 ? "Update Address"
//                 : "Save Address"}
//             </button>
//           </div>
//         )}
//       </div>

//     </div>

//     {/* RIGHT SIDE */}
//     <div>

//       <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">

//         <h2 className="text-2xl font-semibold mb-5">
//           Price Details
//         </h2>

//         <div className="space-y-3">

//           <div className="flex justify-between">
//             <span>Total Items</span>
//             <span>{items.length}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Delivery Charges</span>
//             <span className="text-green-600">
//               FREE
//             </span>
//           </div>

//           <hr />

//           <div className="flex justify-between text-xl font-bold">
//             <span>Total Amount</span>
//             <span>₹{total}</span>
//           </div>
//         </div>

//         {address && !editMode && (
//           <button
//             onClick={() => {
//               localStorage.setItem(
//                 "address",
//                 JSON.stringify(address)
//               );

//               navigate("/payment");
//             }}
//             className="w-full mt-6 bg-zinc-600 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold transition"
//           >
//             Continue To Payment →
//           </button>
//         )}

//       </div>

//     </div>

//   </div>

// </div>
//   );
// };

// export default Checkout;




















import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const items = JSON.parse(localStorage.getItem("checkoutItems")) || [];

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  

  const [deliverySpeed, setDeliverySpeed] = useState("standard");

  const [formData, setFormData] = useState({
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
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://eccomerce-website-bali.onrender.com/api/v1/address",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.address) {
        console.log("ADDRESS FROM BACKEND =>", res.data.address);
        setAddress(res.data.address);
        localStorage.setItem("address", JSON.stringify(res.data.address));
        setFormData({
          fullName: res.data.address.fullName,
          phone: res.data.address.phone,
          addressLine: res.data.address.addressLine,
          city: res.data.address.city,
          state: res.data.address.state,
          pincode: res.data.address.pincode,
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
      [e.target.name]: e.target.value,
    });
  };

  const saveAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      if (address) {
        await axios.put(
          "https://eccomerce-website-bali.onrender.com/api/v1/address",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Address updated");
      } else {
        await axios.post(
          "https://eccomerce-website-bali.onrender.com/api/v1/address",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Address saved");
      }

      fetchAddress();
      setEditMode(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to save address");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#FDFDFD] text-gray-500 font-serif">
        Loading Checkout Parameters...
      </div>
    );
  }

  // Cost breakups mirroring image metrics structure
  const subtotal = total;
  const discount = subtotal > 0 ? subtotal * 0.1 : 0; // Keeping layout markdown example identical
  const shippingFee = deliverySpeed === "express" ? 35.00 : 0;
  const estimatedTax = subtotal > 0 ? 85.00 : 0;
  const finalTotal = subtotal - discount + shippingFee + estimatedTax;

  return (
    <div className="min-h-screen bg-[#FFECF5] py-12 px-4 md:px-8 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
     

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT CONTAINER COLUMNS */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Address Information Section block */}
            <div>
              <div className="flex justify-between items-baseline mb-5">
                <h2 className="font-serif text-2xl font-normal text-gray-900 tracking-wide mt-10">
                  Shipping Address
                </h2>
                {address && !editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-xs font-semibold tracking-wider text-gray-400 hover:text-black uppercase underline underline-offset-4"
                  >
                    Change Address
                  </button>
                )}
              </div>

              {address && !editMode ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Active Registered Address Profile Card Layout */}
                  <div className="bg-white border-2 border-black p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-sm">
                      👤
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-lg font-medium text-gray-900">{address.fullName}</h4>
                        <span className="text-emerald-600 text-xs">✓ Selected</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5 tracking-wide">{address.phone}</p>
                      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                        {address.addressLine}, <br />
                        {address.city}, {address.state} — {address.pincode}
                      </p>
                    </div>
                  </div>

                  {/* Visual trigger button block supporting direct layout toggle updates */}
                  <button 
                    onClick={() => setEditMode(true)}
                    className="border-2 border-dashed border-gray-200 hover:border-gray-400 rounded-3xl p-6 flex flex-col items-center justify-center gap-2 transition-colors bg-white group text-center min-h-[160px]"
                  >
                    <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black">Edit / Add New Address</span>
                  </button>
                </div>
              ) : (
                /* Interactive Address Modification Form Box */
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 pb-2">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Provide Delivery Coordinates</p>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="text"
                    name="addressLine"
                    placeholder="Street Address, Suite or Apartment Info"
                    value={formData.addressLine}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode / Postal Code"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border border-gray-200/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2"
                  />
                  <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                    {address && (
                      <button
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="px-6 py-3 text-xs font-bold tracking-widest uppercase border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={saveAddress}
                      className="px-8 py-3 text-xs font-bold tracking-widest uppercase bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      {address ? "Update & Save Address" : "Save Delivery Address"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Review Bag Mapping container display */}
            <div>
              <div className="flex justify-between items-baseline mb-5">
                <h2 className="font-serif text-2xl font-normal text-gray-900 tracking-wide">
                  Order Review
                </h2>
                <button 
                  onClick={() => navigate("/cart")}
                  className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] hover:underline"
                >
                  Edit Bag
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-gray-50 shadow-[0_4px_25px_rgba(0,0,0,0.02)] divide-y divide-gray-100">
                {items.map((item) => (
                  <div key={item.product._id} className="p-6 flex gap-6 items-center">
                    <div className="w-20 h-20 bg-[#F9F9F9] border border-gray-100 rounded-2xl flex-shrink-0 overflow-hidden">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-normal text-gray-900 truncate tracking-wide">
                        {item.product.name}
                      </h3>
                      <div className="flex gap-4 text-xs text-gray-400 mt-1 font-medium tracking-wide">
                        <span>QTY: {item.quantity}</span>
                        <span>•</span>
                        <span>SIZE: M</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-lg font-medium text-gray-900">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Speed Selector Widget block Container */}
            <div>
              <h2 className="font-serif text-2xl font-normal text-gray-900 tracking-wide mb-5">
                Delivery Speed
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-5 rounded-2xl border transition-all cursor-pointer bg-white ${deliverySpeed === 'standard' ? 'border-black shadow-sm' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="delivery_option" 
                      checked={deliverySpeed === "standard"}
                      onChange={() => setDeliverySpeed("standard")}
                      className="w-4 h-4 text-black focus:ring-black accent-black" 
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Standard Delivery</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Arrives in 4—6 business days</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Free</span>
                </label>

                <label className={`flex items-center justify-between p-5 rounded-2xl border transition-all cursor-pointer bg-white ${deliverySpeed === 'express' ? 'border-black shadow-sm' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="delivery_option" 
                      checked={deliverySpeed === "express"}
                      onChange={() => setDeliverySpeed("express")}
                      className="w-4 h-4 text-black focus:ring-black accent-black" 
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Express Shipping</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Arrives in 1—2 business days</p>
                    </div>
                  </div>
                  <span className="font-serif text-sm font-medium text-gray-900">₹35.00</span>
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMNS ORDER SUMMARY BOX PANEL */}
          <div className="sticky top-24 bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50/80">
            <h2 className="font-serif text-2xl font-normal mb-6 text-gray-900 tracking-wide">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#E07A5F]">
                <span>Discount (PLATINUM10)</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-xs font-semibold text-emerald-600 tracking-widest uppercase">
                  {shippingFee === 0 ? "Free" : `₹${shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium text-gray-900">₹{estimatedTax.toFixed(2)}</span>
              </div>
            </div>

            {/* Total Aggregate Sum calculation wrapper */}
            <div className="flex justify-between items-baseline my-6">
              <span className="text-xs tracking-wider text-gray-400 uppercase font-medium">Total</span>
              <span className="font-serif text-3xl font-semibold text-gray-900">
                ₹{finalTotal.toFixed(2)}
              </span>
            </div>

           

            {/* Secured Redirect routing activation action button */}
            {address && !editMode ? (
              <button
                onClick={() => {
                  localStorage.setItem("address", JSON.stringify(address));
                  navigate("/payment");
                }}
                className="w-full bg-[#722F6A] text-white py-4 rounded-xl font-medium tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#5D2456] transition-all duration-300 shadow-lg shadow-purple-900/10 uppercase"
              >
                🔒 Continue to Payment
              </button>
            ) : (
              <div className="p-4 bg-amber-50 text-amber-700 rounded-xl text-xs leading-relaxed text-center font-medium">
                Please finalize your delivery coordinates above to unlock the secure payment step.
              </div>
            )}

           

          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;