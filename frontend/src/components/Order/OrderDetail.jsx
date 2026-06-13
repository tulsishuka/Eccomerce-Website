import React from 'react';
import { ChevronRight, CreditCard } from 'lucide-react';

const OrderDetail = () => {
  // Mock tracking stages matching the progress indicator
  const stages = [
    { label: 'Placed', completed: true },
    { label: 'Shipped', completed: true },
    { label: 'In Transit', completed: true },
    { label: 'Delivered', completed: false },
  ];

  const orderedItems = [
    {
      id: 1,
      name: 'Tailored Wool Overcoat',
      size: '48 (M)',
      color: 'Charcoal',
      qty: 1,
      price: '$1,250.00',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=250&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Silk Crepe Blouse',
      size: '38 (S)',
      color: 'Ivory',
      qty: 1,
      price: '$480.00',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=250&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FCFCFC] text-[#1A1A1A] font-sans antialiased">
      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-1.5 text-[11px] text-gray-400 font-light tracking-wide mb-6">
          <a href="#account" className="hover:text-black transition-colors">Account</a>
          <ChevronRight size={12} className="text-gray-300" />
          <a href="#history" className="hover:text-black transition-colors">Order History</a>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-gray-800">Order #AL-8294</span>
        </nav>

        {/* Header Block */}
        <header className="mb-10">
          <h1 className="text-3xl font-serif tracking-tight text-[#111111] mb-2">
            Order #AL-8294
          </h1>
          <p className="text-xs text-gray-400 font-light">
            Placed on October 24, 2023
          </p>
        </header>

        {/* Content Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT AREA: Status Stepper & Ordered Items */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Order Status Timeline Card */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-none shadow-sm">
              <h2 className="text-[10px] tracking-widest uppercase font-medium text-gray-400 mb-10">
                Order Status
              </h2>
              
              {/* Timeline Indicator Component */}
              <div className="relative mb-12 px-2">
                {/* Horizontal underlying track line */}
                <div className="absolute top-[4px] left-0 w-full h-[2px] bg-gray-100 z-0" />
                
                <div className="relative flex justify-between z-10">
                  {stages.map((stage, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1 relative">
                      {/* Active line filler fragment to sync progress */}
                      {idx < stages.length - 1 && stages[idx + 1].completed && (
                        <div className="absolute top-[4px] left-1/2 w-full h-[2px] bg-black z-0" />
                      )}
                      
                      {/* Node Dot Indicator */}
                      <div className={`w-2.5 h-2.5 rounded-full z-10 transition-colors duration-300 ${
                        stage.completed ? 'bg-black' : 'bg-gray-200'
                      }`} />
                      
                      {/* Node Text Label */}
                      <span className={`text-[11px] font-light mt-4 tracking-tight whitespace-nowrap ${
                        stage.completed ? 'text-gray-800 font-normal' : 'text-gray-400'
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Section CTAs */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-50">
                <button className="bg-black text-white px-8 py-3.5 text-[10px] tracking-widest uppercase font-medium hover:bg-zinc-800 transition-colors min-w-[150px]">
                  Track Package
                </button>
                <button className="border border-gray-200 bg-white text-gray-700 px-8 py-3.5 text-[10px] tracking-widest uppercase font-medium hover:bg-gray-50 transition-colors min-w-[150px]">
                  Get Help
                </button>
              </div>
            </div>

            {/* Ordered Items List Card */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-none shadow-sm">
              <h2 className="text-[10px] tracking-widest uppercase font-medium text-gray-400 mb-6">
                Ordered Items ({orderedItems.length})
              </h2>

              <div className="divide-y divide-gray-100">
                {orderedItems.map((item) => (
                  <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 justify-between items-start">
                    <div className="flex gap-5">
                      {/* Image Frame */}
                      <div className="w-20 h-24 bg-[#EBEBEB] flex-shrink-0 overflow-hidden border border-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {/* Item Specs metadata */}
                      <div className="space-y-1">
                        <h3 className="text-base font-serif text-neutral-800 tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-light">
                          Size: <span className="text-gray-600 font-normal">{item.size}</span> &nbsp;|&nbsp; Color: <span className="text-gray-600 font-normal">{item.color}</span> &nbsp;|&nbsp; Qty: <span className="text-gray-600 font-normal">{item.qty}</span>
                        </p>
                        <p className="text-xs font-medium text-neutral-800 pt-3">
                          {item.price}
                        </p>
                      </div>
                    </div>

                    <button className="text-[10px] tracking-wider uppercase text-gray-400 hover:text-black transition-colors underline underline-offset-4 self-end sm:self-center">
                      Buy It Again
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT AREA: Shipping and Pricing Info Cards */}
          <div className="space-y-6">
            
            {/* Address & Logistics Shipping Container */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-none shadow-sm space-y-6">
              <div>
                <h2 className="text-[10px] tracking-widest uppercase font-medium text-gray-400 mb-3">
                  Shipping To
                </h2>
                <div className="text-xs text-gray-600 font-light space-y-1 leading-relaxed">
                  <p className="font-semibold text-black text-sm mb-1">Julianne V. Sterling</p>
                  <p>425 Madison Avenue, Suite 1200</p>
                  <p>New York, NY 10017</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <h2 className="text-[10px] tracking-widest uppercase font-medium text-gray-400 mb-2">
                  Shipping Method
                </h2>
                <p className="text-xs text-gray-600 font-light">
                  Priority Express (Next Day)
                </p>
              </div>
            </div>

            {/* Price Ledger / Payment Summary Container */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-none shadow-sm">
              <h2 className="text-[10px] tracking-widest uppercase font-medium text-gray-400 mb-4">
                Payment Summary
              </h2>
              
              <div className="text-xs text-gray-500 font-light space-y-3 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-700">$1,730.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-gray-700">$25.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-gray-700">$152.24</span>
                </div>
              </div>

              {/* Total Calculation Display Line */}
              <div className="flex justify-between items-baseline pt-4 mb-6">
                <span className="text-sm font-serif text-neutral-800">Total</span>
                <span className="text-xl font-bold tracking-tight text-black">$1,907.24</span>
              </div>

              {/* Credit Card Token Element */}
              <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono tracking-wider pt-2 border-t border-gray-50">
                <CreditCard size={14} className="text-gray-300" />
                <span>Amex ending in •••• 4002</span>
              </div>
            </div>

            {/* Peripheral Document Action Triggers */}
            <div className="flex flex-col space-y-2.5 pl-2 pt-2">
              <a href="#return" className="text-[11px] tracking-wider text-gray-400 hover:text-black transition-colors font-light underline underline-offset-4 w-max">
                Returns Policy
              </a>
              <a href="#print" className="text-[11px] tracking-wider text-gray-400 hover:text-black transition-colors font-light underline underline-offset-4 w-max">
                Print Invoice
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderDetail;