/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const MyWishlist = () => {
  // Wishlist Items State
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Ethereal Silk Blouse',
      price: 420.00,
      image: 'https://images.unsplash.com/photo-1548624149-f7b1509ef224?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Standard Wool Trouser',
      price: 580.00,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Sculptural Gold Hoops',
      price: 295.00,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      name: 'Verre Leather Tote',
      price: 1250.00,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 5,
      name: 'Aura Print Maxi',
      price: 820.00,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 6,
      name: 'Pure Cashmere Layer',
      price: 650.00,
      image: 'https://images.unsplash.com/photo-1574164904299-3a102b110380?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const recommendations = [
    {
      id: 1,
      category: 'FOOTWEAR',
      name: 'Sleek Leather Slide',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      category: 'ACCESSORIES',
      name: 'Abstract Silk Scarf',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-gray-900">
      
      {/* Top Bar: Title & Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-6 mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-serif tracking-wide">My Wishlist</h1>
          <p className="text-xs text-gray-500 mt-1">{wishlistItems.length} Items Saved</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none border border-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 bg-white hover:bg-gray-50 transition-colors">
            Share Wishlist
          </button>
          <button className="flex-1 sm:flex-none bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-neutral-800 transition-colors">
            Move All To Bag
          </button>
        </div>
      </div>

      {/* Main Wishlist Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group flex flex-col justify-between h-full">
            <div>
              {/* Product Image Panel */}
              <div className="aspect-[3/4] w-full bg-gray-50 overflow-hidden relative mb-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Title & Price */}
              <h3 className="text-xs font-medium tracking-wide text-gray-800">{item.name}</h3>
              <p className="text-xs font-semibold text-gray-900 mt-0.5">${item.price.toFixed(2)}</p>
            </div>

            {/* Individual CTA Button */}
            <button className="w-full bg-black text-white text-[9px] font-bold tracking-widest uppercase py-3.5 mt-4 hover:bg-neutral-800 transition-colors">
              Add To Bag
            </button>
          </div>
        ))}
      </div>

      <hr className="my-20 border-gray-200" />

      {/* Recommendation Bottom Block */}
      <div className="max-w-4xl">
        <h2 className="text-xl font-serif italic tracking-wide text-center sm:text-left text-gray-900 mb-8">
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div key={rec.id} className="group cursor-pointer">
              {/* Image Frame */}
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden mb-3">
                <img 
                  src={rec.image} 
                  alt={rec.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                />
              </div>
              {/* Meta Label details */}
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase block">
                {rec.category}
              </span>
              <h4 className="text-xs text-gray-800 font-medium tracking-wide mt-0.5 group-hover:underline">
                {rec.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MyWishlist;