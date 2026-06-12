import React, { useState } from 'react';

const ShoppingCart = () => {
  // Mock State for Cart Items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Architectural Silk Gown',
      collection: 'AUTUMN COLLECTION',
      details: 'Midnight Black / Size EU 38',
      price: 1250.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'Structured Calfskin Tote',
      collection: 'ESSENTIALS',
      details: 'Cognac / One Size',
      price: 890.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80',
    },
  ]);

  // Handle Quantity Changes
  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Handle Item Removal
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Summary Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const estimatedTax = subtotal * 0.08; // Example 8% tax
  const total = subtotal + estimatedTax;

  const crossSells = [
    {
      name: 'Signature Hoop Earrings',
      price: 210,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Pointed Leather Pumps',
      price: 450,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-gray-900">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-serif tracking-wide">Your Selection</h1>
        <p className="text-xs text-gray-500 mt-1">{cartItems.length} items currently in your bag</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Cart Items & Cross-Sells (Takes 8 of 12 cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Cart Items List */}
          <div className="divide-y divide-gray-200 border-b border-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="pb-8 pt-8 first:pt-0 flex flex-col sm:flex-row sm:items-start gap-6">
                
                {/* Product Image */}
                <div className="w-full sm:w-36 aspect-[4/5] bg-gray-50 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Info & Actions */}
                <div className="flex-1 flex flex-col justify-between h-full min-h-[140px]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                        {item.collection}
                      </span>
                      <h2 className="text-lg font-serif tracking-wide text-gray-900 mt-0.5">{item.name}</h2>
                      <p className="text-xs text-gray-500 mt-1">{item.details}</p>
                    </div>
                    <span className="font-medium text-sm text-gray-900">${item.price.toFixed(2)}</span>
                  </div>

                  {/* Bottom row of item: Quantity & Remove */}
                  <div className="flex justify-between items-center mt-6">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 px-2 py-1 text-sm">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-gray-400 hover:text-black">-</button>
                      <span className="px-3 font-medium min-w-[24px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-gray-400 hover:text-black">+</button>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-gray-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <span className="inline-block w-3 h-3 bg-gray-200 rounded-sm"></span> Remove
                    </button>
                  </div>
                </div>

              </div>
            ))}
            {cartItems.length === 0 && (
              <p className="py-12 text-center text-gray-500 font-serif">Your shopping bag is empty.</p>
            )}
          </div>

          {/* Complete The Look Section */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-gray-900 mb-6">
              Complete The Look
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {crossSells.map((look, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
                    <img src={look.image} alt={look.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h4 className="text-xs text-gray-800 font-medium tracking-wide group-hover:underline">{look.name}</h4>
                  <p className="text-xs font-semibold text-gray-900 mt-0.5">${look.price}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary (Takes 4 of 12 cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <div className="bg-[#FBFBFA] border border-gray-100 p-8">
            <h2 className="text-lg font-serif tracking-wide text-gray-900 mb-6">Summary</h2>
            
            {/* Calculation Lines */}
            <div className="space-y-4 text-xs tracking-wide text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-amber-700 tracking-widest text-[10px]">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium text-gray-900">${estimatedTax.toFixed(2)}</span>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Grand Total */}
            <div className="flex justify-between items-baseline mb-8">
              <span className="text-md font-serif tracking-wide text-gray-900">Total</span>
              <span className="text-xl font-medium text-gray-900">${total.toFixed(2)}</span>
            </div>

            {/* Promo Code Input */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Promotional Code
              </label>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter code" 
                  className="flex-1 bg-white border border-gray-200 px-4 py-3 text-xs tracking-wide placeholder-gray-400 focus:outline-none focus:border-black"
                />
                <button className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-neutral-800 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button className="w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-4 flex justify-center items-center gap-2 hover:bg-neutral-800 transition-colors mb-6">
              Proceed To Checkout
              <span className="text-sm">→</span>
            </button>

            {/* Encryption & Trust Badge */}
            <div className="flex gap-3 bg-white p-4 border border-gray-50 rounded-sm">
              <div className="w-4 h-4 mt-0.5 text-gray-400 border border-gray-400 rounded-full flex items-center justify-center text-[10px]">✓</div>
              <p className="text-[10px] leading-relaxed text-gray-500">
                Your data is secured with enterprise-grade encryption.
              </p>
            </div>

            {/* Small Payment Icon Indicators */}
            <div className="flex justify-center gap-4 text-gray-400 mt-6 pt-2 border-t border-gray-100 text-xs tracking-widest">
              <span>💳</span> <span>🧾</span> <span>📦</span>
            </div>
          </div>
          
          {/* Below Summary Notice */}
          <p className="text-center text-[11px] text-gray-500 italic mt-4">
            Free returns and exchanges within 30 days.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ShoppingCart;