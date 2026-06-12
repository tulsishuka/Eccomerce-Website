import React, { useState } from 'react';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('Obsidian');
  const [selectedSize, setSelectedSize] = useState('S');

  const colors = [
    { name: 'Obsidian', class: 'bg-black' },
    { name: 'Alabaster', class: 'bg-gray-100 border border-gray-300' },
    { name: 'Charcoal', class: 'bg-gray-600' },
  ];

  const sizes = ['XS', 'S', 'M', 'L'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-900">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-500 mb-8 space-x-2">
        <span className="hover:underline cursor-pointer">Home</span>
        <span>•</span>
        <span className="hover:underline cursor-pointer">Collections</span>
        <span>•</span>
        <span className="text-gray-900 font-medium">Sculptural Silk Evening Gown</span>
      </nav>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Image Gallery (Takes 7 of 12 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Hero Image */}
          <div className="bg-gray-50 aspect-[2/3] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80"
              alt="Sculptural Silk Evening Gown - Front View"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid of Supporting Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
                alt="Fabric Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-50 aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
                alt="Atmospheric View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Back View Full Width Image */}
          <div className="bg-gray-50 aspect-[3/4] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
              alt="Sculptural Silk Evening Gown - Back View"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Product Information (Takes 5 of 12 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 h-fit space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-700 font-medium">
              New Collection
            </span>
            <h1 className="text-3xl font-serif mt-1 tracking-wide">
              Sculptural Silk Evening Gown
            </h1>
            <p className="text-xl font-medium mt-2">$1,750.00</p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Hand-crafted from 100% heavy-weight Italian silk, this sculptural piece features 
            architectural draping and a seamless finish. A modern interpretation of classic 
            evening wear for the uncompromising woman.
          </p>

          <hr className="border-gray-200" />

          {/* Color Selector */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-3">
              Color: <span className="text-gray-500 font-normal">{selectedColor}</span>
            </h3>
            <div className="flex space-x-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 ${color.class} focus:outline-none transition-all ${
                    selectedColor === color.name 
                      ? 'ring-2 ring-offset-2 ring-black' 
                      : 'hover:scale-105'
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase">Size</h3>
              <button className="text-xs text-gray-500 underline hover:text-black">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-3 text-sm tracking-wide transition-all ${
                    selectedSize === size
                      ? 'bg-black text-white border-black font-semibold'
                      : 'border-gray-200 text-gray-600 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button className="w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-4 transition-transform active:scale-[0.99] hover:bg-neutral-900">
              Add To Bag
            </button>
            <button className="w-full bg-white text-black border border-black text-xs font-bold tracking-widest uppercase py-4 transition-transform active:scale-[0.99] hover:bg-gray-50">
              Buy Now
            </button>
          </div>

          {/* Collapsible Info Accordions */}
          <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="py-4 flex justify-between items-center cursor-pointer group">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 group-hover:text-black">
                Composition & Care
              </span>
              <span className="text-lg text-gray-400 group-hover:text-black">↓</span>
            </div>
            <div className="py-4 flex justify-between items-center cursor-pointer group">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 group-hover:text-black">
                Shipping & Returns
              </span>
              <span className="text-lg text-gray-400 group-hover:text-black">↓</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;