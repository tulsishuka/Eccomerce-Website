
import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const items = JSON.parse(localStorage.getItem("checkoutItems")) || [];
  const address = JSON.parse(localStorage.getItem("address")) || {};
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("CHECKOUT ITEMS =>", items);

      if (!address.fullName || !address.phone) {
        toast.error("Address not found. Please complete checkout first.");
        navigate("/checkout");
        return;
      }

      const data = {
        total,
        firstName: address.fullName,
        phone: address.phone,
        email: user.email,
        itemDetail: items.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
          product: item.product._id,
        })),
      };

      console.log("ORDER DATA =>", data);

      const response = await axios.post(
        "https://eccomerce-website-bali.onrender.com/api/v1/order",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("ORDER RESPONSE =>", response.data);

      localStorage.removeItem("checkoutItems");
      toast.success("Order Placed Successfully");
      navigate("/ordersuccess");
    } catch (error) {
      console.log("FULL ERROR =>", error);
      console.log("BACKEND RESPONSE =>", error?.response?.data);
      toast.error("Failed to place order");
    }
  };

  // Luxury visual components pricing breakout mapping
  const subtotal = total;
  const shippingFee = 0; // Displayed as FREE in image
  const estimatedTax = subtotal > 0 ? 24.50 : 0; // Matching mock breakdown context from image
  const grandTotal = subtotal + shippingFee + estimatedTax;

  return (
    <div className="min-h-screen bg-[#FFECF5] py-12 px-4 md:px-8 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Top Title Headers */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-gray-900 tracking-wide mt-10" >
            Review Your Order
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Please check your selection and delivery details before finalizing your purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT CONTENT COLUMNS */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Bag Content Selection Panel Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="font-serif text-xl font-normal text-gray-900 tracking-wide">
                  Your Selection
                </h2>
                <button 
                  onClick={() => navigate("/cart")}
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black underline underline-offset-4"
                >
                  Edit Cart
                </button>
              </div>

              {/* Items Display Loop Row layout */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product._id} className="flex gap-6 items-center">
                    <div className="w-24 h-28 bg-[#FDF9F6] border border-gray-100 rounded-2xl flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover mix-blend-multiply" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-normal text-gray-900 tracking-wide">
                        {item.product.name}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 mt-1 font-medium tracking-wide">
                        <span>Color: Petalrose</span>
                        <span>Size: M</span>
                        <span>Qty: {String(item.quantity).padStart(2, '0')}</span>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-serif text-xl font-medium text-gray-900">
                          ₹{item.product.price.toFixed(2)}
                        </span>
                        <span className="bg-gray-50 border border-gray-100 text-gray-400 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                          In Stock
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Delivery Parameters Info Summary Box Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-lg font-normal text-gray-900 flex items-center gap-2">
                     Delivery To
                    </h3>
                    <button onClick={() => navigate("/checkout")} className="text-gray-300 hover:text-black text-sm">
                      ✏️
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p className="font-semibold text-gray-900">{address.fullName || "Name Not Set"}</p>
                    <p>{address.addressLine || "No Address Line Specified"}</p>
                    <p>{address.city}, {address.state} — {address.pincode}</p>
                    <p className="text-xs text-gray-400 pt-1">{address.phone}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4 flex items-center gap-3">
                  <span className="text-lg">⏱️</span>
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase block">Estimated Delivery</span>
                    <span className="text-xs font-semibold text-gray-700">Arrives in 2-4 business days</span>
                  </div>
                </div>
              </div>

              {/* Secure Active Payment Choice summary card container */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-lg font-normal text-gray-900 flex items-center gap-2">
                      <span>💳</span> Payment Method
                    </h3>
                   
                  </div>
                  
                  <div className="bg-[#FAFAFA] border border-gray-100 p-4 rounded-xl flex items-center gap-3">
                    <span className="text-xl">💵</span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Cash on Delivery</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">Pay upon receiving your items</p>
                    </div>
                  </div>
                </div>

                
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR: ORDER SUMMARY COSTING PANEL CONTAINER */}
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-50/80">
            <h2 className="font-serif text-2xl font-normal mb-6 text-gray-900 tracking-wide">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
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

            {/* Grand Total aggregate pricing indicators */}
            <div className="flex justify-between items-baseline my-6">
              <span className="font-serif text-sm font-normal text-gray-900">Grand Total</span>
              <span className="font-serif text-3xl font-semibold text-gray-900">
                ₹{grandTotal.toFixed(2)}
              </span>
            </div>

            {/* Direct Platform secure final trigger invocation button */}
            <button
              onClick={placeOrder}
              className="w-full bg-[#722F6A] text-white text-xs font-bold uppercase py-4 rounded-xl tracking-widest hover:bg-[#722F6A] transition-colors flex items-center justify-center gap-2 shadow-md shadow-black/5"
            >
              Place Order ➔
            </button>

         </div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;