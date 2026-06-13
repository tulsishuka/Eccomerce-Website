import React from 'react';

const Order = () => {
  // Mock data reflecting the actual orders in the provided screenshot
  const orders = [
    {
      id: '#AL-8294',
      productName: 'Heritage Cashmere Overcoat',
      meta: 'Size: Large | Midnight Navy',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=150&auto=format&fit=crop', // Replace with your coat image asset
      date: 'Oct 24, 2024',
      status: 'Shipped',
      statusType: 'shipped', // used for color styling
      total: '$1,250.00',
    },
    {
      id: '#AL-7912',
      productName: 'Studio Leather Tote',
      meta: 'Nappa Leather | Espresso',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=150&auto=format&fit=crop', // Replace with your bag image asset
      date: 'Sep 18, 2024',
      status: 'Delivered',
      statusType: 'delivered',
      total: '$890.00',
    },
    {
      id: '#AL-7503',
      productName: 'Pavilion Low Sneaker',
      meta: 'Size: 42 | Optic White',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=150&auto=format&fit=crop', // Replace with your shoe image asset
      date: 'Aug 05, 2024',
      status: 'Processing',
      statusType: 'processing',
      total: '$420.00',
    },
    {
      id: '#AL-7128',
      productName: 'Crepe de Chine Blouse',
      meta: 'Size: Small | Ivory',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=150&auto=format&fit=crop', // Replace with your clothing image asset
      date: 'July 22, 2024',
      status: 'Delivered',
      statusType: 'delivered',
      total: '$345.00',
    },
  ];

  // Helper function to dynamically pull minimalist badge design styles
  const getStatusStyles = (type) => {
    switch (type) {
      case 'shipped':
        return 'bg-[#FDF4E3] text-[#B08930] border-[#EAD6B5]';
      case 'processing':
        return 'bg-zinc-100 text-zinc-700 border-zinc-200';
      case 'delivered':
      default:
        return 'bg-gray-50 text-gray-500 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FCFCFC] text-[#1A1A1A] font-sans antialiased">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <header className="mb-14">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111111] mb-4">
            My Orders
          </h1>
          <p className="text-gray-400 max-w-2xl font-light text-xs md:text-sm leading-relaxed">
            Manage your order history and track recent purchases with ease. Your curated collection of Aura Luxe pieces.
          </p>
        </header>

        {/* Desktop Order Table Area */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] tracking-widest uppercase font-medium text-gray-400">
                <th className="pb-4 w-[15%]">Order ID</th>
                <th className="pb-4 w-[45%]">Product</th>
                <th className="pb-4 w-[15%] text-center lg:text-left">Date</th>
                <th className="pb-4 w-[12%] text-center">Status</th>
                <th className="pb-4 w-[13%] text-right pr-4">Total</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100/70">
              {orders.map((order, index) => (
                <tr key={index} className="group align-middle">
                  {/* Order ID */}
                  <td className="py-8 text-xs font-mono tracking-wider text-gray-500">
                    {order.id}
                  </td>
                  
                  {/* Product Details Combined Column */}
                  <td className="py-8">
                    <div className="flex items-center gap-5">
                      {/* Image container frame matching editorial aspect ratio layout */}
                      <div className="w-16 h-20 bg-[#EBEBEB] relative flex-shrink-0 overflow-hidden shadow-sm border border-black/5">
                        <img 
                          src={order.image} 
                          alt={order.productName}
                          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <h3 className="text-sm font-medium text-neutral-800 tracking-tight leading-tight">
                          {order.productName}
                        </h3>
                        <p className="text-[11px] text-gray-400 font-light">
                          {order.meta}
                        </p>
                      </div>
                    </div>
                  </td>
                  
                  {/* Purchase Date */}
                  <td className="py-8 text-xs text-gray-400 font-light text-center lg:text-left">
                    {order.date}
                  </td>
                  
                  {/* Status Badge */}
                  <td className="py-8 text-center">
                    <span className={`inline-block px-4 py-1.5 border text-[10px] tracking-wider uppercase font-medium rounded-full ${getStatusStyles(order.statusType)}`}>
                      {order.status}
                    </span>
                  </td>
                  
                  {/* Total & Inline Action */}
                  <td className="py-8 text-right pr-4">
                    <div className="inline-flex flex-col lg:flex-row lg:items-baseline justify-end lg:gap-3">
                      <span className="text-xs font-semibold text-neutral-800">
                        {order.total}
                      </span>
                      <a 
                        href="/OrderDetail" 
                        className="text-[10px] tracking-wider text-gray-400 hover:text-black transition-colors duration-200 underline underline-offset-2 mt-0.5 lg:mt-0 whitespace-nowrap"
                      >
                        View Details
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Controlled Action Trigger */}
        <div className="w-full flex justify-center mt-16">
          <button className="border border-black bg-white text-black px-12 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
            Load Older Orders
          </button>
        </div>

      </div>
    </div>
  );
};

export default Order;