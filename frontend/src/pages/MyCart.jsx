import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react"; // Make sure to import Heart icon

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]); // State for wishlist items
  const navigate = useNavigate();

  // Fetch Cart Details
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://eccomerce-website-bali.onrender.com/api/v1/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(res.data.cart);

      const ids =
        res.data.cart?.items?.map((item) => item.product._id) || [];

      setSelectedItems(ids);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Wishlist Items on Load
  const fetchWishlist = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const res = await axios.get(
        `https://eccomerce-website-bali.onrender.com/api/v1/wishlist/${user._id}`
      );
      
      // Extract the product IDs that are already in the wishlist
      const ids = res.data.data?.map((w) => w.product._id) || [];
      setWishlistItems(ids);
    } catch (error) {
      console.log("Error fetching wishlist:", error);
    }
  };

  // Toggle Wishlist Add / Remove Function
  const toggleWishlist = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      // Remove from wishlist
      if (wishlistItems.includes(productId)) {
        const res = await axios.get(
          `https://eccomerce-website-bali.onrender.com/api/v1/wishlist/${user._id}`
        );

        const item = res.data.data.find(
          (w) => w.product._id === productId
        );

        if (item) {
          await axios.delete(
            `https://eccomerce-website-bali.onrender.com/api/v1/wishlist/${item._id}`
          );

          setWishlistItems((prev) =>
            prev.filter((id) => id !== productId)
          );
        }

        return;
      }

      // Add to wishlist
      await axios.post(
        "https://eccomerce-website-bali.onrender.com/api/v1/wishlist/add",
        {
          userId: user._id,
          productId,
        }
      );

      setWishlistItems((prev) => [...prev, productId]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://eccomerce-website-bali.onrender.com/api/v1/cart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const token = localStorage.getItem("token");

      if (quantity < 1) return;

      await axios.put(
        "https://eccomerce-website-bali.onrender.com/api/v1/cart/quantity",
        {
          productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSelect = (productId) => {
    setSelectedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === (cart?.items?.length || 0)) {
      setSelectedItems([]);
    } else {
      const allIds = cart?.items?.map((item) => item.product._id) || [];
      setSelectedItems(allIds);
    }
  };

  const removeSelectedItems = async () => {
    try {
      const token = localStorage.getItem("token");
      await Promise.all(
        selectedItems.map((id) =>
          axios.delete(`https://eccomerce-website-bali.onrender.com/api/v1/cart/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
        )
      );
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#FAFAFA] text-gray-500 font-serif">
        Loading Your Cart...
      </div>
    );
  }

  const subtotal =
    cart?.items
      ?.filter((item) => selectedItems.includes(item.product._id))
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0) || 0;

  const discount = subtotal > 0 ? subtotal * 0.1 : 0; 
  const shipping = 0; 
  const estimatedTax = subtotal > 0 ? 85.00 : 0; 
  const finalTotal = subtotal - discount + shipping + estimatedTax;

  return (
    <div className="min-h-screen bg-[#FFECF5] py-12 px-4 md:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <h1 className="font-serif text-3xl md:text-4xl font-normal mb-8 text-[#1A1A1A] mt-10">
          Your Cart <span className="text-gray-400 font-sans text-xl font-light">({cart?.items?.length || 0} Items)</span>
        </h1>

        {!cart?.items?.length ? (
          <div className="text-center py-20 border border-dashed rounded-2xl bg-white shadow-sm">
            <h2 className="font-serif text-2xl text-gray-500">Your cart feels light! It's currently empty.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Content Column (Items list) */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* Select All Controls */}
              <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50">
                <label className="flex items-center gap-3 cursor-pointer text-sm font-medium tracking-wide text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === cart.items.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black"
                  />
                  SELECT ALL ({selectedItems.length})
                </label>
                {selectedItems.length > 0 && (
                  <button 
                    onClick={removeSelectedItems}
                    className="text-xs font-semibold text-[#B33A3A] tracking-wider hover:underline uppercase"
                  >
                    Remove Selected
                  </button>
                )}
              </div>

              {/* Individual Products Map */}
              {cart.items.map((item) => (
                <div
                  key={item.product._id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
                >
                  {/* Item Toggle Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.product._id)}
                      onChange={() => toggleSelect(item.product._id)}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer"
                    />
                  </div>

                  {/* Product Visual Container */}
                  <div className="w-28 h-28 flex-shrink-0 bg-[#F7F7F7] rounded-2xl overflow-hidden border border-gray-100 relative">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>

                  {/* Context & Description Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl font-normal text-gray-900 tracking-wide truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs tracking-widest text-gray-400 uppercase mt-1 font-medium">
                      LAVENDER ORCHID | SIZE: M
                    </p>

                    {/* Quantity Adjuster */}
                    <div className="flex items-center bg-[#F9F9F9] border border-gray-200/60 rounded-full w-24 h-9 justify-between px-2 mt-4">
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                        className="text-gray-500 hover:text-black w-6 h-6 text-sm flex items-center justify-center transition-colors font-light"
                      >
                        —
                      </button>
                      <span className="text-xs font-medium text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                        className="text-gray-500 hover:text-black w-6 h-6 text-sm flex items-center justify-center transition-colors font-light"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Layout: Pricing & Functional Control buttons */}
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-center items-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-gray-100 gap-4">
                    <span className="font-serif text-lg text-gray-900 font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    
                    <div className="flex items-center gap-4 text-xs tracking-wider text-gray-400">
                      {/* Integrated Wishlist Toggle with Heart icon */}
                      <button 
                        onClick={() => toggleWishlist(item.product._id)}
                        className="hover:text-black flex items-center gap-1.5 transition-colors uppercase font-medium"
                      >
                        <Heart
                          size={13}
                          className={`transition-all duration-200 ${
                            wishlistItems.includes(item.product._id)
                              ? "fill-red-500 text-red-500 scale-110"
                              : "text-gray-400"
                          }`}
                        />
                        Wishlist
                      </button>

                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="hover:text-[#B33A3A] flex items-center gap-1 transition-colors uppercase font-medium"
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Summary Column Box */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50/80">
              <h2 className="font-serif text-2xl font-normal mb-6 text-gray-900 tracking-wide">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#E07A5F]">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-xs font-semibold text-emerald-600 tracking-widest uppercase">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-gray-900">${estimatedTax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total Summary Pricing Section */}
              <div className="flex justify-between items-baseline my-6">
                <span className="text-xs tracking-wider text-gray-400 uppercase font-medium">Total</span>
                <span className="font-serif text-3xl font-semibold text-gray-900">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

             

              {/* Main Secure Action Submission Trigger */}
              <button
                className="w-full bg-[#722F6A] text-white py-4 rounded-xl font-medium tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#5D2456] transition-all duration-300 shadow-lg shadow-purple-900/10"
                onClick={() => {
                  const selectedProducts = cart.items.filter((item) =>
                    selectedItems.includes(item.product._id)
                  );
                  localStorage.setItem("checkoutItems", JSON.stringify(selectedProducts));
                  navigate("/checkout");
                }}
              >
                🔒 SECURE CHECKOUT
              </button>

            
            </div>
          </div>
        )}

        {/* Bottom Feature Core Brand Perks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-8 border-t border-gray-100">
          <div className="bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl flex items-center gap-4">
            <span className="text-2xl">🚚</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Free Worldwide Shipping</h4>
              <p className="text-xs text-gray-400 mt-0.5">On all orders over $500</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl flex items-center gap-4">
            <span className="text-2xl">🛡️</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Authenticity Guaranteed</h4>
              <p className="text-xs text-gray-400 mt-0.5">Curated genuine luxury goods</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl flex items-center gap-4">
            <span className="text-2xl">👑</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">24/7 VIP Support</h4>
              <p className="text-xs text-gray-400 mt-0.5">Concierge help for all inquiries</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;