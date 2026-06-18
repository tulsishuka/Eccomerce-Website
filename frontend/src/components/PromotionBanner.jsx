import React from "react";

const PromotionBanner = () => {
  const cards = [
    {
      image: "/love.webp",
      title: "Trending Now",
    },
    {
      image: "/pot.webp",
      title: "Budget Buys",
    },
    {
      image: "/yellow.webp",
      title: "Top Rated Picks",
    },
    {
      image: "/smile.webp",
      title: "Daily Essentials",
    },
  ];

  return (
    <div className="w-full font-sans selection:bg-purple-200">

      <div
        className="hidden md:block relative w-full aspect-[1200/320] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/offer.webp')` }}
      >

        <div className="absolute inset-y-0 left-0 w-[30%] flex items-end justify-center pb-[5%]">
          <button className="w-[65%] h-[20%] rounded-md bg-white hover:bg-gray-100 font-bold text-[#580a46] text-sm lg:text-xl xl:text-2xl transition-all duration-300 shadow-md cursor-pointer">
            Download Now
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="absolute inset-y-0 right-0 w-[70%] flex items-end justify-between pt-[6%] pb-[3%] px-[4%] gap-[2%]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-end w-[23%] h-full group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[90%] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <button className="mt-[6%] w-full bg-[#FFFBF2] hover:bg-white text-[#4A004B] font-bold py-[4%] rounded-lg shadow-sm text-xs lg:text-sm border border-gray-200 transition-all duration-300 cursor-pointer">
                {card.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full bg-[#FFFBFD] pb-6 flex flex-col gap-5">

        <div className="mx-4 mt-4 bg-[#580a46] rounded-3xl p-5 shadow-[0_8px_30px_rgb(255,170,14,0.2)] relative overflow-hidden flex flex-col gap-4">
  
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          
          <div className="flex flex-col gap-1 z-10">
            <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Limited Offer</span>
            <h2 className="text-white text-3xl font-black tracking-tight leading-tight">
              Up to <span className="bg-white text-[#580a46] px-2 py-0.5 rounded-xl shadow-sm">35% OFF</span>
            </h2>
            <p className="text-white/90 text-sm font-medium mt-1">
              On your first order • <span className="underline decoration-white/50 font-bold">*Only on App</span>
            </p>
          </div>

          <button className="w-full py-3 bg-white hover:bg-neutral-50 text-[#4A004B] font-extrabold text-sm rounded-xl transition-all duration-200 shadow-md active:scale-[0.98] tracking-wide">
            Download Now & Save
          </button>
        </div>

        {/* Contextual Header section */}
        <div className="px-4 flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <h3 className="text-lg font-black text-[#2e0030] tracking-tight">
              Popular Collections
            </h3>
            <p className="text-xs text-neutral-500 font-medium">Curated directly for your lifestyle</p>
          </div>
          <button className="text-xs font-bold text-[#5c138d] bg-[#5c138d]/5 border border-[#5c138d]/10 px-3 py-1.5 rounded-full active:bg-[#5c138d]/10">
            View All
          </button>
        </div>

        {/* Horizontal Swipe Container (Carousel) */}
        <div className="w-full flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div
              key={index}
              className="snap-start min-w-[150px] max-w-[150px] bg-white rounded-2xl p-2.5 border border-purple-100/30 shadow-[0_4px_20px_rgba(74,0,75,0.04)] flex flex-col justify-between group active:scale-[0.97] transition-all duration-200"
            >
              {/* Product Card Image Container */}
              <div className="w-full aspect-square bg-gradient-to-b from-neutral-50 to-purple-50/30 rounded-xl flex items-center justify-center p-1.5 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Action Button inside card */}
              <button className="mt-3 w-full bg-[#FFFBF2] hover:bg-white text-[#4A004B] font-extrabold py-2 px-1 rounded-xl text-xs border border-orange-100/70 shadow-sm transition-all text-center truncate">
                {card.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default PromotionBanner;