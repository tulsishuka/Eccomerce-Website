import React from 'react';
import { ArrowRight, Package, Clock } from 'lucide-react';

const CustomerAccount = () => {
  // Mock data for the "Curated for You" section
  const curatedItems = [
    {
      id: 1,
      category: 'Footwear',
      name: 'Heritage Leather Chelsea',
      price: '$680.00',
      image: '/bag1.jpg', 
    },
    {
      id: 2,
      category: 'Knitwear',
      name: 'Pure Cashmere Mock Neck',
      price: '$450.00',
      image: '/bag2.jpg',
    },
    {
      id: 3,
      category: 'Accessories',
      name: 'Architectural Silver Watch',
      price: '$1,100.00',
      image: '/bag6.jpg',
    },
    {
      id: 4,
      category: 'Accessories',
      name: 'Handmade Silk Tie Duo',
      price: '$220.00',
      image: '/bag4.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#1A1A1A] font-sans antialiased">
      {/* Changed max-w-4xl to w-full, and expanded horizontal padding for wider screens */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
        
        {/* Header Section */}
        <header className="mb-14">
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#111111] mb-4">
            Welcome back, Julian
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base">
            Your seasonal curation is ready. Explore the latest additions to the Editorial 
            collection or manage your recent boutique orders below.
          </p>
        </header>

        {/* Recent Orders Section */}
        <section className="mb-20">
          <div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-8">
            <h2 className="text-xl font-serif tracking-tight text-[#111111]">Recent Orders</h2>
            <button className="text-xs tracking-wider uppercase text-gray-500 hover:text-black transition-colors duration-200 underline underline-offset-4">
              View All
            </button>
          </div>

          {/* Order Card Container */}
          <div className="bg-[#F6F6F6] p-6 md:p-8 rounded-none flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Product Image placeholder box matching the layout shape */}
            <div className="w-full md:w-56 h-72 md:h-64 bg-[#EBEBEB] flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              {/* Fallback stylized silhouette graphic if no src img provided */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Package size={40} strokeWidth={1} />
              </div>
            </div>

            {/* Order Details */}
            <div className="flex-1 w-full flex flex-col justify-between h-full py-1">
              <div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-[#FDF4E3] text-[#B08930]">
                    <Clock size={12} /> In Transit
                  </span>
                  <span className="text-xs font-mono text-gray-400 tracking-wider">
                    Order #AL-82910
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#111111] mb-2">
                  Minimalist Wool Overcoat
                </h3>
                
                <div className="text-xs text-gray-500 space-y-1 mb-4 font-light">
                  <p>Size: <span className="font-normal text-gray-800">48</span> &nbsp;|&nbsp; Color: <span className="font-normal text-gray-800">Anthracite</span></p>
                </div>

                <p className="text-base font-medium text-[#111111] mb-8">
                  $1,250.00
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="bg-black text-white px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-zinc-800 transition-colors duration-200 min-w-[140px]">
                  Track Order
                </button>
                <button className="border border-gray-300 bg-white text-black px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gray-50 transition-colors duration-200 min-w-[140px]">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Recommendations Section */}
        <section>
          <div className="border-b border-gray-200 pb-3 mb-8">
            <h2 className="text-xl font-serif tracking-tight text-[#111111] mb-1">Curated for You</h2>
            <p className="text-xs text-gray-400 font-light">Based on your recent interest in the Winter Collection</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {curatedItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Frame */}
                <div className="aspect-[3/4] bg-[#EBEBEB] mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[20%] contrast-[105%] group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply opacity-90"
                    loading="lazy"
                  />
                </div>
                
                {/* Meta data */}
                <span className="block text-[10px] tracking-wider uppercase text-gray-400 font-light mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-medium text-[#222222] tracking-tight leading-snug mb-1 group-hover:text-neutral-600 transition-colors duration-200">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-[#111111]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CustomerAccount;